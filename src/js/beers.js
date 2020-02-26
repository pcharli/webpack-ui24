import Axios from 'axios'
let urlApi = 'https://api.punkapi.com/v2/beers/'

let beersListUl = document.querySelector('ul.beers-list')

if (beersListUl) {
    Axios.get(urlApi)
    .then( response => {
        console.log(response.data.length)
        let arrayBeers = response.data

        arrayBeers.forEach(beer => {
             let template = `
                <li style="clear:left;">
                    <details class="list-item">
                        <summary>${beer.name}</summary>
                     <p><img src="${beer.image_url}" class="left" style="max-width: 100px; float: left;">${beer.description}</p>
                     </details>
                </li>
                `//end template
            beersListUl.innerHTML += template
        });//endforeach
       
    })
    .catch(function() {
        alert('erreur ajax')
    })
}