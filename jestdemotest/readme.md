# Jest project

## 1. Create a project folder

## 2. Create package.json with `npm init`

```shell
> npm init -y
```

Or

```shell
> npm init
```

and answer the questions

## 3. Install jest as devDependencies

```shell
> npm install jest --save-dev
```

This modifies package.json by adding devDependencies to it

```json
"devDependencies": {
    "jest": "^27.0.6"
  }
```

## 4. Modify test-script in package.json

```json
"scripts": {
    "test": "jest"
  }
```

## 5. Create test folder named `__tests__`

## 6. Write tests

## 7. To run tests

```shell
npm test
```

## 7B. run only one test file

```shell
npm test --testFile fileToBeTested.test.js
```
