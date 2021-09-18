class UI {
    constructor() {
        this.alert = document.getElementById('alert');
        this.weathers = document.getElementById('weathers');
        this.fixedWeathers = document.getElementById('fixed-weathers');
        this.fixedWeathers2 = document.getElementById('fixed2-weathers');
    }

    showAlert(text) {
        this.alert.innerHTML = `
        ${text} is not found`
    }

    showCity(city) {
        let html = `
            <div class="card card-body mt-4">
                <ul class="list-group">
                    <li class="list-group-item">
                        City Name: ${city.name}
                    </li>
                    <li class="list-group-item">
                        Country : ${city.sys.country};
                    </li>
                    <li class="list-group-item">
                        Weather: ${city.weather[0].main},${city.weather[0].description}
                    </li>
                    <li class="list-group-item">
                        Temperature : ${Math.floor(city.main.temp - 271)}°C  
                    </li> 
                    <li class="list-group-item">
                    Feels Like :${Math.floor(city.main.feels_like - 271)}°C 
                    </li>
                    <li class="list-group-item">
                        Pressure : ${city.main.pressure}
                    </li>
                    <li class="list-group-item">
                        Humidity : ${city.main.humidity}
                    </li>
                </ul>
                <span class="text-muted">This is the current weather situation of ${city.name}</span>
            </div> `
        this.weathers.innerHTML = html;
    }

    clear() {
        this.weathers.innerHTML = '';
        this.alert.innerHTML = '';
    }

    getFixed(city) {
        let html = `
        <h4 class="mt-5">${city.name}</h4>
            <div class="card card-body ">
                <ul class="list-group">

                    <li class="list-group-item">
                        Weather: ${city.weather[0].main},${city.weather[0].description}
                    </li>
                    <li class="list-group-item">
                        Temperature : ${Math.floor(city.main.temp - 271)}°C  
                    </li> 
                    <li class="list-group-item">
                    Feels Like :${Math.floor(city.main.feels_like - 271)}°C 
                    </li>
                </ul>
                <span class="text-muted">This is the current weather situation of ${city.name}</span>
            </div> `
        this.fixedWeathers.innerHTML += html;
    }
    getFixed2(city) {
        let html = `
        <h4 class="mt-5">${city.name}</h4>
            <div class="card card-body ">
                <ul class="list-group">

                    <li class="list-group-item">
                        Weather: ${city.weather[0].main},${city.weather[0].description}
                    </li>
                    <li class="list-group-item">
                        Temperature : ${Math.floor(city.main.temp - 271)}°C  
                    </li> 
                    <li class="list-group-item">
                    Feels Like :${Math.floor(city.main.feels_like - 271)}°C 
                    </li>
                </ul>
                <span class="text-muted">This is the current weather situation of ${city.name}</span>
            </div> `
        this.fixedWeathers2.innerHTML += html;
    }

}
