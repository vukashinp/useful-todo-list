// Check off specific Todos  by clicking

$("ul").on("click", "li", function () { // Kada unosimo nove li-eve, oni ne mogu odmah da se izbrisu, tako da koristimo u pocetku UL koji oznacava gde se nalazi ono sto zelimo da brisemo, onda biramo .click npr i onda biramo u ovom slucaju LI
$(this).toggleClass("completed");	
});

// click on X to delete Todo

$("ul").on("click", "span", function(event) { 
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation(); // to znaci kada kliknemo na X da ga izbrisemo, on zahvata samo SPAN a ne sa njim i ceo LI
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val(); // val znaci da kada ukucamo nesto, u konzoli dobijemo VALUE sta smo ukucali
		$(this).val(""); // Kada dodajemo novi LI, da automatski kada pritisnemo enter, bude izbrisan iz inputa, kako bi odmah mogli da dodamo novi
		//create a new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +  "</li>");
	}
	});


$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
});