# Test Cases

## **getPriceOfTheSoftware(id)**

Returns the total price of software bunled with the computer

- Parameters: id of the computer to be searched
- Return: the total price of software. If no software is found returns 0
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1: Returns the total price of software bunled with the computer id = 1

```js
const testData = [
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

returns 133

### Test 2: If no software is found returns 0

```js
const anotherData = [
  {
    id: 3,
    manufacturer: "BMI",
    type: "laptop",
    accessories: [],
    price: 150,
    software: [],
  },
];
```

returns 0

### Test 3: if no computer with the given number is found throws an exeption `nothing found with given id`

Call

```js
computerStorage.getPriceOfTheSoftware(5);
```

returns

throws an exception 'nothing found with given id'
