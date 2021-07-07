const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    tableData: [
        {
            text: String,
            color: {type: String, default: 'black'},
            position: { row: Number, col: Number}      
        }
    ]
})

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;