function solve(num1, num2) {
    let minNum = Math.min(num1, num2);
    let maxDivisor = 0;
    for (let index = minNum; index >= 1; index--) {
        if (num1 % index === 0 && num2 % index === 0) {
            maxDivisor = index;
            break;
        }
    }
    console.log(maxDivisor);
}
solve(15, 5);
