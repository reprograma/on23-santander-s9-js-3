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
  const container = document.getElementById ('demo')
  

  function preencherPagina(series) {
    series.map((serie) => {
      const card = document.createElement("section")
      card.classList.add('cards');
      container.appendChild(card);

      const cover = document.createElement("img")
      cover.classList.add("covers")
      cover.setAttribute('src',serie.imagem)
      card.appendChild(cover)

      const title = document.createElement("h2")
      title.classList.add('title')
      title.innerText = serie.titulo
      card.appendChild(title)

      const year = document.createElement("p")
      year.classList.add('contents')
      year.innerHTML = `Ano: <span class="dynamic-text">${serie.ano}</span>`
      card.appendChild(year)

      const director = document.createElement("p")
      director.classList.add('contents')
      director.innerHTML = `Direção: <span class="dynamic-text">${serie.diretor}</span>`
      card.appendChild(director)

      const gender = document.createElement("p")
      gender.classList.add("contents")
      gender.innerHTML = `Gêneros: <span class="dynamic-text">${serie.generos.join(' - ')}</span>`
      card.appendChild(gender)

      const cast = document.createElement("p")
      cast.classList.add("contents")
      cast.innerHTML = `Elenco: <span class="dynamic-text">${serie.elenco.join(' - ')}</span>`
      card.appendChild(cast)

      const instagram = document.createElement("a")
      instagram.setAttribute('href', serie.instagram)
      card.appendChild(instagram)
      instagram.setAttribute('target','blank')
      instagram.innerHTML = '<i class="fab fa-instagram"></i>'
  
    })

  }

  preencherPagina(json)