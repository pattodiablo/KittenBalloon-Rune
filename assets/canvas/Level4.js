
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level4.
 */
function Level4() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level4_proto = Object.create(Phaser.State.prototype);
Level4.prototype = Level4_proto;
Level4.prototype.constructor = Level4;

Level4.prototype.init = function (vidas) {
	

	vidasTotales = vidas;
	
		this.LevelNumber = 4;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level4.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level4.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, -21.0, 681.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo2 = new Platform1(this.game, 518.0, 331.0);
	_Plataformas.add(_platformTipo2);
	
	var _platformTipo3 = new Platform1(this.game, -159.0, 173.0);
	_Plataformas.add(_platformTipo3);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 522.0, 265.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 206.0, 613.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 72.0, 109.0);
	_Coins.add(_coinStar2);
	
	var _Enemies = this.add.group();
	
	var _EnemyL2 = this.add.group();
	
	var _enemy = new Enemy2(this.game, 13.0, 83.0);
	_EnemyL2.add(_enemy);
	
	var _lives = this.add.group();
	
	var _vida = new Vida(this.game, 15.0, 20.0);
	_lives.add(_vida);
	
	var _vida1 = new Vida(this.game, 86.0, 20.0);
	_lives.add(_vida1);
	
	var _vida2 = new Vida(this.game, 158.0, 20.0);
	_lives.add(_vida2);
	
	var _EnemyL3 = this.add.group();
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(471.0, 267.0);
	
	var _player = new Player(this.game, 81.0, 882.0);
	this.add.existing(_player);
	
	var _greatJobScreen = this.add.sprite(0.0, -960.0, 'greatJobScreen');
	
	var _pauseBtn = this.add.sprite(555.0, 9.0, 'pauseBtn');
	
	var _ScreenLevel = this.add.group();
	
	var _LevelScreen = this.add.sprite(0.0, -960.0, 'LevelScreen', null, _ScreenLevel);
	
	var _PixelFont = this.add.bitmapText(408.0, -438.0, 'PixelFont', '1', 80, _ScreenLevel);
	
	
	
	// fields
	
	this.fPlataformas = _Plataformas;
	this.fFloor1 = _floor1;
	this.fPlatformTipo = _platformTipo;
	this.fPlatformTipo2 = _platformTipo2;
	this.fPlatformTipo3 = _platformTipo3;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fEnemy = _enemy;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fPlataformasMove = _plataformasMove;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
	this.fScreenLevel = _ScreenLevel;
	this.fLevelScreen = _LevelScreen;
	this.fPixelFont = _PixelFont;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level4.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level4.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level5",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
	this.fPauseBtn.visible=false;
};


Level4.prototype.update = function () {
	this.behavior.update();
};

