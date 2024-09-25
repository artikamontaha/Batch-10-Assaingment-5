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
        return alert ("Sorry,,, You don't have enough money")
    }
    else{
        alert('Congrats! Your Money added succesfully...')
        const money = parseFloat(document.getElementById('Donate_money').innerText)
        const addMoney = inputValue + DonateMoney;
        const mainusMoney = saveMoney - addMoney;
        document.getElementById('save_Money').innerText = mainusMoney;
        document.getElementById('Donate_money').innerText = addMoney;
        inputField.value = ''; 

    }
})




// This is for card-2
const btn_2 = document.getElementById('btn_2')
btn_2.addEventListener('click', function(){
    inputBTN = document.getElementById('input_btn_1')
    inputOutpot = parseFloat(inputBTN.value);
    const btn2 = parseFloat(document.getElementById('Donate_money_1').innerText)
    const agoMoney = parseFloat(document.getElementById('save_Money').innerText)
    
    if(isNaN(inputOutpot)){
        return alert('Type a number please...')
    }
    else if(inputOutpot <= 0){
        return alert("Input don't take a negetive number... so try again please")
    }

    else if(inputOutpot > agoMoney){
        alert("Sorry,,, You don't have enough money")
    }

    else{
        alert('Congrats! Your money added seccesfully')
        const add_money = parseFloat(document.getElementById('Donate_money_1').innerText)
        const plusMoney = inputOutpot + btn2;
        const costMoney = agoMoney - plusMoney
        document.getElementById('save_Money').innerText = costMoney;
        document.getElementById('Donate_money_1').innerText = plusMoney
    }

    inputBTN.value = '';
})



// This is for card-3
const btn3 = document.getElementById('btn_3')
btn3.addEventListener('click', function(){
    inputBTN_1 = document.getElementById('input_btn_2')
    input1 = parseFloat(inputBTN_1.value);
    const btn3 = parseFloat(document.getElementById('Donate_money_2').innerText)
    const saveMoney = parseFloat(document.getElementById('save_Money').innerText)

    if(isNaN(input1)){
        return alert('Type a number please...')
    }
    else if(input1 <= 0){
        return alert("Input don't take a negetive number... so try again please")
    }

    else if(input1 > saveMoney){
        alert("Sorry,,, You don't have enough money")
    }
    else{
        alert ('Congrats! Your money added seccesfully')
        const addmoney = parseFloat(document.getElementById('Donate_money_2').innerText)
        const plusMoney = input1 + btn3;
        const costMoney = saveMoney - plusMoney
        document.getElementById('save_Money').innerText = costMoney;
        document.getElementById('Donate_money_2').innerText = plusMoney

    }


    inputBTN_1.value = '';


})