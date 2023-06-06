const fakerControllers = require("../controllers/faker.controllers"); // this imports the controllers file

module.exports = (app) => { //  this is the key line that exports the function
    app.get("/api/users", fakerControllers.getUser); // this is the line that calls the getUser function from the controllers file
    app.get("/api/companies/new", fakerControllers.getCompany);
    app.get("/api/user/company", fakerControllers.getUserCompany);
}