
 function removeBackground(){
	document.getElementById("slide1").style.background = "transparent";
	document.getElementById("slide2").style.background = "transparent";
	document.getElementById("slide3").style.background = "transparent";
	document.getElementById("slide4").style.background = "transparent";

}

 function setBackground(){

	var currentSlide = Math.round(window.pageYOffset/window.innerHeight);
	console.log(currentSlide);

     if(currentSlide == 0) {
	  	document.body.style.background = '#004A5A';
     }

     if(currentSlide == 1) {
	  	document.body.style.background = '#282828';
     }

     if(currentSlide == 2) {
	  	document.body.style.background = '#F479D1';
     }

     if(currentSlide == 3) {
	  	document.body.style.background = '#ffffff';
     }

     if(currentSlide == 4) {
	  	document.body.style.background = '#5EBE87';
     }
 }

