function productExceptSelf(nums: number[]): number[] {
    let result = new Array<number>(nums.length).fill(1);

    for (let n = 1; n < nums.length; n++)
    {
        result[n] = result[n] * nums[n - 1]; //left
    }

    let prod = 1;
    for (let n = nums.length - 2; n >= 0; n--)
    {
        prod *= nums[n + 1];
        result[n] *= prod;
    }

    return result;
};

const L238 = productExceptSelf([1,2,3,4]);
console.log(L238);