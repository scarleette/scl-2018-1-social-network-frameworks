import React, {Component} from 'react';
import {Carousel} from 'react-materialize';
// import './carrusel.css';

const Carrusel = () => {
	return(
		<Carousel options={{ fullWidth: true }} images={[
			// "https://www.losreplicantes.com/images/articulos/1000/1899/top.jpg",
			"http://static.t13.cl/images/sizes/1200x675/1516843807-99740205gettyimages-459467912.jpg",
			'https://lorempixel.com/800/400/food/3',
			'https://lorempixel.com/800/400/food/4',
			'https://lorempixel.com/800/400/food/5'
		]} />
	)
}
    
export default Carrusel;