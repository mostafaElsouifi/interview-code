const Table = require('../models/table');
module.exports.renderHomePage = async(req, res)=>{
    const data = await Table.find({});
    // res.send(data[0]);
    res.render('index', {data: data[0]});
}