import { useState } from "react";

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4 text-white rounded-3xl py-1" style={{backgroundColor: "red"}}>red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 text-white rounded-3xl py-1" style={{backgroundColor: "green"}}>green</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 text-black rounded-3xl py-1" style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={()=>setColor("lightblue")} className="outline-none px-4 text-black rounded-3xl py-1" style={{backgroundColor: "lightblue"}}>sky</button>
          <button onClick={()=>setColor("magenta")} className="outline-none px-4 text-white rounded-3xl py-1" style={{backgroundColor: "magenta"}}>magenta</button>
          <button onClick={()=>setColor("purple")} className="outline-none px-4 text-white rounded-3xl py-1" style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 text-white rounded-3xl py-1" style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={()=>setColor("#456789")} className="outline-none px-4 text-white rounded-3xl py-1" style={{backgroundColor: "#456789"}}>faded_green </button>
        </div>
      </div>

    </div>
  )
}

export default App
