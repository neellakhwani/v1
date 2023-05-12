
 function removeBackground(){
	document.getElementById("slide1").style.background = "transparent";
	document.getElementById("slide2").style.background = "transparent";
	document.getElementById("slide3").style.background = "transparent";
	document.getElementById("slide4").style.background = "transparent";
  document.getElementById("slide5").style.background = "transparent";
  document.getElementById("slide6").style.background = "transparent";
  setBackground();
}

 function setBackground(){

	var currentSlide = Math.round(window.pageYOffset/window.innerHeight);
	console.log(currentSlide);

     if(currentSlide == 0) {
	  	document.body.style.background = '#004A5A';
	  	document.getElementById("slide1").classList.add("invisible");
	  	document.getElementById("slide2").classList.add("invisible");
	  	document.getElementById("slide3").classList.add("invisible");
	  	document.getElementById("slide4").classList.add("invisible");
		document.getElementById("slide5").classList.add("invisible");
		document.getElementById("slide6").classList.add("invisible");
     }

     if(currentSlide == 1) {
	  	document.body.style.background = '#933966';
	  	document.getElementById("slide1").classList.remove("invisible");
	  	document.getElementById("slide2").classList.add("invisible");
	  	document.getElementById("slide3").classList.add("invisible");
	  	document.getElementById("slide4").classList.add("invisible");
		document.getElementById("slide5").classList.add("invisible");
		document.getElementById("slide6").classList.add("invisible");
     }

	 if(currentSlide == 2) {
		document.body.style.background = '#8C7BD1';
		document.getElementById("slide1").classList.add("invisible");
		document.getElementById("slide2").classList.remove("invisible");
		document.getElementById("slide3").classList.add("invisible");
		document.getElementById("slide4").classList.add("invisible");
		document.getElementById("slide5").classList.add("invisible");
		document.getElementById("slide6").classList.add("invisible");
   }

     if(currentSlide == 3) {
	  	document.body.style.background = '#282828';
	  	document.getElementById("slide1").classList.add("invisible");
		document.getElementById("slide2").classList.add("invisible");
	  	document.getElementById("slide3").classList.remove("invisible");
	  	document.getElementById("slide4").classList.add("invisible");
	  	document.getElementById("slide5").classList.add("invisible");
		document.getElementById("slide6").classList.add("invisible");
     }

     if(currentSlide == 4) {
	  	document.body.style.background = '#F479D1';
	  	document.getElementById("slide1").classList.add("invisible");
		document.getElementById("slide2").classList.add("invisible");
	  	document.getElementById("slide3").classList.add("invisible");
	  	document.getElementById("slide4").classList.remove("invisible");
	  	document.getElementById("slide5").classList.add("invisible");
		document.getElementById("slide6").classList.add("invisible");
     }

     if(currentSlide == 5) {
	  	document.body.style.background = '#ffffff';
	  	document.getElementById("slide1").classList.add("invisible");
	  	document.getElementById("slide2").classList.add("invisible");
	  	document.getElementById("slide3").classList.add("invisible");
		document.getElementById("slide4").classList.add("invisible");
	  	document.getElementById("slide5").classList.remove("invisible");
		document.getElementById("slide6").classList.add("invisible");
     }

     if(currentSlide == 6) {
	  	document.body.style.background = '#5EBE87';
	  	document.getElementById("slide1").classList.add("invisible");
	  	document.getElementById("slide2").classList.add("invisible");
	  	document.getElementById("slide3").classList.add("invisible");
		document.getElementById("slide4").classList.add("invisible");
		document.getElementById("slide5").classList.add("invisible");
	  	document.getElementById("slide6").classList.remove("invisible");
     }
 }
