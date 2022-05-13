

let apiKey = '31e710105de33a8c2f00657b32f628ba'
let apiLink = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
let weatherForm = document.querySelector('#weatherForm');
let cityTitle = document.querySelector('#cityTitle');
let weatherInfo = document.querySelector('#weatherInfo');

weatherForm.addEventListener('sumbit', (e) => {
    e.preventDefault();

    // an issue with this event listener


    let city = e.target.city.value;
    let units = e.target.units.value;

    console.log(city);
    console.log(units);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'houston'}&appid=${apiKey}&units=${'standard'}`)
        

            // console.log(wd)



})

// break

const form = document.querySelector('#weatherForm')

async function getWeather(city_name) {
    let request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`);
    let result = await fetch(request);
    let response = await result.json();
    console.log(response.coord.lon)
    console.log(response.main.temp_max)
    console.log((response.main.temp_max - 273).toFixed(1))
    console.log(((response.main.temp_max - 273) * (9 / 5) + 32).toFixed(1))
    console.log('Temperature (Celsius)', (response.main.temp_max - 273).toFixed(1))
    console.log('Temperature (Fahrenheit)', ((response.main.temp_max - 273) * (9 / 5) + 32).toFixed(1))
    console.log()
    document.getElementById('weatherInfo').innerHTML = `${(response.main.temp_max - 273).toFixed(1)}\u00B0C, `;
    document.getElementById('weatherInfo').innerHTML = `${(response.main.temp_min - 273).toFixed(1)}\u00B0C, `;

}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event);
    let city = event.path[0][0].value;
    getWeather(`${city}`)
})


