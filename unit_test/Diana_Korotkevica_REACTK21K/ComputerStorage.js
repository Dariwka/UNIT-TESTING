"use strict";

module.exports = class ComputerStorage {
  constructor(data) {
    // if (data) {
    //   this.computerStorage = data;
    // } else {
    //   throw new Error("data storage missing");
    // }

    if (!data) throw new Error("data storage missing");
    this.computerStorage = data;
  }

  getById(id) {
    for (let data of this.computerStorage) {
      if (data.id === id) {
        return {
          manufacturer: data.manufacturer,
          type: data.type,
          accessories: data.accessories,
          price: data.price,
          software: data.software,
        };
      }
    } // end of for
    return null;
  }

  getAllIdsByManufacturer(manufacturer) {
    if (!manufacturer) throw new Error("missing parameter");
    const found = [];

    for (let data of this.computerStorage) {
      if (data.manufacturer === manufacturer) {
        found.push({
          id: data.id,
        });
      }
    } // end of for
    return found;
  }

  getAllComputerTypes() {
    const types = [];
    for (let data of this.computerStorage) {
      if (data.type && !types.includes(data.type)) {
        types.push(data.type);
      }
    }
    return types;
  }

  getAllComputersByType(type) {
    if (!type) throw new Error("missing parameter");
    const found = [];

    for (let datatorage of this.computerStorage) {
      if (datatorage.type === type) {
        found.push({
          id: datatorage.id,
          manufacturer: datatorage.manufacturer,
          type: datatorage.type,
          accessories: datatorage.accessories,
          price: datatorage.price,
          software: datatorage.software,
        });
      }
    }
    return found;
  }

  hasAccessories(id) {
    for (let data of this.computerStorage) {
      if (data.id === id && data.accessories.length > 0) {
        return true;
      }
    }
    return false;
  }

  GetComputerAccessories(id) {
    for (let data of this.computerStorage) {
      if (data.id === id) {
        return data.accessories;
      }
    }
    return [];
  }

  getPriceWithoutSoftware(id) {
    for (let data of this.computerStorage) {
      if (data.id === id) {
        return data.price;
      }
    }
    throw new Error("nothing found with given id");
  }

  getTotalPrice(id) {
    for (let data of this.computerStorage) {
      if (data.id === id) {
        let total = data.price;
        for (let item of data.software) {
          total += item.price;
        }
        return total;
      }
    }
    throw new Error("nothing found with given id");
  }

  getPriceOfTheSoftware(id) {
    let softwareprice = 0;
    for (let data of this.computerStorage) {
      if (data.id === id) {
        for (let softwares of data.software) {
          softwareprice = softwareprice + softwares.price;
        }
        return softwareprice;
      }
    }
    throw new Error("nothing found with given id");
  }
};
