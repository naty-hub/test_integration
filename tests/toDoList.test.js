const Item = require("../src/models/Item");
const ToDoList = require("../src/models/ToDoList");
const EmailSenderService = require("../src/services/EmailSenderService");
const DateService = require("../src/services/DateService");
const User = require('../src/models/User')

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
    item1.setCreationDate =  DateService.addMinutes(0) ; 
    const item2 = new Item('test 1', 'bla bla bla');
    item2.setCreationDate = DateService.addMinutes(35); 
    const item3 = new Item('test 2', 'bla bla bla');
    item3.setCreationDate = DateService.addMinutes(40); 
    const toDoList = new ToDoList('item name', [item1])
    const rafik = new User('azeaze@gmail.com', 'ATTAOUI', 'Zakaria', 'zakariapassword', '12/23/2004', toDoList);


    it(' Should retrun True when we add date more than 30 min', () => {
        expect(toDoList.additem(item2)).toEqual(true)
    });
    it(' Should retrun False when we add date less than 30 min', () => {
        expect(toDoList.additem(item3)).toEqual(false)
    });
})

describe('When we add eight item to the list ', () => {
    const item1 = new Item('test', 'bla bla bla');
    const item2 = new Item('test 1', 'bla bla bla');
    const item3 = new Item('test 2', 'bla bla bla');
    const item4 = new Item('test 3', 'bla bla bla');
    const item5 = new Item('test 4', 'bla bla bla');
    const item6 = new Item('test 5', 'bla bla bla');
    const item7 = new Item('test 6', 'bla bla bla');
    const item8 = new Item('test 7', 'bla bla bla');
    const item9 = new Item('test 8', 'bla bla bla');
    item9.setCreationDate = DateService.addMinutes(31);
    const toDoList = new ToDoList('item name', [item1,item2, item3, item4, item5, item6, item7,item8]);
    it(' Should return True when we add eight item because emailSenderService should return True thanks to the mock', () => {
        expect(toDoList.additem(item9)).toBeTruthy();
    })
})