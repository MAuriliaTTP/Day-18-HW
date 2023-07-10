const findDuplicate2 = require("./Set-B-Question-3");

describe("Test cases", () => {
    test("[1,3,4,2,2] => 2", () => {
      expect(findDuplicate2([1,3,4,2,2])).toEqual(2);
    })
    test("[3,1,3,4,2] => 3", () => {
      expect(findDuplicate2([3,1,3,4,2])).toEqual(3);
    })
  })