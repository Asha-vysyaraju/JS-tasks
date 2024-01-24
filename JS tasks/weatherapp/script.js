var container = document.querySelector('.row')
fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.map((country) => {
            var cityName = country.name.common
            var lat = country.latlng[0]
            var lon = country.latlng[1]
            const card = document.createElement('div')
            card.classList.add('card')
            card.setAttribute("id", `card_${cityName}`)
            card.innerHTML = `<div class="card-header ">
            ${cityName}
        </div>
        <div class="card-body">
            <img src="${country.flags.png}" alt="image" width="200px" height="150px">
           
            <div class="card-text">
            <p>Region: ${country.region} </p>
            <p>Capital: ${country.capital}</p>
            <p>Country Code: ${country.cioc}</p>
            <button class="btn btn-primary"  id="wthrbtn" onclick=weather_report('${cityName}','${lat}','${lon}')>Click for Weather</button>
           </div>`
            container.appendChild(card)
        })
    }).catch((err) => {
        console.log(err)
        alert('Weather details nor available.')})

function weather_report(city, lat, lon) {
    console.log(city, lat, lon)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=64aa5a1cf85f3e7f1d8dcf47de9790e2`)
        .then((res) => res.json())
        .then((data) => {

            console.log(`Temperature:${data.main.temp} Humidity:${data.main.humidity} Pressure:${data.main.pressure} waether:${data.weather[0].main}`)
            var iconUrl=""
            if(data.weather[0].main=="Clouds"){
                iconUrl="images/clouds.png"
            }
            else if(data.weather[0].main=="Clear"){
                iconUrl="images/clear.png"
            }
           else if(data.weather[0].main=="Mist"){
                iconUrl="images/mist.png"
            }
            else if(data.weather[0].main=="Rain"){
                iconUrl="images/rain.png"
            }
           else if(data.weather[0].main=="Drizzle"){
                iconUrl="images/drizzle.png"
            }
            else if(data.weather[0].main=="Snow"){
                iconUrl="images/snow.png"
            }
            const weather = document.createElement('div')
             weather.classList.add('details')
            weather.innerHTML =`<div class="temp">
                <img src=${iconUrl}>
                <div>
                    <p>${(data.main.temp-273).toFixed()}°C
                   Temp</p> 
                </div>
                <div class="colum">
                    <img src="images/humidity.png">
                    <div>
                        <p>${data.main.humidity}%
                       Humidity</p> 
                    </div>
                    <div class="colum">
                        <img src="images/wind.png">
                        <div>
                            <p> ${data.wind.speed}Kmph
                           Wind Speed</p> 
                        </div>
    
            
        </div>`
            document.getElementById(`card_${city}`).appendChild(weather)
        }).catch((err) => {
            console.log(err)
            alert('Weather details nor available.')
        })
}
