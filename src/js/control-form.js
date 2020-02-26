let allRequireds = document.querySelectorAll("[required]")
        let btn = document.querySelector("button[disabled]")
        //console.log(allRequireds)
        let test = true

        allRequireds.forEach(required => {
            required.addEventListener("change", function() {
                //alert('test')
                // test des autres champs
                // impossible de faire un break sur foreach => for
               for (let i = 0; i < allRequireds.length; i++) {
                   let theField = allRequireds[i] //recuération d'un champ
                   
                    if ( theField.value == '') // si la valeur est vide
                    {
                        test = false
                        theField.classList.add('is-danger')
                        break //sortir de la boucle
                    }
                    else if (theField.type == 'email') { //si pas vide mais email
                        alert('email')
                        let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ //pattern
                        if (!expressionReguliere.test(theField.value)) { //si value différent du pattern
                            test = false
                            theField.classList.add('is-danger')
                            break //sortir boucle
                        }

                    }
                    else { //value ok
                        test = true
                        theField.classList.remove('is-danger')
                    }
                }

                if ( test == true) { 
                    btn.removeAttribute('disabled') //active le btn en retirant attriut desabled
                }
                else {
                    btn.setAttribute('disabled', true) // désactive le btn en ajoutant l'attribut desabled
                }
                //  console.log(test)
            })
        });