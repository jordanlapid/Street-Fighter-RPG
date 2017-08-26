

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
		player1Health = player1Health - player2Damage(5,30);
		player2Health = player2Health - player1Damage(5,30);
		$(".player1 .portrait .health").html(player1Health);
		$(".player2 .portrait .health").html(player2Health);
	}
}

function resetGame(){

}

function nextRound(){

}

function nextMatch(){

}

$( document ).ready(function() {

$(".portrait").click(function() {

	if(divLength1 === 0 && divLength2 === 0) {
		$(this).appendTo(".player1");
		player1Element = this;
	} else if(divLength1 === 1 && divLength2 === 0) {
		$(this).appendTo(".player2");
		player2Element = this;
	} else if(divLength1 === 0 && divLength2 === 1) {
		$(this).appendTo(".player1");
		player1Element = this;
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
		$(".instructions").html("Choose CPU"); 
	} else if(divLength1 === 0 && divLength2 === 1) {
		$(".instructions").html("Choose Player 1"); 
	} else {
		$(".instructions").html("Round 1. Fight!");
		dealDamage();
	}

	if(player1Health > 0 || player2Health > 0){

		if(player2Health <=0 && player1Health <= 0) {
			$(".instructions").html("Draw!")
			dGames++;
			$(".dGames").html(dGames)
		} else if (player2Health <= 0){
			$(".instructions").html("Player 1 Wins!")
			pWins++;
			$(".pWins").html(pWins)
		} else if (player1Health <= 0) {
			$(".instructions").html("CPU Wins!")
			cWins++;
			$(".cWins").html(cWins)
		}
	}

});


});
