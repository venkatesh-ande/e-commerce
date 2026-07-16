import React from "react"









export default function Apk(){
  const [result ,setFun] = React.useState(0)
  
  function ShowResult(){
    setFun(result -1)
    //alert("Show Result")
    console.log(result)
  }
  function ShowResult2(){
    setFun(result + 1 )
    //alert("Show Result")
  }
  
  return(
    <main className="main">
        <button onClick={ShowResult}>-</button>
        <span>{result}</span>
        <button onClick={ShowResult2}>+</button>
        
    </main>
    )
}