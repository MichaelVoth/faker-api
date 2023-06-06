const express = require("express"); // import express
const app = express(); // invoke express
const port = 8000; // set the port
const { faker } = require('@faker-js/faker'); // import the faker module

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() ); // this line allows us to use json
app.use( express.urlencoded({ extended: true }) ); // this line allows us to use url encoded data

require("./routes/faker.route")(app); // this line calls the function from the faker.route.js file and passes it the app variable


// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => { // this is the route that will be hit when we visit localhost:8000/api in the browser or Postman 
    res.json({ message: "I can do all the things!" }); // this is the json response that will be sent to the client
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) ); // this line tells the app to listen on port 8000 for HTTP requests
