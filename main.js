let btn = document.getElementById("btn");
let time = new Date().getHours();
let text;

btn.addEventListener('click',myFunction)
function myFunction(){
	if(time < 10){
		text = "Good Morning";
	}
	else if(time < 20){
		text = "Good Evening";
	}
	else{
		text = "Good Night";
	}
	let	x = document.getElementById("paragraph").innerHTML = text;
}