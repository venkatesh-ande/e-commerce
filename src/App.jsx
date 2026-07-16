

export default function Main(props){
  const addToCart = (productId) => {
    alert(`${productId}  Added to cart`);}
  
  return(

    <article>
      
    
    <div className="item-container">
 <div className="item-subcontainer">
             
     <img className="product-img"src={props.src} />
      <div className="info-div">
        <p className="product-name">{props.product}  </p>
        <span className="product-price">₹{props.price}</span>
        <span className="product-rating">{props.rating
        }<span>&#9733;</span></span
        
        ></div>
        <div>
          <button className="cart-button" onClick={() => addToCart(props.product)}>Add to Cart</button>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
      
    </article>
    
  
)}

