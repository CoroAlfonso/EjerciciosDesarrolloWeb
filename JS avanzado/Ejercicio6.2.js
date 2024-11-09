
window.onload = function () {

    // Numero de enlaces de la pagina
    let enlaces = document.querySelectorAll('a')
    console.log(enlaces)

    // Direccion del penultimo enlace
    let direccionPenultimoEnlace = enlaces[5].href
    console.log(direccionPenultimoEnlace)

    // Numero de enlaces que apuntan a http://prueba
    let cantidadEnlaces = 0;
    for (let enlace of enlaces) {
        if (enlace.href === 'http://prueba/') {
            cantidadEnlaces++;
        }
    }
    console.log('Numero de enlaces que apuntan a http://prueba/ = ' + cantidadEnlaces)

    // Numero de enlaces del tercer párrafo
    let cantidadEnlacesTercerParrafo = 0;
    const tercerParrafo = document.querySelectorAll('p')[2]
    const numeroEnlaces = tercerParrafo.querySelectorAll('a')
    console.log(numeroEnlaces)
}