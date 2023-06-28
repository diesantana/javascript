// sintaxe
// Promise.allSettled([promise1, promise2, promise3, ...]);


const promise1 = Promise.resolve('Resolved');
const promise2 = Promise.reject('Error');

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
// Output: [{ status: 'fulfilled', value: 'Resolved' }, { status: 'rejected', reason: 'Error' }]
