'use strict';

const search=require('../carstorageFileVersionPromises');

describe('Testing with key licence to resolve', ()=>{
    const expectedResult = [
        { "model": "Bored T-model", "licence": "ABC-1" }
    ];

    test('then', ()=>{
        return search('licence','ABC-1')
            .then(data=>expect(data).toEqual(expectedResult))
    });

    test('async-await', async ()=>{
        const data = await search('licence', 'ABC-1');
        expect(data).toEqual(expectedResult);
    });

    test('resolves', ()=>{
        return expect(search('licence', 'ABC-1'))
            .resolves.toEqual(expectedResult)
    });

    test('resolves with async', async ()=>{
        await expect(search('licence', 'ABC-1'))
            .resolves.toEqual(expectedResult)
    });
});

describe('Testing  with key licence to reject', ()=>{
    test('catch', ()=>{
        // expect.assertions(1);
        return search()
            .catch(data => expect(data).toBe('parameter missing'));
    });

    test('async-await', async ()=>{
        // expect.assertions(1);
        try{
            await search();
        }
        catch(error){
            expect(error).toBe('parameter missing');
        }
    });

    test('rejects', ()=>{
        return expect(search()).rejects.toBe('parameter missing');
    });

    test('rejects with async', async ()=>{
        await expect(search()).rejects.toBe('parameter missing');
    });
});

describe('test with key model', ()=>{
    const expectedResultBoredTmodel=[
        { "model": "Bored T-model", "licence": "ABC-1" },
        { "model": "Bored T-model", "licence": "GFT-10" }
    ];

    const expectedResultNova =[
        { "model": "Nova", "licence": "XYZ-123" }
    ];

    test('search model "Bored T-model"', ()=>{
        return expect(search('model','Bored T-model')).resolves.toEqual(expectedResultBoredTmodel);
    });

    test('search model "Bored T-model"', async () => {
        await expect(search('model', 'Bored T-model')).resolves.toEqual(expectedResultBoredTmodel);
    });

    test('search model "Nova"', ()=>{
        return expect(search('model','Nova')).resolves.toEqual(expectedResultNova);
    });

    test('search with model "X"', ()=>{
        return expect(search('model','X')).resolves.toEqual([]);
    });

    test('search with only one parameter', ()=>{
        return expect(search('model')).rejects.toBe('parameter missing');
    });

});