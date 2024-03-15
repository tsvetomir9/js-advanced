function solve(num) {
    let string = num.toString();
    let sum = string.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
    let isSame = true;
    for (let index = 0; index < string.length - 1; index++) {
        let current = string[index];
        if (current !== string[index + 1]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
solve(2222222);
