const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const port = 80;

//initialize express 
const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname) + '/index.html')
})

app.listen(port, () =>{
    console.log(`server is listen on ${port}`);
});