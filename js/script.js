const elForm = document.querySelector("#form")
const elInput = elForm.querySelector("#input")
const elSelect = elForm.querySelector("#select")
const elResolt = elForm.querySelector("#resolt")


const rub = 135.00;
const usd = 11150.00;
const eur = 11700.00;


elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    // elResolt.textContent = elSelect.value;
    
        if(elSelect.value === "usd"){
            elResolt.textContent = (elInput.value / usd).
            toFixed(2) + '$';
        }
        else if(elSelect.value === "rub"){
            elResolt.textContent = (elInput.value / rub).
            toFixed(2) + 'rub';
        }
        else if(elSelect.value === "eur"){
            elResolt.textContent = (elInput.value / eur).
            toFixed(2) + 'eur';
        }else{
            elResolt.textContent = "Xatolik yuz berdi";
        }
})



