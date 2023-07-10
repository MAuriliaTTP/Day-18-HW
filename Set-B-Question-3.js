function findDuplicate2(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}

module.exports = findDuplicate2;

/* 
- fast and slow pointers are both initialized to the first value in the array
- you want to reach a point of intersection
- slow pointer should be incremented by one step and fast pointer should be 
incremented by 2 steps
- slow pointer should then be reinitialized to the beginning and try to intersect
the fast pointer
- when they finally catch up to each other and the two pointers intersect, the duplicate has been found
- return the value for slow 
*/