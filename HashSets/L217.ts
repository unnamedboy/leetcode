    function containsDuplicate(nums: number[]): boolean {
        
        const checkSet = {};

        for(let n in nums)
        {
            if (checkSet[n] === undefined)
            {
                checkSet[n] = 1;
            }
            else
            {
                return true;
            }        
        }

        return true;
    };

const r217 = containsDuplicate([1,2,3,1]);
console.log(r217);