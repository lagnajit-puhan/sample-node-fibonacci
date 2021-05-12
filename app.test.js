const assert = require('assert');
const {fibseries} = require("../app");

describe('Fibonacci Test', () => {
    it('should return empty array, when number is missing', () => {
        assert.strictEqual( JSON.stringify(fibseries()),JSON.stringify([]));
    });
    it('should return empty array, when number is a string', () => {
        assert.strictEqual( JSON.stringify(fibseries("hi")),JSON.stringify([]));
    });
    it('should return empty array, when number is 0', () => {
        assert.strictEqual( JSON.stringify(fibseries(0)),JSON.stringify([]));
    });
    it('should return [0]', () => {
        assert.strictEqual( JSON.stringify(fibseries(1)),JSON.stringify([0]));
    });
    it('should return [0,1]', () => {
        assert.strictEqual( JSON.stringify(fibseries(2)),JSON.stringify([0,1]));
    });
    it('should return [0,1,1,2,3,5,8,13]', () => {
        assert.strictEqual( JSON.stringify(fibseries(8)),JSON.stringify([0,1,1,2,3,5,8,13]));
    });
});
