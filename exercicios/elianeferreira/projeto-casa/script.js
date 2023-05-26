const json = [
  {
    "imagem": "./images/pose.jpg",
    "titulo": "Pose",
    "ano": "2018",
    "diretor": "Ryan Murphy",
    "generos": ["Drama"],
    "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
    "instagram": "https://www.instagram.com/poseonfx/"
  },
  {
    "imagem": "./images/manhas.jpg",
    "titulo": "Manhãs de Setembro",
    "ano": "2021",
    "diretor": "Luis Pinheiro",
    "generos": ["Drama"],
    "elenco": ["Liniker", "Linn da Quebrada"], 
    "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
  },
  {
    "imagem": "./images/euphoria.jpg",
    "titulo": "Euphoria",
    "ano": "2019",
    "diretor": "Sam Levinson",
    "generos": ["Drama"],
    "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
    "instagram": "https://www.instagram.com/euphoria/"
  },
  {
    "imagem": "./images/veneno.jpeg",
    "titulo": "Veneno",
    "ano": "2020",
    "diretor": "Javier Ambrossi",
    "generos": ["Drama", "Biografia"],
    "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
    "instagram": "https://www.instagram.com/venenolaserie/"
  },
  {
    "imagem": "./images/legendary.jpg",
    "titulo": "Legendary",
    "ano": "2020",
    "diretor": "Rik Reinholdtsen",
    "generos": ["Reality Show", "Competição"],
    "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
    "instagram": "https://www.instagram.com/legendarymax/"
  }
]

const container = document.getElementById('demo')

function preencherPagina(series) {
  series.forEach((serie) => {
    container.innerHTML += `
     <section class="cards">
      <img class="covers" src=${serie.imagem}>
      <h2 class="titles">${serie.titulo}</h2>
      <p class="contents">Ano: <span class="dynamic-text">${serie.ano}</span></p>
      <p class="contents">Direção: <span class="dynamic-text">${serie.diretor}</span></p>
      <p class="contents">Gêneros: <span class="dynamic-text">${serie.generos.join(' - ')}</span></p>
      <p class="contents">Elenco: <span class="dynamic-text">${serie.elenco.join(' - ')}</span></p>
      <a href=${serie.instagram} target=_blank><i class="fab fa-instagram"></i></a>
     </section>
    `
  })
}
 preencherPagina(json)

 
 //maneira mais detalhada de fazer  

//  function preencherPagina(series) {
//   //   series.forEach((serie) => {          * aqui pode ser usado o series.map
//   //     const card = document.createElement("section")
//   //     card.classList.add('cards')
//   //     container.appendChild(card)
  
//   //     const cover = document.createElement("img") // <img>
//   //     cover.classList.add("covers") // <img class="covers">
//   //     cover.setAttribute('src', serie.imagem) // <img class="covers" src="">
//   //     card.appendChild(cover)
  
//   //     const title = document.createElement("h2")
//   //     title.classList.add('titles')
//   //     title.innerText = serie.titulo
//   //     card.appendChild(title)
  
//   //     const year = document.createElement("p")
//   //     year.classList.add('contents')
//   //     year.innerHTML = 'Ano: <span class="dynamic-text">' + serie.ano + '</span>' 
//   //     // `Ano: <span class="dynamic-text">${serie.ano}</span>`
//   //     // "Ano: <span class="dynamic-text">2018</span>"
//   //     card.appendChild(year)
  
//   //     const director = document.createElement("p")
//   //     director.classList.add('contents')
//   //     director.innerHTML = `Direção: <span class="dynamic-text">${serie.diretor}</span>`
//   //     card.appendChild(director)
  
//   //     const genders = document.createElement("p")
//   //     genders.classList.add('contents')
//   //     genders.innerHTML = `Gêneros: <span class="dynamic-text">${serie.generos.join(' - ')}</span>`
//   //     card.appendChild(genders)
  
//   //     const cast = document.createElement("p")  
//   //     cast.classList.add('contents')
//   //     cast.innerHTML = `Elenco: <span class="dynamic-text">${serie.elenco.join(' - ')}</span>`  Aqui usamos a $ interpolação mas pode ser com concatenação + para unir strings
//   //     card.appendChild(cast)
  
//   //     const instagram = document.createElement("a") // <a></a>
//   //     instagram.setAttribute('href', serie.instagram) // <a href="http://"></a>
//   //     instagram.setAttribute('target', '_blank') // <a href="http:// target="_blank"></a>
//   //     instagram.innerHTML = '<i class="fab fa-instagram"></i>' // <a href="http:// target="_blank"><i class="fab fa-instagram"></i></a>
//   //     card.appendChild(instagram)
//   //   })
//   // }
  
//   preencherPagina(json)