# Carstorage API

## cars.json
```json
[
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Nova", "licence":"XYZ-123"},
    {"model":"Bored T-model", "licence":"GFT-10"},
    {"model":"XGT", "licence":"B-1"}
]
```

**search(key,value)**
function returns array of cars that matches the given criterion. If no match, returns an empty array.

if the parameters are missing, returns all cars in an array.

parameters:
-   key: model or licence
-   value: value to be search

### examples
```js
search('model', 'Nova')
```
returns 
```json
[ {"model":"Nova", "licence":"XYZ-123"}]
```

```js
search('model', 'Bored T-model')
```
returns 
```json
[ 
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Bored T-model", "licence":"GFT-10"}
]
```

```js
search('licence', 'ABC-1')
```
returns 
```json
[ 
    {"model":"Bored T-model", "licence":"ABC-1"},
]
```

```js
search('model', 'x')
```
returns 
```json
[]
```

```js
search()
or
search('model')
```
returns

```json
[
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Nova", "licence":"XYZ-123"},
    {"model":"Bored T-model", "licence":"GFT-10"},
    {"model":"XGT", "licence":"B-1"}
]
```