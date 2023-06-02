const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

module.exports = createUser();
