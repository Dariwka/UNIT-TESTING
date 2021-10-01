# Test Cases

## **getAllIdsByManufacturer(value)**

Returns all ids of the computers matching the value of manufacturer

- Parameters: value of the property to be searched
- Return: Returns an array of computer id where the computers manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

### Test 1: get all "BMI" manufacturer

```js
computerStorage.getAllIdsByManufacturer("BMI");
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

### Test 2: get all "CERA" manufacturer

```js
computerStorage.getAllIdsByManufacturer("CERA");
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
  }
]
```

### Test 3: type 'x' will return an empty array []

```js
computerStorage.getAllIdsByManufacturer("x");
```

returns: []

### Test 4: missing parameter will return an empty array []

```js
computerStorage.getAllIdsByManufacturer();
```

returns: []
