# Test Case

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the computer
- Return: returns the computer object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### Test 1: get an object with given key = "id": 2

Call

```js
computerStorage.getById(2);
```

returns

```json
[
  {
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

### Test 2: wrong id

Call

```js
computerStorage.getById(4);
```

returns `null`

### Test 3: parameter missing

Call

```js
computerStorage.getById();
```

returns `null`
