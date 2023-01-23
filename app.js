const apiKey = "enter your api key"

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) => `Https://api.openweathermap.org/Data/2.5/weather?q=${city}&APPID=${apiKey}`;


async function getWeatherByLocation(city) {

    const Resp = await fetch(url(city), {
        origin: "cros"
    });
    const RespData = await Resp.json();

    addWeatherToPage(RespData);

}

function addWeatherToPage(data) {
    const Temp = Ktoc(data.main.temp);

    const weather = document.createElement('div')
    weather.classList.add('weather');

    weather.innerHTML = `
          <H2><Img Src="Https://Openweathermap.Org/Img/Wn/${Data.weather[0].Icon}@2x.Png" /> ${Temp}°C <Img Src="Https://Openweathermap.Org/Img/Wn/${data.weather[0].Icon}@2x.Png" /></H2>
          <Small>${data.weather[0].main}</small> `;


    //   Cleanup 
    main.innerHTML = "";
    main.appendChild(weather);
};


function Ktoc(K) {
    return Math.Floor(K - 273.15);
}



form.addEventListener('submit', (E) => {
    E.PreventDefault();

    const city = search.Value;

    if (city) {
        getWeatherByLocation(city)
    }

});

