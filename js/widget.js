
//Időjárás

document.querySelector("#days-of-week").addEventListener("change", weatherOfDay);


function weatherOfDay() {
    let weekDegree = [2, 18, -1, 22, 30, 40, -10];
    let offers = ["forró csoki", "meleg tea", "finom süti", "fagyi", "jéghideg limonádé"];
    let maxDegree = [0, 15, 20, 25, 100];

    let weekSelect = document.getElementById("days-of-week");
    let valueSelectedDay = parseInt(weekSelect.options[weekSelect.selectedIndex].value);
    let showDegree = document.querySelector("span#today-degree");
    let showOffer = document.querySelector("span#today-offer");

    showDegree.innerHTML = weekDegree[valueSelectedDay];

    for (let i = 0; i < maxDegree.length; i++) {

        if (weekDegree[valueSelectedDay] < maxDegree[i]) {
            showOffer.innerHTML = offers[i];
            break;
        }
    }
}

