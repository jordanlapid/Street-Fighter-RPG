

//variables
	//create variables for life counters (player 1, player 2)

//jquery
	//create attack function that decrements life counters
	//create function to move div into player divs
		//https://stackoverflow.com/questions/4291151/jquery-count-child-elements
			//first click moves into player 1 div
			//second click moves into player 2 div
	//conditional statement to check if there are two players
		//if there are two players selected, then the attack function works
	//conditional to check life
		//if player 1 life drops to 0, then game over
		//if player 2 life drops to 0, then remove the div from the game
	//conditional to check win condition
		//if there are no opponents 



var divLength1 = $(".player1").children().length;
var divLength2 = $(".player2").children().length;
var player1Health = 100;
var player2Health = 100;
var player1Element;
var player2Element;
var pWins = 0;
var cWins = 0;
var dGames = 0;



function player1Damage(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function player2Damage(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function dealDamage(){
	if(player1Health > 0 && player2Health > 0){
		var p1Damage = player1Damage(1,50)
		var p2Damage = player1Damage(1,50);
		player1Health = player1Health - p2Damage;
		player2Health = player2Health - p1Damage;
		$(".player1 .portrait .health").html(player1Health);
		$(".player2 .portrait .health").html(player2Health);
		$(".sentence1").html($(player1Element).attr("class").split(' ')[0] + " does " + p1Damage + " to " + $(player2Element).attr("class").split(' ')[0]);
		$(".sentence2").html($(player2Element).attr("class").split(' ')[0] + " does " + p2Damage + " to " + $(player1Element).attr("class").split(' ')[0]);
	}
}


$(document).ready(function() {

$(document).keypress(function(keyHit) {
	
	if(keyHit.which === 13) {
		if(player2Health <=0 && player1Health <= 0){
			player1Health = 100;
			player2Health = 100;
			$(".player1 .portrait .health").html(player1Health);
			$(".player2 .portrait .health").html(player2Health);
			$(".instructions").html("Ready");
		} else if (player1Health <= 0) {

			location.reload();

			$(".pWins").html(storeWins);
			$(".cWins").html(storeLosses);
			$(".dGames").html(storeDraws);

		} else {
			player1Health = 100;
			player2Health = 100;
			$(".player1 .portrait .health").html(player1Health);
			$(".instructions").html("Select another opponent!");
			divLength2 = $(".player2").children().length;
			}
		}

});

$(".portrait").click(function() {

	if(divLength1 === 0 && divLength2 === 0) {
		$(this).appendTo(".player1");
		console.log(this);
		player1Element = this;
	} else if(divLength1 === 1 && divLength2 === 0) {
		$(this).appendTo(".player2");
		player2Element = this;
		console.log(this);
	} else if(divLength1 === 0 && divLength2 === 1) {
		$(this).appendTo(".player1");
		player1Element = this;
		console.log(this);
	} else {

	}

	divLength1 = $(".player1").children().length;
	divLength2 = $(".player2").children().length;

	if(divLength1 === 1 && divLength2 === 1){
		$(".instructions").html("Ready");
	}


});

$(".attack").click(function(){
	
	if(divLength1 === 0 && divLength2 === 0) {
		$(".instructions").html("Choose Player 1"); 
	} else if(divLength1 === 1 && divLength2 === 0) {
		if(pWins === 0){
		$(".instructions").html("Choose CPU"); 
	}
	} else if(divLength1 === 0 && divLength2 === 1) {
		$(".instructions").html("Choose Player 1"); 
	} else {
		if(pWins === 0){
			$(".instructions").html("Match 1. Fight!");
			dealDamage();
		} else if (pWins === 1){
			$(".instructions").html("Match 2. Fight!");
			dealDamage();
		} else if (pWins === 2) {
			$(".instructions").html("Final Match. Fight!");
			dealDamage();
		}
	}

		if(player2Health <=0 && player1Health <= 0) {
			$(".instructions").html("Draw! Press Enter to try again.")
			dGames++;
			$(".dGames").html(dGames)
		} else if (player2Health <= 0){
			if(pWins < 2) {
				$(".instructions").html("Player 1 Wins! Press Enter to Continue.")
				pWins++;
				$(".pWins").html(pWins)
				player2Element.remove();
			} else if (pWins >= 2){
				pWins++;
				$(".instructions").html("GG. You Win!")
				$(".pWins").html(pWins)
				player2Element.remove();

			}
		} else if (player1Health <= 0) {
			$(".instructions").html("CPU Wins! Press Enter to Start Over.")
			cWins++;
			$(".cWins").html(cWins)
			player1Element.remove();
		}

});


});
