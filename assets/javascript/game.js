$(document).ready(function() {
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




    var player;
    var computer;


    // --------------------------set object values 


    var luke = new fighter(70, 90, 50, 60, "assets/images/lukeskywalker.jpg");
    var yoda = new fighter(60, 40, 40, 90, "assets/images/yoda.jpg");
    var han = new fighter(80, 50, 90, 50, "assets/images/hansolo.jpg");
    var vader = new enemy(90, 100, 90, 40, "assets/images/darthvader.jpg");
    var stormtrooper = new enemy(20, 20, 10, 30, "assets/images/stormtrooper.jpg");
    var atat = new enemy(100, 100, 90, 10, "assets/images/atat.jpg");
    var tiefighter = new enemy(20, 50, 40, 100, "assets/images/tiefighter.jpg");

    //------------------------set object reset values 
    function resetAllValues (){

    luke = new fighter(70, 90, 50, 60, "assets/images/lukeskywalker.jpg");
    yoda = new fighter(60, 40, 40, 90, "assets/images/yoda.jpg");
    han = new fighter(80, 50, 90, 50, "assets/images/hansolo.jpg");
    vader = new enemy(90, 100, 90, 40, "assets/images/darthvader.jpg");
    stormtrooper = new enemy(20, 20, 10, 30, "assets/images/stormtrooper.jpg");
    atat = new enemy(100, 100, 90, 10, "assets/images/atat.jpg");
    tiefighter = new enemy(20, 50, 40, 100, "assets/images/tiefighter.jpg");

        console.log("reset button works")

        $("#reset").addClass("hidden")
        $(".character").removeClass("hidden btn-primary")
        $("#pickChar").removeClass("hidden")
        $("#userActions").addClass("hidden")
        $("#player_character").html("").attr("src", "").addClass("hidden").data("value", "")
        $("#pickEnemy").addClass("hidden")
        $("#selector").addClass("hidden")
        $("#enemySelector").addClass("hidden")
        $("#enemy_character").addClass("hidden")
        $("#lukeskywalker").addClass("btn-primary")
        $(".enemy").addClass("hidden")
        $(".container").removeClass("hidden")
        $(".statChange").addClass("hidden")

        //----reset all vars 
        var player = "";
        var computer = "";

    }

    //----------------------------------- set elements with attribute value, object 

    $("#lukeskywalker").data("value", luke)
    $("#yoda").data("value", yoda)
    $("#hansolo").data("value", han)
    $("#vader").data("value", vader)
    $("#stormtrooper").data("value", stormtrooper)
    $("#atat").data("value", atat)
    $("#tiefighter").data("value", tiefighter)

    //------------------------------



    //-------------------------------- clean up code ----
    function getStats() {
        $(".btn-outline").removeClass("btn-primary playerCharacterIs")
        $(this).addClass("btn-primary playerCharacterIs")
        console.log($(this))
        console.log($(this).data("value"))
    }

    function getEnemyStats() {
        $(".btn-outline").removeClass("btn-primary enemyCharacterIs")
        $(this).addClass("btn-primary enemyCharacterIs")
        console.log($(this))
        console.log($(this).data("value"))
 
    }

    function onMouseOver() {
        $(this).next(".popup").css('display', 'inline').html("<ul>HP:" + $(this).data("value").hp + "<ul>Attack:" + $(this).data("value").attack + "<ul>Defense:" + $(this).data("value").defense + "<ul>Speed:" + $(this).data("value").speed);

    }


    function onEnemyMouseOver() {
        $(this).next(".popup2").css('display', 'inline').html("<ul>HP:" + $(this).data("value").hp + "<ul>Attack:" + $(this).data("value").counterattack + "<ul>Defense:" + $(this).data("value").defense + "<ul>Speed:" + $(this).data("value").speed);

    }


    function onMouseOut() {
        $(this).next('.popup').css('display', 'none');

    }

      function onEnemyMouseOut() {
        $(this).next('.popup2').css('display', 'none');

    }


    

    var playerIndex = [luke, yoda, han];
    var enemyIndex = [vader, stormtrooper, atat, tiefighter]

    // switch between pickChar and reset buttons // clean this all up by addding a reset to hidden/reset to appear class

    $("#pickChar").click(function() {
        console.log("pickChar button works")
        $("#pickChar").addClass("hidden")
        $(".character").addClass("hidden")
        $("#reset").removeClass("hidden")
        $("#pickEnemy").removeClass("hidden")
        $("#selector").removeClass("hidden")
        //player_character image is the image with playerCharacterIs
        $("#player_character").html($("<img>").attr("src", $(".playerCharacterIs").data("value").source)).removeClass().addClass("img-thumbnail maxWidth");
        $("#enemySelector").removeClass("hidden")
        $(".enemy").removeClass("hidden")
        $("#player_character").data("value", $(".playerCharacterIs").data("value"))
        player = $(".playerCharacterIs").data("value")
        // check if playercharacter has object value 

        console.log(player)
    })

    $("#reset").click(resetAllValues)

    // create player character object 

    $(".character")
        .click(getStats)
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut)
        .removeClass("btn-primary")


    //-----------------------------create enemy object 
    $(".enemy ")
        .click(getEnemyStats)
        .on("mouseover", onEnemyMouseOver)
        .on("mouseout", onEnemyMouseOut)
        .removeClass("btn-primary")
        //---------------------------

    // append enemy stats to computer 

    $("#enemySelector").click(function() {
        $("#enemy_character").html($("<img>").attr("src", $(".enemyCharacterIs").attr("src"))).removeClass().addClass("img-thumbnail maxWidth");
        $(".enemy").addClass("hidden")
        $("#enemySelector").addClass("hidden")
        $("#enemySelector").addClass("hidden")
        $("#userActions").removeClass("hidden")
        computer = $(".enemyCharacterIs").data("value")
        console.log(computer)


    })

    // create handlers for buttons. 
    // each handle will call from object properties and combine differences 
    // it will also generate a predetermined stat boost, with a random value 


    	var attackCount = 0; 

    $("#attack").click(function() {
    	attackCount++
        var computerLose;
        console.log("attackCount is" + (attackCount*Math.floor(10*Math.random())))
        console.log("attack button works")
        console.log("player hp is" + player.hp)
        console.log("computer hp is" + computer.hp)
  		var calcPlayerDmg = computer.counterattack - player.defense;
  		if (calcPlayerDmg > 0) {
        	player.hp = player.hp - calcPlayerDmg
  		} else {
  			console.log("damage zero")
  		}

  		calcComputerDmg = player.attack - computer.defense
  		if (calcComputerDmg > 0) {
  			computer.hp = computer.hp - calcComputerDmg
  		} else {
  			console.log(" comp damage zero")
  		}

        console.log(" new player hp is" + player.hp)
        console.log("new computer hp is" + computer.hp)
       	$(".statChange").removeClass("hidden").html("Your HP is now " + player.hp + "<ul>Your Attack is now " + player.attack).css("color", "red")

        if (computer.hp <= 0 ) {
        	console.log("computer died")
        	computerLose ++
        	console.log(computerLose)
        	$("#enemy_character").addClass("hidden")
        	player.attack = player.attack + attackCount*5
       		

        } 
        if (player.hp <= 0) {
        	console.log("player died")
        	$("#player_character").addClass("hidden")
        }

  		$(".statChange").removeClass("hidden").html("Your HP is now " + player.hp +"<ul>Your Attack is now "+ player.attack + "<ul> Your Defense is now " + player.defense + "<ul>Your speed is now " + player.speed).css("color", "red");



    })

    var defenseCount = 0;

    $("#defend").click(function() {
    	defenseCount ++ 
        console.log("defend button works")
        console.log(player.defense)
  		var calcPlayerDmg = computer.counterattack - player.defense;
  		player.hp = player.hp - 5;
  		player.defense = player.defense + parseInt((defenseCount*Math.floor(10*Math.random())))
  		
  		/*var calcNewDefense = (10*defenseCount*Math.floor(Math.random()))*/
  		console.log("player defense is now" + player.defense)

  		$(".statChange").removeClass("hidden").html("Your HP is now " + player.hp +"<ul>Your Attack is now "+ player.attack + "<ul> Your Defense is now " + player.defense + "<ul>Your speed is now " + player.speed).css("color", "red");
        
    })

    var dodgeCount = 0;

    $("#dodge").click(function() {
        console.log("dodge button works")
		playerDodge = player.speed * Math.floor(10*Math.random())
		computerDodge = computer.speed * Math.floor(10*Math.random())
		console.log(playerDodge)
		console.log(computerDodge)
		if ( playerDodge >= computerDodge ) {
			computer.counterattack = computer.counterattack - 10 
			console.log(computer.counterattack)
		} else {
			player.hp - player.hp - computer.counterattack
		}
  		$(".statChange").removeClass("hidden").html("Your HP is now " + player.hp +"<ul>Your Attack is now "+ player.attack + "<ul> Your Defense is now " + player.defense + "<ul>Your speed is now " + player.speed).css("color", "red");


    })


})


// write handlers directing player back to selection screen and hide attack/defnes/dodge button