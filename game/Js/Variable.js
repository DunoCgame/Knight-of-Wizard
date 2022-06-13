//variables
const Enter=13;
const Space=32;
const Left=37;
const Up=38;
const Right=39;
const Down=40;
const X=88;
const Y=89;
const Z=90;
const A = 65;
const W = 87;
const S = 83;
const D = 68;

let Teclapress=0;
let scene = ['Welcome','Select','Game'];
let SelectScene ='Welcome';

const Area =[];
let AreaNumber=0;
let DestelloPosX = 45;

let Score=0;

let Select_Player=1;
let PlayerSelect=0;
let PlayerData={X:0, Y:0, W:0, H:0}
let PlayerLife=200;

let EnemysArray =[];
let EnemyNumber = 1;
let EnemyDestroy=0;
let TotalEnemyDestroy=1; //10
let EnemyCollision=false;
let EnemyData={X:0, Y:0, W:0, H:0}
let TypeEnemy=0;
let EnemyDistanceAttack=0;
let LiveEnemy=0;
let EnemyBossLife=600;

var Leftpress = false;
var Uppress = false;
var Rightpress = false;
var Downpress = false;
	
let CollisionPos = '';
let CollisionData={
	Player:{X:0, Y:0, W:0, H:0},
	Eemy:{X:0, Y:0, W:0, H:0}
	
	}
	
Screen.Init();

	
	
KeyboardEvents();
