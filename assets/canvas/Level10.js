
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level10.
 */
function Level10() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level10_proto = Object.create(Phaser.State.prototype);
Level10.prototype = Level10_proto;
Level10.prototype.constructor = Level10;

Level10.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
		this.LevelNumber = 10;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level10.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level10.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	this.add.sprite(-215.0, 211.0, 'platformTipo1', null, _Plataformas);
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, 499.0, 278.0);
	_Plataformas.add(_platformTipo);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 498.0, 588.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 496.0, 212.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 43.0, 469.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 12.0, 133.0);
	_Coins.add(_coinStar3);
	
	var _Enemies = this.add.group();
	
	var _enemy = new Enemy3(this.game, 251.0, 267.0);
	_Enemies.add(_enemy);
	
	var _EnemyL2 = this.add.group();
	
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
	
	this.add.sprite(-471.0, 270.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(20.0, 387.0, 'platformTipo3', null, _plataformasMove);
	
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
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fEnemies = _Enemies;
	this.fEnemy = _enemy;
	this.fEnemyL2 = _EnemyL2;
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

Level10.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level10.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level11",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level10.prototype.update = function () {
	this.behavior.update();
};
