// CTRL+Alt+N para correr codigo en consola

// console.log(5);

var counter = 0;

let countElem = document.getElementById('countElem');
let savedNumsElem = document.getElementById('saved-nums');
let errorElem = document.getElementById('error-el');
let errorTeamElem = document.getElementById('error-team-el');

function increment() {
    console.log('the button was clicked');
    counter++;
    countElem.innerText = counter;
}

function save() {
    console.log(countElem.innerText);
    if(countElem.innerText == 0 || savedNumsElem.innerText.includes(countElem.innerText)){
        error(countElem.innerText);
    }else{
        savedNumsElem.innerText += countElem.innerText + ',';
        errorElem.innerText = null;
    }
}

function error(n) {
    if(isFinite(n)) 
    {
        if(n == 0) 
        {
            errorElem.innerText = "Can't save zeros" 
        }  
        else if(n == -1) 
        {
            errorTeamElem.innerText = "No value"
        }
        else
        {
            errorElem.innerText = n+" already saved"
        }
    }
    else
    {
        // console.log("Llego hasta aca?")
        errorTeamElem.innerText + n+ "already saved"
    }
}