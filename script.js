document.addEventListener("DOMContentLoaded", function() {


const search = document.querySelector("#search");
const submit = document.querySelector("#click");

let weatherDataArray = [];

async function weatherapi(location){
   const response =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8d770b35a81b467ba59144257240403&q=${location}&days=3&aqi=yes&alerts=yes`, {mode: 'cors'})
   try {
    const weatherData  = await response.json();
    
       
      
       
      
        const weathersData = {
            country: weatherData.location.country,
            
            0:{
                date:  weatherData.forecast.forecastday[0].date,
                img: weatherData.current.condition.icon,
                condition: weatherData.current.condition.text,
 
                temp_c:  weatherData.current.temp_c,
             temp_f: weatherData.current.temp_f,
               humidity:   weatherData.current.humidity,
                airSpeed:  weatherData.current.vis_km,
 
 
              
             },
            1: {
                date:  weatherData.forecast.forecastday[1].date,
                img: weatherData.forecast.forecastday[1].day.condition.icon,
                condition: weatherData.forecast.forecastday[1].day.condition.text,
 
                temp_c:  weatherData.forecast.forecastday[1].day.avgtemp_c,
             temp_f: weatherData.forecast.forecastday[1].day.avgtemp_f,
               humidity:   weatherData.forecast.forecastday[1].day.avghumidity,
                airSpeed:  weatherData.forecast.forecastday[1].day.avgvis_km,
 
 
              
             },
            2: {
                date:  weatherData.forecast.forecastday[2].date,
                img: weatherData.forecast.forecastday[2].day.condition.icon,
                condition: weatherData.forecast.forecastday[2].day.condition.text,
 
                temp_c:  weatherData.forecast.forecastday[2].day.avgtemp_c,
             temp_f: weatherData.forecast.forecastday[2].day.avgtemp_f,
               humidity:   weatherData.forecast.forecastday[2].day.avghumidity,
                airSpeed:  weatherData.forecast.forecastday[2].day.avgvis_km,
 
 
              
             }
         }
       
       
       

        return weathersData;
        }

        catch (error){
                      
        }
    
}
 const loading = document.querySelector(".loader");
 const country = document.querySelector(".country");
 const divBox = document.querySelector(".data-box");
submit.addEventListener("click", async () => {
    

    loading.style.display = (loading.style.display==="none") ? "block" : "none";
    if(divBox.style.display==="flex"){
        divBox.style.display = "none";
    }
    try{
        
    const data = await forResponse();
    country.textContent = `Country Name: ${weatherDataArray[0].country}`;
    day();
    firstday();
    secondDay();
    thirdDay();
    
}
    

    finally {
        loading.style.display = "none";
        divBox.style.display = "flex";
    }

})

function weatherdataBox() {
    const container = document.querySelector(".container");
    
    const firstDay = document.querySelector(".first-day");
    const secondDay = document.querySelector(".second-day");
    const thirdDay = document.querySelector(".third-day");
    
   
    
     
}

function firstday(){
    const container = document.querySelector(".container");
    let style = "";
    const firstDay = document.querySelector(".first-day");
    // if (firstDay.style.display === "" || firstDay.style.display === "none") {
    //     style = "block"
    // }
    // else {
    //     style = "none"
    // }

     
    // if(weatherDataArray) {
    //     style = "block";
    // }

    // firstDay.style.display = style;
    const dayName = day("day1");
    
    firstDay.innerHTML = `<h2>${dayName}</h2><hr><img src="${weatherDataArray[0][0].img}" alt="" srcset=""> <p> Condition: ${weatherDataArray[0][0].condition}</p><p> Temperautre: ${weatherDataArray[0][0].temp_c}&deg;C</p> <p> Humidity: ${weatherDataArray[0][0].humidity}g.m<sup>-3</sup></p> <p> Air Speed: ${weatherDataArray[0][0].airSpeed}m/s</p> `;
}

function secondDay(){
   
    
    const firstDay = document.querySelector(".second-day");
    // let style = "";
  
    // if (firstDay.style.display === "" || firstDay.style.display === "none") {
    //     style = "block"
    // }
    // else {
    //     style = "none"
    // }


    // // if(weatherDataArray) {
    // //     style = "block";
    // // }
    

    // firstDay.style.display = style;
    const dayName = day("day2");
    
    firstDay.innerHTML = `<h2>${dayName}</h2><hr><img src="${weatherDataArray[0][1].img}" alt="" srcset=""> <p> Condition: ${weatherDataArray[0][1].condition}</p><p> Temperautre: ${weatherDataArray[0][1].temp_c}&deg;C</p> <p> Humidity: ${weatherDataArray[0][1].humidity}g.m<sup>-3</sup></p> <p> Air Speed: ${weatherDataArray[0][1].airSpeed}m/s</p> `;
}

function thirdDay(){
    const firstDay = document.querySelector(".third-day");
    // let style = "";
 
    // if (firstDay.style.display === "" || firstDay.style.display === "none") {
    //     style = "block"
    // }
    // else {
    //     style = "none"
    // }

     
    // // if(weatherDataArray) {
    // //     style = "block";
    // // }

    // firstDay.style.display = style;
    const dayName = day("day3");
    
    firstDay.innerHTML = `<h2>${dayName}</h2><hr><img src="${weatherDataArray[0][2].img}" alt="" srcset=""> <p> Condition: ${weatherDataArray[0][2].condition}</p><p> Temperautre: ${weatherDataArray[0][2].temp_c}&deg;C</p> <p> Humidity: ${weatherDataArray[0][2].humidity}g.m<sup>-3</sup></p> <p> Air Speed: ${weatherDataArray[0][2].airSpeed}m/s</p> `;
}
    weatherdataBox();

function day(day){

    
    
    const myDate = new Date(weatherDataArray[0][0].date);
    const date2 = new Date(weatherDataArray[0][1].date);
    const date3 = new Date(weatherDataArray[0][2].date);

    const options = {weekday: 'long'};
    const dayName1 = myDate.toLocaleDateString('en-US', options);
    const dayName2 = date2.toLocaleDateString('en-US', options);
    const dayName3 = date3.toLocaleDateString('en-US', options);
    if(day==="day1"){
        return dayName1;
    }

    else if(day==="day2"){
        return dayName2;
    }
    else{
        return dayName3;
    }

    
}




 async function forResponse() {
    weatherDataArray = [];
    const searchValue = search.value;
    const sushen = await weatherapi(searchValue)
    .then(function(response){
        return response;
    })
    .then(function(response){
        ;
        weatherDataArray.push(response);
    })
    .catch(function(error){
        console.error(error);
    })
   
    
  
 
}
})


