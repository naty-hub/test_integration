class Item {
    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.creationDate = new Date()
    }

    isContentValid() {
        if (this.content.length <= 1000 )
            return true
        return false
    }

}


module.exports = Item;
