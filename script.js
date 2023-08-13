/*  - functions():
    
        add,
    
        subtract,
    
        multiply,
    
        devide.
    
    - Create 3 variables: 
        
        oprand1, 
        
        operand2, 
        
        operator

    - Create operate():
        
        which  takes in 3 variables and one function from above.

    - Create 
        
        buttons 0-9, 
        
        function(), 
        
        equals key, 
        
        '.' button to unlock decimal for user,
        
        undo button,

        display - filled with temp dummy numbers,

        clear button.

    
    - Conditionals 
        
        calc cannot evaluate more than one operation at a time.

        round answers with long decimals.

        pressing = without inputs will cause problems.

        /0 = pls stop.
    
    */

const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');

const cmButton = document.querySelector('#cm');
const rmButton = document.querySelector('#rm');
const mminusButton = document.querySelector('#mminus');
const mplusButton = document.querySelector('#mplus');
const ceButton = document.querySelector('#ce');
const onButton = document.querySelector('#on');

const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const addButton = document.querySelector('#add');
const minusButton = document.querySelector('#minus');
const dotButton = document.querySelector('#dot');  
const equalButton = document.querySelector('#equal');
const sqrootButton = document.querySelector('#sqroot');
const percentButton = document.querySelector('#percent');

const displayScreen = document.querySelector('.screen');

const numericButtons = document.querySelectorAll('.numbtn');
const operatorButtons = document.querySelectorAll('.operator')


let global_string = '';
let operatorArray = [];
let operand1=[];
let operand2=[];
let result = [];

//operation function.
function operation(){
    let currentOperator = operatorArray.pop();
    switch (currentOperator){
        case '+':
            result = operand1+operand2;
            break;
        case '-':
            result = operand1-operand2;
            break;
        case '%':
            result = operand1%operand2;
            break;            
        case '÷':
            result = operand1/operand2;
            break;
        case '×':
            result = operand1*operand2;
            break;
    }
}




//user typing in digits.
const numberBtn = document.querySelectorAll('.numbtn');
numberBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        displayScreen.textContent+=button.textContent;
        global_string+=button.textContent; //global string has the digits
        console.log(global_string,operand1,operand2,operatorArray);

    })
})
//user typing in operator
const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        if(operatorArray.length == 0){
            operatorArray.push(button.textContent);
            operand1 = parseInt(global_string);
            global_string = '';
            displayScreen.textContent += button.textContent;
            console.log(global_string,operand1,operand2,operatorArray);
        }
        else{
            operand2 = parseInt(global_string);
            operation();
            operand1=result;
            operand2 = [];
            global_string = ''
            operatorArray.push(button.textContent);
            displayScreen.textContent = result + button.textContent;
            console.log(global_string,operand1,operand2,operatorArray);
        }
    })
})

//equalto button functionality
equalButton.addEventListener('click',()=>{
    operand2 = parseInt(global_string);
    operation();
    global_string = result.toString();
    displayScreen.textContent = result;
})
