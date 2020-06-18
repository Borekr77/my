function calcKT() {
    let longerSideInput = document.querySelector("input[name='longer-side']");
    let shorterSideInput = document.querySelector("input[name='shorter-side']");

    let longerSide = parseInt(longerSideInput.value);
    let shorterSide = parseInt(shorterSideInput.value);

    let longS = document.querySelector("span.long-s");
    let shortS = document.querySelector("span.short-s");
    let K = document.querySelector("span.kerulet");
    let T = document.querySelector("span.terulet");

    let kerulet = 2 * (longerSide + shorterSide);
    let terulet = longerSide * shorterSide;


    if (longerSide <= 0 || shorterSide <= 0) {
        alert("A téglalap oldala nem lehet 0 vagy negatív szám!");
    } else {
        longS.innerHTML = longerSide;
        shortS.innerHTML = shorterSide;

        K.innerHTML = kerulet;
        T.innerHTML = terulet;

        document.getElementById("color-div").style.width = longerSide.toString() + "px";
        document.getElementById("color-div").style.height = shorterSide.toString() + "px";
    }
}
