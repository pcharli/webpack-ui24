import css from './main.scss';
import Axios from 'axios'

//import Bulma from 'bulma'
import './js/alert'
import './js/control-form'
import './js/beers.js'



let texte = "Hello"

setTimeout(() => {
    console.log("je teste pour vérifier que ma arrow function aura disparu au terme du processus de compilation de webpack." + texte);

    //alert('test');
    }, 500);
    if (document.querySelector('.header')) {
        document.querySelector('.header').innerHTML = 'Yahoo'
        
    }
