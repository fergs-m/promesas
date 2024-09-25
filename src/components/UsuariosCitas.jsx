import React from "react";
import { useState,useEffect } from "react";

function UsuariosCitas(){
    
    const [usuarios, setUsuarios] = useState(null);

    useEffect( () => {

        let controller = new AbortController()
        let options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal : controller.signal 
        }

        fetch('https://randomuser.me/api/', options)
        .then(res => res.json())
        .then(datos => setUsuarios(datos))
        .catch(err => console.log(err))
        .finally( () => controller.abort())
    },[])

    if (usuarios === null){
        return <h1> Cargando...</h1>
    }
    return (
     
        <div className="principal"> 

        <h1 className="tituloCitas"> Tu futura pareja te esta esperando :) </h1>

        {usuarios.results.map( (usuario) => {  

            return <div key = {usuario.name}   className="usuario">

                <img src= {usuario.picture.large} alt="perfil" className="usuario__img"/>
                <h2 className="usuario__nombre"> Nombre: {usuario.name.first} {usuario.name.last} </h2>
                <p className="usuario__texto"> Sexo: {usuario.gender} </p>
                <p className="usuario__texto"> Edad: {usuario.dob.age} </p>
                <p className="usuario__texto"> Ciudad: {usuario.location.city} </p>


            </div>

           
        })}  
            
            
       
        </div>
    
    )
}

export default UsuariosCitas; 