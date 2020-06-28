//Init data
let price = 1200;
let delivery = 500;
let showAmount = document.querySelector("span.show-amount");
showAmount.innerHTML = price + delivery;

//Kiszállítás szöveg
let deliveryText = document.createElement("small");
deliveryText.className = "form-text text-muted";
deliveryText.innerHTML = "Az ár tartalmazza a házhoz szállítási díjat (500 Ft)! (5000 Ft feletti rendelés esetén a kiszállítás ingyenes.)";
let parent = document.querySelector("#amount-text");
parent.appendChild(deliveryText);


//Űrlap-esemény indítja a számításokat
document.querySelector("#order-form").addEventListener("change", calcAmount);
document.querySelector("#order-form").addEventListener("input", calcAmount);

/* Fizetendő ár kiszámítása és megjelenítése az exrák és a mennyiség alapján */
function calcAmount() {

    let summa = parseInt(document.querySelector('#nothing').value);
    let cbArr = document.getElementsByName("CB");

    let amountInput = document.getElementById("amount-input");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    //Extrák összeszámolása
    let bChecked = false;

    for (let i = 0; i < cbArr.length; i++) {
        if (cbArr[i].checked) {
            summa += parseInt(cbArr[i].value);
            bChecked = true;
        }
    }

    if (bChecked) {
        document.getElementById("nothing").checked = false;
    } else {
        document.getElementById("nothing").checked = true;
    }

    //Mennyiség-validálás és a teljes ár kiíratása
    let amount = amountNumber * (summa + price);

    if (amountNumber < 1 || amountNumber > 10) {
        alert("Minimum 1 db, maximum 10 db rendelhető!");
        amountInput.value = "1";

    } else if (amount < 5000) {
        amount += delivery;
        showAmount.innerHTML = amount;
        deliveryText.style.display = "block";

    } else {
        showAmount.innerHTML = amount;
        deliveryText.style.display = "none";
    }

}


//Alert üzenet eltüntetése
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
};
