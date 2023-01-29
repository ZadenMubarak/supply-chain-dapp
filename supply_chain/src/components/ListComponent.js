import React from 'react'; 
import './ListComponent.css'

const ListComponent = (props) => { 
  
  return ( 
    
    <div className="Component"> 
      
        <th className='text'>{props.text}</th>
        <th className='sku'>{props.sku}</th>
        <th className='inv'>{props.inv}</th>
        
      
    </div> 
    
  ); 
  
}; 

export {ListComponent};