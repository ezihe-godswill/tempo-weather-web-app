let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let temperature = document.querySelector(".temperature");

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d99763d07996d85ed9dfd4dd587bd5d8')
    .then(response => response.json())
    .then(data =>{
        // console.log(data)
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descriptionValue = data['weather'][0]['description'];

        // name.innerHTML = nameValue;
        temperature.innerHTML = tempValue;
        description.innerHTML = descriptionValue;
    } )
    
.catch(err => alert("wrong city name!"))
})