import React from "react";
import '../HojasDeStylo/Testimonio.css';

function Testimonio(props) {
    return ( <
        div className = "contenedorTestimonio" >
        <
        img className = "imagenTestimonio"
        src = { require(`../imagenes/IMG-${props.imagen}.jpg`) }
        alt = "fotoDeXimena" / >
        <
        div className = "contenedorTextoTestimonio" >
        <
        p className = "NombreTestimonio" >
        <
        strong > { props.nombre } < /strong>  <strong>{ props.pais }</strong > < /p>  <
        p className = "cargoTestimonio" > { props.cargo } < strong > { props.empresa } < /strong> </p >
        <
        p className = "TextoTestimonio" > { props.testimonio } < /p>  <
        /div > <
        /div>
    );
}
export default Testimonio;