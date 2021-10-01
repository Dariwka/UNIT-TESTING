'use strict';

const expect = require('chai').expect;

// const { sum, subtract } = require('../calclibrary');

const calculate = require('../calclibrary');

describe('Test if functions are defined', function(){
    it('sum is a function', function(){
        expect(calculate.sum).to.be.a('function');
    });
    it('subtract is a function', function(){
        expect(calculate.subtract).to.be.a('function');
    });
});

describe('Test sum(1,1)=2', function(){
    it('sum(1,1)=2', function(){
        expect(calculate.sum(1,1)).to.equal(2);
    });
});

describe('test sum with integer testcases', function(){
    const testCases=[
        {a:1, b:1, expected:2},
        {a:2, b:3, expected:5},
        {a:-2, b:-4, expected:-6},
        {a:0, b:0, expected:0}
    ];

    testCases.forEach(function(testCase){
        it(`sum(${testCase.a},${testCase.b})=${testCase.expected}`, function(){
            expect(calculate.sum(testCase.a,testCase.b)).to.equal(testCase.expected);
        });
    });
});

describe('test sum with floats', function(){
    const testCases=[
        { a: 10, b: 11.5, expected: 21.5 },
        { a: 2.5, b: 3, expected: 5.5 },
        { a: -2.5, b: 3, expected: 0.5 },
        { a: 2.4, b: -2.5, expected: -0.1}
    ];
    testCases.forEach(function (testCase) {
        it(`sum(${testCase.a},${testCase.b})=${testCase.expected}`, function () {
            expect(calculate.sum(testCase.a, testCase.b)).to.be.closeTo(testCase.expected,0.01);
        });
    });
});

describe('Missing parameters', function(){
    const testCases = [
        { a: null, expected:'parameter missing'},
        { a: 1, expected: 'parameter missing' },
        { a: 'a', expected: 'parameter missing' },
        { a: '', expected: 'parameter missing' }
    ];

    testCases.forEach(function(testCase){
        it(`sum(${testCase.a}) throws an exeption ${testCase.expected}`, function(){
            expect(function(){
                calculate.sum(testCase.a);
            }).to.throw(testCase.expected);
        });
    });
});

describe('testing only numbers allowed', function(){
    it("sum(1,'a') throws an exception 'only numbers allowed'", function(){
        expect(function(){
            calculate.sum(1,'a');
        }).to.throw('only numbers allowed');
    });

    it("sum(' ',' ')throws an exception 'only numbers allowed'", function(){
        expect(function(){
            calculate.sum(' ',' ');
        }).to.throw('only numbers allowed');
    });
});
//testing subtract
describe('test subtract with integer testcases', function () {
    const testCases = [
        { a: 1, b: 1, expected: 0 },
        { a: 2, b: 3, expected: -1 },
        { a: -2, b: -4, expected: 2 },
        { a: 0, b: 0, expected: 0 }
    ];

    testCases.forEach(function (testCase) {
        it(`subtract(${testCase.a},${testCase.b})=${testCase.expected}`, function () {
            expect(calculate.subtract(testCase.a, testCase.b)).to.equal(testCase.expected);
        });
    });
});

describe('test subtract with floats', function () {
    const testCases = [
        { a: 10, b: 11.5, expected: -1.5 },
        { a: 2.5, b: 3, expected: -0.5 },
        { a: -2.5, b: 3, expected: -5.5 },
        { a: 2.4, b: -2.5, expected: 4.9 }
    ];
    testCases.forEach(function (testCase) {
        it(`subtract(${testCase.a},${testCase.b})=${testCase.expected}`, function () {
            expect(calculate.subtract(testCase.a, testCase.b)).to.be.closeTo(testCase.expected, 0.01);
        });
    });
});

describe('Missing parameters', function () {
    const testCases = [
        { a: null, expected: 'parameter missing' },
        { a: 1, expected: 'parameter missing' },
        { a: 'a', expected: 'parameter missing' },
        { a: '', expected: 'parameter missing' }
    ];

    testCases.forEach(function (testCase) {
        it(`subtract(${testCase.a}) throws an exeption ${testCase.expected}`, function () {
            expect(function () {
                calculate.subtract(testCase.a);
            }).to.throw(testCase.expected);
        });
    });
});

describe('testing only numbers allowed', function () {
    it("subtract(1,'a') throws an exception 'only numbers allowed'", function () {
        expect(function () {
            calculate.subtract(1, 'a');
        }).to.throw('only numbers allowed');
    });

    it("subtract(' ',' ')throws an exception 'only numbers allowed'", function () {
        expect(function () {
            calculate.subtract(' ', ' ');
        }).to.throw('only numbers allowed');
    });
});