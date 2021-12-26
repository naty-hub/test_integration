const Item = require("./Item");
const ToDoList = require("./ToDoList");
const User = require("./User");


const item1 = new Item('Zakaria test', 'bla bla bla');
const item2 = new Item('rafik test', 'bla bla bla bla');
const item3 = new Item('test test', 'bla bla bla bla');
const item4 = new Item('item4', 'bla bla bla bla');
const item5 = new Item('item4', 'bla bla bla bla');
const item6 = new Item('item4', 'bla bla bla bla');
const item7 = new Item('item4', 'bla bla bla bla');
const item8 = new Item('item4', 'bla bla bla bla');
const item9 = new Item('item4', 'bla bla bla bla');
item3.creationDate = new Date("2021-12-25T16:19:53.844Z")



const toDoList1 = new ToDoList('ToDoList rafik', [item1, item2, item3, item4, item5, item6, item7, item8, item9]);
const rafik = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria','zakariapassword', '12/23/2004', toDoList1);

toDoList1.additem(item1)
toDoList1.additem(item2)
console.log(toDoList1.additem(item3))
console.log(toDoList1)
console.log(toDoList1.itemVerfify())
// console.log(toDoList1.getLastCreatedTime())

//console.log(item4)
//console.log(rafik)
