let users = [
    { surname: "Kiss", firstname: "János", age: "66" },
    { surname: "Nagy", firstname: "Tamás", age: "55" },
    { surname: "Szabó", firstname: "László", age: "44" },
    { surname: "Kovács", firstname: "Ilona", age: "33" },
    { surname: "Tóth", firstname: "Tímea", age: "22" },
    { surname: "Simon", firstname: "Zsuzsa", age: "11" }
];


//HTML table készítése a users tömbből
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnPrimary = document.createElement("button");
    btnPrimary.className = "btn btn-primary";
    btnPrimary.innerHTML = "<i class='fas fa-sync-alt'></i>";

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = "<i class='fas fa-trash-alt'></i>";

    group.appendChild(btnPrimary);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
};

let createTR = (index) => {
    let tr = document.createElement("tr");
    createTD(parseInt(index) + 1, tr);
    for (let j of Object.values(users[index])) {
        createTD(j, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
};

//users tömb feltöltése a form-ból
let sendButton = document.querySelector("#send-button");
sendButton.addEventListener("click", function (ev) {
    ev.preventDefault();

    let newUserSurName = document.querySelector("input[name='userSurName']").value;
    let newUserFirstName = document.querySelector("input[name='userFirstName']").value;
    let newUserAge = document.querySelector("input[name='userAge']").value;
    let newUserObject = { surname: newUserSurName, firstname: newUserFirstName, age: newUserAge };

    users.push(newUserObject);
    let newIndex = users.length - 1;
    createTR(newIndex);

    document.querySelector("#new-user-form").reset();
});

for (let k in users) {
    createTR(k);
};