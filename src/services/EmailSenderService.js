class EmailSenderService {
    constructor(message) {
        this.message = message;
    }
    static sendEmail() {
        this.message = 'You can add only 2 items'
        console.log(`***** Emails Message ******\n|${this.message} |\n***************************`);
    }
}

module.exports = EmailSenderService;
