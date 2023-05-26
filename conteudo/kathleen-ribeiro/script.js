const json = {
  "nome": "Liniker",
  "foto": "./images/liniker.webp",
  "generos": ["MPB", "Soul", "R&B", "Blues"],
  "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
  "instagram": "https://www.instagram.com/linikeroficial/"
}





const container = document.getElementsById('demo')
console.log(container)

function preencherPagina(series) {
  series.map((serie) => {
    const card = document.createElement("section")
    card.classList.add('cards')
    container.appendChild(card)
    
    const cover = document.createElement("img")
  })
}


preencherPagina(json)