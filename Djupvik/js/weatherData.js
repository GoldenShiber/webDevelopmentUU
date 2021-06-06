import {Weather} from "./weather.js"

const timeArray =["06:00:00Z", "12:00:00Z", "18:00:00Z"];

let weatherList = [];
//GLOBAL.document = new JSDOM(html).window.document;

export function getWeatherList(longitude, latitude, date){
    let weatherList = [];
    let weatherURL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + longitude + "/lat/" + latitude + "/data.json";
    return fetch(weatherURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let tomorrow = new Date(date);
        tomorrow.setDate(tomorrow.getDate()+1);
        let dateList = [date, tomorrow];
        for(let dateIndex = 0; dateIndex < dateList.length; dateIndex++){
            for (let index = 0; index < timeArray.length; index++){
                let weatherTime = dateList[dateIndex].toISOString()
                weatherTime = weatherTime.substring(0,weatherTime.indexOf('T')+1) + timeArray[index];
                //data.timeSeries
    
                for(let weatherValue of data.timeSeries){
                    if(weatherValue.validTime === weatherTime){
                        weatherList.push(new Weather(weatherTime.substring(0, weatherTime.indexOf("T")), weatherTime.substring(weatherTime.indexOf("T")+1, weatherTime.length -4), weatherValue.parameters[10].values[0]));
                        break;
                     }
                }
    
            }
        }
        
        return weatherList;
    })
    
}

function parseISOString(dateString) {
    return dateString.substring(0, dateString.indexOf("T")) + " | " + dateString.substring(dateString.indexOf("T")+1, dateString.length -4);
  }