const inputbox = document.querySelector('.inputbox');
const searchbtn = document.getElementById('searchbutton');
const weatherimg= document.getElementById('weatherimage');
const temperature = document.getElementById('temperature');
const description  = document.getElementById('description');
const weatherbody = document.querySelector('.weatherbody');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const locationnotfound = document.querySelector('.locationnotfound');

async function checkweather(city){
const api_key = "eb1cd07f5f5b6c495e26f8aeba6e774f";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weatherdata = await fetch(`${url}`).then (response => response.json());

if(weatherdata.cod==`404`){
    locationnotfound.style.display = "flex";
    weatherbody.style.display= "none";
    return;
  }
  else{
    weatherbody.style.display= "flex";
    locationnotfound.style.display = "none";
  }

   temperature.innerHTML = `${Math.round(weatherdata.main.temp-273.15)}°C`;
   description.innerHTML = `${weatherdata.weather[0].description}`;
   humidity.innerHTML = `${weatherdata.main.humidity}%`;
   windspeed.innerHTML = `${weatherdata.wind.speed} Km/Hr`;
   
   
switch(weatherdata.weather[0].main){
    case 'Clouds':
        weatherimg.src="cloud.png";
        break;
    case 'Clear' :
        weatherimg.src="clear.png" ;
        break;
    case 'Rain' :
        weatherimg.src="rain.png" ;
        break;
     case 'Mist' :
        weatherimg.src="mist.png" ;
        break;
        case 'Snow' :
            weatherimg.src="snow.png" ;  
            break;        
   }

}



searchbtn.addEventListener('click', ()=>{
    checkweather(inputbox.value);
})