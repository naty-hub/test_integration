const Item = require("./Item");
const ToDoList = require("./ToDoList");
const User = require("./User");


const item1 = new Item('item 1', 'bla bla bla');
item1.creationDate = new Date("2021-12-25T12:19:53.844Z");

const item2 = new Item('item 2', 'bla bla bla');
item2.creationDate = new Date("2021-12-25T13:19:53.844Z");

const item3 = new Item('item 3', 'bla bla bla');
item3.creationDate = new Date("2021-12-25T14:19:53.844Z");

const item4 = new Item('item 4', 'bla bla bla');
item4.creationDate = new Date("2021-12-25T15:19:53.844Z");


const item5 = new Item('item 5', 'bla bla bla');
item5.creationDate = new Date("2021-12-25T16:19:53.844Z");

const item6 = new Item('item 6', 'bla bla bla');
item6.creationDate = new Date("2021-12-25T17:19:53.844Z");


const item7 = new Item('item 7', 'bla bla bla');
item7.creationDate = new Date("2021-12-25T18:19:53.844Z");

const item8 = new Item('item 8', 'bla bla bla');
item8.creationDate = new Date("2021-12-25T19:19:53.844Z");

const toDoList1 = new ToDoList('ToDoList rafik', []);
const rafik = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria','zakariapassword', '12/23/2004', toDoList1);

toDoList1.additem(item1)
toDoList1.additem(item2)
toDoList1.additem(item3)
toDoList1.additem(item4)
toDoList1.additem(item5)
toDoList1.additem(item6)
toDoList1.additem(item7)
toDoList1.additem(item8)
console.log(rafik.verifyMails())


// console.log(toDoList1.getLastCreatedTime())

//console.log(item4)
console.log(rafik)
