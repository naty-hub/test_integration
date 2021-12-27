const User = require('../src/models/User')
const Item = require("../src/models/Item");
const ToDoList = require("../src/models/ToDoList");
const { MongoClient } = require('mongodb');

describe('Unit tests for our project', () => {
    describe('insert', () => {
        let connection;
        let db;
        beforeAll(async () => {
            connection = await MongoClient.connect("mongodb://localhost:27017/todo", {
                useNewUrlParser: true,
            });
            db = await connection.db("todo");
        });
        afterAll(async () => {
            await connection.close();
            // await db.close();
        });
        const item1 = new Item('test', 'bla bla bla');
        const toDoList = new ToDoList('item name', [item1])
        let user1 = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria', 'zakariapassword', '12/23/2004', [toDoList]);


        it('should insert in Data base ', async () => {
            const user = db.collection('user');
            // let user1 = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria', 'zakariapassword', '12/23/2004', []);
            const mockUser = { user1 };
            await user.insertOne(mockUser)

        });




    })
    describe('User Class', () => {
        let user1 = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria', 'zakariapassword', '12/23/2004', []);

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

    describe('Item Class', () => {

        const item1 = new Item('test', 'bla bla bla');
        const item2 = new Item('test test', 'Lorem Ipsum is simply dummy text of the printing and ' +
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
    })

    describe('ToDoList Class', () => {
        const item1 = new Item('test', 'bla bla bla');
        const item2 = new Item('test 1', 'bla bla bla');
        const item3 = new Item('test 2', 'bla bla bla');
        const item4 = new Item('test 3', 'bla bla bla');
        const item5 = new Item('test 4', 'bla bla bla');
        const item6 = new Item('test 5', 'bla bla bla');
        const item7 = new Item('test 6', 'bla bla bla');
        const item8 = new Item('test 7', 'bla bla bla');
        const item9 = new Item('test 8', 'bla bla bla');
        const item10 = new Item('test 9', 'bla bla bla');
        const item11 = new Item('test 10', 'bla bla bla');
        const toDoList = new ToDoList('item name', [item1])
        const toDoList1 = new ToDoList('item name', [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11])

        it(' ToDoList lenght must be less or equal 10', () => {
            expect(toDoList.itemVerfify()).toEqual(true)
        });
        it(' ToDoList name must be not empty', () => {
            expect(toDoList.name.length > 0).toEqual(true)
        });
        it(' should return false for toDoList1 items lenght more than 10', () => {
            expect(toDoList1.itemVerfify()).toEqual(false)
        });
    })
    describe('When we add item to ToDoList', () => {
        const item1 = new Item('test', 'bla bla bla');
        item1.creationDate = new Date("2021-12-25T16:19:53.844Z")
        const item2 = new Item('test 1', 'bla bla bla');
        item2.creationDate = new Date("2021-12-25T16:50:53.844Z")
        const item3 = new Item('test 2', 'bla bla bla');
        item3.creationDate = new Date("2021-12-25T16:55:53.844Z")
        const toDoList = new ToDoList('item name', [item1])
        const rafik = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria', 'zakariapassword', '12/23/2004', toDoList);


        it(' Should retrun True when we add date more than 30 min', () => {
            expect(toDoList.additem(item2)).toEqual(true)
        });
        it(' Should retrun False when we add date less than 30 min', () => {
            expect(toDoList.additem(item3)).toEqual(false)
        });

    })
})
