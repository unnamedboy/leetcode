function calPoints(ops) {
    const stk = [];
    for (const op of ops) {
        if (op === "C")
            stk.pop();
        else if (op === "D")
            stk.push(stk.at(-1) * 2);
        else if (op === "+")
            stk.push(stk.at(-1) + stk.at(-2));
        else
            stk.push(+op);
    }
    return stk.reduce((a, b) => a + b, 0);
}
//# sourceMappingURL=L682.js.map