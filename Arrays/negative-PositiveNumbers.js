function solve(arr) {
    let newArr = [];
    arr.some((a) => {
        if (a >= 0) {
            newArr.push(a);
        } else {
            newArr.unshift(a);
        }
    });

    console.log(newArr.join("\n"));
}
solve([7, -2, 5, 1, 0]);
