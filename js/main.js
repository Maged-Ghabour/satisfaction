let quota = document.getElementById('quota');
let discount_vat = document.getElementById('discount_vat');
let discount_without_vat = document.getElementById('discount_without_vat');
let price = document.getElementById("price")
let discount = document.getElementById("discount")

let output = document.querySelector(".output")


let quota1 = document.getElementById('quota1');



function ss() {
    switch (price.value) {
    case "138.8":
            quota1.innerHTML = (120.00).toFixed(2) + " جنية"
        break;
      case "193.8":
            quota1.innerHTML = (170.00).toFixed(2) + " جنية"
        break;
      case "239.4":
            quota1.innerHTML = (210.00).toFixed(2) + " جنية"
        break;
      case "387.6":
            quota1.innerHTML = (340.00).toFixed(2) + " جنية"
        break;
      case "570":
            quota1.innerHTML = (500.00).toFixed(2) + " جنية"
        break;

    default:
        console.log("Error");
        break;
}
}

price.addEventListener("change", function () {
    output.style.display = "block"
    quota.innerHTML = Number(price.value).toFixed(2) + " جنية";
    discount_vat.innerHTML = getPrice().toFixed(2) + " جنية"

    ss()
    discount_without_vat.innerHTML = getPrice1().toFixed(2) + " جنية"
})


function getPrice(){
    let numVal1 = Number(price.value) || 0;
    let numVal2 = Number(discount.value) / 100 || 0;
    let total = numVal1 - (numVal1 * numVal2)
    return total;
}

function getPrice1() {
    let numVal1 = parseInt(quota1.innerHTML) || 0;
    console.log(numVal1);
    let numVal2 = parseInt(discount.value) / 100 || 0;
    let total = numVal1 - (numVal1 * numVal2)
    return total;
}

discount.addEventListener("change", function () {
    discount_vat.innerHTML = getPrice().toFixed(2) + " جنية"

    ss()
    discount_without_vat.innerHTML = getPrice1().toFixed(2) + " جنية"
})