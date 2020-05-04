import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultapi}) => {

    //Destruc para tomar los datos recibidos
    const { name, main} = resultapi;

    // Ejecutamos el componente si y solo si hay datos
    if (!name) return null;

    //Temperatura en kelvin adicional
    const kelvin = 273.15;
    //Llevandola a grados
    const temperatura = parseFloat(main.temp - kelvin,10).toFixed(2);
    const temperaturaMax = parseFloat(main.temp_max - kelvin,10).toFixed(2);
    const temperaturaMin = parseFloat(main.temp_min - kelvin,10).toFixed(2);

    return (
        <div className="col s12 card-panel white">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="Temperatura">
                    {temperatura}
                    <span>&#x2103;</span>
                </p>
                <p>Temperatura Maxima:
                    {temperaturaMax}
                    <span>&#x2103;</span>
                </p>
                <p>Temperatura Minima:
                    {temperaturaMin}
                    <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
};

Clima.propTypes = {
    resultapi: PropTypes.object.isRequired
};

export default Clima;