import React from 'react'
import logo from "./assets/logo.svg";

export const Navbar = (props) => {
    const x=[
        {
        iconName: "person_outline",
        labe:"Sign In"
    },
        {
        iconName: "shopping_bag",
        labe:"Cart"
    },
        {
        iconName: "support",
        labe:"Help"
    },
        {
        iconName: "search",
        labe:"Search"
    },
]
  return (
    <section className="navbar">
        <div className="container">
            <img className="logo" src={logo}/>
            <div className="location">
                <span className="city">{props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>
            <div className="navbar-options">
                {x.map((navbar,index)=>(<div key={index} className="navbar-option">
                    <span className="material-icons">{navbar.iconName}</span>{navbar.labe}
                </div>
                
                ))}
               </div>
        </div>
       
    </section>
  )
}
