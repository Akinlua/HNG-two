

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)

    let customError = {
        //set default 
        statusCode: err.statusCode || 500,
        msg: 'Something Went wrong'
    
    }

    if(err.name === 'ValidationError'){
    customError.msg = "Validation Error: " + Object.values(err.errors).map((item) => item.message).join(',')
    customError.statusCode = 400
    }

    if(err.name == 'CastError'){
    customError.msg = `No item found with id: ${err.value}`
    customError.statusCode = 404
    }


    return res.status(customError.statusCode).json({error: customError.msg})
}

module.exports = errorHandlerMiddleware
