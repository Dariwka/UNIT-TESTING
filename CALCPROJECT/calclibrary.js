"use strict";
const onlySpaces = /^[ ]*$/g;

//must to be implamintation

function sum(a, b) {
  if (a == undefined || b == undefined) {
    throw new Error("parameter missing");
  }

  if (onlySpaces.test(a) || onlySpaces.test(b)) {
    throw new Error("only numbers allowed");
  }

  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    throw new Error("only numbers allowed");
  }

  return a + b;
}

function subtract(a, b) {
  if (a == undefined || b == undefined) {
    throw new Error("parameter missing");
  }

  if (onlySpaces.test(a) || onlySpaces.test(b)) {
    throw new Error("only numbers allowed");
  }

  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    throw new Error("only numbers allowed");
  }

  return a - b;
}

module.exports = { sum, subtract };
