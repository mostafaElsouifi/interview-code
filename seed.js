if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
    )
.then(()=>{
    console.log('db connected')
})
.catch((e)=>{
    console.log('error connection')
})



const Table = require('./models/table');

const table = {
    tableData : [
        {
            text: 'Dropee.com',
            position: { row: 0, col: 1}
        },
        {
            text: 'Build Trust',
            position: { row: 0, col: 3}
        },
        {
            text: 'SaaS enabled marketplace',
            position: { row: 1, col: 2}
        },
        {
            text: 'B2B Marketplace',
            position: { row: 2, col: 0}
        },
        {
            text: 'Provide Transparency',
            position: { row: 3, col: 3}
        },
    ]
}


const addTable = async()=>{
    const newTable = new Table(table);
    await newTable.save();
    
}
addTable().then(()=>{
    mongoose.connection.close();
})