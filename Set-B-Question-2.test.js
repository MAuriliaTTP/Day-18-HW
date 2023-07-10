const subarraySum = require("./Set-B-Question-2");

describe("Test cases", () => {
    test("[1, 1, 1], 2 => 2", () => {
      expect(subarraySum([1, 1, 1], 2)).toEqual(2);
    })
    test("[1, 2, 3], 3 => 2", () => {
      expect(subarraySum([1, 2, 3], 3)).toEqual(2);
    })
  })