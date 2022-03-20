const buttonNumbers = document.getElementsByName('data-number');
const buttonOpera = document.getElementsByName('data-opera');
const buttonDel = document.getElementsByName('data-del')[0];
const buttonDelAll = document.getElementsByName('data-delAll')[0];
const buttonEqual = document.getElementsByName('data-equal')[0];
const buttonPoint = document.getElementsByName('data-point')[0];
const buttonPar = document.getElementsByName('data-addPar');
var result = document.getElementById('result');
var opeAfter = '';
var opeBefore = '';
var opeNow = undefined;

buttonNumbers.forEach(function(btn){
    btn.addEventListener('click',function(){
        addNumber(btn.innerText);
    })
})

buttonOpera.forEach(function(btn){
    btn.addEventListener('click',function(){
        selectOperation(btn.innerText);
    })
})

buttonDel.addEventListener('click',function(){
    clearValue();
    
})

buttonDelAll.addEventListener('click',function(){
    clearDisplay();
    updateDisplay();
})

buttonEqual.addEventListener('click',function(){
    calculator();
    updateDisplay();
})

buttonPoint.addEventListener('click',function(){
    updateDisplay();
})

//parentesis
buttonPar.addEventListener('click', function(){
    openPar();
    closePar();
    updateDisplay();
})

function addNumber(num){
    opeAfter = opeAfter.toString() + num.toString();
    updateDisplay();
};

function clearDisplay(){
    opeAfter = '';
    opeBefore = '';
    opeNow = undefined;
}

function updateDisplay(){
    result.value = opeAfter;
}

function selectOperation(op){
    if(opeAfter == '') return;
    if(opeBefore !== ''){
        calculator();
    }
    operator = op.toString();
    opeBefore = opeAfter;
    opeAfter = '';
}

function calculator(){
    var calc;
    const before = parseFloat(opeBefore);
    const after = parseFloat(opeAfter);
    if(isNaN(before)||isNaN(after)) return;
    switch(operator){
        case '+':
            calc=before+after;
            break;
        case '-':
            calc=before-after;
            break;
        case 'x':
            calc=before*after;
            break;
        case '/':
            calc=before/after;
            break;
        case '%':
            calc=before%after;
            break;
        default:
            return;
    }
    opeAfter = calc;
    operator = undefined;
    opeBefore = '';
}