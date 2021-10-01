'use strict';

const Storage = require('../carstorageClass');

describe('testing class with cars.json', ()=>{
    const storage = new Storage('./cars.json');
    test('test find("licence","ABC-1"', ()=>{
        const expected = [{ "model": "Bored T-model", "licence": "ABC-1" }];

        return expect(storage.find('licence', 'ABC-1')).resolves.toEqual(expected);
    });

    test('test find with key "color"', ()=>{
        return expect(storage.find('color', 'red')).rejects.toBe('key not found');
    });

    test('tests missing parameter', ()=>{
        return expect(storage.find('model')).rejects.toBe('parameter missing');
    })
});

describe('wrong filename', ()=>{
    test('testing missing file', ()=>{
        const storage = new Storage('./x.json');
        return expect(storage.find('licence', 'ABC-1')).rejects.toBe('read error');
    });
});