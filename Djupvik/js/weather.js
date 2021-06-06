export class Weather {
    constructor(date, time, temperature) {
        this.date = date;
        this.time = time;
        this.temperature = temperature;
    }

    getDate(){
        return this.date;
    }

    getTime(){
        return this.time;
    }

    getTemperature(){
        return this.temperature;
    }
}