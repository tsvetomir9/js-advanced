function solve(list) {
    let number = parseInt(list.shift());

    while (list.length !== 0) {
        let current = list.shift();
        switch (current) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "splice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number = (number * 0.8).toFixed(1);
                break;
        }
        console.log(number);
    }
}

solve(["9", "dice", "splice", "chop", "bake", "fillet"]);
solve(["32", "chop", "chop", "chop", "chop", "chop"]);
