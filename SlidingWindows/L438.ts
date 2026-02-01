function findAnagrams(s: string, p: string): number[] {
    let left = 0;
    let targetFreq: Record<string, number> = {};
    let currentFreq: Record<string, number> = {};
    let validCount = 0;

    let validIndexes = Array<number>();

    // Prescan and build target freq
    for(let t of p)
    {
        targetFreq[t] = (targetFreq[t] || 0) + 1; // add one frequency, and if the previous value is 0, set it to 0
    }

    // Start find with the sliding window
    for (let right = 0; right < s.length; right ++)
    {
        const currentChar = s[right];

        // Add item to the freq array.
        currentFreq[currentChar] = (currentFreq[currentChar] || 0) + 1;

        // We can check the frequency here, if currentFreq[currentChar] has the frequency 
        // that equals to targetFreq, we count it as valid, and plus one there
        if (targetFreq[currentChar] === currentFreq[currentChar])
        {
            validCount ++;
        }

        // If valid count is equals to target's count, we move the window, and try to find
        // the answer and log it
        while (validCount === Object.keys(targetFreq).length)
        {
            // Record position
            validIndexes.push(left);

            // In this time, the one to he left is going to be removed
            // Then the condition doesn't meet anymore. We remove it from the freq map
            if (currentFreq[s[left]] == targetFreq[s[left]])
            {
                validCount --;
                // And update frequency map
                currentFreq[s[left]] -= 1;
            }

            left ++;
        }
    }

    return validIndexes;
};

const R438 = findAnagrams("cbaebabacd", "abc");
console.log(R438);