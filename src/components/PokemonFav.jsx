import React from 'react'
import { useState, useEffect } from 'react'

function PokemonFav() {

    const [pokemones, setPokemones] = useState(null);

    useEffect(() => {

        let controller = new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        }
        fetch('https://pokeapi.co/api/v2/pokemon/7/', options)
            .then(res => res.json())
            .then(datos => setPokemones(datos))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }, [])

    if (pokemones === null) {
        return <p>Cargando</p>
    }

    return (
        <>

            <div className='pokemones'>


                <div className='pokemones__contenedor'>

                    <h2 className='pokemones__titulo'> El pokemon favorito de la semana es:  {pokemones.forms[0].name}  </h2>
                    <img src={pokemones.sprites.front_default} alt="imagen pokemon" className='pokemones__img' width={160} />
                    <p className='pokemones__mov'> Movimiento especial: {pokemones.moves[0].move.name} </p>


                </div>


            </div>







        </>
    )

}

export default PokemonFav