import React from 'react';
import Registro from '../registro/Registro';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Links = () => {

    return (
        <Router>
        <div>
            <Link to = "/">Registrate con Nosotros</Link>
            <Route path="/Registro" component={Registro}/>
            
        </div>
        </Router>
    )
}

export default Links;