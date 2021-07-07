const Table = require('../models/table');
module.exports.renderHomePage = async(req, res)=>{
    const data = await Table.find();
    res.render('index', {data: data[0]});
}