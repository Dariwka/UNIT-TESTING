# Test Cases

## **getAllComputersByType(type)**

Returns an array of computer objects of given type

- Parameters: type of the computer to be searched
- Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.
- If a parameter type is missing, an exeption **'missing parameter'** is thrown.

### Test 1: get all "minitower" type

```js
computerStorage.getAllComputersByType("minitower");
```

returns:

```json
[
  {
    "id": 1,
    "manufacturer": "BMI",
    "type": "minitower",
    "accessories": ["keyboard", "display", "mouse"],
    "price": 250,
    "software": [
      {
        "name": "Writer",
        "price": 123
      },
      {
        "name": "Solitaire",
        "price": 10
      }
    ]
  }
]
```

### Test 2: get all laptop type

```js
computerStorage.getAllComputersByType("laptop");
```

returns:

```json
[
  {
    "id": 2,
    "manufacturer": "CERA",
    "type": "laptop",
    "accessories": ["mouse"],
    "price": 350,
    "software": [
      {
        "name": "Writer",
        "price": 10
      },
      {
        "name": "Counter",
        "price": 20
      }
    ]
  },
  {
    "id": 3,
    "manufacturer": "BMI",
    "type": "laptop",
    "accessories": [],
    "price": 150,
    "software": []
  }
]
```

### Test 3: type 'x' will return an empty array []

```js
computerStorage.getAllComputersByType("x");
```

returns: []

### Test 4: missing parameter throws an exception

```js
phoneRegister.getAllComputersByType();
```

throws an exception 'missing parameter'
