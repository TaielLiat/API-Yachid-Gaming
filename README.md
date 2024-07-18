                                             README Yachid Gaming 

### INICIALIZACIÓN DE LA API
Inicialmente la terminal debe estar situada en la carpeta "back"
Para inicializar el servidor utilizar estos comandos:
- node index.js       (ejecuta un servidor temporal desde el archivo que lo crea)
- npm run start       (hace lo mismo que el anterior, pero el código pasa a ser "user friendly")
- npm run dev         (ejecuta un servidor que se reinicia automáticamente, es más eficiente)

Para comprobar el paso de datos desde el Vstudio: ingresar a la carpeta Requests, al archivo get-post.rest y utilizar las opciones existentes o modificar las mismas. Por favor, si utilizan el Delete no hagan un commit. 


### LINKS DE LA API --SIN FRONT--
http://localhost:8000/juegos  
- Acá podrá visualizar todo el catálogo de videojuegos

http://localhost:8000/juegos/{id} 
- Acá podrá visualizar los datos de solamente un juego dependiendo de la id elegida. El formato de la id es /juegos/1 (actualmente existiendo del 1 al 14)

http://localhost:8000/juegos?nombre={texto} 
- Acá podrá visualizar los diferentes juegos en base al contenido de sus titulos. 

GET http://localhost:8000/juegos?generos={genero} 
- Acá podrá visualizar los diferentes juegos en base a sus generos/categorias

http://localhost:8000/juegos?buscar={texto} 
- Una opcion mucho más genérica donde se podrá buscar una palabra, frase o número cualquiera en la totalidad de datos de cada título, pudiendo encontrar datos de id, nombre, precio, descripción, géneros, etcétera.

http://localhost:8000/juegos?busquedas={texto},{texto},{texto} 
- Una opción símil a la anterior, más permitirá hacer múltiples búsquedas en un solo resultado. Los datos entre sí no son condicionales, es decir, los diferentes datos adjuntados en el link no tienen que estar en un mismo objeto sino que aparecerán opciones que tengan cada dato por separado.


-------------------------------------------------------------
Al querer visualizar los datos directamente en nuestro HOST, se verán todos de seguido. Para verlo ordenado, puede instalarse esta extensión de google llamada "JSON Formatter" 
https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related

### INICIALIZACIÓN DEL FRONT DE LA API
Para inicializar el front se deberá clickear en "index.html" y seleccionar "Open with Live Server". 
Al realizar modificaciones en la API, para que éstas aparezcan en el front, se deberá reiniciar la página (al utilizar Live Server con hacer un guardado en el documento de visual la página también se actualizará automáticamente)



### ERROR DE MÓDULO EN NUEVO DISPOSITIVO
   Si la carpeta de API-Yachid-Gaming se encuentra dentro de API ING. DE SOFTWARE, al escribir "node index" tirará un error de módulo. Para resolver ésto, deberán moverse como en una terminal de Linux escribiendo 'cd API-Yachid-Gaming' (change directory), y si quieren verificar estar en el lugar correcto, escriben 'ls', lo que mostrará el contenido del directorio actual. Una vez en el directorio correcto, ejecutar nuevamente el comando.

### CREACIÓN DE SCRIPTS Y ERROR 'START'
    Para utilizar un Script en consola se debe ingresar al archivo package.json, dirigirse a la sección de "scripts" y formatear un nuevo shortcut de comando. Ésto se utiliza para simplificar un código de terminal, por ejemplo, dando la opción de, en vez de escribir "node index", escribir simplemente "start".
     
    Respecto a ésto, inicialmente el comando Start funcionaba, más ahora pide un FilePath al ingresarlo y no sé cómo solucionarlo. Si ven este texto, fíjense si pueden solucionarlo. De todas maneras pueden utilizarse los códigos adjuntados al inicio del documento sin problema.

### NO APARECE EL LIVE SERVER
   Si no aparece la opción de Open with Live Server, deberán dirigirse a la sección izquierda del Visual Studio Code, a la última opción llamada "Extensiones", y buscar "Live Server":
   Name: Live Server - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer



### MODIFICACIONES AÚN PENDIENTES
- La sección de "Juegos" deberá enviar al usuario a un HUD de "modificar juego" similar al de "nuevo juego" con los datos autocompletados
- La sección de "nuevo juego" deberá enviar los datos adjuntados al front como un POST.
- El formulario está mal formateado en CSS. Puedo arreglarlo, pero no es indispensable ahora mismo.
- Crear la sección de "Ayuda y Soporte", no se me ocurre qué poner más que un tutorial o una solicitud básica de contacto.
