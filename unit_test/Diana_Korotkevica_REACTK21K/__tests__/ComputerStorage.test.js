"use strict";

const ComputerStorage = require("../ComputerStorage");
const datastorage = require("../datastorage.json");

describe("constructor", () => {
  test("object created", () => {
    const computerStorage = new ComputerStorage(datastorage);
    expect(computerStorage.computerStorage).toEqual(datastorage);
  });

  test('missing parameter throws an exception "data storage missing"', () => {
    expect(() => new ComputerStorage()).toThrow("data storage missing");
  });
});

describe("Testing getById", () => {
  const computerStorage = new ComputerStorage(datastorage);
  test("get an object with given key = id: 2", () => {
    expect(computerStorage.getById(2)).toEqual({
      manufacturer: "CERA",
      type: "laptop",
      accessories: ["mouse"],
      price: 350,
      software: [
        {
          name: "Writer",
          price: 10,
        },
        {
          name: "Counter",
          price: 20,
        },
      ],
    });
  });
  test("wrong id", () => {
    expect(computerStorage.getById(4)).toBeNull();
  });
  test("parameter missing", () => {
    expect(computerStorage.getById()).toBeNull();
  });
});

describe("Testing getAllIdsByManufacturer(value)", () => {
  test('get all "BMI" manufacturer', () => {
    const computerStorage = new ComputerStorage(datastorage);
    expect(computerStorage.getAllIdsByManufacturer("BMI")).toEqual([
      { id: 1 },
      { id: 3 },
    ]);
  });

  test('get all "CERA" manufacturer', () => {
    const computerStorage = new ComputerStorage(datastorage);
    expect(computerStorage.getAllIdsByManufacturer("CERA")).toEqual([
      { id: 2 },
    ]);
  });

  test('manufacturer "x" will return an empty array []', () => {
    const computerStorage = new ComputerStorage(datastorage);
    expect(computerStorage.getAllIdsByManufacturer("x")).toEqual([]);
  });

  test("missing parameter will return an empty array []", () => {
    const computerStorage = new ComputerStorage([]);
    expect(() => computerStorage.getAllIdsByManufacturer()).toThrow(
      "missing parameter"
    );
  });
});

describe("Testing getAllComputerTypes()", () => {
  test("get all with default data", () => {
    const computerStorage = new ComputerStorage(datastorage);
    expect(computerStorage.getAllComputerTypes()).toEqual([
      "minitower",
      "laptop",
    ]);
  });

  test("some types are missing", () => {
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
      {
        id: 2,
        manufacturer: "CERA",
        type: null,
        accessories: ["mouse"],
        price: 350,
        software: [
          {
            name: "Writer",
            price: 10,
          },
          {
            name: "Counter",
            price: 20,
          },
        ],
      },
      {
        id: 3,
        manufacturer: "BMI",
        type: null,
        accessories: [],
        price: 150,
        software: [],
      },
    ];
    const computerStorage = new ComputerStorage(testData);
    expect(computerStorage.getAllComputerTypes()).toEqual(["minitower"]);
  });
  test("All types missing", () => {
    const someData = [
      {
        id: 1,
        manufacturer: "BMI",
        type: null,
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
      {
        id: 2,
        manufacturer: "CERA",
        type: null,
        accessories: ["mouse"],
        price: 350,
        software: [
          {
            name: "Writer",
            price: 10,
          },
          {
            name: "Counter",
            price: 20,
          },
        ],
      },
      {
        id: 3,
        manufacturer: "BMI",
        type: null,
        accessories: [],
        price: 150,
        software: [],
      },
    ];
    const computerStorage = new ComputerStorage(someData);
    expect(computerStorage.getAllComputerTypes()).toEqual([]);
  });
});

describe("Testing getAllComputersByType(type)", () => {
  const computerStorage = new ComputerStorage(datastorage);

  test("get all minitower type", () => {
    const expectedResult = [
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
    expect(computerStorage.getAllComputersByType("minitower")).toEqual(
      expectedResult
    );
  });

  test("get all laptop type", () => {
    expect(computerStorage.getAllComputersByType("laptop")).toEqual([
      {
        id: 2,
        manufacturer: "CERA",
        type: "laptop",
        accessories: ["mouse"],
        price: 350,
        software: [
          {
            name: "Writer",
            price: 10,
          },
          {
            name: "Counter",
            price: 20,
          },
        ],
      },
      {
        id: 3,
        manufacturer: "BMI",
        type: "laptop",
        accessories: [],
        price: 150,
        software: [],
      },
    ]);
  });

  test('type "x" will return an empty array []', () => {
    expect(computerStorage.getAllComputersByType("x")).toEqual([]);
  });

  test("missing parameter throws an exception", () => {
    expect(() => computerStorage.getAllComputersByType()).toThrow(
      "missing parameter"
    );
  });
});

describe("Testing hasAccessories(id)", () => {
  const computerStorage = new ComputerStorage(datastorage);
  test("returns true if the computer has accessories", () => {
    expect(computerStorage.hasAccessories(1)).toBe(true);
  });
  test("returns false if the computer has not accessories", () => {
    expect(computerStorage.hasAccessories()).toBe(false);
  });
  test("If parameter id is missing false is returned", () => {
    expect(computerStorage.hasAccessories()).toBe(false);
  });
});

describe("Testing GetComputerAccessories(id)", () => {
  test("Returns an array of computer accessories by 'id' = 1", () => {
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
    const result = ["keyboard", "display", "mouse"];
    const computerStorage = new ComputerStorage(testData);
    expect(computerStorage.GetComputerAccessories(1)).toEqual(result);
  });

  test('If none found "id" = 5, returns an empty array.', () => {
    const computerStorage = new ComputerStorage(datastorage);
    expect(computerStorage.GetComputerAccessories(5)).toEqual([]);
  });
});

describe("Testing getPriceWithoutSoftware(id)", () => {
  const computerStorage = new ComputerStorage(datastorage);
  test("Returns the price with out software id = 1", () => {
    expect(computerStorage.getPriceWithoutSoftware(1)).toEqual(250);
  });
  test("If no computer with the given number is found throws an exeption `nothing found with given id`", () => {
    expect(() => computerStorage.getTotalPrice(5)).toThrow(
      "nothing found with given id"
    );
  });
});

describe("Testing getTotalPrice(id)", () => {
  const computerStorage = new ComputerStorage(datastorage);
  test("get the total price of computer including the total price of the software", () => {
    expect(computerStorage.getTotalPrice(1)).toEqual(383);
  });
  test("if no computer with the given number is found throws an exeption `nothing found with given id`", () => {
    expect(() => computerStorage.getTotalPrice(5)).toThrow(
      "nothing found with given id"
    );
  });
});

describe("Testing getPriceOfTheSoftware(id)", () => {
  const computerStorage = new ComputerStorage(datastorage);
  test("Returns the total price of software bunled with the computer id = 1", () => {
    expect(computerStorage.getPriceOfTheSoftware(1)).toEqual(133);
  });
  test("If no software is found returns null", () => {
    expect(computerStorage.getPriceOfTheSoftware(3)).toEqual(0);
  });
  test("if no computer with the given number is found throws an exeption `nothing found with given id`", () => {
    expect(() => computerStorage.getPriceOfTheSoftware(5)).toThrow(
      "nothing found with given id"
    );
  });
});
