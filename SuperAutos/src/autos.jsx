
import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios, { } from 'axios';
import data from './datos.json'
function AutoMain() {
    var estadoBoton = 1
    var eleccionActual=0
    //let data
    const [Cargando, setCargando] = useState(false) 
    /* const cargarDatos = async (evento) =>{
        evento.preventDefault()
        await axios.get('https//localhost:4567/vehiculos/')
        .then(function(res){
            console.log("datos en response", res.data);
            setCargando(false)
            data=res.data
            return (res.data);
        })
        .catch(function (error) {
            console.error(error);
            setCargando(false);
        })
    } */
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
            console.log("cargar coches 2 pasajeros finalizado")
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
            console.log("cargar coches 4 pasajeros finalizado")
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
            console.log("cargar coches todoterreno finalizado")
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
            console.log("cargar coches de lujo finalizado")
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
        
        //console.log(estadoBoton)
        console.log(eleccionActual)
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
                //console.log(eleccionActual)
                break;
            default:
                console.log('valor fuera del alcance')
                break;
        }
    }
            
    const presionarEnter = async(e)=>{
        var keycode = (e.keyCode ? e.keyCode : e.which);
        
        if (keycode == '13')
            document.activeElement.click();
        
    }

    return(
    <>
        <div>
            <div className="top" ></div>
            <h1 onLoad={cargarCoches}><img id='bann' src="/src/banner.png" alt="Southernsanandreassuperautos.com" className='banner' draggable = 'false' tabIndex={0} onClick={cargarCoches} onKeyUp={presionarEnter}/></h1>
            <div className='barraMenu'>
                <button type="button" onClick={cambiarEstadoOrdenar} className='botonOrdenar' id='ordenarPor' tabIndex={0}>
                    <div className='botonAscDes'>
                        <span className='textoBoton'>Ordenar por Precio</span>
                        <img src='/src/assets/arrowUp.png' id='imagenSwitch'></img>
                    </div>
                </button>
                <button type="button" onClick={solo2Pasajeros} className='botonesBarra' id='2pasajeros' tabIndex={0}>2 pasajeros</button>
                <button type="button" onClick={solo4Pasajeros} className='botonesBarra' id='4pasajeros' tabIndex={0}>4 pasajeros</button>
                <button type="button" onClick={soloTodoterreno} className='botonesBarra' id='todoterreno' tabIndex={0}>Todoterreno</button>
                <button type="button" onClick={soloDeLujo} className='botonesBarra' id='lujo' tabIndex={0}>De lujo</button>
                
            </div>
            <div id="vehiculos"></div>
            
        </div>
    </>
    )
    
}

export default AutoMain