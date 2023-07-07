function findAllDuplicates(nums){
    let counter = 0;
    let result = [];
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
        if (nums[i] === nums[i+1]){
            result[counter] = nums[i];
            counter++;
        }
    }
    return result;
}



module.exports = findAllDuplicates;