# Test Cases

## **constructor(data)**

Phones json array is passed as a parameter `data`. If the paramater is missing, throws an exception `'phone data missing'`

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: object created

```js
new PhoneRegister(jsonData);
```

test if the objects inner field has the same value as given as parameter. Parameter jsonData is the json array from the default `'phone.json'`

### Test2: missing parameter throws an exception

```js
new PhoneRegister();
```

this will throw an exception `'phone data missing'`
