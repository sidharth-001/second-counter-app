import React, { useState, useEffect } from "react"

const Seconds = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(counter => counter+1);
        }, 1000);
        
        return () => {
            clearInterval(timer);
        } //when component got unmounted
    }, []);


    return <span>{counter} in seconds</span>;
}

export default Seconds;
