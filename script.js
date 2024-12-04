
let fname = document.getElementById('name');
let age = Number(document.getElementById('age').value);
let totalBill = parseFloat(document.getElementById('bill').value);
let finalPrice;
let discountRatio;
let disMsg;

// grabbing the paragraph .
let paragElem = document.getElementById('displayAmount');


// grabbing times icon
let tIcon = document.getElementById('timesIcon');
    tIcon.style.display = 'none'
// grabbing the div element holding the pargraph
let amountDiv = document.getElementById('showAmount');

// grabbing showError div
let showErr = document.getElementById('showError');

// grabbing the button
let showBtn = document.getElementById('calc-btn');

// setting initial display to none
    amountDiv.style.display = 'none';

// implementing the discount logic
showBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    let age = Number(document.getElementById('age').value);
    let totalBill = parseFloat(document.getElementById('bill').value);

    if (isNaN(age) || isNaN(totalBill) || totalBill <= 0 || age <= 0){
         // error message
        showErr.textContent = 'Enter a valid age or total bill';
        
        return;
    }
    else {
        showErr.style.display = 'none'
    }


    if (age <= 12){
        discountRatio = 0;
        disMsg = "no discount for this category ";
    }
    else if(age >=13 && age <= 18){
        discountRatio = 50/100;
        disMsg = 'you are eligible for 50% discount';
    }
    else if(age >=19 && age <= 40){
        discountRatio = 5/100;
        disMsg = 'you are eligible for 5% discount';
    }
    else if(age >40 && age <= 60){
        discountRatio = 10/100;
        disMsg = 'you are eligible for 10% discount';
    }
    else if(age > 59){
        discountRatio = 40/100;
        disMsg = 'you are eligible for 40% discount';
    }  

   
    // calculate the discount and final price
    

        let discount = discountRatio * totalBill;
        finalPrice = totalBill - discount;

        paragElem.textContent = `Hey ${fname.value}, ${disMsg}, your total price is ${totalBill.toFixed(2)} and your final price is ${finalPrice.toFixed(2)}`;
         amountDiv.style.display = 'block';
        
        
});

// let password;
// let user = prompt('You are Login in as?')
// if (user == "Admin"){
//      password = prompt('enter password');
//     if (password =="TheMaster"){
//         alert('welcome')
//     }
//     else if (password == null || password == " "){
//         alert("Canceled")
//     }
//     else if(password != "TheMaster"){
//         alert('wrong password')
//     } 
// }
