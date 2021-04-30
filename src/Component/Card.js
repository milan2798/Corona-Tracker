import React from 'react';
const Card=({inf,deltainf,text,color,tcolor})=>{
    let cardstyle={
        borderTop: '5px solid',
        borderColor:tcolor,
        
       };
       
     
    return(
       
        <div className={`cardclass ${color}` }   style={cardstyle}>

            <h4>{inf}</h4>
            {color==="Orange"?<h2>   </h2>:
            <h5 style={{color:tcolor}}>&#8593;{deltainf}</h5>
            }

            <h3>{text}</h3>

        </div>
    )
  
    
}
 export default Card;