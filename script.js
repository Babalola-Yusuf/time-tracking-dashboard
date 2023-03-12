/* +++++++++++ declarations +++++++++ */
let dailylink = document.links[0];
let weeklylink = document.links[1];
let monthlylink= document.links[2];

let dailypage = document.getElementById("daily-page")

let weeklypage = document.getElementById("weekly-page")

let monthlypage = document.getElementById("monthly-page")

/* ++++++++++ click events +++++++++*/

dailylink.addEventListener('click',() =>{
    displayDaily();
    
})

weeklylink.addEventListener('click',() =>{
    displayWeekly();
})
monthlylink.addEventListener('click',() =>{
    displayMonthly();
})
/* ++++++++++++ functions +++++++++++++ */
let displayDaily = () =>{
    dailypage.style.visibility = 'visible';
    weeklypage.style.visibility = 'hidden';
    monthlypage.style.visibility = 'hidden';
    dailylink.style.color= "white"
    weeklylink.style.color= "hsl(235, 45%, 61%)"
    monthlylink.style.color= "hsl(235, 45%, 61%)"
}

let displayWeekly = () =>{
    dailypage.style.visibility = 'hidden';
    weeklypage.style.visibility = 'visible';
    monthlypage.style.visibility = 'hidden';
    dailylink.style.color= "hsl(235, 45%, 61%)"
    weeklylink.style.color= "white"
    monthlylink.style.color= " hsl(235, 45%, 61%)"
}

let displayMonthly = () =>{
    dailypage.style.visibility = 'hidden';
    weeklypage.style.visibility = 'hidden';
    monthlypage.style.visibility = 'visible';
    dailylink.style.color= " hsl(235, 45%, 61%)"
    weeklylink.style.color= " hsl(235, 45%, 61%)"
    monthlylink.style.color= "white"
}

/* ++++++ loading the json data +++++ */
getTimes();
async function getTimes() {
    const res = await fetch("data.json");
const data = await res.json();
console.log(data)

for (let i = 0; i < 5; i++){
let current = document.querySelectorAll("#monthly-page .current-hr");

let prev = document.querySelectorAll("#monthly-page .prevWeekHr");
    current[i].innerHTML = data[i].timeframes.monthly.current;
    
    prev[i].innerHTML = data[i].timeframes.monthly.previous;
}

for (let j = 0; j < 5; j++){
let current = document.querySelectorAll("#weekly-page .current-hr");

let prev = document.querySelectorAll("#weekly-page .prevWeekHr");
    current[j].innerHTML = data[j].timeframes.weekly.current;
    
    prev[j].innerHTML = data[j].timeframes.weekly.previous;
}

for (let k = 0; k < 5; k++){
let current = document.querySelectorAll("#daily-page .current-hr");

let prev = document.querySelectorAll("#daily-page .prevWeekHr");
    current[k].innerHTML = data[k].timeframes.daily.current;
    
    prev[k].innerHTML = data[k].timeframes.daily.previous;
}
}
