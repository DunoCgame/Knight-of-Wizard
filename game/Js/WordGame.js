
function WordGame(AreaNumber){
Area[0] = new Images(0,0,Screen.Canvas.width,Screen.Canvas.height,'./game/Image/Scene/1.png');
Area[1] = new Images(0,0,Screen.Canvas.width,Screen.Canvas.height,'./game/Image/Scene/2.png');
Area[2] = new Images(0,0,Screen.Canvas.width,Screen.Canvas.height,'./game/Image/Scene/3.png');

      if(Teclapress==1 && Keyboard[Enter] == false){
		
	      Teclapress=0;
		                     
		}
		//charge of word
		
    
 
     Area[AreaNumber].Draw();
    // new Images(0,0,Screen.Canvas.width,Screen.Canvas.height,'./Image/Scene/Sobre1.png') 
 //new Square(0,0,Screen.Canvas.width,Screen.Canvas.height,0,"Upper-Left", "grey").Draw();
    
}

function ChargeWord(Playerpos){

	if(EnemyDestroy==TotalEnemyDestroy && AreaNumber==0 && Playerpos>Screen.Canvas.width-50){ 	
		
		EnemysArray.pop();
				
		AreaNumber=1;
		Player.X=200;
		Player.Y=Screen.Canvas.height/2;

		TypeEnemy=1;
		EnemyDestroy=0; 
		
	
		}
		
		
		
	if(EnemyDestroy==TotalEnemyDestroy && AreaNumber==1 && Playerpos>Screen.Canvas.width-50){ 	
			
		EnemysArray.pop();	
				
		AreaNumber=2;
		Player.X=200;
		Player.Y=Screen.Canvas.height/2;
		

		TypeEnemy=2;LiveEnemy=1000;		EnemyDestroy=0; 
		
		}
	
	
	}
