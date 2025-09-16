function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let collectedWater = 0;
    /*
    const maxLevel = Math.max(...height);

    let collectedWater = 0;
    for (let level = maxLevel; level > 0; level --)
    {
        let isCollecting = false;
        let waterInLevel = 0;
        for (let i = 0; i < height.length; i++)
        {
            if (height[i] >= level)
            {
                if (isCollecting) // if first block, we start to collect water
                {
                    collectedWater += waterInLevel;
                    waterInLevel = 0;
                }

                isCollecting = true;
            }
            else if (isCollecting)
            {
                waterInLevel ++;
            }
        }
    }

    return collectedWater;*/
}
;
const water = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(water);
//# sourceMappingURL=L42.js.map