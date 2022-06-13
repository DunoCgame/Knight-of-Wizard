let Ex=250;
let Sp=6;
let PosYboss=2;
let Enemy = {
	
	CallEnemyGenerate:function(EnemyNumber){	
		if(EnemysArray.length==0){
				if(TypeEnemy==0){					
					EnemysArray.pop();
						for(let i=0; i<EnemyNumber; i++){
							Enemy.Generate(100,100);
						}					
					}
			if(TypeEnemy==1){
					EnemysArray.pop();
						for(let i=0; i<EnemyNumber; i++){
							Enemy.Generate(100,100);
						}					
					}
		
			if(TypeEnemy==2){
							EnemysArray.pop();
								for(let i=0; i<EnemyNumber; i++){
									Enemy.Generate(300,150);
								}	
							}					
				}	
		},
    Generate:function(W,H){		
           EnemysArray.push({	
            draw:true,
            x:0,
            y:0,		
			X:Screen.Canvas.width-Ex,
			Y:Screen.Canvas.height/2,
	        W:W,
	        H:H,
	        Radius:60,
	        Angle:0,
	        Radians:0,
	        Speed:3,
	        Type_Enemy:['./Image/Enemy/SpriteE1.png',
	                   './Image/Enemy/SpriteE2.png',
	                   './Image/Enemy/SpriteE3.png'
	                   ],
				   });
	                },
	Paint:function(){

	for(var i in EnemysArray){
		
		var Enemys = EnemysArray[i];
		
		
		if(Enemys.draw==true){
			
//~ 						
new Sprite(Enemys.x,Enemys.y,Enemys.X,Enemys.Y,Enemys.W,Enemys.H,Enemys.Type_Enemy[TypeEnemy],Enemys.Angle,'Meddle-Center').Draw();		

new Square(Enemys.X-Enemys.W/2,Enemys.Y-Enemys.H/2+34,Enemys.W,Enemys.H-80,0,'Upper-Left', "rgba(8, 9, 0, 0.4)").Draw()

	new Circle(Enemys.X,Enemys.Y,Enemys.Radius, 'rgba(8, 9, 5, 0.4)').Draw();					}
					}
						
                  },
    Move:function(X1,Y1,W1,H1){
		
		for(var i in EnemysArray){

			 var Enemys = EnemysArray[i];	
			
		EnemyDistanceAttack = Distancepoints(EnemysArray[i].X, EnemysArray[i].Y,X1,Y1);
		/*Enemigo 1 y 2*/
		if(TypeEnemy!=2){

			if(EnemyDistanceAttack>=40){
					
					let A = Math.floor(Math.random() * 3)+1;
						
					if(A==1){Enemys.Y+=8; Enemys.X-=Enemys.Speed;}
					if(A==2){Enemys.X-=Enemys.Speed;}
					if(A==3){Enemys.y-=8; Enemys.X-=Enemys.Speed;}
					
					if(Enemys.X>X1){  Enemys.X-=Enemys.Speed;   }
				
			    	if(Enemys.X<X1){  Enemys.X+=Enemys.Speed;  }
					
					if(Enemys.Y>Y1){  Enemys.Y-=Enemys.Speed; }
					 
					if(Enemys.Y<Y1){  Enemys.Y+=Enemys.Speed; }
					 
							}
			}
        	/*Enemigo 3*///Boss
        if(TypeEnemy==2){	
			
			Enemys.X+=Sp; 
			
 if((Enemys.X-Enemys.W/2)<=0 || ((Enemys.X-Enemys.W/2)+Enemys.W)>=Screen.Canvas.width){
		
					Sp*=-1;
					Enemys.Angle=-180;
	
				}
if(((Enemys.X-Enemys.W/2)+Enemys.W)>=Screen.Canvas.width){
						
					PosYboss+=1;
	if(PosYboss==4){PosYboss=1;}
	Enemys.Angle=0;
				}
				//y
		if(PosYboss==1){			Enemys.Y=Screen.Canvas.height/2-100;	}
		if(PosYboss==2){			Enemys.Y=Screen.Canvas.height/2;	}
		if(PosYboss==3){			Enemys.Y=Screen.Canvas.height/2+100;    }

				
				
				}//if boss



			EnemyData.X=Enemys.X-Enemys.W/2;
			EnemyData.Y=Enemys.Y-Enemys.H/2+34;
			EnemyData.W=Enemys.W;
			EnemyData.H=Enemys.H-80;
			

				}//cierre Array
				},			
    Attack:function(){                   
             for(var i in EnemysArray){
				var Enemys = EnemysArray[i];
 
                   if(EnemyDistanceAttack<340 && TypeEnemy==2){
						
						for(var i in EnemysArray){
							
							var Enemys = EnemysArray[i];
									
									
									Time.Interval(2,4,true);
										if(Time.State==true){Enemys.y+=150;}
										if(Enemys.y==300){ Enemys.y=0; } 	
											Enemys.x=600;
								}
                              }
							  //Dist  					
						}	//for		
					},
					Animation:function(){
						
						if(TypeEnemy==0 || TypeEnemy==1 ){
							for(var i in EnemysArray){
								var Enemys = EnemysArray[i];
										//Animation walker
										Time.Interval(0,5,true);
										if(Time.State==true){/*Action*/Enemys.x+=100;}
										if(Enemys.x==200){ Enemys.x=0; }
										Enemys.y=100;
										}
									}//cierre if
									
									//Enemy Boss
						if(TypeEnemy==2 && EnemyDistanceAttack>340){
							
							for(var i in EnemysArray){
								var Enemys = EnemysArray[i];
										//Animation walker
										Time.Interval(2,4,true);
										if(Time.State==true){Enemys.y+=150;}
										if(Enemys.y==300){ Enemys.y=0; } 	
											Enemys.x=300;
										
									}
								}//cierre if
							
						}			
}//clouse Enemy
