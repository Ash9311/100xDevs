/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(`promise resolved after ${n} seconds`); }, n * 1000);
    }
    );
    p.then(result => { console.log(result) });
    console.log(p);
}


time = 5; //in seconds

wait(time);