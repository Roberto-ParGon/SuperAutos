
import React from 'react';
import axios from 'axios';
function AutoMain() {
    const cargarCoches = async (evento)=>{
        console.log('cargar coche inicio')
        //evento.preventDefault()
        //await axios.get('http://localhost:4567/autos/')
        await fetch('data.json')
        .then(response => response.json())
        .then(respuesta =>{
        //.then(function (respuesta) {
            console.log("datos en response ",respuesta.data);
            var i = 1;
            const vehiculos = respuesta.data;
            const divisionVehiculos = document.getElementById('vehiculos')
            vehiculos.forEach(coche => {
                console.log('el contador va en: ',i)
                const tarjetaVehiculo = document.createElement('div');
                tarjetaVehiculo.classList.add('tarjeta-vehiculo');
                tarjetaVehiculo.innerHTML = 
                `
                    <p class="puertas">${coche.puertas}</p>
                    <img src="${coche.imagen}" alt="${coche.nombre}">
                    <p class="nombre">${coche.nombre}</p>
                    <p class="precio">$${coche.precio}</p>
                `;
                i++;
                divisionVehiculos.appendChild(tarjetaVehiculo);
            });
            
            return(respuesta.data);
            
        })
        .catch(function(error){
            console.log(error);
            
        });   
    }
    return(

    <>
        <body onMouseOver={cargarCoches}>
            <div className="top"></div>
            <h1><img src="banner.png" alt="Southernsanandreassuperautos.com"/></h1>
            <div id="vehiculos"></div>
            
        </body>
    </>

    )
    
}

export default AutoMain