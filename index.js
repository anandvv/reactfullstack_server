const express = require('express');
const app = express();

//route handler

app.get('/', (req, res) => {
    res.send({bye: 'buddy'});
});

//get the underlying port number from HEROKU 
//or any other environment
const PORT = process.env.PORT || 5000
app.listen(PORT);


