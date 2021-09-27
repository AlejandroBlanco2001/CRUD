import { React, useState, useEffect } from "react";
import "../styles/Consultas.css";
import Axios from "axios";

const Padressinhijos = () => {
  const [listaPadres, setListaPadres] = useState([]);
  async function reload() {
    Axios.get("http://localhost:3004/padres")
      .then((response) => {
        console.log("RESPONSE FROM SERVER", response.data);
        setListaPadres(response.data);
      })
      .catch((err) => {
        console.log("ERROR ON GET PADRES ");
        console.error(err);
      });
  }
  useEffect(() => {
    reload();
  }, []);
  return (
    <div className='main2'>
      <h1>Padres sin hijos</h1>
      <ul>
        {listaPadres.map((file) => {
          return (
            <li>
              <div>
                    <span>Cedula</span>
                    <span>{file.cedula}</span>
                  </div>
                  <div>
                    <span>Primer Nombre</span>
                    <span>{file.primerNombre}</span>
                  </div>
                  <div>
                    <span>Segundo Nombre</span>
                    <span>{file.segundoNombre}</span>
                  </div>
                  <div>
                    <span>Apellido</span>
                    <span>{file.apellido}</span>
                  </div>
                  <div>
                    <span>Género</span>
                    <span>{file.genero}</span>
                  </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};



export default Padressinhijos;