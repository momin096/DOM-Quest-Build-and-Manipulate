// Card 1
document.getElementById('btn-donate-1').addEventListener('click', function(){
    const inputValue = getInputValueById('input-donate-1');
    // check value 
    if(isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }
    // show modal 
    document.getElementById('my_modal_1').showModal();
    
});
// card 2
document.getElementById('btn-donate-2').addEventListener('click', function(){
    const inputValue = getInputValueById('input-donate-2');
    if(isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }

    document.getElementById('my_modal_1').showModal();
});

// Card 3
document.getElementById('btn-donate-3').addEventListener('click', function(){
    const inputValue = getInputValueById('input-donate-3');
    if(isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }

    document.getElementById('my_modal_1').showModal();
})

// card 4

document.getElementById('btn-donate-4').addEventListener('click', function(){
    const inputValue = getInputValueById('input-donate-4');
    if(isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }

    document.getElementById('my_modal_1').showModal();
})

