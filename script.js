let k = document.getElementById("themeToggle");
let u = document.getElementById("seeker");
let flag = 0;
let img=document.getElementById("iconchange");
k.addEventListener("change", function () {
    if (flag == 0) {
        document.body.style.backgroundImage = "url('background2.jpg')";
        u.style.color = "white";
        flag = 1;
    } else {
        document.body.style.backgroundImage = "url('background1.jpg')";
        u.style.color = "black";
        flag = 0;
    }
});

let input = document.getElementById("inputcity");
let btn = document.getElementById("searchbtn");
let tempText = document.getElementById("resultedtemp");
let city1 = document.getElementById("resultedcity");

btn.addEventListener("click", () => {
    let city = input.value;

    if (city === "") {
        tempText.innerText = "Enter city name ⚠️";
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=017c541b935c4b3a9ae145456260804&q=${city}&aqi=yes`)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            tempText.innerText = "City not found ❌";
            return;
        }
        tempText.innerText = data.current.temp_c + "°C";
        if(data.current.temp_c<=20)
      img.src="temp1.jpeg";
   else if(data.current.temp_c>20 && data.current.temp_c<30)
      img.src="temp2.jpeg";
   else
      img.src="temp3.jpeg";
        city1.innerText = data.location.name;
    })
    .catch(err => {
        tempText.innerText = "Something went wrong ⚠️";
        console.log(err);
    });
});