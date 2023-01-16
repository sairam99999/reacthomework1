import  React, {useState,useEffect} from 'react';

function Time(){

    const [Time, setTime] = useState("");
    useEffect(() => {
        const myInterval = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);


        return () => {
            clearInterval(myInterval);
          }
        })
      

        return (
            <div className="App">
              <h1>{Time}</h1>
            </div>
          );
        
}
export default Time;