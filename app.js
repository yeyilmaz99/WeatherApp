const city = new City();
const ui = new UI();

const search = document.getElementById('search')

search.addEventListener('keyup',(event) =>{
    ui.clear();
    let text = event.target.value;
    if(text !==''){
        city.getCity(text)
         .then(res => {
             if(res.city.length === 0){
                ui.showAlert();
             }else{
                ui.showCity(res.city);
             }
         }).catch(err =>{
             ui.showAlert(text)
         })
    }
})