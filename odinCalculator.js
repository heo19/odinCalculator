let actualValue = "";
let isOperatorPossible = false;

function buttonClicked(element){
    var elementId = element.id;
    console.log("button clicked! " + elementId);
    if(elementId == "clear"){
        actualValue = "";
        isOperatorPossible = false;
    } else if(elementId == "ans" && isOperatorPossible) {
        calculateValue();
        isOperatorPossible = true;
    } else if(isNaN(Number(elementId)) && isOperatorPossible){
        actualValue = actualValue + " " + elementId + " ";
        isOperatorPossible = false;
    } else if(!isNaN(Number(elementId))){
        actualValue += elementId;
        isOperatorPossible = true;
    } 

    console.log("actual: " + actualValue);
    var outputText = document.getElementById("outputText");
    outputText.innerHTML = actualValue;
}

function calculateValue(){
    var valueArray = actualValue.split(" ");
    var calculatedValue = 0;
    var previousOperator = "+";

    for(var i = 0; i < valueArray.length; i++){
        if(i % 2 == 0){
            console.log("current calculatedValue: " + calculatedValue);
            var currentNumber = Number(valueArray[i]);
            calculatedValue = calculate(calculatedValue, currentNumber, previousOperator);
        } else {
            previousOperator = valueArray[i];
        }
    }

    actualValue = calculatedValue.toString();
    console.log("actualValue: " + actualValue);
    console.log("calculatedValue: " + calculatedValue);
}

function calculate(oldNumber, newNumber, operator) {
    var answer = 0;

    if(operator == "+"){
        answer =  oldNumber + newNumber;
    } else if(operator == "-") {
        answer =  oldNumber - newNumber;
    } else if(operator == "X") {
        answer =  oldNumber * newNumber;
    } else {
        answer =  oldNumber / newNumber;
    }
    console.log("return Number: " + answer)

    return answer;
}