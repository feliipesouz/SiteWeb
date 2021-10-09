
if (window.SimpleSlide) {

	new SimpleSlide ({
		slide: "quote", //Npme do atributo data-slide="principal"
		time: 5000 //Tempo de transição dos slides
	});


	new SimpleSlide ({
		slide: "portfolio",
		time: 5000,
		nav: true
	});

}


if(window.SimpleAnime) {
	new SimpleAnime();
}