const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.wheather-box');
const weatherDetails = document.querySelector('.wheather-details');

search.addEventListener('click', () => {
    const APIKey = '06345f05b8d953816afda19de0136aad';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then((response) => response.json())
        .then((json) => {
            const image = document.querySelector('.wheather-box img');
            const temperature = document.querySelector('.wheather-box .temprature');
            const description = document.querySelector('.wheather-box .description');
            const humidity = document.querySelector('.wheather-details .humidity span');
            const wind = document.querySelector('.wheather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'clear.png';
                    break;
                case 'Rain':
                    image.src = 'rain.png';
                    break;
                case 'Snow':
                    image.src = 'snow.png';
                    break;
                case 'Clouds':
                    image.src = 'cloud.png';
                    break;
                case 'Mist':
                case 'Haze':
                    image.src = 'mist.png';
                    break;
                default:
                    image.src = 'cloud.png';
            }

            temperature.textContent = `${json.main.temp} °C`;
            description.textContent = json.weather[0].description;
            humidity.textContent = `${json.main.humidity} %`;
            wind.textContent = `${json.wind.speed} m/s`;
        });
});
