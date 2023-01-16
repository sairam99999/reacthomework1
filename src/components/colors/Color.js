import React, { useState } from 'react';


function Color(){
    const [color, setColor] = useState('');

    return(
        <>
        <button  type="button"  onClick={() =>setColor("Yellow") }>
         Yellow
        </button> 

        <button  type="button"  onClick={() => setColor("Green")}>
         Green
        </button> 

        <button  type="button"  onClick={() => setColor("Black")}>
        Black
        </button> 

        <p>{`you have cicked on:`}<span className={color}>{color}</span></p>

        </>
    );
}
export default Color;
