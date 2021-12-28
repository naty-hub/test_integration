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
            const User = { user1 };
            await user.insertOne(User)

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
})
