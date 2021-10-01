# Test Case

## **getTotalPrice(id)**

Returns the total price of computer including the total price of the software

- Parameters: id of the computer
- Return: The price of the computer including the total price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1: get the total price of computer including the total price of the software for example with "id": 1, 250 + 123 + 10 = 383

Call

```js
const data = [
  {
    id: 1,
    manufacturer: "BMI",
    type: "minitower",
    accessories: ["keyboard", "display", "mouse"],
    price: 250,
    software: [
      {
        name: "Writer",
        price: 123,
      },
      {
        name: "Solitaire",
        price: 10,
      },
    ],
  },
];
```

returns

```json
383
```

### Test 2: if no computer with the given number is found throws an exeption `nothing found with given id`

Call

```js
computerStorage.getTotalPrice(4);
```

returns

throws an exception 'nothing found with given id'
