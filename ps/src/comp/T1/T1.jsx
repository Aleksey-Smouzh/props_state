
import React from 'react'


function T1(props) {
          
           console.log(props)
 
     let vegD = props.state.map((veg)=> (<div key={veg.id}> {veg.name} {veg.img}</div> ))
    
  return (
       
     <div >
          {vegD} 
       T1</div>
  )
}

export default T1