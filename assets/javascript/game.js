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
        $("#player_character").data("value", $(".playerCharacterIs").data("value"))
        player = $(".playerCharacterIs").data("value")
        // check if playercharacter has object value 

        console.log(player)
    })

    $("#reset").click(function() {
        console.log("reset button works")

        $("#reset").addClass("hidden")
        $(".character").removeClass("hidden btn-primary")
        $("#pickChar").removeClass("hidden")
        $("#userActions").addClass("hidden")
        $("#player_character").html("").attr("src", "").addClass("hidden")
        $("#pickEnemy").addClass("hidden")
        $("#selector").addClass("hidden")
        $("#enemySelector").addClass("hidden")
        $("#enemy_character").addClass("hidden")
        $("#lukeskywalker").addClass("btn-primary")

        //----reset all vars 
        var player = "";
        var computer = "";

    })

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
        computer = $(".enemyCharacterIs").data("value")
        console.log(computer)


    })

    // create handlers for buttons. 
    // each handle will call from object properties and combine differences 
    // it will also generate a predetermined stat boost, with a random value 

    $("#attack").click(function() {
        console.log("attack button works")

    })

    $("#defend").click(function() {
        console.log("defend button works")
    })

    $("#dodge").click(function() {
        console.log("dodge button works")
    })


})
