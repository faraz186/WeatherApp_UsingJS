const API_KEY = `****************************************`

const input = document.getElementById("search")
const weather = document.getElementById("weather")

const getWeather = async(city)=>
    {
    weather.innerHTML = `<div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return showWeather(data)
}

const showWeather = (getdata)=>{
    if(getdata.cod == "404"){
        weather.innerHTML = `<h2>City not Found</h2>`;
        // return;
    }
    else if(getdata.cod == "400"){
        weather.innerHTML = `<h2>Enter your field</h2>`;
        // return;
    }
    weather.innerHTML = `
    <div>
         <img src="https://openweathermap.org/img/wn/${getdata.weather[0].icon}@2x.png" alt="">

    </div>

    <div>
           <h2>${getdata.main.temp} ℃</h2>
           <h4> ${getdata.weather[0].main} </h4>
    </div>
`
}

const getValue = ()=>
{
    event.preventDefault()
    getWeather(input.value)
}
