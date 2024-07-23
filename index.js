const form = document.getElementById("form");
const latitudeinput = document.getElementById("latitude");
const longitudeinput = document.getElementById("longitude");
const resultcon = document.getElementById("result");
const NO2 = document.getElementById("NO2");
const CO = document.getElementById("CO");
const O = document.getElementById("O");
const O2 = document.getElementById("O2");
const H2O = document.getElementById("H20");
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const latitude = latitudeinput.value;
    const longitude = longitudeinput.value;
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
    const options = {
	   method: 'GET',
	   headers: {
		'x-rapidapi-key': '854af41fe1msh4f21fa4e5b9944ap1854d9jsn4268cb81a79f',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	   }
    };
    fetch(url,options)
        .then(response=>response.json())
        .then(result=> {
            let readings = result.forecasts[0];
            console.log(readings);
        NO2.textContent= readings.date;
        CO.textContent= readings.high;
        O.textContent= readings.low;
        O2.textContent= readings.text;
        resultcon.style.display='flex';
        })
})