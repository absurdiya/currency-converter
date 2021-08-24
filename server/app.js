
const express = require('express'); 
const app = express(); 
require('dotenv').config(); 
const fetch = require("node-fetch");
const path = require('path');
app.use(express.static("../frontend"));
/*app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages/index.html'));
});*/
app.get('/getrate', (req, res) => {
	
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  const api_key = process.env.API_KEY;
	  fetch("http://api.exchangeratesapi.io/v1/latest?access_key="+api_key, requestOptions)
		.then(response => response.text())
		.then(result => res.json(result))
		.catch(error => console.log('error', error));
});

app.listen(3000); 
console.log('Server started');