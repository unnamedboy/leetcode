function numJewelsInStones(jewels: string, stones: string): number {
    const hashSet = {};

    for (let i = 0; i < stones.length; i++)
    {
        const itemToCheck = stones[i];
        if (hashSet[itemToCheck] === undefined) {
            hashSet[itemToCheck] = 1;
        }
        else
        {
            hashSet[itemToCheck] = hashSet[itemToCheck] + 1;
        }
    }

    let sum = 0;
    for (let j = 0; j < jewels.length; j++)
    {
        const jewel = jewels[j];
        if (hashSet[jewel] !== undefined)
        {
            sum += hashSet[j];
        }
    }

    return sum;

};



const r771 = numJewelsInStones("aA", "aAAbbbb");

console.log(r771);