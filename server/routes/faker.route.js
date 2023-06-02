const fakerControllers = require("../controllers/faker.controllers");

module.exports = (app) => {
    app.get("/api/users", fakerControllers.getUser);
    app.get("/api/companies/new", fakerControllers.getCompany);
    app.get("/api/user/company", fakerControllers.getUserCompany);
}