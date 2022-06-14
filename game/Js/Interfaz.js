function Interfaz_Game(){

//barra hp

new Square(10,50,250,40,0,"Upper-Left", "white").Draw();
new Square(55,55,200,30,0,"Upper-Left", "black").Draw();
new Square(55,55,PlayerLife,30,0,"Upper-Left", "red").Draw();
new Text('HP','30px','Calibri','black',15,80).Draw();
     

//money
new Images(300,49,50,50,'./game/Image/Scene/Money.png').Draw();
new Text('X '+Score,'30px','Calibri','white',350,80).Draw();
  
if(TypeEnemy==2){

new Square(200,Screen.Canvas.height/2+200,600,30,0,"Upper-Left", "black").Draw();
new Square(200,Screen.Canvas.height/2+200,EnemyBossLife,30,0,"Upper-Left", "#CD0000").Draw();
	
}

	
	}
	

	
	
	function Victory_GameOver(){
		
if(PlayerLife==1){new Text('You Death ','90px','Calibri','red',Screen.Canvas.width/2-200,Screen.Canvas.height/2).Draw();
	
	
	if(Keyboard[Enter] == true){
		
		
		window.location.reload()
		
		}
 }
		
		
		if(EnemyBossLife==1){
			
	
new Text('Victory','90px','Calibri','white',Screen.Canvas.width/2-200,Screen.Canvas.height/2).Draw();
 
if(Keyboard[Enter] == true){
		
		
		window.location.reload()
		
		}
		}
	}
	/**/
