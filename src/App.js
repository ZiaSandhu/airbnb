import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import CardData from './Components/data';
// import Card from './Components/Card';
import TravelData from './Travel/detail';
import Journal from "./Travel/journal";

// export default function App(){
//   const Data=CardData.map(data =>{
//     return <Card 
//           key={data.id}
//           {...data}  
//           // item={data} // all array as item props

//           // src={data.img} 
//           // rating={data.stats.rating} 
//           // price={data.price} 
//           // text={data.title} 
//           // review={data.stats.reviews} 
//           // location={data.country} 
//           // open={data.openSpot}
//           />
//   })
//   return(
//     <>
    // {/* <Navbar/>
    // <Hero/>
    // <div className="AppCard">
    //   {Data}
    // </div> */}
//     </>
//   )
// }
// export default function App(){
//   return (
//       <>
//           <Joke setup="setup 1" line="Line 1"/>   
//           <Joke line="Line 2"/>   
//       </>
//   )
// }


export default function App(){
  const journal= TravelData.map(detail =>{
    return (
      <Journal 
      key={detail.id}
      {...detail}
      />
    )
  })
  return(
    <>
    <Navbar/>
    <div className="travel-journal">
       {journal}
    </div>
    </>
      )
}