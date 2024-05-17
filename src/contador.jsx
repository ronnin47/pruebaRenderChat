

import { useEffect, useState } from "react"

export const Contador = () => {
    const [contador,setContador]=useState(0);
    
    useEffect(()=>{ 
   contador>3 ? console.log("es mayor a 3"): console.log("es menor a 3");


    },[contador])

    const sumar=()=>{
        //console.log("funciona boton sumar")
        setContador(parseInt(contador)+1)
       
    }
    const restar=()=>{
      //console.log("funciona boton sumar")
      setContador(parseInt(contador-1))
     
  }
    const handleInput=(event)=>{
    setContador(event.target.value)
    }
    


    return (

    <div>
      contador
      <label htmlFor="">{contador}</label>
      <button className="btn btn-primary" value={contador}  onClick={sumar}>+</button>
      <button className="btn btn-danger" value={contador}  onClick={restar}>+</button>
      <input type="number" value={contador} onChange={handleInput} />

    </div>
  )
}

