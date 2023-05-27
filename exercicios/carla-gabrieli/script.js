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
    "imagem": "./images/Sense8.jpg",
    "titulo": "Sense8",
    "ano": "2015",
    "diretor": "Lilly e Lana Wachowski",
    "generos": ["Ficção científica dramática"],
    "elenco": ["Doona Bae", "Jamie Clayton", "Tina Desai"], 
    "instagram": "https://www.instagram.com/sense8/"
  },
  {
    "imagem": "./images/Orange Is The New Black.jpg",
    "titulo": "Orange Is The New Black",
    "ano": "2013",
    "diretor": "Jenji Kohan",
    "generos": ["Comédia dramática"],
    "elenco": ["Taylor Schilling", "Laura Prepon", "Michelle Hurst"], 
    "instagram": "https://www.instagram.com/oitnb/"
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

/* 
O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma array, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;
*/

const container = document.getElementById("demo")

function preencherPagina(series) {
  series.forEach((serie) => {
  const card = document.createElement("section")
  card.classList.add("cards")
  container.appendChild(card)
  
  const cover = document.createElement("img")
  cover.classList.add("covers")
  cover.setAttribute("src", serie.imagem)
  card.appendChild(cover)
  
  const title = document.createElement("h2")
  title.classList.add("titles")
  title.innerText = serie.titulo
  card.appendChild(title)
  
  const year = document.createElement("p")
  year.classList.add("contents")
  year.innerHTML = 'Ano: <span class=`dynamic-text`> ' + serie.ano + ' </span> '
  card.appendChild(year)
  
  const director = document.createElement("p")
  director.classList.add("contents")
  director.innerHTML = `Direção: <span class="dynamic-text">${serie.diretor}</span> `
  card.appendChild(director)
  
  const genders = document.createElement("p")
  genders.classList.add("contents")
  genders.innerHTML = `Gêneros: <span class="dynamic-text">${serie.generos.join(' - ')}</span> `
  card.appendChild(genders)
  
  const cast = document.createElement("p")
  cast.classList.add("contents")
  cast.innerHTML = `Elenco: <span class='dynamic-text'> ${serie.elenco.join(' - ')} </span> `
  card.appendChild(cast)
  
  const instagram = document.createElement("a")
  instagram.setAttribute("href", serie.instagram)
  instagram.setAttribute("target", "_blank")
  instagram.innerHTML = ' <i class=`fab fa-instagram`> </i> '
  card.appendChild(instagram)
  })
  }
  
  preencherPagina(json)