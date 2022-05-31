import React from 'react'


export const Offers = (props) => {
  return (
    <section className="offers">
    <div className="container">
      {props.Offf.map((offer,index)=>(<img key={index} className="offer" src={offer}/>))}
        
       
    </div>
</section>
  )
}
