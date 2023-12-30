
import React from 'react';
import { Button } from '@mui/material';
import axios, { } from 'axios';
import data from './datos.json'
function AutoMain() {
    var estadoBoton = 1
    var eleccionActual=0
    const cargarCoches = async (evento)=>{
        eleccionActual=0
        console.log('cargar coche inicio')
        document.getElementById('vehiculos').innerHTML = ''
        try {
            //console.log("datos en response ",data);
            var i = 1;
            ordenar()
            const vehiculos = data.vehiculos;
            const divisionVehiculos = document.getElementById('vehiculos')
            vehiculos.forEach(coche => {
                //console.log('el contador va en: ',i)
                const tarjetaVehiculo = document.createElement('div');
                tarjetaVehiculo.classList.add('tarjeta-vehiculo');
                //console.log(coche.imagen)
                tarjetaVehiculo.innerHTML = 
                `
                    <p class="puertas">${coche.puertas} pasajeros</p>
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
    const solo2Pasajeros = async (evento)=>{
        eleccionActual=1
        document.getElementById('vehiculos').innerHTML = ''
        try {
            //console.log("datos en response ",data);
            var i = 1;
            ordenar()
            const vehiculos = data.vehiculos;
            const divisionVehiculos = document.getElementById('vehiculos')
            vehiculos.forEach(coche => {
                if (coche.puertas == 2) {
                    const tarjetaVehiculo = document.createElement('div');
                    tarjetaVehiculo.classList.add('tarjeta-vehiculo');
                    //console.log(coche.imagen)
                    tarjetaVehiculo.innerHTML = 
                    `
                        <p class="puertas">${coche.puertas} pasajeros</p>
                        <img src="/src/assets/${coche.imagen}">
                        <p class="nombre">${coche.nombre}</p>
                        <p class="precio">$${coche.precio}</p>
                    `;  
                    divisionVehiculos.appendChild(tarjetaVehiculo);
                }
                //console.log('el contador va en: ',i)
                i++;
            });
            console.log("cargar coches finalizado")
        } catch (error) {
            console.error(error)
        } 
    }
    const solo4Pasajeros = async (evento)=>{
        eleccionActual=2
        document.getElementById('vehiculos').innerHTML = ''
        try {
            //console.log("datos en response ",data);
            var i = 1;
            ordenar()
            const vehiculos = data.vehiculos;
            const divisionVehiculos = document.getElementById('vehiculos')
            vehiculos.forEach(coche => {
                if (coche.puertas == 4) {
                    const tarjetaVehiculo = document.createElement('div');
                    tarjetaVehiculo.classList.add('tarjeta-vehiculo');
                    //console.log(coche.imagen)
                    tarjetaVehiculo.innerHTML = 
                    `
                        <p class="puertas">${coche.puertas} pasajeros</p>
                        <img src="/src/assets/${coche.imagen}">
                        <p class="nombre">${coche.nombre}</p>
                        <p class="precio">$${coche.precio}</p>
                    `;  
                    divisionVehiculos.appendChild(tarjetaVehiculo);
                }
                //console.log('el contador va en: ',i)
                i++;
            });
            console.log("cargar coches finalizado")
        } catch (error) {
            console.error(error)
        } 
    }
    const soloTodoterreno = async (evento)=>{
        eleccionActual=3
        document.getElementById('vehiculos').innerHTML = ''
        try {
            //console.log("datos en response ",data);
            var i = 1;
            ordenar()
            const vehiculos = data.vehiculos;
            const divisionVehiculos = document.getElementById('vehiculos')
            vehiculos.forEach(coche => {
                if (coche.clase == 'Todoterreno') {
                    const tarjetaVehiculo = document.createElement('div');
                    tarjetaVehiculo.classList.add('tarjeta-vehiculo');
                    //console.log(coche.imagen)
                    tarjetaVehiculo.innerHTML = 
                    `
                        <p class="puertas">${coche.puertas} pasajeros</p>
                        <img src="/src/assets/${coche.imagen}">
                        <p class="nombre">${coche.nombre}</p>
                        <p class="precio">$${coche.precio}</p>
                    `;  
                    divisionVehiculos.appendChild(tarjetaVehiculo);
                }
                //console.log('el contador va en: ',i)
                i++;
            });
            console.log("cargar coches finalizado")
        } catch (error) {
            console.error(error)
        } 
    }
    const soloDeLujo = async (evento)=>{
        eleccionActual=4
        document.getElementById('vehiculos').innerHTML = ''
        try {
            //console.log("datos en response ",data);
            var i = 1;
            ordenar()
            const vehiculos = data.vehiculos;
            const divisionVehiculos = document.getElementById('vehiculos')
            vehiculos.forEach(coche => {
                if (coche.clase == 'De Lujo') {
                    const tarjetaVehiculo = document.createElement('div');
                    tarjetaVehiculo.classList.add('tarjeta-vehiculo');
                    //console.log(coche.imagen)
                    tarjetaVehiculo.innerHTML = 
                    `
                        <p class="puertas">${coche.puertas} pasajeros</p>
                        <img src="/src/assets/${coche.imagen}">
                        <p class="nombre">${coche.nombre}</p>
                        <p class="precio">$${coche.precio}</p>
                    `;  
                    divisionVehiculos.appendChild(tarjetaVehiculo);
                }
                //console.log('el contador va en: ',i)
                i++;
            });
            console.log("cargar coches finalizado")
        } catch (error) {
            console.error(error)
        } 
    }
    const ordenar = async ()=>{
        if (estadoBoton == 1) {
            data.vehiculos.sort((a,b)=>parseFloat(b.precio)-parseFloat(a.precio));
            console.log('Ordenamiento de mayor a menor')   
        }else{
            data.vehiculos.sort((a,b)=>parseFloat(a.precio)-parseFloat(b.precio));
            console.log('Ordenamiento de menor a mayor')
        }      
    }
    const cambiarEstadoOrdenar = async (evento)=>{
        const imagen = document.getElementById('imagenSwitch')
        if (estadoBoton == 1) {
            imagen.src = '/src/assets/arrowDown.png'
        }else{
            imagen.src = '/src/assets/arrowUp.png'
        }
        estadoBoton= estadoBoton * -1
        console.log(estadoBoton)
        
        
        switch (eleccionActual) {
            case 0:
                cargarCoches()
                break;
            case 1:
                solo2Pasajeros()
                break;
            case 2:
                solo4Pasajeros()
                break;
            case 3:
                soloTodoterreno()
                break;
            case 4:
                soloDeLujo()
                break;
            default:
                console.log('valor fuera del alcance')
                break;
        }
    }
    return(
    <>
        <div onLoad={cargarCoches}>
            <div className="top"></div>
            <h1><img src="/src/banner.png" alt="Southernsanandreassuperautos.com" class='banner' onClick={cargarCoches}/></h1>
            <div className='barraMenu'>
                <button type="button" onClick={solo2Pasajeros} className='botonesBarra' id='2pasajeros'>2 pasajeros</button>
                <button type="button" onClick={solo4Pasajeros} className='botonesBarra' id='4pasajeros'>4 pasajeros</button>
                <button type="button" onClick={soloTodoterreno} className='botonesBarra' id='todoterreno'>Todoterreno</button>
                <button type="button" onClick={soloDeLujo} className='botonesBarra' id='lujo'>De lujo</button>
                <button type="button" onClick={cambiarEstadoOrdenar} className='botonOrdenar' id='ordenarPor'>
                    <div className='botonAscDes'>
                        <span className='textoBoton'>Ordenar por Precio</span>
                        <img src='/src/assets/arrowUp.png' id='imagenSwitch'></img>
                    </div>
                </button>
            </div>
            <div id="vehiculos"></div>
            
        </div>
    </>
    )
    
}

export default AutoMain