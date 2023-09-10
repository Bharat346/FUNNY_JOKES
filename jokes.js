/*let city =document.getElementById(`txt`).value;
 

let btn = document.getElementById(`btn`)
btn.addEventListener('click',function(e){
	console.log(city)
	e.preventDefault()
	fetch(`https://goweather.herokuapp.com/weather/%7B${city}%7D`).then(function(response){
    return response.json();

    }).then(function(result){
    console.log(result);
	document.write(`${city} weather: <br> day-1:   <br>`)
	document.write(`temp:${result.forecast[0].temperature} <br> wind:${result.forecast[0].wind}<br> climate:${result.description}`)
	document.write(`<br>`)
	document.write(` <br> day-2:   <br>`)
	document.write(`temp:${result.forecast[1].temperature} <br> wind:${result.forecast[1].wind}<br> climate:${result.description}`)
	document.write(`<br>`)
	document.write(` <br> day-3:   <br>`)
	document.write(`temp:${result.forecast[2].temperature} <br> wind:${result.forecast[2].wind}<br> climate:${result.description}`)
	document.write(`<br>`)
    }).catch(function(error){
      console.log(error)
    })

})
*/
var p= document.createElement("p");
var p1= document.createElement("p");
var btn = document.getElementById("btn")
btn.addEventListener('click', function(){
	fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=96a48f4099dc89346354919fc346').then(function(response){
    return response.json();

    }).then(function(result){
    console.log(result);
	p.style.color="aqua"
	p.innerHTML=`Hindi joke:<br>  ${result.jokeContent}`
	c0.appendChild(p);
    }).catch(function(error){
    console.log(error)
    })

	fetch('https://api.chucknorris.io/jokes/random').then(function(response){
    return response.json();

    }).then(function(result){
    console.log(result);
	p1.style.color="green"
	p1.innerHTML=`English joke:<br>  ${result.value}`
	c0.appendChild(p1);
    }).catch(function(error){
    console.log(error)
    })
})
