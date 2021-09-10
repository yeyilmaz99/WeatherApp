class City{
    constructor(){

    }

    async getCity(cityName){
        let cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c6402a0904eaddb568be81c5a98682b7`)
        let city = await cityResponse.json();

        return{
            city
        }
    }
}