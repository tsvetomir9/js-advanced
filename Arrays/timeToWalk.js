function solve(steps, footprint, speedKmH) {
    let speedInMeters = speedKmH / 3.6;
    let disctance = steps * footprint;

    let restMins = Math.floor(disctance / 500) * 60;
    let time = disctance / speedInMeters + restMins;

    const hours = Math.floor(time / 60 / 60)
        .toFixed(0)
        .padStart(2, "0");
    const minutes = Math.floor(time / 60)
        .toFixed(0)
        .padStart(2, "0");
    const seconds = (time % 60).toFixed(0).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

console.log(solve(4000, 0.6, 5));
