/* var container = document.querySelector('.row')
fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.map((country)=>{

        
        
            
            var cityName= country.name.common
            var lat=country.latlng[0]
            var lon=country.latlng[1]
            const card = document.createElement('div')
            card.classList.add('card')
            card.setAttribute("id",`card_${cityName}`)
            card.innerHTML = `<div class="card-header ">
            ${cityName}
        </div>
        <div class="card-body">
            <img src="${country.flags.png}" alt="image" width="200px" height="150px">
           
            <div class="card-text">
            <p>Region:${country.region} </p>
            <p>Capital:${country.capital}</p>
            <p>Country Code:${country.cioc}</p>
            <button class="btn btn-primary"  id="wthrbtn" onclick=weather_report('${cityName}')>Click for Weather</button>
           
        </div>`
        container.appendChild(card)
          
        // <a href="#" class="btn btn-primary"  id="wthrbtn" onclick=weather_report('${cityName}')>Click for Weather</a>
        // var wthrbtn=document.createElement('button')
        //  wthrbtn.classList.add('btn')
        //  wthrbtn.classList.add('btn-primary')
        //  wthrbtn.setAttribute("id","btn_weather")
        // wthrbtn.textContent = 'Click for Weather!'
        // card.appendChild(wthrbtn)
        // wthrbtn.onclick=function weather_report(cityName){
        //          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9ae271f72ce5677f1897de2c25eb5998`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //          const weather = document.createElement('p')
        //          weather.classList.add('card-text')
        //          weather.innerHTML = `Temperature:${data.main.temp} Humidity:${data.main.humidity} Pressure:${data.main.pressure}`
                    
        //         card.appendChild(weather)

        //         console.log(`${cityName}`)
        //         console.log(data.main.temp)
        //     }).catch((err) => console.log(err))
            
        // }
        // //     // var wthrbtn = document.querySelector('button')
        // var city=data[i].name.common
        //    wthrbtn.addEventListener('click', () => {
          
            // card.appendChild(weather)
            
            // console.log(data[i].name.common)
            // console.log(data[i].flags.png)
            // console.log(data[i].region)
            // console.log(data[i].capital)
            // console.log(data[i].cioc)
        // }
    })
    }).catch((err) => console.log(err))

    async function weather_report(city){
        
    //    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9ae271f72ce5677f1897de2c25eb5998`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // const weather = document.createElement('p')
    //             // weather.classList.add('card-text')
    //             // weather.innerHTML = 
    //             alert(
    //                 `Temperature:${data.main.temp} Humidity:${data.main.humidity} Pressure:${data.main.pressure}`
    //                 )
                

    //             console.log(data.main.temp)
    //         }).catch((err) => console.log(err))
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ae271f72ce5677f1897de2c25eb5998`)
    let data= await res.json()
    // alert(
    //                     `Temperature:${data.main.temp} Humidity:${data.main.humidity} Pressure:${data.main.pressure}`
    //                     )
    console.log(`Temperature:${data.main.temp} Humidity:${data.main.humidity} Pressure:${data.main.pressure}`)
                          const weather = document.createElement('p')
                 weather.classList.add('card-text')
                 weather.innerHTML =  `Temperature:${data.main.temp} Humidity:${data.main.humidity} Pressure:${data.main.pressure}`
document.getElementById(`card_${city}`).appendChild(weather)
            //   card.appendChild(weather)

                       
    } */
   
