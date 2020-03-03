const {new_checkInitialDeployment, Check} = require('../orderExe');

describe("checkInitialDeployment", function() {
  it("deploy a rover in a correct position", function() {
    const initialPOsition = [0,0];
    const mapSize = [4,4];

    const result = new_checkInitialDeployment(initialPOsition, mapSize);
    expect(result).toBe(true);
  });

  it("deploy a rover in a incorrect position and return false", function() {
    const initialPOsition = [5,5];
    const mapSize = [4,4];

    const check = new Check();

    check.isNumber = jasmine.createSpy('check.isNumber').and.returnValue(false)

    const result = new_checkInitialDeployment(initialPOsition, mapSize);
    expect(result).toBe(false);
  });

});

describe("getCoordinates", function() {
  it("", function() {
    const postion = "1 1 E";

    const result = new_getCoordinates(postion);
    expect(result).toEqual([1,1,'E']);
  });

});