# Test Case

## **GetComputerAccessories(id)**

Returns an array of computer accessories. If none found, returns an empty array.

- Parameters: id of the computer
- Return: returns accessories as an array

### Test 1: Returns an array of computer accessories by "id" = 1

Call

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

returns

```json
[{ "accessories": ["keyboard", "display", "mouse"] }]
```

### Test 2: If none found "id" = 5, returns an empty array.

returns

```json
[]
```
