
function getInputValueById(elementId){
    const inputValue = document.getElementById(elementId).value ;
    const input = parseFloat(inputValue);
    return input;
};

function getTextValueById(elementId){
    const textValue = document.getElementById(elementId).innerText;
    const text = parseFloat(textValue);
    return text ;

}

function setInnerTextById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}