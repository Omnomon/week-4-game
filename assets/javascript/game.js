

$(document).ready(function(){
	// choose your fighter
		// create fighter and enemy objects 

	function fighter(hp, attack, defense, speed, source) {
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.speed = speed;
		this.source = source;
	}

	function enemy(hp, counterattack, defense, speed, source) {
		this.hp = hp;
		this.counterattack = counterattack;
		this.defense = defense;
		this.speed = speed;
		this.source = source;
	}

	function getStats() {

	}

	var player; 
	var computer;


		var luke = new fighter(70, 90, 50, 60, "assets/images/lukeskywalker.jpg");
		var yoda = new fighter(60, 40, 40, 90, "assets/images/yoda.jpg");
		var han = new fighter(80, 50, 90, 50, "assets/images/hansolo.jpg");
		var vader = new enemy(90, 100, 90, 40, "assets/images/darthvader.jpg");
		var stormtrooper = new enemy(20, 20, 10, 30, "assets/images/stormtrooper.jpg");
		var atat = new enemy(100, 100, 90, 10,"assets/images/atat.jpg");
		var tiefighter = new enemy(20, 50, 40, 100,"assets/images/tiefighter.jpg");



	var playerIndex = [luke, yoda, han];
	var enemyIndex = [vader, stormtrooper, atat, tiefighter]	

	// switch between pickChar and reset buttons 

	$("#pickChar").click(function(){
		console.log("pickChar button works")


		$("#pickChar").addClass("hidden")
		$(".character").addClass("hidden")
		$("#reset").removeClass("hidden")
		$("#pickEnemy").removeClass("hidden")
		$("#selector").removeClass("hidden")
	})
/*
	$("#pickEnemy").click(function(){
		$("#pickEnemy").removeClass("hidden")	
	})*/

	$("#reset").click(function(){
		console.log("reset button works")

		$("#reset").addClass("hidden")
		$(".character").removeClass("hidden")
		$("#pickChar").removeClass("hidden")
		$("#userActions").addClass("hidden")
		$("#player_character").html("").attr("src","").addClass("hidden")
		$("#pickEnemy").addClass("hidden")
		$("#selector").addClass("hidden")

		//----reset all vars 
		var player = "";
		var computer = "";

	})

	//----------------------------------- is there abetter way to do this =? 

	$("#lukeskywalker").data("value", luke)
	$("#yoda").data("value", yoda)
	$("#hansolo").data("value", han)
	$("#vader").data("value", vader)
	$("#stormtrooper").data("value", stormtrooper)
	$("#atat").data("value", atat)
	$("#tiefighter").data("value", tiefighter)


		// pick character to play as, pick enemy to  ----- clean up later 

	$("#lukeskywalker").click(function(){	
/*		console.log("luke button works")*/
		$(".btn-outline").removeClass("btn-primary")
		$(this).addClass("btn-primary")
		console.log($(this)) 		
		console.log($(this).data("value"))
	}).on("mouseover", function(){
		$(this).next(".popup").css('display', 'inline').html("<ul>HP:" + $(this).data("value").hp +  "<ul>Attack:" + $(this).data("value").attack + "<ul>Defense:" + $(this).data("value").defense + "<ul>Speed:" + $(this).data("value").speed);
	}).on("mouseout", function(){
		$(this).next('.popup').css('display', 'none');
	})

	$("#yoda").click(function(){
		player = yoda

/*		console.log("yoda button works")*/
		$(".btn-outline").removeClass("btn-primary")
		$(this).addClass("btn-primary")
		console.log(yoda)


	}).on("mouseover", function(){
		$(this).next(".popup").css('display', 'inline').html("<ul>HP:" + yoda.hp +  "<ul>Attack:" + yoda.attack + "<ul>Defense:" + yoda.defense + "<ul>Speed:" + yoda.speed);;
	}).on("mouseout", function(){
		$(this).next('.popup').css('display', 'none');
	})


	$("#hansolo").click(function(){
		player = han

/*		console.log("han button works")*/
		$(".btn-outline").removeClass("btn-primary")
		$(this).addClass("btn-primary")
		console.log(han)

	}).on("mouseover", function(){
		$(this).next(".popup").css('display', 'inline').html("<ul>HP:" + han.hp +  "<ul>Attack:" + han.attack + "<ul>Defense:" + han.defense + "<ul>Speed:" + han.speed);
	}).on("mouseout", function(){
		$(this).next('.popup').css('display', 'none');
	})

	$("#pickChar").click(function(){
		//player_character image is the image with btn-primary src 

		$("#player_character").html($("<img>").attr("src",$(".btn-primary").attr("src") )).removeClass().addClass("img-thumbnail");

		// check if playercharacter has object value 

		console.log(player)
	})

	//-----------------------------


// create pickEnemy 
/*	$("#selector").click(function(){
		computer =  
	})
*/



// create handlers for buttons. 
// each handle will call from object properties and combine differences 
// it will also generate a predetermined stat boost, with a random value 

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