/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep(seconds) {
    const wait = await soja(seconds);
    console.log("waiting done -" + wait);
}

function soja(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(`Finished waiting for ${seconds} seconds`) }, seconds * 1000);
    }
    );
}

sleep(5)