const express = require('express');

const app = express();
const PORT = 3012;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server of Micro2");
});

app.get('/hi', (req, res)=>{
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>Hi GFG Learner!</h1>");
});

app.get('/ho', (req, res)=>{
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>Ho GFG Learner!</h1>");
});

app.get('/hp', (req, res)=>{
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>Hp GFG Learner!</h1>");
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
