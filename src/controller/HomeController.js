exports.Home = (req, res) => {
    res.status(200).json({status:"success",data:"Welcome to Book Management"});
}