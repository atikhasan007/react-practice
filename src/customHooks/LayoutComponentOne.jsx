import React, { useEffect, useState } from 'react';

export default function LayoutComponentOne() {
  
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = () =>{
        setOnSmallScreen(window.innerWidth < 768);
    }


    useEffect(()=>{
        checkScreenSize();//first time checkScreenSize call kore dite hobe
        window.addEventListener("resize", checkScreenSize);

     // cleanup code
        return  () => window.removeEventListener('resize',checkScreenSize);

    },[]);



  return (
    <div>
      <h1>You are browsing on {onSmallScreen?'small' : 'large'} device</h1>
    </div>
  )
}
