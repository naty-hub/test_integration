const Item = require("../src/models/Item");


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