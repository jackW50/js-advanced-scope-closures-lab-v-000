function produceDrivingRange(blockRange) {
  return function (start, stop) {
    const range = Math.abs(parseInt(start) - parseInt(stop));
    if (range > blockRange) {
      return `${(range - blockRange)} blocks out of range`
    }
    else
      return `within range by ${blockRange - range}`
  }
}

function produceTipCalculator(percent) {
  return function (amount) {
    return amount * percent;
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
