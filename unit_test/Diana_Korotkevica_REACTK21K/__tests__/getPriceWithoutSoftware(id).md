# Test Cases

## **getPriceWithoutSoftware(id)**

Returns the price with out software

- Parameters: id of the computer
- Return: The price of the computer not including the price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1: Returns the price with out software id = 1

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

returns 250

### Test 2: If no computer with the given number is found throws an exeption `nothing found with given id`

Call

```js
computerStorage.getPriceWithoutSoftware(5);
```

returns

throws an exception 'nothing found with given id'
