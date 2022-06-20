
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level13.
 */
function Level13() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level13_proto = Object.create(Phaser.State.prototype);
Level13.prototype = Level13_proto;
Level13.prototype.constructor = Level13;

Level13.prototype.init = function (vidas) {
	
	
	
	vidasTotales = vidas;
		this.LevelNumber = 13;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level13.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level13.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	this.add.sprite(-124.0, 758.0, 'platformTipo1', null, _Plataformas);
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	this.add.sprite(496.0, 210.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(163.0, 180.0, 'platformTipo2', null, _Plataformas);
	
	var _platformTipo = new Platform1(this.game, 479.0, 869.0);
	_Plataformas.add(_platformTipo);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 504.0, 524.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 553.0, 803.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 16.0, 861.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 208.0, 116.0);
	_Coins.add(_coinStar3);
	
	var _Enemies = this.add.group();
	
	var _enemy = new Enemy3(this.game, 502.0, 132.0);
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
	
	var _enemy1 = new Enemy(this.game, 197.0, 112.0);
	_EnemyL3.add(_enemy1);
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(471.0, 267.0);
	
	this.add.sprite(-506.0, 156.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(26.0, 320.0, 'platformTipo3', null, _plataformasMove);
	
	var _player = new Player(this.game, 91.0, 712.0);
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
	this.fEnemy1 = _enemy1;
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

Level13.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level13.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level14",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level13.prototype.update = function () {
	this.behavior.update();
};

