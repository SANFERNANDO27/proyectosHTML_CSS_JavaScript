$('ul li').click(function(){
	alert('me diste click');

});
$('#boton').click(function(){
	$('#titulo1').text('Cambie el titulo jaja');
	$('#titulo1').append(' Soy el texto agregado');
});
$('#boton').on('click', function(){
	console.log('el evento on es el principal que se puede realizar con Jquery');
});
$('#miDiv').click(function(){
	$(this).addClass('clickeado');
});
$('#esconder').click(function(){
	$('.escondido').hide();
});
$('#mostrar').click(function(){
	$('.escondido').show();
}); 
$('#cuadrado').hover(
	function(){
		$(this).animate({
			'width': '200px',
			'height' : '200px'
		});
	}
	,
	function(){
		$(this).animate({
			'width': '100px',
			'height' : '100px'
		});
	}
);
$('#cuadrado2').click(function(){
	$(this).animate({
		'left' : '+=50px'
	});
});