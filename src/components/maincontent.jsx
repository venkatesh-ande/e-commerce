import datas from "./data.jsx"
import Main from "../App.jsx"
import Header from "./header.jsx"
import NoData from "./nodata.jsx"


export default function Data(input) {
  
        const filteredData = datas.filter(data => input.activeCatagory === "All" ? true :  data.catagory === input.activeCatagory )
        
  return (            
    <div className="grid-container">
      
    { filteredData.length !==0 ?  filteredData.map((data) => { 
      
          return (
            <Main 
              id={data.id || data.product} 
              src={data.src}
              product={data.product}
              price={data.price}
              rating={data.rating}
              warning={filteredData.length === 0 ? "Warning: The array is empty!" : ""} 
      
            />
          );
        }) 
      
      :  (<NoData />)
      
    }
      
      
    </div>
  ); 
  
    
}
