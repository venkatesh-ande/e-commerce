import datas from "./data.jsx"
import Main from "../App.jsx"
import NoData from "./nodata.jsx"


export default function Data({ activeCatagory, setCart, cart, content }) {
  
  const cartObjects = cart.map(id => {
  return datas.find(product => product.id === id);
});
  const filteredData = datas.filter(data => 
    activeCatagory === "All" ? true : data.catagory === activeCatagory
  )

  
  let displayContent;

  if (content === "All") {
    displayContent = filteredData.length !== 0 ? (
      filteredData.map((data) => (
        <Main 
          key={data.id || data.product} 
          id={data.id || data.product} 
          src={data.src}
          product={data.product}
          price={data.price}
          rating={data.rating}
          onCart={data.onCart}
          setCart={setCart}
          cart={cart}
        />
      ))
    ) : (
      <h2>No Items Found In <strong>{activeCatagory}</strong> Category</h2>
    );
  } else if (content === "cart") {
    displayContent = cart.length !== 0 ? (
      cartObjects.map((data) => (
        <Main 
          key={data.id || data.product} 
          id={data.id || data.product} 
          src={data.src}
          product={data.product}
          price={data.price}
          rating={data.rating}
          onCart={data.onCart}
          setCart={setCart}
          cart={cart}
        />
      ))
    ) : (
      <h2>No Items In Cart</h2>
    );
  }


  return (            
    <div className="grid-container">
      {displayContent}
    </div>
  ); 
}
