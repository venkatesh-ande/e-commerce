import React from "react"
import { useState } from "react"
import icon from "../images/user.jpeg"
import data from "./data.jsx"
import Data from "./maincontent.jsx" 

export default function Header() {
  const [activeCatagory, setActiveCatagory] = useState("All");
  
  

  
  return (
    <>


      <header>
        <div className="header-container">
          <button className="menu-button">☰</button>
          <h1>V-Cart</h1>
          
          <img src={icon} alt="user icon" />
        </div>

        
        <div className="catagory-div">
          <button onClick={() => setActiveCatagory("All")}>All     ({data.length})</button>
          <button onClick={() => setActiveCatagory("mobile")}>Mobiles </button>
          <button onClick={() => setActiveCatagory("headphones")}>Headphones</button>
          <button onClick={() => setActiveCatagory("earbuds")}>Ear Buds</button>
          <button onClick={() => setActiveCatagory("mobilecover")}>Mobile covers</button>
          <button onClick={() => setActiveCatagory("beautyproduct")}>Beauty products</button>
          <button onClick={() => setActiveCatagory("smartwatches")}>Smart watches</button>
          <button onClick={() => setActiveCatagory("tv")}>Tvs</button>
          <button onClick={() => setActiveCatagory("electronics")}>Electronics</button>
          <button onClick={() => setActiveCatagory("speaker")}>Speakers</button>
        </div>

        <div className="search">
          <input type="search" placeholder="Search" />
        </div>
      </header>
     <Data activeCatagory={activeCatagory} />  


    
    </>
  );
  
}
