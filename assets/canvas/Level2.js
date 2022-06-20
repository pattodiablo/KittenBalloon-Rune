
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level2.
 */
function Level2() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level2_proto = Object.create(Phaser.State.prototype);
Level2.prototype = Level2_proto;
Level2.prototype.constructor = Level2;

Level2.prototype.init = function (vidas) {
	
	
	
	vidasTotales = vidas;
	
		this.LevelNumber = 2;
	
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
	this.myInit();
	
};

Level2.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level2.prototype.create = function () {
	var _background = this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _platformTipo = new Platform1(this.game, 477.0, 326.0);
	_Plataformas.add(_platformTipo);
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo1 = new Platform1(this.game, 560.0, 139.0);
	_Plataformas.add(_platformTipo1);
	
	var _platformTipo2 = new Platform1(this.game, 413.0, 635.0);
	_Plataformas.add(_platformTipo2);
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(-37.0, -199.0);
	
	var _Coins = this.add.group();
	
	var _coinStar5 = new CoinStar(this.game, 440.0, 863.0);
	_Coins.add(_coinStar5);
	
	var _coinStar2 = new CoinStar(this.game, 426.0, 565.0);
	_Coins.add(_coinStar2);
	
	var _Enemies = this.add.group();
	
	var _EnemyL2 = this.add.group();
	
	var _lives = this.add.group();
	
	var _vida = new Vida(this.game, 15.0, 20.0);
	_lives.add(_vida);
	
	var _vida1 = new Vida(this.game, 86.0, 20.0);
	_lives.add(_vida1);
	
	var _vida2 = new Vida(this.game, 158.0, 20.0);
	_lives.add(_vida2);
	
	var _EnemyL3 = this.add.group();
	_EnemyL3.position.set(570.0, 288.0);
	
	var _player = new Player(this.game, 81.0, 882.0);
	this.add.existing(_player);
	
	var _greatJobScreen = this.add.sprite(0.0, -960.0, 'greatJobScreen');
	
	var _pauseBtn = this.add.sprite(555.0, 9.0, 'pauseBtn');
	
	var _ScreenLevel = this.add.group();
	
	var _LevelScreen = this.add.sprite(0.0, -960.0, 'LevelScreen', null, _ScreenLevel);
	
	var _PixelFont = this.add.bitmapText(408.0, -438.0, 'PixelFont', '1', 80, _ScreenLevel);
	
	
	
	// fields
	
	this.fBackground = _background;
	this.fPlataformas = _Plataformas;
	this.fPlatformTipo = _platformTipo;
	this.fFloor1 = _floor1;
	this.fPlatformTipo1 = _platformTipo1;
	this.fPlatformTipo2 = _platformTipo2;
	this.fPlataformasMove = _plataformasMove;
	this.fCoins = _Coins;
	this.fCoinStar5 = _coinStar5;
	this.fCoinStar2 = _coinStar2;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
	this.fScreenLevel = _ScreenLevel;
	this.fLevelScreen = _LevelScreen;
	this.fPixelFont = _PixelFont;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level2.prototype.myPreload = function () {
	
	
	AllSounds_proto.preload(this);

};

Level2.prototype.myInit = function () {
	this.LevelNumber = 2;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.game.sound.boot();
};


Level2.prototype.myCreate = function () {
	
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	//var allSounds = this.loadSounds();

	this.behavior = new PlatformerBehavior(this, "Level3",this.fScreenLevel	, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);

};


Level2.prototype.update = function () {

	this.behavior.update();
};

