function isSubsequence(s, t) {
    let sPointer = 0;
    let tPointer = 0;
    while (sPointer < s.length) {
        if (tPointer >= t.length) // out of bound, finish scanning and quit
         {
            return false;
        }
        const currentS = s[sPointer];
        const currentT = t[tPointer];
        // Scan array, if char in T equals char in S, then we move 
        // the sPointer to scan the next one
        // Otherwise, we just keep scanning string t, until 
        // either found a match, or quit
        if (currentS == currentT) {
            sPointer++;
        }
        tPointer++;
    }
    return true;
}
;
//# sourceMappingURL=L392.js.map