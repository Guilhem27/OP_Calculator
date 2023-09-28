// maths functions:

// add
function add(a,b){
    return (a+b);
}
// substract 
function substract(a,b){
    return a-b;
}
// divide
function divide(a,b){
    return a/b;
}
// multiply
function multiply(a,b){
    return a*b;
}

const display=document.querySelector("#display");
const displayRes=document.querySelector("#displayRes");

function operate(firstNumber,operator,lastNumber){
    firstNumber=firstNumber.replace(',','.');
    lastNumber=lastNumber.replace(',','.');
    firstNumber=parseFloat(firstNumber);
    lastNumber=parseFloat(lastNumber);
    let result="";
    switch(operator){
        case "+" : 
            result=add(firstNumber,lastNumber);
            return result.toString().replace('.',',');
        break;
        case "-" : 
            result=substract(firstNumber,lastNumber);
            return result.toString().replace('.',',');
        break;
        case "/" : 
            result=divide(firstNumber,lastNumber);
            return result.toString().replace('.',',');
        break;
        case "x" : 
            result=multiply(firstNumber,lastNumber);
            return result.toString().replace('.',',');
        break;
    }
}


let displayArray={
    firstNumber: "0",
    operator:"",
    lastNumber:"",
    resultat:""
};

display.textContent="0";



const managers = document.querySelectorAll('.management');
managers.forEach((button) => {
  button.addEventListener('click', () => {
    displayArray=management(displayArray,button.id);
    display.textContent=`${displayArray.firstNumber} ${displayArray.operator} ${displayArray.lastNumber}`;
    displayRes.textContent=`${displayArray.resultat}`;
  });
});


function management(obj, id){
    switch (id){
        case "ac": return {
            firstNumber: "0",
            operator:"",
            lastNumber:"",
            resultat:""
        };
        break;
        case "suppr": 
            if (displayArray.resultat!=""){
                displayArray.resultat=displayArray.resultat.slice(0,length-1);
            }
            else{
                if (displayArray.lastNumber!=""){
                    displayArray.lastNumber=displayArray.lastNumber.slice(0,length-1);
                }
                else{
                    if (displayArray.operator!=""){
                        displayArray.operator="";
                    }
                    else{
                        if (displayArray.firstNumber!=""){
                            displayArray.firstNumber=displayArray.firstNumber.slice(0,length-1);
                        }
                    }
                }
            }
            return displayArray;
        break;
        case "exe":
            if (displayArray.operator=="/" && displayArray.lastNumber=="0"){
                display.resultat="Error";
            }
            else if(displayArray.firstNumber!="" && displayArray.operator!="" && displayArray.lastNumber!=""){
                displayArray.resultat=operate(displayArray.firstNumber,displayArray.operator,displayArray.lastNumber);
            }
            return displayArray;
        break;
    }
}

function point(str){
    if(str.search(",")==-1){
        return false;
    }
    else{
        return true;
    }
}


 
const digits = document.querySelectorAll('.digit');
digits.forEach((button) => {
  button.addEventListener('click', () => {
    displayArray=digit(displayArray,button.textContent);
    display.textContent=`${displayArray.firstNumber} ${displayArray.operator} ${displayArray.lastNumber}`;
    displayRes.textContent=`${displayArray.resultat}`;
    });
});


function digit(obj, text){
        if (displayArray.operator==""){
            if(text=="," && point(displayArray.firstNumber)==false){
                displayArray.firstNumber=displayArray.firstNumber+",";
            }
            else if(text!="," && displayArray.firstNumber!="0"){
                displayArray.firstNumber=displayArray.firstNumber+text;
            }
            else if(text!="," && displayArray.firstNumber=="0"){
                
                displayArray.firstNumber=text;
            }
        }
        else {
            if(text=="," && point(displayArray.lastNumber)==false){
                displayArray.lastNumber=displayArray.lastNumber+",";
            }
            else if(text!=","){
                displayArray.lastNumber=displayArray.lastNumber+text;
            }
        };
        return displayArray
    }



const operators = document.querySelectorAll('.operator');
operators.forEach((button) => {
  button.addEventListener('click', () => {
    displayArray=operatorInput(displayArray,button.textContent);
    display.textContent=`${displayArray.firstNumber} ${displayArray.operator} ${displayArray.lastNumber}`;
    displayRes.textContent=`${displayArray.resultat}`;
    });
});


function operatorInput(obj, text){
    if(displayArray.resultat!=""){
        return displayArray={
            firstNumber: displayArray.resultat,
            operator: text,
            lastNumber: "",
            resultat: displayArray.resultat
        };
    }
    else {
        displayArray.operator=text;
        return displayArray;
    }
}

