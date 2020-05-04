import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {

  //Creamos State principal para guardar los datos y enviarlos a la API
  const [datosbusqueda, setDatosbusqueda] = useState({
        ciudad:'',
        pais:''
    });

  //State para controlar la consulta
  const [consultar, setConsultar] = useState(false);

  //State para cuardar resultado de la api
  const [resultapi, setResultapi] = useState({});

  //State de error de resultados (no hay resultados)
  const [error, setError] = useState(false);

  //Destruc para obtener los valores del state
  const { ciudad, pais } = datosbusqueda;

  //Creamos accion para que cuando cambie la ciudad o pais la ejecute
  useEffect(() => {

    //Creamos funcion para consultar a la API
    const consultarApi = async () => {

        if (consultar) {

          const apiKey = 'f5bf64aa24973ed55ee26934c359ab43';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          if (resultado.cod === '404') {
            setError(true);
            setConsultar(false);
          } else {
          //Guardando resultados en state
          setResultapi(resultado);
          //Cambiando condicional de state de consulta
          setConsultar(false);
          //Ocultamos error
          setError(false);
          }

        }

    }

    //Ejecutamos la consulta 
    consultarApi()
    //Eliminando mensajes por dependencias requeridas por la funcion pero no por la funcionalidad
    //eslint-disable-next-line
  }, [consultar])

  //Condicional de componente de clia o error 
  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados disponibles" />
  } else {
    componente = <Clima resultapi={resultapi} />
  }


  return (
    <Fragment>
        <Header 
          titulo="Clima React App"
        />

        <div className="contenedor-form">
          <div className="conatiner">
            <div className="row">
              <div className="col m6 s12">
                <Formulario 
                  datosbusqueda={datosbusqueda}
                  setDatosbusqueda={setDatosbusqueda}
                  setConsultar={setConsultar}
                />
              </div>
              <div className="col m6 s12">
                {componente}
              </div>
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;
