import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';


class InformacionClinicas extends Component {
  render() {
    return (
      <div>
          <div>
          <ul id="tabs-swipe-demo" class="tabs">
            <li class="tab col s3"><a href="#test-swipe-1">ATENCION A DOMICILIO</a></li>   
            <li class="tab col s3"><a href="#test-swipe-2">ATENCION DIA</a></li>
            <li class="tab col s3"><a href="#test-swipe-3">ATENCION 24 HORAS</a></li>
          </ul>
          </div>
          <div className = "TarjetaClinica">
          <Collapsible>
            <CollapsibleItem header='Clínica Veterinaria La Rotonda' icon='local_hospital'>
            Clínica veterinaria La Rotonda fue la primera en funcionar en la comuna de La Florida, desde entonces está a cargo de los médicos veterinarios, Dres. Ramiro Soto Gómez y René Rojas Puebla. Titulados en la Universidad de Chile, quienes en el transcurso de este tiempo se han especializado en la atención y cuidado de sus animales de compañía,la clinica se ocupa de las enfermedades de los animales, de su investigación, diagnóstico, tratamiento y prevención de ellos cubriendo las siguientes áreas: Cirugía - Vacunaciones perros y gatos - Exóticos - Oftalmología - Odontología - Ecografía Radiología - Endoscopía - Laboratorio - Hospital - Tratamientos - Oxígeno terapia- Domicilios.
            </CollapsibleItem>
            <CollapsibleItem header='Ubicación' icon='place'>
            Vicuña Mackenna #8469, La Florida
            </CollapsibleItem>
            <CollapsibleItem header='Telefono' icon='phone'>
            (2)22814656 - (2)22812934
            </CollapsibleItem>
          </Collapsible>
        </div>
      </div>
    ) 
  }
}

export default InformacionClinicas;