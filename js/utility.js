
function getInputValueById(elementId){
    const inputValue = document.getElementById(elementId).value ;
    const input = parseFloat(inputValue);
    return input;
}