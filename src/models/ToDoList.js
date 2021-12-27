const emailSenderService = require("../services/EmailSenderService")
class ToDoList {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }

    getLastCreatedTime() {
        return this.items[this.items.length - 1].creationDate;
    }

    itemVerfify() {
        if (this.items.length <= 10)
            return true
        return false
    }


    additem(item) {
        console.log(this.items.length);
        if (this.itemVerfify()){
            if(!this.items.some(i => i.name === item.name)){
                if(Math.floor((item.creationDate - this.getLastCreatedTime())/1000/60) > 30){
                    this.items.push(item);
                    if (this.items.length == 7) {
                        return emailSenderService.sendEmail('hello', 'helloo');
                    }
                    return true
                }
            }
        }
        return false
    }
}

module.exports = ToDoList;
