import React, { useMemo } from 'react';
import ExpensiveComp from './ExpensiveComp';

const  ExpensiveCalculation = ({ n })=>{
    console.log('nnnnnn....',n);
    const factorialRes = useMemo( ()=> fatorialComputation(n),[n]);
    console.log('ExpensiveComp',factorialRes);
    return factorialRes;
}

const fatorialComputation = (n)=>{
    let res = 1;
    for(let i=2;i<=n;i++){
        res = res * i;
    }
    return res;
}

const FactorialComp = () => {
    const [counter, setCounter] = React.useState(0);
    const [factorial, setFactorial] = React.useState(7);

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h2>{counter}</h2>
                <button onClick={() => setCounter(counter + 1)}>counter</button>
            </div>
            {/* without useMemo */}
            {/* <ExpensiveComp n={factorial} /> */}
            {/* withuseMemo */}
            <ExpensiveCalculation n={factorial} />
        </div>
    )
}

export default FactorialComp;