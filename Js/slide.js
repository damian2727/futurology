let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
	muestraSlides(indice+=n);

}

function posicionSlide(n){
	muestraSlides(indice=n);
}

setInterval(function tiempo(){
	muestraSlides(indice += 1)
},4000);

function muestraSlides(n){
	let i;
	let slides = document.getElementsByClassName('miSlider');
	let barras = document.getElementsByClassName('barra');

	if(n > slides.length){
		indice = 1;
	}
	if (n < 1) {
		indice = slides.length; 
	}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	for(i = 0; i < slides.length; i++){
		barras[i].className = barras[i].className.replace("active", "");
	}
	slides[indice-1].style.display = 'block';
	barras[indice-1].className += ' active';
}


let indice2 = 1;
muestraSlides2(indice2);

function avanzaSlide2(n){
	muestraSlides2(indice2+=n);

}



function muestraSlides2(n){
	let i;
	let tables = document.getElementsByClassName('miTables');
	
	if(n > tables.length){
		indice2 = 1;
	}
	if (n < 1) {
		indice2 = tables.length; 
	}
	for(i = 0; i < tables.length; i++){
		tables[i].style.display = 'none';
	}
	
	tables[indice2 - 1].style.display = 'block';
	
}

let indice3 = 1;
muestraSlides3(indice3);

function avanzaSlide3(n){
	muestraSlides3(indice3+=n);

}



function muestraSlides3(n){
	let i;
	let tables3 = document.getElementsByClassName('miSponsors');
	
	if(n > tables3.length){
		indice3 = 1;
	}
	if (n < 1) {
		indice3 = tables3.length; 
	}
	for(i = 0; i < tables3.length; i++){
		tables3[i].style.display = 'none';
	}
	
	tables3[indice3 - 1].style.display = 'block';
	
}