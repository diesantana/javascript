// race
// Promise.race([promise1, promise2, promise3, ...]);

const promise1 = new Promise(resolve => setTimeout(() => resolve('Winner 1'), 2000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Winner 2'), 1000));

Promise.race([promise1, promise2])
  .then(winner => console.log(winner)); // Output: 'Winner 2'





// Função que retorna uma promise 
function sleep(time, value, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfill") {
                return resolve(value);
            } else {
                return reject(new Error(value));
            }
        }, time);
    });
}

// Retornando o primeiro resolve
const p1 = sleep(500, "one", "fulfill");
const p2 = sleep(100, "two", "fulfill");

Promise.race([p1, p2]).then((value) => {
    console.log(value); // "two"
    // Both fulfill, but p2 is faster
});


// Retornando o resolve
const p3 = sleep(100, "three", "fulfill");
const p4 = sleep(500, "four", "reject");

Promise.race([p3, p4]).then(
    (value) => {
        console.log(value); // "three"
        // p3 is faster, so it fulfills
    },
    (error) => {
        // Not called
    },
);


// retornando o reject 
const p5 = sleep(500, "five", "fulfill");
const p6 = sleep(100, "six", "reject");

Promise.race([p5, p6]).then(
    (value) => {
        // Not called
    },
    (error) => {
        console.error(error.message); // "six"
        // p6 is faster, so it rejects
    },
);

