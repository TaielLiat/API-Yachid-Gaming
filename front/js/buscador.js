// SEARCH de juegos prototipo
//var xhttp = new XMLHttpRequest()
//xhttp.onreadystatechange = function() {
const juegosTemplate = document.querySelector("[datos-juego-template]")
const juegosContenedor = document.querySelector("[datos-juego-cartas-contenedor]")
const searchInput = document.querySelector("[busqueda-datos]")


fetch("http://localhost:8000/juegos")
    .then(res => res.json())
    .then(data => {
        games = data.map(game => {
            const carta = juegosTemplate.content.cloneNode(true).children[0]
            const id = carta.querySelector("[datos-id]")
            const nombre = carta.querySelector("[datos-nombre]")
            const precio = carta.querySelector("[datos-precio]")
            const generos = carta.querySelector("[datos-generos]")
            id.textContent = game.id
            nombre.textContent = game.nombre
            if (game.precio != "Free to Play") {
                precio.textContent = '$' + game.precio
            } else {
                precio.textContent = game.precio
            }
            generos.textContent = game.generos
            juegosContenedor.append(carta)
            return { id: game.id, nombre: game.nombre, precio: game.precio, generos: game.generos, element: carta }
        })
    })


let games = []

searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        games.forEach(game => {
            const visible =
                game.nombre.toLowerCase().includes(value)
            game.element.classList.toggle("hide", !visible)
        })
    })
    // Tira error al intentar meter mas de un criterio de busqueda, EJ: game.generos.toLowerCase().includes(value)