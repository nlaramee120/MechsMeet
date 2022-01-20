import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

const Success = () => {

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
        <h1>Your transaction has been complete! Redirecting in {count} seconds</h1>
    )
} else {
    return (
        <Redirect to='/home' />
    )
}
}

export default Success;