const MailService = require("./MailService");

class User {

    constructor(email, firstName, lastName, password, age) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = password;
        this.password = password;
        this.age = age;
    }

    mailValidate() {
        if (MailService.validateEmail(this.email)) {
            return 'Mail valide'
        }
        return 'Mail inValide'
    }

    firstNameNotEmpty() {
        if (this.firstName) {
            return true
        }
        return false
    }

    lastNameNotEmpty() {
        if (this.lastName) {
            return true
        }
        return false
    }

    passwordValidation() {
        if (this.password.length >= 8 && this.password.length <= 40) {
            return true;
        }
        return false;
    }

    ageValidation() {
        let dob = new Date(this.age);
        let month_diff =  Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);


        if (age >= 13) {
            return true
        }
        return false;


        return true;
    }

    isValid() {
        if (this.mailValidate() === 'Mail valide' &&
            this.firstNameNotEmpty() &&
            this.lastNameNotEmpty() &&
            this.passwordValidation() &&
            this.ageValidation()
        ) {
            return 'User valide';
        }
        return 'User in valide';
    }

}

const zak = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria','zakariapassword', '12/23/1998');
console.log('zakaria');
console.log(zak.ageValidation())

module.exports = User;
