function removeElement(nums: number[], val: number): number {
    var slow = 0;

    for (let fast = 0; fast < nums.length; fast++)
    {
        // If not found, we move the current item that to be 
        // overwritten by 1
        if (nums[fast] != val)
        {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
};

const n = [2];
const r27 = removeElement(n, 3);

console.log(r27);