const twoSum = require("./Set-B-Question-1");

describe("Test cases", () => {
    test("[2, 3, 4], 5 => [1, 2]", () => {
      expect(twoSum([2, 3, 4], 5)).toEqual([1, 2]);
    })
    test("[2, 7, 11, 15], 9 => [1, 2]", () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    })
    test("[1, 3, 5, 6], 11 => [3, 4]", () => {
      expect(twoSum([1, 3, 5, 6], 11)).toEqual([3, 4]);
    })
  })