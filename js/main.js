let deliveryText = document.createElement("small");
deliveryText.className = "form-text text-muted";
deliveryText.innerHTML = "Az ár tartalmazza a házhoz szállítási díjat! (5000 Ft alatti rendelés esetén: +500 Ft)";

let parent = document.querySelector("#amount-text");
parent.appendChild(deliveryText);
deliveryText.style.display = "none";


document.querySelector("#order-form").addEventListener("change", calcAmount);
document.querySelector("#order-form").addEventListener("input", calcAmount);

function calcAmount() {

    let amountInput = document.getElementById("amount-input");
    let amountNumber = parseInt(amountInput.value);
    let showAmount = document.querySelector("span.show-amount");

    let summa = parseInt(document.querySelector('#nothing').value);
    let cbArr = document.getElementsByName("CB");
    let bChecked = false;

    //console.log("summa = " + summa, bChecked, cbArr);

    //extrák
    for (let i = 0; i < cbArr.length; i++) {

        if (cbArr[i].checked) {
            summa += parseInt(cbArr[i].value);
            bChecked = true;

            //console.log("summa = " + summa, bChecked);
        }

    }

    if (bChecked) {
        document.getElementById("nothing").checked = false;
    } else {
        document.getElementById("nothing").checked = true;
    }


    //mennyiség
    let amount = amountNumber * summa;
    if (amountNumber > 10) {

        amountInput.value = "1";
        alert("Max 10!");
        showAmount.innerHTML = summa;

    } else if (amountNumber < 1) {

        amountInput.value = "1";
        alert("Min 1!");
        showAmount.innerHTML = summa;

    } else if (amount < 5000) {
        amount += 500;
        showAmount.innerHTML = amount;
        deliveryText.style.display = "block";
    } else {
        showAmount.innerHTML = amount;
        deliveryText.style.display = "none";
    }

}

// Alert üzenet eltüntetése
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);

};

//Szószok-select elem feltöltése
let sauces = [
    "szósz nélkül",
    "csípős",
    "majonéz",
    "ketchup",
    "BBQ"
];

let sauceSelect = document.querySelector("#sauceSelect");
let k = 0;
while (k < sauces.length) {
    let option = document.createElement("option");
    option.value = k;
    option.innerHTML = sauces[k];
    sauceSelect.appendChild(option);
    k++;
}
