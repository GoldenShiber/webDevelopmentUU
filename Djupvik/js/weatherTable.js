import {getWeatherList} from "./weatherData.js"

const WEATHER_AREA = window.document.querySelector("#smhi-widget");

initiateWeatherTable();

function initiateWeatherTable(){
    let weatherList = getWeatherList(18.1489, 57.3081 ,new Date());
    var table = document.createElement('table');
    WEATHER_AREA.appendChild(table);
    
    weatherList.then(function(weatherData){

        var th = table.insertRow();
        var cell = th.insertCell();
        cell.innerText = "Datum";
        cell = th.insertCell();
        cell.innerText = "Tid";
        cell = th.insertCell();
        cell.innerText = "Temperatur";

        for(let index = 0; index < weatherData.length; index++){
            var tr = table.insertRow();
            cell = tr.insertCell();
            cell.innerText = weatherData[index].date;
            cell = tr.insertCell();
            cell.innerText = weatherData[index].time;
            cell = tr.insertCell();
            cell.innerText = weatherData[index].temperature + "°C";
        }
    })
}

