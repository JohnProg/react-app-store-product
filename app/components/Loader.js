import React from 'react';

const Loader = (props) => {
  return (
    <div className="loader">
      <img src="/images/ball.svg"/>
      <h2>{props.message}</h2>
    </div>
  )
}

export default Loader;

