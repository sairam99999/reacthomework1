import React from 'react';
import Effect from "./../effect/Effect";

function First() {
const myDay='sunday';
const todayDate= new Date().getHours();
    return ( 
        <div> 
    <p>
     {myDay}  {todayDate}
     </p>
    <p>this is react demo</p>
    <Effect/>
    </div>
    );
}

export default First;
