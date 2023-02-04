import React from 'react'; 
import './ListComponent.css'

const ListComponent = (props) => { 
  
  return ( 
    
    <div className="Component"> 
        <div className='cont'>
          <th className='text'>{props.text}</th>
          <th className='sku'>{props.sku}</th>
          <th className='inv'>{props.inv}</th>
          <th className='act'>{props.act}</th>
        </div>
        
      
    </div> 
    
  ); 
  
}; 

export {ListComponent};