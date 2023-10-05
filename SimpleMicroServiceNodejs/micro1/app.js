const express = require('express');

const app = express();
const PORT = 3011;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server of Micro 1");
});

app.get('/hello', (req, res)=>{
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

app.get('/help', (req, res)=>{
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>Help GFG Learner!</h1>");
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
