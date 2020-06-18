function validateForm() {
    // Termék egységára. 
    let pricePerPiece = 1200;

    // Kiválasztom a mennyiséget és a message mező ár részét.  
    let amountInput = document.querySelector("form#order input[name=amount]");
    let priceField = document.querySelector("form#order .message strong");

    // Kiolvasom a bevitt mennyiséget és szorzom az egységárral.  
    let amount = parseInt(amountInput.value);
    let totalAmount = amount * pricePerPiece;

    // Kiírom az üzenetet, azaz frissítem az árat.  
    priceField.innerHTML = `${totalAmount}`;
}