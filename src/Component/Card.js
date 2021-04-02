import React from 'react';
const Card=({inf,color})=>{
    let cardstyle={
        borderTop: '5px solid',
        borderColor:color,
        
       };
       
     
    return(
       
        <div className={`cardclass ${color}` }   style={cardstyle}>

            <h4>{inf}</h4>
        </div>
    )
  
    
}
 export default Card;