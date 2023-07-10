function missingNum(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i];
        if (nums[i] < nums.length && nums[i] !== nums[correctIndex]) {
          [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
          i++;
        }
      }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i){
            return i;
        }
    }
    return nums.length;
}

module.exports = missingNum;

//To solve this problem, we first need to cyclically sort the array in a way that leaves undefined elements where a missing number would be.
//Then we would have to go through the sorted array and return the index at which there in an undefined element.
//If the array doesn't contain any undefined elements than we would return the size of the array as the missing number would be the last element.