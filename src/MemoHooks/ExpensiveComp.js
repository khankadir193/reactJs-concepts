import React from 'react';

/**
 * A component that takes a number as a prop and
 * calculates the factorial of that number
 * (i.e. the product of all positive integers less than or equal to that number)
 * and returns the result.
 *
 * This component is marked as "expensive" because it does
 * a potentially slow operation (the factorial calculation)
 * and is intended to be memoized.
 *
 * @param {number} n The number to calculate the factorial of
 * @returns The factorial of n
 */
const ExpensiveComp = ({ n }) => {
    console.log('Calculating factorial of', n);
    let res = 1;
    for(let i=2;i<=n;i++){
        res = res * i;
        console.log('  at i=', i, 'res=', res);
    }
    console.log('factorialResult....???',res);
    return  res;

}

export default ExpensiveComp;