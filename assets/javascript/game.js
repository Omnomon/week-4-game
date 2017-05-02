

$(document).ready(function(){
	// choose your fighter
		// create fighter and enemy objects 
	function fighter(hp, attack, defense, speed) {
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.speed = speed;
	}

	function enemy(hp, counterattack, defense, speed) {
		this.hp = hp;
		this.counterattack = counterattack;
		this.defense = defense;
		this.speed = speed;
	}
	var player; 
	var computer;
	var luke = new fighter(70, 90, 50, 60);
	var yoda = new fighter(60, 40, 40, 90);
	var han = new fighter(80, 50, 90, 50);
	var vader = new enemy(90, 100, 90, 40);
	var stormtrooper = new enemy(20, 20, 10, 30);
	var atat = new enemy(100, 100, 90, 10);

	//create secondary button for play 

	$("#pickChar").click(function(){
		console.log("pickChar button works")

		if ($(".starter"))

		// switch between pickChar and reset buttons 

		$("#pickChar").addClass("hidden")
		$(".character").addClass("hidden")
		$("#userActions").removeClass("hidden")
		$("#reset").removeClass("hidden")



		//----------
	})

	$("#reset").click(function(){
		console.log("reset button works")

		// switch between pickChar and reset buttons and action groups

		$("#reset").addClass("hidden")
		$(".character").removeClass("hidden")
		$("#pickChar").removeClass("hidden")
		$("#userActions").addClass("hidden")

		//----------

		//----reset all vars 
		var player = "";
		var computer = "";

	})


		// pick character to play as 

	$("#lukeskywalker").click(function(){	
/*		console.log("luke button works")*/
		$(".btn-outline").removeClass("btn-primary")
		$("#lukeskywalker").addClass("btn-primary")
		player = luke
		console.log(luke)

	}).on("mouseover", function(){
		$(this).next(".popup").css('display', 'inline');
	}).on("mouseout", function(){
		$(this).next('.popup').css('display', 'none');
	})

	$("#yoda").click(function(){
/*		console.log("yoda button works")*/
		$(".btn-outline").removeClass("btn-primary")
		$("#yoda").addClass("btn-primary")
		player = yoda
		console.log(yoda)


	}).on("mouseover", function(){
		$(this).next(".popup").css('display', 'inline');
	}).on("mouseout", function(){
		$(this).next('.popup').css('display', 'none');
	})


	$("#hansolo").click(function(){
/*		console.log("han button works")*/
		$(".btn-outline").removeClass("btn-primary")
		$("#hansolo").addClass("btn-primary")
		player = han 
		console.log(han)

	}).on("mouseover", function(){
		$(this).next(".popup").css('display', 'inline');
	}).on("mouseout", function(){
		$(this).next('.popup').css('display', 'none');
	})

	//-----------------------------





// create handlers for buttons 

	$("#attack").click(function(){
		console.log("attack button works")
	})

	$("#defend").click(function(){
		console.log("defend button works")
	})

	$("#dodge").click(function() {
		console.log("dodge button works")
	})


})