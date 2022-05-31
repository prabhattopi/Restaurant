import React from 'react'
import { Restaurants } from './Restaurants'


export const Restaurant = (props) => {
  return (
      <>
    
<div className="container divider">
    <div className="cards">
        {props.restaurants.map((restaurant=>(
          <Restaurants key={restaurant.id} restaurant={restaurant}/>
        )))}
        </div>
</div>
</>
  )
}
