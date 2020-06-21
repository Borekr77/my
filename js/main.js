

//document.querySelector("#days-of-week").addEventListener("change", weatherOfDay);

function extras() {

    //let price = 1000;
    let sum = parseInt(document.querySelector('#sauce').value);

    let checkboxes = document.getElementsByName("CB");
    let bChecked = true;

    console.log("sum = " + sum, bChecked);

    for (let i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            sum += parseInt(checkboxes[i].value);
            bChecked = false;
        }
    }

    if (bChecked) {
        document.getElementById("nothing").checked = true;
    } else {
        document.getElementById("nothing").checked = false;
    }


    price += sum;

    console.log("sum = " + sum);
    console.log("price = " + price);
}


// A megrendelés összege:
function calcAmount() {


    let amountInput = document.querySelector("input[name=amount-input]");
    let showAmount = document.querySelector("span.show-amount");

    let amountNumber = parseInt(amountInput.value);

    if (amountNumber > 10) {
        alert("Max 10!");
    } else if (amountNumber < 1) {
        alert("Min 1!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}








