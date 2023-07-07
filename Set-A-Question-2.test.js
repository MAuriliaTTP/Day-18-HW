const findAllDuplicates = require("./Set-A-Question-2");

describe("Test cases", () => {
    test("[4,3,2,7,8,2,3,1] => [2,3]", () => {
      expect(findAllDuplicates([4,3,2,7,8,2,3,1])).toEqual([2,3]);
    })
    test("[1,1,2] => [1]", () => {
      expect(findAllDuplicates([1,1,2])).toEqual([1]);
    })
    test("[1] => []", () => {
      expect(findAllDuplicates([1])).toEqual([]);
    })
  })