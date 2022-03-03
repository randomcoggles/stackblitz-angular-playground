export const MathUtils  = ((window)=>{
    /*
    My approche to this problem is 
    1. To understand what the problem really is.
        It needs the prime number wich is also in fibonacci sequence
    2. Read the code already implemented
        It correctly implements the two utilitary functions fibonacci and isPrimeNum
        It uses "recursive function" fibonacci. It raises me a red alert 'cause recursive functions can brings us performance problems
    3. Identify possible points of improvement
        I ran the code with nxtPrmFib(1000000) and I confirmed function fibonacci was the vilain.
        I saw that functions fibonacci and isPrimeNum are the functions who do the heavy duty.
    4. Think about a solution based in my experiance
        fibonacci and isPrimeNum are pure functions, so they can be memoised(https://en.wikipedia.org/wiki/Memoization)
        
    5. See other solutions 
        I didn't find anyone talking about the same problem(or I didn't search enough)
    6. Choose the best solutions according my judgemnt
    7. I didn't like the naming of the function so I changed it
    */
    const memoize = (fn)=>{
        let cache = {};
        return (...args)=>{
            let n = args[0];
            // Only one arg :(
            if (n in cache) {
                // get from cache
                return cache[n];
            } 
            // It inst in cache, so get it from given function
            // Add it to cache for next time
            return cache[n] = fn(n);
        }
    }

    const isPrimeNum = (num) => {
        for (var i = 2; i < num; i++) {
            if (num % i === 0){
                return false;
            }
        }
        return num > 1;
    };

    const fibonacci = (num)=>{
        if (num <= 1)
            return 1;
        return memoizedFibonacci(num - 1) + memoizedFibonacci(num - 2);
    }

    const fibonacciNonMemoised = (num)=>{
        if (num <= 1)
            return 1;
        return fibonacciNonMemoised(num - 1) + fibonacciNonMemoised(num - 2);
    }
    
    const memoizedFibonacci = memoize(fibonacci);

    const memoizedIsPrime = memoize(isPrimeNum);

    function nonMemoisedNextPrimeFibonacci(number) {
        let r = 0;
        let l = 1;
        while (true) {
            var fib = fibonacciNonMemoised(l);
            // console.log('fib', fib, number);
            if (fib > number) {
                if (isPrimeNum(fib)) {
                    r = fib;
                    break;
                } else {
                    l = l + 1;
                    //console.warn('bumping to ', fib);
                }
            } else {
                l = l + 1;
                //console.warn('bumping to', fib);
            }
        }
        // console.warn('Next prime fib ', r);
        return r;
    }


    function nxtPrmFib(number) {
        let r = 0;
        let l = 1;
        while (true) {
            var fib = fibonacci(l);
            // console.log('fib', fib, number);
            if (fib > number) {
                if (isPrimeNum(fib)) {
                    r = fib;
                    break;
                } else {
                    l = l + 1;
                    //console.warn('bumping to ', fib);
                }
            } else {
                l = l + 1;
                //console.warn('bumping to', fib);
            }
        }
        // console.warn('Next prime fib ', r);
        return r;
    }



        
    /* It would be cool if I make them static so anyone could use them */
    /*class MyMathUtils {
        static fibonacci = fibonacci;
        static isPrimeNumber = isPrimeNum;
        static memoize = memoize;
        static nxtPrmFib = nxtPrmFib;
    }

    window.MyMathUtils = MyMathUtils;
    */
    return {
        fibonacci,
        isPrimeNumber: isPrimeNum,
        memoize,
        nextPrimeFibonacci: nxtPrmFib,
        nonMemoisedNextPrimeFibonacci
    };

})(window)
/*

console.time('With100000');
console.log('window.MyMathUtils: ', MyMathUtils.nxtPrmFib(100000));
console.timeEnd('With100000');
console.time('With1000');
console.log('window.MyMathUtils: ', MyMathUtils.nxtPrmFib(1000000));
console.timeEnd('With1000');
*/



