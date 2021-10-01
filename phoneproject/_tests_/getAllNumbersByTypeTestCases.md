# Test Cases

## **getAllNumbersByType(type)**

Returns an array of names and numbers of given types. If n number of given types is found, returns an empty array [].
if a person have myltiple numbers of the same type, each of them will be in it's own object.

if a parameter is missing, the function throws an exception:
**`'missing parameter'`**.

The format of the returned object is:

```json
[
    {"firstname": "", "lastname":"", "number": {"type":"", "tel":""}}
    {"firstname": "", "lastname":"", "number": {"type":"", "tel":""}}
]
```

### Examplew type work:

```json
[
    {"firstname": "Leila", "lastname":"Hökki", "number": {"type":"work", "tel":"87654321"}}
    {"firstname": "Leila", "lastname":"Hökki", "number": {"type":"work", "tel":"05040302"}}
    {"firstname": "Matt", "lastname":"River", "number": {"type":"work", "tel":"32145678"}}
]
```
Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get all work numbers

```js
phoneRegister.getAllNumbersByType("work");
```

returns:

```json
[
    {"firstname": "Leila", "lastname":"Hökki", "number": {"type":"work", "tel":"87654321"}}
    {"firstname": "Leila", "lastname":"Hökki", "number": {"type":"work", "tel":"05040302"}}
    {"firstname": "Matt", "lastname":"River", "number": {"type":"work", "tel":"32145678"}}
]
```

### Test 2: get all mobile numbers

```js
phoneRegister.getAllNumbersByType("mobile");
```

returns:

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "04123456" }
  }
]
```

### Test 3: type 'x' will return an empty array []

```js
phoneRegister.getAllNumbersByType("x");
```

returns: []

### Test 4: missing parameter throws an exception

```js
phoneRegister.getAllNumbersByType();
```

throws an exception 'missing parameter'
