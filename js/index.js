// Card 1


document.getElementById('btn-donate-1').addEventListener('click', function () {
    const inputValue = getInputValueById('input-donate-1');
    const cardBalance = getTextValueById('card-1-balance');
    const balance = getTextValueById('balance');

    // check value 
    if (isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }
    else if (balance < inputValue) {
        alert('Not Enough Balance');
        return;
    }
    // show modal 
    document.getElementById('my_modal_1').showModal();

    // Calculation 
    const newBalance = balance - inputValue;
    const newCardBalance = cardBalance + inputValue;

    setInnerTextById('balance', newBalance);
    setInnerTextById('card-1-balance', newCardBalance);

    document.getElementById('input-donate-1').value = '';

});
// card 2
document.getElementById('btn-donate-2').addEventListener('click', function () {
    const inputValue = getInputValueById('input-donate-2');
    const cardBalance = getTextValueById('card-2-balance');
    const balance = getTextValueById('balance');

    // check value 
    if (isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }
    else if (balance < inputValue) {
        alert('Not Enough Balance');
        return;
    }
    // show modal 
    document.getElementById('my_modal_1').showModal();

    // Calculation 
    const newBalance = balance - inputValue;
    const newCardBalance = cardBalance + inputValue;

    setInnerTextById('balance', newBalance);
    setInnerTextById('card-2-balance', newCardBalance);

    document.getElementById('input-donate-2').value = '';
});

// Card 3
document.getElementById('btn-donate-3').addEventListener('click', function () {
    const inputValue = getInputValueById('input-donate-3');
    const cardBalance = getTextValueById('card-3-balance');
    const balance = getTextValueById('balance');

    // check value 
    if (isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }
    else if (balance < inputValue) {
        alert('Not Enough Balance');
        return;
    }
    // show modal 
    document.getElementById('my_modal_1').showModal();

    // Calculation 
    const newBalance = balance - inputValue;
    const newCardBalance = cardBalance + inputValue;

    setInnerTextById('balance', newBalance);
    setInnerTextById('card-3-balance', newCardBalance);

    document.getElementById('input-donate-3').value = '';
});



