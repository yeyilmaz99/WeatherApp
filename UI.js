class UI{
    constructor(){
        this.weathers= document.getElementById('weathers');
        this.alert = document.getElementById('alert')
    }

    showAlert(text){
        this.alert.innerHTML = `
            ${text} is not found
        `
    }

    showCity(city){
        this.weathers.innerHTML=`
            <div class="card card-body mt-4">
                <ul class="list-group">
                    <li class="list-group-item">
                        Name : ${city.name}
                    </li>
                    <li class="list-group-item">
                        Country : ${city.sys.country}
                    </li>
                    <li class="list-group-item">
                        Weather : ${city.weather[0].main}
                    </li>
                    <li class="list-group-item">
                        Weather Description : ${city.weather[0].description}
                    </li>
                    <li class="list-group-item">
                        Temperature : ${Math.floor(city.main.temp-271)}°C
                    </li>
                    <li class="list-group-item">
                        Feels Like Temperature : ${Math.floor(city.main.feels_like-271)}°C
                    </li>
                    <li class="list-group-item">
                        Max Temperature : ${Math.floor(city.main.temp_max-271)}°C
                    </li>
                    <li class="list-group-item">
                        Min Temperature : ${Math.floor(city.main.temp_min-271)}°C
                    </li>
                    <li class="list-group-item">
                        Pressure : ${city.main.pressure}
                    </li>
                    <li class="list-group-item">
                        Humidity : ${city.main.humidity}
                    </li>
                    <li class="list-group-item">
                        Wind Speed : ${city.wind.speed}
                    </li>
                    <li class="list-group-item">
                        Wind Degree : ${city.wind.deg}
                    </li>
                </ul>
                <span class="text-muted mt-2">This is the current weather situation of the city!</span>
            </div>
        
        `
    }

    clear(){
        this.weathers.innerHTML='';
        this.alert.innerHTML=''
    }


}