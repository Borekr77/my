function calcAmount() {
    let price = 1200;
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
