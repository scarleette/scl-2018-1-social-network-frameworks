import React from 'react';
import {Carousel} from 'react-materialize';

const Carrusel = () => {
	return(
		<Carousel options={{ fullWidth: true }} images={[
			"https://sites.google.com/site/veterinarialasmascotas/_/rsrc/1453351446585/home/bienvenida.jpg",
			'https://zoovetesmipasion.com/wp-content/uploads/2017/04/veterinario.png',
			'https://lorempixel.com/800/400/food/4',
			'https://lorempixel.com/800/400/food/5'
		]} />
	)
};
    
export default Carrusel;