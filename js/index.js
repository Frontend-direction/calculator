const digitsAndOperator = document.querySelectorAll('.digits-and-operators');
digitsAndOperator.forEach(el =>el.addEventListener('click', pressDigitAndOperator));    

function pressDigitAndOperator (ev) {
		const display = document.querySelector('.calculator .disp');
		display.value += ev.target.innerText;
}

const sqroot = document.querySelector('.calculator .sqroot');
sqroot.addEventListener('click', squareroot);

function squareroot() {
		const display = document.querySelector('.calculator .disp');
		display.value =  Math.sqrt(parseFloat(eval(display.value)));
}

const ln = document.querySelector('.calculator .ln');
ln.addEventListener('click', natLog);

function natLog() {
		const display = document.querySelector('.calculator .disp');
		display.value =  Math.log(parseFloat(eval(display.value)));
}

const exp = document.querySelector('.calculator .exp');
exp.addEventListener('click', expon);

function expon() {
		const display = document.querySelector('.calculator .disp');
		display.value =  Math.exp(parseFloat(eval(display.value)));
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

