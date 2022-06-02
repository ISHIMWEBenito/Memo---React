import React, { memo } from 'react';

const Child = (props) => {
  function changeNumber() {
    props.changeNumber(Math.random());
  }

  console.log('here');
  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  );
};

// export default Child; 'here' will be rendered by clicking
// incrementlocal but memo solves this

/*

react.memo which is meant to help you optimize performance

Memo: if you have any props that are kind of going down to a 
component and you only want the component to render if it's 
props are actually changing you can use memo to basically say only
allow me to re-render if my incoming props are changing so long as my 
incoming props are not changing don't re-render me

*/

export default memo(Child);
