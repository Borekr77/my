

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
    if (amountNumber > 10) {

        amountInput.value = "1";
        alert("Max 10!");
        showAmount.innerHTML = summa;

    } else if (amountNumber < 1) {

        amountInput.value = "1";
        alert("Min 1!");
        showAmount.innerHTML = summa;

    } else {
        let amount = amountNumber * summa;
        showAmount.innerHTML = amount;
    }




}