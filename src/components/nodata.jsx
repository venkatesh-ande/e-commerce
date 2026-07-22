import notfound from "../images/notfound.jpeg"

export default function NoData(data){
return(
    <>
       <div className="no-data-div">
         <div>
           <img src={notfound}/>
      <p> <strong>No Items In {data.catagory} Catagory</strong></p>   
          </div>
       </div>
    </>)
  
}