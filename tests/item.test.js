const Item = require("../src/models/Item");
const ToDoList = require("../src/models/ToDoList");
const User = require("../src/models/User");
const {use} = require("express/lib/router");


describe('Item Class', () => {

    const item1 = new Item('item 1', 'bla bla bla');
    const item2 = new Item('item 2', 'Lorem Ipsum is simply dummy text of the printing and ' +
        'typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting,' +
        ' remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ' +
        'containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
        'including versions of Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing and typesetting ' +
        'industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ' +
        'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
        'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ' +
        'passages, and more recently with desktop publishing software like Aldus PageMaker including versions' +
        ' of Lorem Ipsum');

    it(' Should return true for item lenght less than 1000 char', () => {
        expect(item1.isContentValid()).toEqual(true)
    });
    it(' Should return False because item lenght more than 1000 char', () => {
        expect(item2.isContentValid()).toEqual(false)
    });
    it(' Item name should be not empty', () => {
        expect(item1.name.length > 0).toEqual(true)
    });
    it(' Item content should be not empty', () => {
        expect(item2.content.length > 0).toEqual(true)
    });

    describe('When we add item to ToDoList', () => {
        const item1 = new Item('item 1', 'bla bla bla');
        item1.creationDate = new Date("2021-12-25T16:19:53.844Z")
        const item2 = new Item('item 2', 'bla bla bla');
        item2.creationDate = new Date("2021-12-25T16:50:53.844Z")
        const item3 = new Item('item 3', 'bla bla bla');
        item3.creationDate = new Date("2021-12-25T16:55:53.844Z")
        const toDoList = new ToDoList('user toDoList', [])
        const user = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria','zakariapassword', '12/11/2004', toDoList);
        toDoList.additem(item1)


        it(' Should retrun True when we add date more than 30 min', () => {
            expect(toDoList.additem(item2)).toEqual(true)
        });
        it(' Should retrun False when we add date less than 30 min', () => {
            expect(toDoList.additem(item3)).toEqual(false)
        });

    })
})
