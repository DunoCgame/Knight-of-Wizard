function Enemy_Boss_Move(){





}

var Collision  = BoxCollision(Enemys.X-Enemys.W/2+60,Enemys.Y-Enemys.H/2,Enemys.W,Enemys.H,X1,Y1,W1,H1);
 	if(!Collision){
				if(EnemyDistanceAttack>=40 && TypeEnemy==2){	
					 
					 if(Enemys.X>X1){  Enemys.X-=Enemys.Speed; 	}
					
					 if(Enemys.X<X1){  Enemys.X+=Enemys.Speed;  }
					
					 if(Enemys.Y>Y1){  Enemys.Y-=Enemys.Speed;  }
					 
					 if(Enemys.Y<Y1){  Enemys.Y+=Enemys.Speed;  }
					 
				}
				new Debug('No',100,188).Draw() 
        	}else{
			
			new Debug('iiuoouoouououoogoio',100,188).Draw()

				
				}	
        		
