/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1 second done");
            console.log("1 sec done");
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 second done");
            console.log("2 sec done");
        }, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3 second done");
            console.log("3 sec done");
        }, 3000);
    })
}

function calculateTime() {
    let startTime = new Date().getTime();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
        () => {
            let endTime = new Date().getTime();
            let timeTaken = endTime - startTime;
            console.log(`all promises resolved after ${timeTaken / 1000} seconds`);
        }
    )
}

calculateTime();