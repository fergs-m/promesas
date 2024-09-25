import React from "react";
import { useState,useEffect } from "react";

function StoreRopa(){

    const [ropas, setRopas] = useState([]);

    useEffect( () => {

        let controller = new AbortController() //es para abortar la operacion, es decir, para parar la llamada en caso se que vaya mal o ya no se necesite
        let options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json' //Content-Type es para decirle que yo le voy a enviar un json
            },
            signal : controller.signal//se le dice que va a parar, se relaciona con AbortControler
        }
        fetch('https://fakestoreapi.com/products', options)
        .then(res => res.json())
        .then(datos => setRopas(datos))
        .catch(err => console.log(err))//sirve para cuando la api no funcione genera un error
        .finally( () => controller.abort())//controla abrot, cuando ya termine lo que tenga que llamar se acaba, cierra conexion
    },[])

    return (
        <> 
        <h1 className="titulo"> ¡Encuentra las mejores ofertas en tu tienda favorita!</h1>

        <div className="ropa"> 

        {ropas.map( (ropa) => {  

           return <div key = {ropa.id}   className= "ropa__contenedor" >
            <h2 className="ropa__subTitulo"> {ropa.title} </h2>
            <p className="ropa__precio"> Precio: {ropa.price}€ </p>
            <p className="ropa__categoria"> Categoria: {ropa.category} </p>
            <img src= {ropa.image} alt="imagen ropa"className="ropa__imagen" width={150} height={180} />     
                  
            </div>

        })}
        </div>
        
        </>
    )

}

export default StoreRopa; 