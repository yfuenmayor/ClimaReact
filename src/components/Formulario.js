import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error'


const Formulario = ({datosbusqueda, setDatosbusqueda, setConsultar}) => {

    //Creamos el state del error de validacion
    const [error, setError] = useState(false);

    //Destruc para tomar los values del state
    const { ciudad, pais } = datosbusqueda;

    //Funcion para almacenar valores en el state
    const handleChange = e => {
        //Actualizamos los datos del state
        setDatosbusqueda({
            ...datosbusqueda,
            [e.target.name]: e.target.value
        })
    }

    //Funcion para el submit del form
    const handleSubmit = e => {
        e.preventDefault();

        //1.- Validacion de inputs
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        //Si pasa validacion ocultamos error
        setError(false);

        //2.- Activando consulta
        setConsultar(true)


    }
    
    

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error mensaje="Todos los campos son requeridos" /> : null }
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione el País --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar clima</button>
            </div>
        </form>
    );
};

Formulario.propTypes = {
    datosbusqueda: PropTypes.object.isRequired,
    setConsultar: PropTypes.func.isRequired,
    setDatosbusqueda: PropTypes.func.isRequired
};

export default Formulario;