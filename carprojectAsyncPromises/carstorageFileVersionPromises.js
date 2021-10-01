//carstorageFileVersionPromises.js
'use strict';

const fs = require('fs');
const storageFile = './cars.json';

module.exports = (key,value)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(storageFile, 'utf8', (err,data)=>{
            if(err){
                reject(err);
            }
            else{ 
                if(key && value){
                    const cars = JSON.parse(data);
                    let found = [];
                    for(let car of cars){
                        if(car[key]===value){
                            found.push(car);
                        }
                    }
                    resolve(found);
                }
                else {
                    reject('parameter missing');
                }  
            }
        });
    }); //return promise line
}