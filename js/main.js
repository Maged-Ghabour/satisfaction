let quota = document.getElementById('quota');
let discount_vat = document.getElementById('discount_vat');
let discount_without_vat = document.getElementById('discount_without_vat ');
let price = document.getElementById("price")
let discount = document.getElementById("discount")


//    getPrice = function() {
//             var numVal1 = Number(document.getElementById("price").value);
//             var numVal2 = Number(document.getElementById("discount").value) / 100;
//             var totalValue = numVal1 - (numVal1 * numVal2)
//             document.getElementById("total").value = totalValue.toFixed(2);
// }
        


price.addEventListener("change", function () {
    quota.innerHTML = price.value;
    discount_vat.innerHTML = getPrice().toFixed(2)
})


function getPrice(){
    let numVal1 = Number(price.value) || 0;
    let numVal2 = Number(discount.value) / 100;
    let total = numVal1 - (numVal1 * numVal2)
    return total;
}

discount.addEventListener("change", function () {
    discount_vat.innerHTML = getPrice().toFixed(2)
})