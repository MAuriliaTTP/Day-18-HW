function findDuplicate(nums) {
  let index = 0;
  let numsLength = nums.length;

  while (index < numsLength) {
    if (nums[index] !== index + 1) {
      let correctIndex = nums[index] - 1;
      if (nums[index] !== nums[correctIndex]) {
        [nums[index], nums[correctIndex]] = [nums[correctIndex], nums[index]];
      } else {
        return nums[index];
      }
    } else {
      index++;
    }
  }
  return -1;
}

module.exports = findDuplicate;

/* 
- first use the cyclic sort to successfully sort the array
ex: sortArray [1,3,4,2,2] => [1,2,2,3,4]
- the critical idea to remember is that in an array that has been cyclicly sorted, 
the value of the array at a specific index is going to be = to index + 1
- while traversing through the array and checking if the value = index + 1, in a 
case where this condition does not hold, a duplicate has been found
- therefore, return nums[index]
*/