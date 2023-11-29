const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric"
const apiKey="9ae04fbc3f17a651c8776e80562e190b"
const searchBox=document.querySelector(".input-section input");
const searchBtn=document.querySelector(".input-section button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
  const response=await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`)
  var data=await response.json();

  console.log(data);

  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °c";
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
  document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="./Images/clouds.png";
  }else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="./Images/drizzle.png";
  }else if(data.weather[0].main=="Mist"){
    weatherIcon.src="./Images/mist.png";
  }else if(data.weather[0].main=="Rain"){
    weatherIcon.src="./Images/rain.png";
  }else if(data.weather[0].main=="Snow"){
    weatherIcon.src="./Images/snow.png";
  }else if(data.weather[0].main=="Clear"){
    weatherIcon.src="./Images/clear.png";
  }
}

searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
})

