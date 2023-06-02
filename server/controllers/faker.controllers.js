const user = require("../models/faker.user");
const company = require("../models/faker.company");

module.exports.getUser = (req, res) => {
    console.log("req.body =>", req.body);
    res.json( user );
} 

module.exports.getCompany = (req, res) => {
    console.log("req.body =>", req.body);
    res.json( company );
}

module.exports.getUserCompany = (req, res) => {
    console.log("req.body =>", req.body);
    res.json( {user, company} );
}