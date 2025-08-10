// Weather API Example: http://api.weatherapi.com/v1/current.json?key=943a85caa8c3465faaa82057251008&q=Indore&aqi=no

const temperatureField = document.querySelector(".temperature-value");
const locationField = document.querySelector(".location");
const dateandTimeField = document.querySelector(".time");
const conditionField = document.querySelector(".condition-text");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let target = 'Indore';

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=943a85caa8c3465faaa82057251008&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();
    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    updateDetails(temp, locationName, time, condition);
}

function updateDetails(temp, locationName, time, condition) {
    temperatureField.innerText = temp;
     temperatureField.innerHTML = `${temp}<span class="degree">°C</span>`;
    locationField.innerText = locationName;
    dateandTimeField.innerText = time;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResults(target);
}

fetchResults(target);