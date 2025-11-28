// lets do the first assignment for the day

function fibonacci(n) {
    if (n <= 0) return 0;
    else if (n === 1) return 0; // fibonacci(1) =0;
    else if (n === 2) return 1; // fibonacci(2) =1;

    else return fibonacci(n - 1) + fibonacci(n - 2); // n must be greater than 2


}

console.log(fibonacci(6)); // Output: 5
console.log(fibonacci(10)); // Output: 34

// lets do this iteratively

function fibonacciIterative(n){
    if (n <= 0) return 0;
    else if (n === 1) return 0;
    else if (n === 2) return 1;

    // We will let the first and the second terms be 0 and 1 respectively
    let a = 0, b = 1, nextTerm;
    for(let i=3; i<=n; i++){
        nextTerm = a + b;
        a=b;
        b= nextTerm;
        
    }
    return nextTerm;
    
}

console.log(fibonacciIterative(7));