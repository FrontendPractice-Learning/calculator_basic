function handlerSubmit(event) {
    event.preventDefault()

    const chosenOption = document.querySelector('input[name = "chosen-option"]:checked')
    console.log(chosenOption)
    

    const inputSum = event.target[2]
    const inputSubt = event.target[3]
    const inputMultp = event.target[4]
    const inputDiv = event.target[5]
    const result = event.target[6]
    const buttonClear = event.target[8]


    const val1 = parseFloat(event.target[0].value)
    const val2 = parseFloat(event.target[1].value)

    
    if(chosenOption == inputSum) {

        const sum = () => {  
            return val1 + val2
        }
        
        result.value = sum()
        

    }else if (chosenOption == inputSubt){

        const subt = () => {
            return val1 - val2
        }

        result.value = subt()

    }else if (chosenOption == inputMultp){

        const multip = () => {
            return val1 * val2
        }

        result.value = multip()

    }else if (chosenOption == inputDiv){

        const divd = () => {
            return val1 / val2
        }

        result.value = divd()
        
    }


    function clearFields() {
        event.target[0].value = ''
        event.target[1].value = ''
        event.target[6].value = ''
        if(chosenOption){
            chosenOption.checked = false
        }
    }


    buttonClear.addEventListener('click', clearFields)

    
}
