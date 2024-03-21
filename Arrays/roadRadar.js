function solve(speed, area) {
    let limit;

    switch (area) {
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
        case "interstate":
            limit = 90;
            break;
        case "motorway":
            limit = 130;
            break;
    }

    let speeding = limit - speed;
    if (speeding >= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    } else {
        let status;
        if (Math.abs(speeding) <= 20) {
            status = "speeding";
        } else if (Math.abs(speeding) <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        return `The speed is ${Math.abs(
            speeding
        )} km/h faster than the allowed speed of ${limit} - ${status}`;
    }
}

console.log(solve(40, "city"));

console.log(solve(21, "residential"));

console.log(solve(120, "interstate"));

console.log(solve(200, "motorway"));
