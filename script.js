var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("back");
var random = document.getElementById("random");

function backGrad() {
	body.style.background = "linear-gradient(to right," + color1.value +","+ color2.value +")";
    css.textContent = body.style.background 
    + ";"
}

function RandomNum(){
	return Math.floor(Math.random()*255);
	 
}

function ConvertToHex(){
	var hex = RandomNum().toString(16);
	if (hex.length < 2 ){
		hex = "0" + hex;
	}
	return hex;
}

function pickColor(){
	var pick = "#"+ ConvertToHex()+ConvertToHex()+ConvertToHex();
	return pick;
}

function finalpickColor(){
	color1.value=pickColor();
	color2.value=pickColor();
	backGrad();
}




color1.addEventListener("input",backGrad);
color2.addEventListener("input",backGrad);
random.addEventListener("click",finalpickColor);