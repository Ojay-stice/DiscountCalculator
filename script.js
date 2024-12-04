
let fname = document.getElementById('name');
let age = Number(document.getElementById('age').value);
let totalBill = parseFloat(document.getElementById('bill').value);
let finalPrice;
let discountRatio;

// getting the paragraph .
let paragElem = document.getElementById('displayAmount');



// grabbing the div element holding the pargraph
let amountDiv = document.getElementById('showAmount');
  

// grabbing the button
let showBtn = document.getElementById('calc-btn');


amountDiv.style.display = 'none';
// implementing the discount logic

showBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    let age = Number(document.getElementById('age').value);
    let totalBill = parseFloat(document.getElementById('bill').value);

    if (isNaN(age) || isNaN(totalBill) || totalBill <= 0 || age <= 0){
        alert('Enter a valid age of total bill');
        return;
    }


    if (age <= 12){
        discountRatio = 0;
    }
    else if(age =>13 && age <= 18){
        discountRatio = 50/100;
        
    }
    else if(age >=19 && age <= 40){
        discountRatio = 5/100;
    }
    else if(age >40 && age <= 60){
        discountRatio = 10/100;
    }
    else if(age > 59){
        discountRatio = 40/100;
    }  

    
    // calculate the discount and final price
    

        let discount = discountRatio * totalBill;
        finalPrice = totalBill - discount;

        paragElem.textContent = `Hey ${fname.value}, your total price is ${totalBill.toFixed(2)} and your Discounted price is ${finalPrice.toFixed(2)}`;
         amountDiv.style.display = 'block';
        
        
});


