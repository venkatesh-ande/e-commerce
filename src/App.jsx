

import React from "react"


    
export default function Main(props){
  
  const [buttonSwap, setButtonSwap] = React.useState(false)
    
    function addCart(id){
        props.setCart(cart => [...cart ,id]);
       setButtonSwap(prevValue => !prevValue);
        } 
        
        function removeCart(id){
          props.setCart(prevCart => prevCart.filter((data)=> data !==id))
          setButtonSwap(prevValue => !prevValue);
        }
      
  
  return(

    <article>
      
    
    <div className="item-container">
 <div className="item-subcontainer">
             
     <img className="product-img"src={props.src} />
      <div className="info-div">
        <p className="product-name">{ props.product
        }  </p>
        <span className="product-price">₹{props.price.toLocaleString()}</span>
        <span className="product-rating">{props.rating}<span>&#9733;</span></span
        
        ></div>
        <div>
          <button className= {buttonSwap ?"remove-button" :"cart-button"}
          id={props.id}
        onClick={() => buttonSwap ? removeCart(props.id): addCart(props.id) }
        >{ buttonSwap ? "Remove ": "Add to Cart"}</button>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
      
    </article>
    
  
)}

