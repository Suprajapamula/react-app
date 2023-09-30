import React from 'react';
var Another=React.forwardRef(function(props,refs){
    console.log(props);
    console.log(refs);
      return(
        <div style={{border:'1px solid black',padding:'10px',margin:'10px'}}>
            <h1>Another</h1>
            <input typpe="text"/>
        </div>
      )
})
export default Another;