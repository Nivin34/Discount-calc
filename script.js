let purchaseAmount = document.getElementById("amount");
let purchaseLimit = document.getElementById("limit");
let purchaseDiscount = document.getElementById("discount");
let enter = document.getElementById("enter");
let reset = document.getElementById("reset");
let purchaseResult = document.getElementById("result");
let amount;
let limit;
let discount;
let result;


enter.onclick  = function () {
    amount = purchaseAmount.value;
    amount = Number(amount);
    limit = purchaseLimit.value;
    limit = Number(limit);
    discount = purchaseDiscount.value;
    discount = Number(discount);

    result = amount >= limit ? discount : 0;  
    let formula = amount - amount * (result/100);
    purchaseResult.textContent = ` Result: Your amount reduce after ${discount}% of discount to pay ₹ ${formula}/-`;

}

reset.onclick = function () {
    purchaseAmount.value = '';
    purchaseLimit.value = '';
    purchaseDiscount.value = '';
    purchaseResult.textContent = 'Result:';
}