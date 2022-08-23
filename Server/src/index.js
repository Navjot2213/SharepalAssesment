const express = require('express');
const cors = require('cors');
const app = express();
const route = express.Router();
require(`./dbConn`);

app.use(express.json());
app.use(cors({origin: '*'}));
app.use('/api', route)

const dataModel = require('./dataSchema');

route.get('/getdata', async (req, res) =>{
    const data = await dataModel.find();
    res.json(data);
});


const port = 5000;
app.listen(port, ()=>{
    console.log(`Server Running on port: ${port}`);
});
