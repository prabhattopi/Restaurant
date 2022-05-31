import React,{useState} from 'react';
import './App.css';
import { Navbar } from "./componets/Navbar";
import { Filters } from "./componets/Filters";
import { Offers } from "./componets/Offers";
import { Restaurant } from "./componets/Restaurant";
import userInfo from "./data/userInfo.json"
import Offf from "./data/Offers.json"
import restaurants from "./data/restaurant.json"

function App() {
  const FilterData=
    {
    
    1:"Cost High to Lost",



    2:"Cost Lost to High",


     3:"Ratings",


     4:"Delivery Time",


     5:"Relevance"
    }

  





   const [filterBy, setFilterBy] = useState("")
   const [data,setData]=useState(restaurants)
   const updateFilter=(newFilter)=>{
    switch (newFilter){
      case '1':{
        setFilterBy('1')
        data.sort((a,b)=>(Number(b.costForTwo)-Number(a.costForTwo)))
      
        setData([...data])
        
        break;

      }
      case '2':{
        setFilterBy('2')
        data.sort((a,b)=>(Number(a.costForTwo)-Number(b.costForTwo)))
        setData([...data])
    
        break;

      }
      case '3':{
        setFilterBy('3')
        data.sort((a,b)=>(Number(b.rating)-Number(a.rating)))
        setData([...data])
    
        break;

      }
      // case '4':{
      //   setFilterBy(2)
      //   data.sort((a,b)=>(Number(b.costForTwo)-Number(a.costForTwo)))
      //   setData([...data])
    
      //   break;

      // }
      // case '5':{
      //   setFilterBy(2)
      //   data.sort((a,b)=>(Number(b.costForTwo)-Number(a.costForTwo)))
      //   setData([...data])
    
      //   break;

      // }
      
      default:{
       
        break;
      }
    }
  

   }
  return (
   <div>
    <Navbar {...userInfo.location}/>
   
    <Offers Offf={Offf}/>
    <section className="near-you">
    <Filters Filters={FilterData} currentfilter={filterBy} updateFilter={updateFilter}/>
    <Restaurant restaurants={data}/>
    </section>
   </div>
  );
}

export default App;
