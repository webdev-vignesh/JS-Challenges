// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

function myFunction (a) {
    let b = 0;
    for(let i =0; i<a.length; i++) {
        b += a[i];
    }
    return b;
}

console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000,1]));
console.log(myFunction([-50,0,50,200]));
