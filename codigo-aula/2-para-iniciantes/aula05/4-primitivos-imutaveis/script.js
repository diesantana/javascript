let a = [1, 2, 3];
let b = a;
console.log(a, b);

b.push(4);
console.log(a, b);

let c = b;
c.push(5);
console.log(a, b, c);
 
c.pop();
console.log(a, b, c);