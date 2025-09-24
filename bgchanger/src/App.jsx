import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
  <div className="w-full h-screen " style={{backgroundColor:color}}>
   
    <div className="bottom-1 bg-white absolute w-full h-[50px] flex flex-wrap justify-evenly align-middle pt-2 ">
      <button  onClick={()=> setColor("red")} className="bg-red-600 rounded-md   w-12 h-8 " id="red"  >RED</button>
      <button onClick={()=> setColor("yellow")} id="yellow"  className="bg-yellow-600 rounded-md w-16 h-8 align-center" >YELLOW</button>
      <button onClick={()=> setColor("green")} id="green" className="bg-green-600 rounded-md w-16 h-8 align-center" >GREEN</button>
      <button onClick={()=> setColor("white")} id="white" className="bg-white rounded-md w-16 h-8 align-center" >WHITE</button>
      <button onClick={()=> setColor("olive")} id="olive" className="bg-yellow-200 rounded-md w-16 h-8 align-center" >OLIVE</button>
      <button  onClick={()=> setColor("grey")}id="grey" className="bg-slate-600 rounded-md w-16 h-8 align-center" >GREY</button>
      <button onClick={()=> setColor("pink")}id="pink" className="bg-pink-600 rounded-md w-16 h-8 align-center" >PINK</button>
    </div>
  </div>
      
    </>
  )
}

export default App
