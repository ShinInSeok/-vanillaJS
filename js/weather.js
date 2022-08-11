const API_KEY = "47b3778f8222e1b17f5a452421362586";
const city = document.querySelector("#weather span:last-child");
const weather = document.querySelector("#weather span:first-child");

// 날씨 알려주는 사이트
// https://api.openweathermap.org/data/2.5/weather?lat=35.6989&lon=126.6643&appid=47b3778f8222e1b17f5a452421362586

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url) // 대기의 약속
   .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");

}

// 유저의 위치를 알수있는 이벤트
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

