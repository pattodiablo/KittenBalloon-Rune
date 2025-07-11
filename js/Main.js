window.onload = function() {
	
		//var Pixelratio = window.screen.availWidth / 640;
	  var width = 640  ;
	  var height = 960 ;
	  var firstRunLandscape = false;
	  
	  
	var game = new Phaser.Game(width,height, Phaser.AUTO);
	
	var play = function(){};
	
	play.prototype = {
			
			preload:function(){
			
				firstRunLandscape = game.scale.isGameLandscape;
				if(game.device.desktop){
					game.scale.forceOrientation(false, false);
				}else{
					game.scale.forceOrientation(false, true);
					
				}
				
				game.scale.enterIncorrectOrientation.add(handleIncorrect);
				game.scale.leaveIncorrectOrientation.add(handleCorrect);
				
			},
			create:function(){
				game.state.start("Boot",true,true);
					
			}
			
	};
	

	function handleIncorrect(){
     	if(!game.device.desktop){
     		document.getElementById("turn").style.display="block";
     	}
	}
	
	function handleCorrect(){
		if(!game.device.desktop){
			if(firstRunLandscape){
				
				gameRatio = window.innerWidth/window.innerHeight;		
				game.width = Math.ceil(640*gameRatio);
				game.height = 960;
				game.renderer.resize(game.width,game.height);
				game.state.start("Play");		
			}
			document.getElementById("turn").style.display="none";
		}
	}


	
	// Add the States your game has.
	
	// game.state.add("Menu", Menu);
	game.state.add("Play",play);
	game.state.add("Boot", Boot);
	game.state.add("IntroScene", IntroScene);
	game.state.add("GoverScene", goverScene);
	game.state.add("Level", Level);
	game.state.add("Level2", Level2);
	game.state.add("Level3", Level3);
	game.state.add("Level4", Level4);
	game.state.add("Level5", Level5);
	game.state.add("Level6", Level6);
	game.state.add("Level7", Level7);
	game.state.add("Level8", Level8);
	game.state.add("Level9", Level9);
	game.state.add("Level10", Level10);
	game.state.add("Level11", Level11);
	game.state.add("Level12", Level12);
	game.state.add("Level13", Level13);
	game.state.add("Level14", Level14);
	game.state.add("Level15", Level15);
	game.state.add("Level16", Level16);
	game.state.add("Level17", Level17);
	game.state.add("Level18", Level18);
	game.state.add("Level19", Level19);
	game.state.add("Level20", Level20);
	game.state.add("Level21", Level21);

	const mapIds = [1,2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20] // Define your fixed list of maps

	//const challengeNumber = Rune.getChallengeNumber() // Get today's challenge number
	
	//const mapId = mapIds[challengeNumber % mapIds.length] // Get deterministic mapId

	game.challengeLevel=1;
	game.state.start("Play",true,true);

	
	game.pauseGame=function(){
		game.paused = true;
		
	}

	game.resumeGame=function(){
		game.paused = false;

	}

	game.restartGame=function(){

		console.log("wanna restart");
		game.state.start("Level", true, true, 3);
	}

	game.getScore = function(){
		var wichLevel=0;
		switch(game.state.current){
			case "Level":
				console.log("level 1");
				wichLevel=1;
			break;
			case "Level2":
				wichLevel=2;
			break;
			case "Level3":
				wichLevel=3
			break;
			case "Level4":
				wichLevel=4;
			break;
			case "Level5":
				wichLevel=5;
			break;
			case "Level6":
				wichLevel=6;
			break;
			case "Level7":
				wichLevel=7;
			break;
			case "Level8":
				wichLevel=8;
			break;
			case "Level9":
				wichLevel=9;
			break;
			case "Level10":
				wichLevel=10;
			break;
			case "Level11":
				wichLevel=11;
			break;
			case "Level12":
				wichLevel=12;
			break;
			case "Level13":
				wichLevel=13;
			break;

			case "Level14":
				wichLevel=14;
			break;
			case "Level15":
				wichLevel=15;
			break;
			case "Level16":
				wichLevel=16;
			break;
			case "Level17":
				wichLevel=17;
			break;
			case "Level18":
				wichLevel=18;
			break;
			case "Level19":
				wichLevel=19;
			break;
			case "Level20":
				wichLevel=20;
			break;
			case "Level21":
				wichLevel=20;
			break;
			default:
				wichLevel=0;
			break;
		}
		return wichLevel;
	}




  function pauseGame() {
	isAnimating = true
	isPlaying = false
  }
  function resumeGame() {
	  console.log("resuming stuff")
	isAnimating = true
	isPlaying = true
  }
  function endGame() {
	isAnimating = false

	Rune.gameOver()
  }

  
  // Initialize Rune SDK with the start/pause/resume functions.
  // Rune will call startGame() to let this game know to start the gameplay.
  /*
  Rune.init({
	
	restartGame:game.restartGame,
	pauseGame:game.pauseGame,
	resumeGame:game.resumeGame,
	getScore:game.getScore,
  })
  */

};	

