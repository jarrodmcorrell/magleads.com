const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//create
app.post('/insert', (request, response) =>{
    

    const name = request.body.name;
    const type = request.body.type;
    const location = request.body.location;
    const phone = request.body.phone;
    const email = request.body.email;
    
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewName(name, type, location, phone, email);

    result
    .then(data => response.json({ success : true}))
    .catch(err => console.log(err));
    
    console.log(request.body.name);
});



//read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();
    
    const result = db.getAllData();

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));

    
})


//update
app.listen(process.env.PORT, () => console.log('app is running...'))


//delete


