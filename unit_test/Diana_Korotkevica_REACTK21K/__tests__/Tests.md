## Methods

### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the computer
- Return: returns the computer object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### **getAllIdsByManufacturer(value)**

Returns all ids of the computers matching the value of manufacturer

- Parameters: value of the property to be searched
- Return: Returns an array of computer id where the computers manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

### **getAllComputerTypes()**

Returns an array of different computer types.

- Parameters: none
- Return: Returns an array of different computer types. If no types are found, returns an empty array. The type is added to the result array only once.

### **getAllComputersByType(type)**

Returns an array of computer objects of given type

- Parameters: type of the computer to be searched
- Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.
- If a parameter type is missing, an exeption **'missing parameter'** is thrown.

### **hasAccessories(id)**

- Parameters: id of the computer
- Return: returns true if the computer has accessories else returns false. If parameter id is missing false is returned

### **GetComputerAccessories(id)**

Returns an array of computer accessories. If none found, returns an empty array.

- Parameters: id of the computer
- Return: returns accessories as an array

### **getPriceWithoutSoftware(id)**

Returns the price with out software

- Parameters: id of the computer
- Return: The price of the computer not including the price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### **getTotalPrice(id)**

Returns the total price of computer including the total price of the software

- Parameters: id of the computer
- Return: The price of the computer including the total price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### **getPriceOfTheSoftware(id)**

Returns the total price of software bunled with the computer

- Parameters: id of the computer to be searched
- Return: the total price of software. If no software is found returns 0
- if no computer with the given number is found throws an exeption `nothing found with given id`
