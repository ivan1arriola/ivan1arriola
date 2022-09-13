import Lista from "../components/Lista";
import { useState, useEffect } from "react";
import AgregarEditar from "../components/AgregarEditar";

const VeroViajes = () =>{

    const [pasajeros, setPasajeros] = useState([]);

const getPasajeros = async()=>{
    let listaDePasajero = await fetch('https://sheetdb.io/api/v1/9m2uzzzijzwsp');
    listaDePasajero = await listaDePasajero.json();
    setPasajeros(listaDePasajero)

}
useEffect(() => { getPasajeros()}, []);


return(
    <>
    <AgregarEditar/>
    <h1>Lista de Viaje</h1>
    <Lista listaPasajeros={pasajeros}/>
    </>
    
)
}
export default VeroViajes;