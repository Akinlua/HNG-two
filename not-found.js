
const notFound = (req, res) =>  {
    
    return res.status(404).json({error: "Not Found"})
}

module.exports = notFound
