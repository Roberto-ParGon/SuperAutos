
import React from 'react';
import axios, { } from 'axios';
import data from './datos.json'
function AutoMain() {
    const cargarCoches = async (evento)=>{
        
        console.log('cargar coche inicio')
        
        try {
            //console.log("datos en response ",data);
            var i = 1;
            const vehiculos = data.vehiculos;
            const divisionVehiculos = document.getElementById('vehiculos')
            vehiculos.forEach(coche => {
                //console.log('el contador va en: ',i)
                const tarjetaVehiculo = document.createElement('div');
                tarjetaVehiculo.classList.add('tarjeta-vehiculo');
                //console.log(coche.imagen)
                tarjetaVehiculo.innerHTML = 
                `
                    <p class="puertas">${coche.puertas}</p>
                    <img src="/src/assets/${coche.imagen}">
                    <p class="nombre">${coche.nombre}</p>
                    <p class="precio">$${coche.precio}</p>
                `;
                i++;
                divisionVehiculos.appendChild(tarjetaVehiculo);
            });
            console.log("cargar coches finalizado")
        } catch (error) {
            console.error(error)
        }
        
            
    
    }
    return(

    <>
        <div onLoad={cargarCoches}>
            <div className="top"></div>
            <h1><img src="/src/banner.png" alt="Southernsanandreassuperautos.com"/></h1>
            <div id="vehiculos"></div>
            
        </div>
    </>

    )
    
}

export default AutoMain