const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./routes/faker.route")(app);


// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "I can do all the things!" });
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
