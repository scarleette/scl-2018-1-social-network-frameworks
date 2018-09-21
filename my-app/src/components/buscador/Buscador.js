import React from 'react';
import Navbar from '../Common/Navbar';
import Carrusel from '../Common/Carrusel';
import Informacion from '../Common/Informacion';

const Buscador = () =>{
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Carrusel/>
            </div>
            <div>
                <Informacion/>
            </div>
        </div>
    )
}


export default Buscador