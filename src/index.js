import css from './main.scss';
import Jquery from 'jquery'

let texte = "Hello"

setTimeout(() => {
    console.log("je teste pour vérifier que ma arrow function aura disparu au terme du processus de compilation de webpack." + texte);

    //alert('test');
    }, 500);
    
    document.querySelector('.header').innerHTML = 'Yahoo'
    Jquery(".header").html('jquery')
