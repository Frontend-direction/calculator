const digits = document.querySelectorAll('.digits-and-operators');
digits.forEach(el =>el.addEventListener('click', pressDigitAndOperator));    

function pressDigitAndOperator (ev) {
    const display = document.querySelector('.calculator .disp');
    display.value += ev.target.innerText;
}

const result = document.querySelector('.calculator .result');
result.addEventListener('click', evaluate);

function evaluate() {
    const display = document.querySelector('.calculator .disp');
    display.value = eval(display.value); 
} 

const del = document.querySelector('.calculator .del');
del.addEventListener('click', deleteLastSymbol );

function deleteLastSymbol(){
    const display = document.querySelector('.calculator .disp');
    display.value = display.value.slice(0,-1);
}

const reset = document.querySelector('.calculator .reset');
reset.addEventListener('click', resDisp );

function resDisp(){
    const display = document.querySelector('.calculator .disp');
    display.value = '';
}

