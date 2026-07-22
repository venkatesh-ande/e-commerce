import React from "react"
import { useState } from "react"
import icon from "../images/user.jpeg"
import cartIcon from "../images/cartIcon.jpeg"
import data from "./data.jsx"
import Data from "./maincontent.jsx" 
import Main from "../Apk.jsx"


export default function Header() {
  const [activeCatagory, setActiveCatagory] = useState("All");
  const [content, setContent] = useState("All");
  const [cart , setCart] =React.useState([]);
  
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

        
          <button 
          className="cartButton"
          onClick={() => setContent(content ==="All" ? "cart" : "All")} >
            <img 
             src={cartIcon}
            alt="Cart" />
            <span>{cart.length}</span>
            </button>
                    
        
        </div>
      </header>
     <Data 
     activeCatagory={activeCatagory}  
     cart={cart}
     setCart={setCart}
     content={content}
     />  


    
    </>
  );
  
}
