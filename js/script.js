const json = [
    
        {
          "imagem": "./images/7.png",
          "titulo": "Conservatório Estadual de Música Lobo Mesquita",
          "descrição": "Localizado em Diamantina, no Vale do Jequitinhonha",
          "site": "https://www.cemlobodemesquita.com.br/",
          "instagram": "https://instagram.com/conservatoriolobodemesquita?igshid=MzRlODBiNWFlZA=="
        },
        {
          "imagem": "./images/3.png",
          "titulo": "Conservatório Padre José Maria Xavier",
          "descrição": "Localizado em em São João Del-Rei, no Campo das Vertentes",
          "site": "https://www.conservatoriosjdr.com.br/",
          "instagram": "https://instagram.com/conservatoriosjdr?igshid=MzRlODBiNWFlZA=="
        },
        {
          "imagem": "./images/4.png",
          "titulo": "Conservatório de Música, Professor Theolindo J. Soares",
          "descrição": "Localizado em Visconde do Rio Banco, na Zona da Mata",
          "site": "http://conservatoriovrb.com.br/",
          "instagram":""
         
        },
        {
          "imagem": "./images/10.png",
          "titulo": "Conservatório Estadual De Música Juscelino Kubitschek de Oliveira",
          "descrição": "Localizado em Pouso Alegre, no Sul de Minas",
          "site": "https://www.cemjko.com.br/",
          "instagram": "https://instagram.com/conservatorio_jko?igshid=MzRlODBiNWFlZA=="
        },
        {
          "imagem": "./images/11.png",
          "titulo": "Conservatório Estadual de Música Haydée França Americano",
          "descrição": "Localizado em Juiz de Fora, na Zona da Mata",
          "site": "https://cemhfa.com.br/",
          "instagram":""
          
        },
        {
        "imagem": "./images/8.png",
        "titulo": "Conservatório Estadual de Música Lia Salgado",
        "descrição": "Localizado em Leopoldina, na Zona da Mata",
        "site": "https://cemliasalgado.com.br/",
        "instagram":""
      
      },
      {
        "imagem": "./images/5.png",
        "titulo": "Conservatório Estadual de Música Lorenzo Fernandez",
        "descrição": "Localizado em Montes Claros, no Norte de Minas Gerais",
        "site": "https://www.lorenzofernandez.com.br/",
        "instagram": "https://instagram.com/conservatoriolorenzofernandez?igshid=MzRlODBiNWFlZA=="
      },
      {
        "imagem": "./images/9.png",
        "titulo": "Conservatório Estadual de Música Dr. José Zóccoli de Andrade",
        "descrição": "Localizado em Ituiutaba, no Triângulo Mineiro",
        "site": "https://conservatorioituiutaba.com.br/",
        "instagram": "https://instagram.com/cemitba?igshid=MzRlODBiNWFlZA=="
      },
      {
        "imagem": "./images/1.png",
        "titulo": "Conservatório Estadual de Música Renato Frateschi",
        "descrição": "Localizado em Uberaba, no Triângulo Mineiro",
        "site": "http://www.conservatoriofrateschi.com.br/",
        "instagram": "https://instagram.com/conservatorio.frateschi?igshid=MzRlODBiNWFlZA==/"
      },
      {
        "imagem": "./images/12.png",
        "titulo": "Conservatório Estadual de Música Cora Pavan Capparelli",
        "descrição": "Localizado  Uberlândia, no Triângulo Mineiro ",
        "site": "https://conservatoriouberlandia.com.br/",
        "instagram":""
        
      },
      {
        "imagem": "./images/6.png",
        "titulo":  "Conservatório Estadual de Música Maestro Marciliano Braga",
        "descrição": "Localizado Varginha, no Sul de Minas",
        "site": "https://cemva.com.br/contato",
        "instagram":""
        
      },
      
      {
        "imagem": "./images/2.png",
        "titulo": "Conservatório Estadual de Música e Artes Raul Belém",
        "descrição": "Localizado em Araguari, no Triângulo Mineiro",
        "site": "https://www.mg.gov.br/instituicao_unidade/conservatorio-estadual-musica-e-centro-interescolar-artes-raul-belem",
        "instagram": "https://instagram.com/conservatorioaraguari?igshid=MzRlODBiNWFlZA=="
      }
      
      ]
      

  

  


const titulo = document.createElement('h1')
titulo.innerHTML = `Escolas de Músicas Gratuitas`
document.body.appendChild(titulo)

const container = document.getElementById('demo')

function fillPage(series) {
  series.filter((serie) => {
    const card = document.createElement('div')
    card.classList.add('cards')
    container.appendChild(card)
    
    const cover = document.createElement('img')
    cover.classList.add('covers')
    cover.setAttribute('src', serie.imagem)
    card.appendChild(cover)
const title = document.createElement('h2')
    title.classList.add('titles')
    title.innerText = serie.titulo
    card.appendChild(title)

const descricao = document.createElement('p')
    descricao.classList.add('contents')
    descricao.innerHTML = ` <span class='dynamic-text'>${serie.descrição}</span>`
    card.appendChild(descricao)

const instagram = document.createElement('a')
    instagram.setAttribute('href', serie.instagram)
    instagram.setAttribute('target', '_blank')
    instagram.innerHTML = "Conheça nosso projeto"
    card.appendChild(instagram)

    const site = document.createElement('a')
    site.setAttribute('href', serie.site)
    site.setAttribute('target', '_blank')
    site.innerHTML = 'Conheça nosso site'
    card.appendChild(site)

  
  })
}
fillPage(json)