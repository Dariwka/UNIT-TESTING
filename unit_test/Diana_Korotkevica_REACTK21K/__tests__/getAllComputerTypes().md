# Test Cases

## **getAllComputerTypes()**

Returns an array of different computer types.

- Parameters: none
- Return: Returns an array of different computer types. If no types are found, returns an empty array. The type is added to the result array only once.

For example:

```json
{ "type": "" }
```

Before tests create computerStorage object from the class ComputerStorage.

### Test 1: get all with default data

```js
computerStorage.getAllComputerTypes();
```

result is:

```json
["minitower", "laptop"]
```

### Test 2: some types are missing

Test data

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
    "id": 2,
    "manufacturer": "CERA",
    "type": "",
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
    "type": "",
    "accessories": [],
    "price": 150,
    "software": []
  }
]
```

```js
computerStorage.getAllComputerTypes();
```

returns

```json
[]
```

### Test 3: All types missing

test data

```js
computerStorage.getAllComputerTypes();
```

result is:

```json
[
  {
    "id": 1,
    "manufacturer": "BMI",
    "type": "",
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
    "id": 2,
    "manufacturer": "CERA",
    "type": "",
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
    "type": "",
    "accessories": [],
    "price": 150,
    "software": []
  }
]
```

```js
computerStorage.getAllComputerTypes();
```

returns: an empty array []

### Test 4: all datastorage missing

testdata is [].

```js
computerStorage.getAllComputerTypes();
```

returns: an empty array [].
