module.exports = {
    test(req, res){
        return res.json({ok:true, user: req.userId})
    }
}