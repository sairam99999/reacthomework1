import React , {useState,useEffect} from 'react';

function Effect(){

    const [count, setCount]= useState(0);
    useEffect(() =>{
        setTimeout(() =>{
            setCount((count) => count +1);
        },250);
    } ,[]);
    return <p>{`current count is ${count}`}</p>;
}

export default Effect;
