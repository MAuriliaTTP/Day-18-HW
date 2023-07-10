function findMissingNumbers(nums) {
    const n = nums.length;
    let i = 0;

    while (i < n) {
        const correctIndex = nums[i] - 1; 
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];  
        } else {
            i++;
        }
    }
    const missingNumbers = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            missingNumbers.push(i + 1);
        }
    }

    return missingNumbers;
}

module.exports = findMissingNumbers;

//Once again we cyclically sort the array and place undefined elements where numbers are missing in counting order.
//However, this time instead of returning the index of the first missing element, we return an array with the indexes of the missing elements.
//This can be done by pushing the indexes of the missing elements into an empty array and then returning it once it has been filled.