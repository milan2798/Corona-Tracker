import React from 'react';
const Table=({country,active,deaths,recovered,confirmed})=>{
   
   if(deaths>0){
    return(
     
        <tr>
             <td>
                 {country}
             </td>
             <td>
                 {active}
             </td>
             <td>
                 {confirmed}
             </td>
             <td>
                 {recovered}
             </td>
             <td>
                 {deaths}
             </td>
     
         </tr>);  
   }
   else{
      return true;
   }
    
}
 export default Table;