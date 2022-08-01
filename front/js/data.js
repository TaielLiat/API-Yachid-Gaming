var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { // INVOCA PRECIO
        const data = JSON.parse(this.responseText)
        console.log(data)
            //ID
        var idUL = document.createElement('ul')
        idUL.setAttribute('class', 'notes')
            //NOMBRE
        var nombreUL = document.createElement('ul')
        nombreUL.setAttribute('class', 'notes')
            //PRECIO
        var precioUL = document.createElement('ul')
        precioUL.setAttribute('class', 'notes')

        data.forEach(function(note) {
            //ID
            var idLI = document.createElement('li')
            idUL.appendChild(idLI)
            idLI.appendChild(document.createTextNode(note.id))
                //NOMBRE
            var nombreLI = document.createElement('li')
            nombreUL.appendChild(nombreLI)
            nombreLI.appendChild(document.createTextNode(note.nombre))
                //PRECIO
            var precioLI = document.createElement('li')
            precioUL.appendChild(precioLI)
            precioLI.appendChild(document.createTextNode(note.precio))
                //BOTON ED
            const buttonED = document.createElement('li');
            buttonED.innerText = 'Editar';
            document.getElementById('editar').appendChild(buttonED);
            //BOTON DEL
            const buttonDEL = document.createElement('li');
            buttonDEL.innerText = 'Eliminar';
            document.getElementById('eliminar').appendChild(buttonDEL);


            document.getElementById('id').appendChild(idUL)
            document.getElementById('nombre').appendChild(nombreUL)
            document.getElementById('precio').appendChild(precioUL)


        })
    }
}


xhttp.open('GET', 'http://localhost:8000/juegos', true)
xhttp.send()