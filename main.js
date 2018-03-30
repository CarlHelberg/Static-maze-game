var character =	{	charX : 0,
        			charY : 0,
        			charH : 20,
        			charW : 20,
        		}

var goal = {		goalX : 279,
        			goalY : 129,
        			goalH : 20,
        			goalW : 20,

			} 

var firstBlock = 	{ 	
						firstBlockX :75 ,
						firstBlockY :100 ,
						firstBlockH :50 ,
						firstBlockW :50 ,	

					}

var secondBlock = 	{ 	
						secondBlockX :150 ,
						secondBlockY :50 ,
						secondBlockH :50 ,
						secondBlockW :50 ,	

					}

var thirdBlock = 	{ 	
						thirdBlockX :100 ,
						thirdBlockY :0 ,
						thirdBlockH :50 ,
						thirdBlockW :50 ,	

					}
				

function createCharacter(){
			myCharacter = mainCanvas.getContext("2d");
			myCharacter.fillStyle = "#FF0000";
			myCharacter.fillRect(character.charX,character.charY,character.charW,character.charH);
} 

function createGoal(){
			endGoal = mainCanvas.getContext("2d");
			endGoal.fillStyle = "#00FFFF";
			endGoal.fillRect(goal.goalX , goal.goalY , goal.goalW , goal.goalH );
} 

function destroyCharacter(){

			
			myCharacter.clearRect(character.charX,character.charY,character.charW,character.charH);
}      		

function createGame(){
	var mainCanvas = document.getElementById("mainCanvas");
	 	bottomBlock = mainCanvas.getContext("2d");
		bottomBlock.fillStyle = "#000000";
		bottomBlock.fillRect(firstBlock.firstBlockX , firstBlock.firstBlockY , firstBlock.firstBlockW , firstBlock.firstBlockH);

	var topBlock = mainCanvas.getContext("2d");
		topBlock.fillStyle = "#000000";
		topBlock.fillRect(secondBlock.secondBlockX,secondBlock.secondBlockY,secondBlock.secondBlockW,secondBlock.secondBlockH);

	var midBlock = mainCanvas.getContext("2d");
		midBlock.fillStyle = "#000000";
		midBlock.fillRect(thirdBlock.thirdBlockX,thirdBlock.thirdBlockY,thirdBlock.thirdBlockW,thirdBlock.thirdBlockH);


	var oneBlock = mainCanvas.getContext("2d");
		oneBlock.fillStyle = "#000000";
		oneBlock.fillRect(thirdBlock.thirdBlockX -75,thirdBlock.thirdBlockY + 50,thirdBlock.thirdBlockW,thirdBlock.thirdBlockH);

	var twoBlock = mainCanvas.getContext("2d");
		twoBlock.fillStyle = "#000000";
		twoBlock.fillRect(firstBlock.firstBlockX + 153, firstBlock.firstBlockY , firstBlock.firstBlockW , firstBlock.firstBlockH);

	var threeBlock = mainCanvas.getContext("2d");
		threeBlock.fillStyle = "#000000";
		threeBlock.fillRect(firstBlock.firstBlockX + 153, firstBlock.firstBlockY - 65, firstBlock.firstBlockW , firstBlock.firstBlockH);		

		createGoal();
		win();
		noMoveRight();
		noMoveLeft();
		noMoveUp();	
		noMoveDown();
}

function win(){
	if (character.charX == goal.goalX && character.charY === goal.goalY){
		alert("You win!");
	}
}

function moveRight(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        			character.charX = character.charX + 1;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createGame();

}

function moveLeft(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createGame();
}

function moveDown(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY + 1;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createGame();
}

function moveUp(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 1;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createGame();	

}

function noMoveRight(){
				if (character.charX === firstBlock.firstBlockX - 20 && character.charY <= firstBlock.firstBlockY +50){
					if (character.charY >= firstBlock.firstBlockY -20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};


				if (character.charX === secondBlock.secondBlockX - 20 && character.charY <= secondBlock.secondBlockY +50){
					if (character.charY >= secondBlock.secondBlockY -20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX === thirdBlock.thirdBlockX - 20 && character.charY <= thirdBlock.thirdBlockY +50){
					if (character.charY >= thirdBlock.thirdBlockY -20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};


				if (character.charX >=280 ){

						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
	
				};

				if (character.charX === thirdBlock.thirdBlockX - 95 && character.charY <= thirdBlock.thirdBlockY + 100){
					if (character.charY >= thirdBlock.thirdBlockY + 30){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX === firstBlock.firstBlockX + 133 && character.charY <= firstBlock.firstBlockY + 50){
					if (character.charY >= firstBlock.firstBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX === firstBlock.firstBlockX + 133 && character.charY <= firstBlock.firstBlockY - 15){
					if (character.charY >= firstBlock.firstBlockY - 85){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};
}


function noMoveLeft(){
				if (character.charX === firstBlock.firstBlockX + 50 && character.charY <= firstBlock.firstBlockY + 50){
					if (character.charY >= firstBlock.firstBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};


				if (character.charX === secondBlock.secondBlockX + 50 && character.charY <= secondBlock.secondBlockY + 50){
					if (character.charY >= secondBlock.secondBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX === thirdBlock.thirdBlockX + 50 && character.charY <= thirdBlock.thirdBlockY + 50){
					if (character.charY >= thirdBlock.thirdBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX < 0 ){

						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
	
				};

				if (character.charX === thirdBlock.thirdBlockX - 25 && character.charY <= thirdBlock.thirdBlockY + 100){
					if (character.charY >= thirdBlock.thirdBlockY + 31){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX === firstBlock.firstBlockX + 203 && character.charY <= firstBlock.firstBlockY + 50){
					if (character.charY >= firstBlock.firstBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX === firstBlock.firstBlockX + 203 && character.charY <= firstBlock.firstBlockY - 15){
					if (character.charY >= firstBlock.firstBlockY - 85){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};
}

function noMoveUp(){

				if (character.charX >= firstBlock.firstBlockX - 19 && character.charX <= firstBlock.firstBlockX +50){
					if (character.charY === firstBlock.firstBlockY + 50){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX >= secondBlock.secondBlockX - 19 && character.charX <= secondBlock.secondBlockX +50){
					if (character.charY === secondBlock.secondBlockY + 50){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX >= thirdBlock.thirdBlockX - 19 && character.charX <= thirdBlock.thirdBlockX +50){
					if (character.charY === thirdBlock.thirdBlockY + 50){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charY < 0 ){

						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
	
				};

				if (character.charX >= thirdBlock.thirdBlockX - 95 && character.charX <= thirdBlock.thirdBlockX -25){
					if (character.charY === thirdBlock.thirdBlockY + 100){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY + 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				


}

function noMoveDown(){

				if (character.charX >= firstBlock.firstBlockX - 19 && character.charX <= firstBlock.firstBlockX +50){
					if (character.charY === firstBlock.firstBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX >= secondBlock.secondBlockX - 19 && character.charX <= secondBlock.secondBlockX +50){
					if (character.charY === secondBlock.secondBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX >= thirdBlock.thirdBlockX - 19 && character.charX <= thirdBlock.thirdBlockX +50){
					if (character.charY === thirdBlock.thirdBlockY - 20){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charY >= 130 ){
					
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
						
				};

				if (character.charX >= thirdBlock.thirdBlockX - 95 && character.charX <= thirdBlock.thirdBlockX -25){
					if (character.charY === thirdBlock.thirdBlockY + 30){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};

				if (character.charX >= firstBlock.firstBlockX +133 && character.charX <= firstBlock.firstBlockX +203){
					if (character.charY === firstBlock.firstBlockY - 85){
						destroyCharacter();
        				myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 1;
						myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
						createGame();
					}	
				};


}


 
	
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
        	moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
        	moveRight();		
			break;
        case 40:
            moveDown();
            break;
    }
};


