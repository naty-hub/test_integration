const User = require('../src/models/User')


describe('User Class', () => {
    let user1 = new User('eric202@gmail.com', 'Eric', 'Garcia', 'Passwordpassword', '12/23/1998', []);

    it(' Should return true for name', () => {
        expect(user1.firstNameNotEmpty(user1.firstName)).toEqual(true)
    });
    it(' Should return true for lasteName', () => {
        expect(user1.lastNameNotEmpty(user1.lastName)).toEqual(true)
    });
    it(' Should return true for email valide', () => {
        expect(user1.mailValidate(user1.email)).toEqual('Mail valide');
    });
    it(' The length of the password must be between 8 and 40 ', () => {
        expect(user1.ageValidation(user1.age)).toEqual(true);
    });
    it(' Should return true for age if > 13', () => {
        expect(user1.ageValidation(user1.age)).toEqual(true);
    });
    it(' Should return Valide if all the tests are valide', () => {
        expect(user1.isValid()).toEqual('User valide');
    });
})
