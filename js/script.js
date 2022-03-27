// then to put the data into the actual weather API and extract the information

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const $button = $("button");
const $input = $('input');

$button.on('click', () => {
    const city = $input.val()

    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab15054968fe786d8d9a8a7fdd16304&units=imperial`)
    .then((data) => {

        console.log(data)

        let tempInt = parseInt(data.main.temp)
        let feelsInt = parseInt(data.main.feels_like)

        $(".cityname").html(`City: ${data.name}`)
        $(".temperature").html(`Current Temp: ${tempInt}°`)
        $(".feeling").html(`Feels Like: ${feelsInt}°`)
        $(".weather").html(`Weather: ${data.weather[0].description} <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`)


    })
})



// //{
//     "coord": {
//         "lon": -95.3633,
//         "lat": 29.7633
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 55.17,
//         "feels_like": 53.67,
//         "temp_min": 49.1,
//         "temp_max": 58.08,
//         "pressure": 1021,
//         "humidity": 70
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.01,
//         "deg": 203,
//         "gust": 1.99
//     },
//     "clouds": {
//         "all": 1
//     },
//     "dt": 1647755693,
//     "sys": {
//         "type": 2,
//         "id": 2001415,
//         "country": "US",
//         "sunrise": 1647779114,
//         "sunset": 1647822752
//     },
//     "timezone": -18000,
//     "id": 4699066,
//     "name": "Houston",
//     "cod": 200
// }