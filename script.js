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
        const operatorButtons = document.querySelectorAll('.btn .operator')
        
percentButton.value = '%';
addButton.value = '+';
sqrootButton.value ='**';
divideButton.value = '/';
multiplyButton.value = '*';

let currentOperator = 0;
let currenOperandOne = 0;
let currenOperandTwo = 0;

function numberClick(string){
    if(displayScreen.textContent == '0'){
        displayScreen.textContent = text;
    }
    else{
        displayScreen.textContent += string;
    }
    
}
function operatorClick(string){
    if(displayScreen.textContent === '0'){
        return
    }
    else{
        displayScreen.textContent += string;
    }
    

}
function on(){

}
function ce(){

}
function cm(){

}
function rm(){
    
}
function mminus(){

}
function mplus(){
    
}
function checkOperation(){                      //checks if operation is to be performed before next operation button click

}

numericButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        textContents = button.textContent;
        numberClick(textContents);
    });
});

operatorButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        textContents = button.value;
        numberClick(textContents);
    });
});

dotButton.addEventListener('click',()=>{
    textContent = dotButton.textContent;
    displayScreen.textContent+=textContent;
})


