function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let seen = new Set<string>();
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // 如果字符重复，移动左指针直到没有重复
        while (seen.has(currentChar)) {
            console.log(`重复字符 '${currentChar}'，移除 '${s[left]}'，左指针从 ${left} -> ${left + 1}`);
            seen.delete(s[left]);
            left++;
        }

        seen.add(currentChar);

        const window = s.slice(left, right + 1);  // 当前窗口内容
        maxLength = Math.max(maxLength, right - left + 1);

        console.log(`窗口 [${left}, ${right}] -> '${window}', 当前长度 = ${right - left + 1}, 最大 = ${maxLength}`);
    }

    return maxLength;
}

const test = "abcaebcbb";
console.log("最终最大长度：", lengthOfLongestSubstring(test));