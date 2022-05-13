

let apiKey = '31e710105de33a8c2f00657b32f628ba'
let apiLink = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
let weatherForm = document.querySelector('#weatherForm');
let cityTitle = document.querySelector('#cityTitle');
let weatherInfo = document.querySelector('#weatherInfo');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    weatherInfo.innerHTML = '';

    let city = e.target.city.value;
    let units = e.target.units.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }&units=${ units }`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let wd = {
                name: data.name,
                country: data.sys.country,
                weather: {
                    forecast: data.weather[0].main,
                    forecastDescription: data.weather[0].description,
                    temp: {
                        current: data.main.temp,
                        feels_like: data.main.feels_like,
                        low: data.main.temp_min,
                        high: data.main.temp_max
                    }

                }
            }


            let addToWeatherData = (label, value) => {
                weatherInfo.innerHTML +=
                    `<li class="list-group-item">
                <strong>${label}:</strong>
                <span class="float-right">${value}</span>
                </li>`
            }

            addToWeatherData('Forecast', wd.weather.forecast);
            addToWeatherData('Temp', `${Math.floor(wd.weather.temp.current)} &deg;`);
            addToWeatherData('Feels Like', `${Math.floor(wd.weather.temp.feels_like)}&deg;`);
            addToWeatherData('Temp Low', `${Math.floor(wd.weather.temp.low)}&deg;`);
            addToWeatherData('High Temp', `${Math.floor(wd.weather.temp.high)}&deg;`);

            cityTitle.innerText = `${data.name}, ${data.sys.country}`
            
            
        })

    })

