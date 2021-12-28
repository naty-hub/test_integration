const User = require('../src/models/User')
const Item = require("../src/models/Item");
const ToDoList = require("../src/models/ToDoList");
const {MongoClient} = require("mongodb");

describe('Unit Tests for Database (MongoDb)', () => {
    describe('MongoDb operations', () => {
        let connection;
        let db;
        beforeAll(async () => {
            connection = await MongoClient.connect("mongodb://localhost:27017/ToDoList", {
                useNewUrlParser: true,
            });
            db = await connection.db("ToDoList");
        });
        afterAll(async () => {
            await connection.close();
            //await db.close();
        });
        const item1 = new Item('item 1', 'bla bla bla');
        const toDoList1 = new ToDoList('user ToDoList', [])
        toDoList1.additem(item1)
        let user1 = new User('eric202@gmail.com', 'Eric', 'Garcia', 'Passwordpassword', '12/23/1998', toDoList1);


        it('should insert User into the Database ', async () => {
            const user = db.collection('user');
            const User = { user1 };
            await user.insertOne(User)

        });
        it('should insert item into the Database ', async () => {
            const item = db.collection('items');
            const Item = { item1 };
            await item.insertOne(Item)

        });
        it('should insert ToDoList into the Database ', async () => {
            const toDoList = db.collection('items');
            const ToDoList = { toDoList1 };
            await toDoList.insertOne(ToDoList)

        });

    })
})
