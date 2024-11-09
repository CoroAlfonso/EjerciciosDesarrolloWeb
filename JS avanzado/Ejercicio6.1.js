
window.onload = function (e) {

    //1
    document.getElementsByTagName('h2')[1].innerText = 'Texto cambiado!'

    //2
    document.getElementById('username')

    //3
    let colorChangeFirst = document.querySelectorAll('article .first')
    for (let item of colorChangeFirst) {
        item.style.color = 'red'
    }

    //4
    document.querySelectorAll('li .item')

    //5
    const allButtons = document.querySelectorAll('.buttons button')
    for (let button of allButtons) {
        button.style.color = 'blue'
    }

    //6
    const primerParrafo = document.querySelectorAll('p')[0]
    primerParrafo.style['background-color'] = 'pink'

    let firstArticle = document.querySelector('article')
    let node = document.createElement('p')
    node.innerText = 'Hola mundo añadiendo nodos desde el DOM'
    node.style.color = 'green'
    node.attributes.title = 'Parrafo de ejemplo'

    let aNode = document.createElement('a')
    aNode.innerText = 'Enlace de ejemplo'
    aNode.href = 'https://www.google.es'
    aNode.className = 'enlaces'
    node.appendChild(aNode)

    firstArticle.insertBefore(node, firstArticle.childNodes[2])
}