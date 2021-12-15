const User = require('../src/services/User')

describe('User Class', () => {
    let zak = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria','zakariapassword', 15);
    // let malik = new User('03222@gmail.com', 'Malik', 'Hamzaoui',2010);

    it(' Should return true for name', () => {
        expect(zak.firstNameNotEmpty(zak.firstName)).toEqual(true)
    });
    it(' Should return true for lasteName', () => {
        expect(zak.lastNameNotEmpty(zak.lastName)).toEqual(true)
    });
    it(' Should return true for email valide', () => {
        expect(zak.mailValidate(zak.email)).toEqual('Mail valide');
    });
    it(' The length of the password must be between 8 and 40 ', () => {
        expect(zak.ageValidation(zak.age)).toEqual(true);
    });
    it(' Should return true for age if > 13', () => {
        expect(zak.ageValidation(zak.age)).toEqual(true);
    });
    it(' Should return Valide if all the tests are valide', () => {
        expect(zak.isValid()).toEqual('User valide');
    });

})
