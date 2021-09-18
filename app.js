const city = new City();
const ui = new UI();

const search = document.getElementById('search')
document.addEventListener('DOMContentLoaded',(event)=>{
    let cities = ['istanbul','ankara','izmir','eskisehir'];
        cities.forEach(city1 =>{
            city.getCity(city1)
             .then(res =>{
                ui.getFixed(res.city);
             })
        })
});
document.addEventListener('DOMContentLoaded',(event)=>{
    let cities = ['london','ankara','izmir','eskisehir'];
        cities.forEach(city1 =>{
            city.getCity(city1)
             .then(res =>{
                ui.getFixed2(res.city);
             })
        })
});

search.addEventListener('keyup',(event) => {
    ui.clear();
    let text = event.target.value;
    if(text !== ''){
        city.getCity(text)
         .then(res => {
             if(res.city.length ===0){
                 ui.showAlert();
             }else{
                 ui.showCity(res.city);
             }
         })
            .catch(err => {
                ui.showAlert(text);
            })
    }
})
