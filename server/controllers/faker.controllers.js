const user = require("../models/faker.user"); // this imports the user object
const company = require("../models/faker.company"); // this imports the company object

module.exports.getUser = (req, res) => { // this is the function that will be called when the route is hit
    console.log("req.body =>", req.body); 
    res.json( user ); // this is the line that sends the user object as a json response
} 

module.exports.getCompany = (req, res) => { 
    console.log("req.body =>", req.body);
    res.json( company );
}

module.exports.getUserCompany = (req, res) => {
    console.log("req.body =>", req.body);
    res.json( {user, company} );
}