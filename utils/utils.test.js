const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    if (res !== 44) {
        throw new Error(`Expected 44, but Got ${res}`);
    }
})


it('should squate a number', () => {
    var res = utils.square(3);

    if (res !== 9) {
        throw new Error(`Expected 9, but Got ${res}`);
    }
})
