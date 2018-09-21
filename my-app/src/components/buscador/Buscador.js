import React from 'react';
import Navbar from '../Common/Navbar';
import Carrusel from '../Common/Carrusel';
import Informacion from '../Common/Informacion';


const Buscador = () => {
        return(
            <div>
                <div className = "Navbar">
                <Navbar/>
                </div>
                <div className = "Carrusel">
                <Carrusel/>
                </div>
                <div className ="Informacion">
                <Informacion/>
                </div>
               
            </div>
        );
    }




export default Buscador