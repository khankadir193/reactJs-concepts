import React from 'react';
import ExpensiveComp from './ExpensiveComp';

// const  ExpensiveCalculation = (factorial)=>{
//     console.log('nnnnnn....',factorial);
//     // const factorialRes = fatorialComputation(n);
//     // console.log('ExpensiveComp',factorialRes);
// }

// const fatorialComputation = (n)=>{
//     let res = 1;
//     for(let i=2;i<=n;i++){
//         res = res * i;
//     }
//     return res;
// }

const FactorialComp = () => {
    const [counter, setCounter] = React.useState(0);
    const [factorial, setFactorial] = React.useState(5);

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h2>{counter}</h2>
                <button onClick={() => setCounter(counter + 1)}>counter</button>
            </div>

            <ExpensiveComp n={factorial} />
        </div>
    )
}

export default FactorialComp;