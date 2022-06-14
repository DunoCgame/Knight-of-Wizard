let AttackCollision=false;
function CollisionPlayerEnemy(Px,Py,Pw,Ph,Ex,Ey,Ew,Eh){
	
			  
var CollisionAttack  = CircleCollision(Px,Py,Ex,Ey,120);

var Collision = BoxCollision(Px,Py,Pw,Ph,Ex,Ey,Ew,Eh);
	
	if(!Collision){
		
		 EnemyCollision=false;	
		 
		 
		 	 }
		else{
			
			EnemyCollision=true;
				if(PlayerLife!=1){
						PlayerLife-=1;				
				}
				
				
		}
	if(!CollisionAttack){
		
		 AttackCollision=false;	
		 
		 
		 	 }
		else{
			
			/*Action*/
			AttackCollision=true;
				
				}
				
			
		 
		 //Defense
		 if(EnemyCollision==true && Keyboard[X] == true){
			
				if(PlayerLife!=1){
						PlayerLife-=1;
				}

				for(var i in EnemysArray){
					var Enemys = EnemysArray[i];	
						let A = Math.floor(Math.random() * 3)+1;
						
					if(A==1){Enemys.X+=50;					Enemys.Y+=50;}
					if(A==2){Enemys.X+=70;					Enemys.Y+=70;}
					if(A==3){Enemys.X+=60;					Enemys.Y+=50;}

					Player.X=Player.X;
					Player.Y=Player.Y;
				}
			 }
			 
		 //Attack
		  if(AttackCollision==true && Keyboard[Z] == true){
			
			 if(TypeEnemy==0){
						
						Score+=1;
						EnemyDestroy+=1;
						PlayerLife+=0.1;
						
						if(PlayerLife!=1){
								PlayerLife-=1;
							}

						for(var i in EnemysArray){

							var Enemys = EnemysArray[i];	
							EnemysArray.splice(i,1);
							Enemy.CallEnemyGenerate(EnemyNumber);
						 
						}
				}			
				 if(TypeEnemy==1){	
					 			
						LiveEnemy+=1;
						
						if(LiveEnemy==5){
						
							Score+=1;
							PlayerLife+=0.1;
							EnemyDestroy+=1;
							
							if(PlayerLife!=0){
									PlayerLife-=3;
								}

							for(var i in EnemysArray){
								 var Enemys = EnemysArray[i];	
								 EnemysArray.splice(i,1);
								 Enemy.CallEnemyGenerate(EnemyNumber);
							
							 }
						 
						 LiveEnemy=0;
						 
						}
				}
				if(TypeEnemy==2){
					
					if(EnemyBossLife!=1){
						
						EnemyBossLife-=1;
					}
					
					if(EnemyBossLife==0){
						
						Score+=100;
						LiveEnemy=0;
						
						if(PlayerLife!=0){
								PlayerLife-=3;
							}
						
						for(var i in EnemysArray){

							var Enemys = EnemysArray[i];	
							EnemysArray.splice(i,1);
							Enemy.CallEnemyGenerate(EnemyNumber);
						
						}												
					}
				}
			 }
		 //Efect Collision                                    

	}//cierre function


