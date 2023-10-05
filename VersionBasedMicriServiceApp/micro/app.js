const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3011;
const micro2_port = process.env.MICROSERVICE2_PORT

app.get('/', (req, res) => {
	res.status(200);
	res.send("Welcome to Server of Micro");
});

// req.Header.Add("x-request-id", r.Header.Get("x-request-id"))
// req.Header.Add("x-b3-traceid", r.Header.Get("x-b3-traceid"))

app.get('/m2', async (req, res) => {
	try {
		console.log("microservie :- ", micro2_port);
		// Make a GET request to microservice2 via Envoy service discovery
		const response = await axios.get(`http://micro2:${micro2_port}/hello`);
		res.json({ message: 'Hello from Microservice 1 , we are calling micro2 here from Micro!', dataFromMicroservice2: response.data });
	} catch (error) {
		console.error('Error calling Microservice 2:', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.get('/hello', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

app.get('/help', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>Help GFG Learner!</h1>");
});

app.listen(PORT, (error) => {
	if (!error)
		console.log("Server is Successfully Running, and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error);
}
);
