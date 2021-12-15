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
        /*
        // if the age in form dd/mm/YYYY
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }*/

        if (this.age >= 13) {
            return true
        }
        return false;
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

module.exports = User;
