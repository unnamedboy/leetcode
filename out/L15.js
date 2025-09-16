function threeSum(nums) {
    const results = [];
    // 2-pointers
    // We need a sorted array, and then evaluate the numbers from 0...n-1
    // For each elem in array 0...n-1, we:
    // fetch left and right of the array. If left array equals the value, 
    // then we skip that value by left --; for right, we use right ++
    // After finding all, we could then remove duplicated ones.
    nums.sort((a, b) => a - b);
    for (let current = 0; current < nums.length; current++) {
        let left = 0;
        let right = nums.length - 1;
        // sorted array with duplicated values. We skip value
        // until it's different from the one outside
        if (current > 0 && nums[current] === nums[current - 1]) {
            continue;
        }
        // Then we start working on the cursor thingy
        while (left < right) {
            // then move pointers. If pointer's cursor equals to current,
            // move the cursor
            if (left === current)
                left++;
            if (right === current)
                right--;
            if (nums[left] + nums[right] + nums[current] === 0) {
                results.push([nums[left], nums[right], nums[current]]);
            }
            else if (nums[left] + nums[right] + nums[current] > 0) {
                // bigger, move cursor back 1 pos
                right--;
            }
            else {
                left++; // smaller (no equal, equal already in 1st condition)
                // move cursor forward
            }
        }
    }
    return results;
}
;
const L15 = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(L15);
//# sourceMappingURL=L15.js.map