import React from 'react'
import "../App.css"
export const Filters = ({Filters, currentfilter,updateFilter}) => {
  return (
    <div className="container restaurants">
    <h1>50 restaurants</h1>
    <div className="restaurant-options">
        {Object.entries(Filters).map(([key,value])=>(
       <div key={key} className= {`restaurant-option ${currentfilter===key?"underline":""}`} onClick={()=>updateFilter(key)}>{value}</div>
        ))}
   
      

       
    </div>
</div>
  )
}
