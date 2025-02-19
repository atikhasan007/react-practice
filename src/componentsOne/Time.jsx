import React, { useEffect, useRef, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []); // Adding an empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button type="button" onClick={()=> clearInterval(buttonRef.current)}>Cleanup</button>
    </div>
  );
};

export default Time;
