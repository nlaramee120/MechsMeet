import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

const Cancel = () => {

const [count, setCount] = useState(3);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount =>  prevCount - 1);
    }, 1000);
  }, []);
  if (count === 0) {
    clearInterval()
    console.log('timer done')
}
if (count > 0) {
    return (
       <h1>The purchase has been canceled. Redirecting in {count} seconds</h1>
    )
} else {
    return (
        <Redirect to='/' />
    )
}
}

export default Cancel; 