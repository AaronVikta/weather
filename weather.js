function getTemp(){
    let city = document.getElementById('city').value
    if (city==""){
        alert("citl cannot be blank")
        return
    }
    const tempDisplay =document.querySelector('#temperature')
    fetch(`http://api.weatherapi.com/v1/current.json?key=360aa866819a42cfa18151047242502&q=${city}&aqi=no`,{
        mode:"cors",
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }
    })
    .then(response=> response.json())
    .then(data=>{
        tempDisplay.textContent= `The temperature in ${city} is ${data.current.temp_c}c`
    })
    .catch(error=>console.error(error))
}