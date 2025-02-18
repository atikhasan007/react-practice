import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect running');  // Debugging
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    );
};

export default Timer;
