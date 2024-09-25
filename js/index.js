// This is for cart-1 means donate for noakhali
const DonateBtn1 = document.getElementById('Donate_btn')
DonateBtn1.addEventListener('click', function(){
    const inputField = document.getElementById('input_tag_1');
    const inputValue = parseFloat(inputField.value);
    const DonateMoney = parseFloat(document.getElementById('Donate_money').innerText)
    const saveMoney = parseFloat(document.getElementById('save_Money').innerText)
    if(isNaN(inputValue)){
        return alert('Type a valid number...')
    }
    else if(inputValue <= 0){
        return alert("Input don't take a negetive number...") 
    }

    else if (saveMoney < inputValue) {
        return alert ('Sorry! You have not enough money..')
    }
    else{
        alert('Congrats! Your Money added succesfully...')
        const money = parseFloat(document.getElementById('Donate_money').innerText)
        const addMoney = inputValue + DonateMoney;
        const mainusMoney = saveMoney - addMoney;
        document.getElementById('save_Money').innerText = mainusMoney;
        document.getElementById('Donate_money').innerText = addMoney;
        inputField.value = ''; 

    }
})