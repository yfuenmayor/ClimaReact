
## Consulta de Clima API-React

Aplicacion para consultar el clima de diferentes ciudades de algunos paises, en la misma se refuerza lo aprendido en el proyecto anterior en cuanto a trabajar con APIS desde React

### `Librerias`

Materialize: cargada desde el index.html<br />
Enlace: [<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">]

### `APIS`

OpenWeather: pagina que nos ofrece el clima de los paises, hay que ser miembro para poder usarla ya que requieres de una ApiKey.<br />
Enlace: [https://home.openweathermap.org/] 
EndPoint Clima : [https://api.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=c11a5e2033f0f29d1b7944c7a5563668]

### `TIPS REACT`

Cuando usamos <strong>useEffect</strong> y nos de error por dependencias faltantes, tenemos que usar la siguiente linea tal cual un comentario antes del cierre del mismo:

            //eslint-disable-next-line

