let dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];

// To get week number
function weekNum(){
let currentDate = new Date();
let startDate = new Date(currentDate.getFullYear(), 0, 1);
let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
let weekNumber = Math.ceil(days / 7);
return weekNumber;
//console.log("Week number of " + currentDate + " is :   " + weekNumber);
}

// Three main cases
let mainCase1 = [1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52];
let mainCase2 = [2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50];
let mainCase3 = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51];

// Main case Checker
function mainCaseChecker() {
   let weekNumber = weekNum();
    for (var i=0; i< mainCase1.length; i++) {
        if (mainCase1[i] == weekNumber) {
            case1();

        } else if (mainCase2[i] == weekNumber) {
            case2();

        } else if (mainCase3[i] == weekNumber) {
            case3();
        }
    }
}

// Values to show on screen
let map1 = new Map();
    map1.set('Asar','Altamash + Ahmed');
    map1.set('Magrib','Altamash + Rehan');
    map1.set('Isha','Rehan + Ahmed');
       
let map2 = new Map();
    map2.set('Asar','Rehan + Ahmed');
    map2.set('Magrib','Altamash + Ahmed');
    map2.set('Isha','Altamash + Rehan');

let map3 = new Map();
    map3.set('Asar','Altamash + Rehan');
    map3.set('Magrib','Rehan + Ahmed');
    map3.set('Isha','Altamash + Ahmed');
   
// Functions of Three main cases  
function case1(){
    let todaysDay = new Date();
    let day = todaysDay.getDay();
    switch(day) {
        case 1: showOnScreen(day,map1);
        break;
        case 2: showOnScreen(day,map2);
        break;
        case 3: showOnScreen(day,map3);
        break;
        case 4: showOnScreen(day,map1);
        break;
        case 5: showOnScreen(day,map2);
        break;
    }
}
   
function case2(){
    let todaysDay = new Date();
    let day = todaysDay.getDay();
    switch(day) {
        case 1: showOnScreen(day,map3);
        break;
        case 2: showOnScreen(day,map1);
        break;
        case 3: showOnScreen(day,map2);
        break;
        case 4: showOnScreen(day,map3);
        break;
        case 5: showOnScreen(day,map1);
        break;
    }
}

function case3(){
    let todaysDay = new Date();
    let day = todaysDay.getDay();
    switch(day) {
        case 1: showOnScreen(day,map2);
        break;
        case 2: showOnScreen(day,map3);
        break;
        case 3: showOnScreen(day,map1);
        break;
        case 4: showOnScreen(day,map2);
        break;
        case 5: showOnScreen(day,map3);
        break;
    }
}
   
// Function to show content on screen

function showOnScreen(day,map) {
    const h1 = document.getElementById('day');
    h1.textContent = dayArray[day];

    map.forEach((value,key) => {
    
        let table = document.getElementById('table');
        let row = document.createElement('tr');
        let keyCol1 = document.createElement('td');
            keyCol1.textContent = `${key}`;
        let keyCol2 = document.createElement('td');
            keyCol2.textContent = `${value}`;
                
            row.appendChild(keyCol1);
            row.appendChild(keyCol2);

            table.appendChild(row);
    });
}
