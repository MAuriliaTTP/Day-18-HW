function twoSum(nums, target) {
    let arrLength = nums.length;
    let slow = 0, fast = arrLength - 1;
    let sum = nums[slow] + nums[fast];
    let newArray = [];

    while (sum != target) {
      if (sum < target) {
        slow++;
      } else {
        fast--;
      }
      sum = nums[slow] + nums[fast];
    }
    newArray = [slow + 1, fast + 1];

    return newArray;
  }
  
  console.log(twoSum([2, 3, 4], 5));
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([1, 3, 5, 6], 11));
  
  module.exports = twoSum;

/* 
- slow pointer is initialized to the beginning of the array
- fast pointer is initialized to the end of the array (arrayLength - 1)
- let sum = nums[slow] + nums[fast] => this will keep track if the values we have 
add up to the desired target
- instantiate a new array to store the indices of the values that add up to the target
- loop through the array until the sum and target are equal
- if(sum < target) => the slow pointer should be moved to the right by 1 (slow++)
- else move the fast pointer to the left by 1 (fast--)
- update value for the sum each time you loop through the array and move the position of the pointers
- the newArray should container the value for the slow pointer + 1 and the fast pointer + 1
- return the newArray of the two indices who's values up to the desired target
*/