const { faker } = require('@faker-js/faker'); // this is the line that imports the faker module

const createCompany = () => { // this is the function that will create the object
    const newCompany = { // this is the object that we will return
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany; // this is the key line that exports the object
}

module.exports = createCompany(); // this is the key line that exports the function