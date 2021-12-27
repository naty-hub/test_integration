<<<<<<< Updated upstream
const EmailSenderService = require("../src/services/EmailSenderService");
const Item = require("../src/models/Item");
const ToDoList = require("../src/models/ToDoList");

jest.mock("../src/services/EmailSenderService");
 
it("mocks module EmailSenderService", () => {
    EmailSenderService.sendEmail = jest.fn();
    expect(EmailSenderService.sendEmail.mock).toBeTruthy();
  });

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
    item9.creationDate = new Date("2021-12-27T16:19:53.844Z")
    const item10 = new Item('test 9', 'bla bla bla');
    const item11 = new Item('test 10', 'bla bla bla');
    const toDoList = new ToDoList('item name', [item1,item2, item3, item4, item5, item6, item7,item8]);
    expect(toDoList.additem(item9)).toBeTruthy();
  })
=======
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
})
>>>>>>> Stashed changes
