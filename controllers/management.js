const Table = require('../models/table');
module.exports.getTable = async(req, res)=>{
    const { id } = req.params;
    const table = await Table.findById(id);
    res.render('mangepage', {data: table})
}
