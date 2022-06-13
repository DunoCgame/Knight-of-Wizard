Screen.Init();
KeyboardEvents();

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
let Teclapress=0;
let SelectScene ='Game';
let scene = ['Welcome','Select','Game'];
let EnemyNumber = 4;
let Square1 = new Square(0,0,400,500,0,"Upper-Left", "green");

let PlayerSelect=0;
let EnemysArray =[];

let Score=0;

let DestelloPosX = 45;

let Select_Player=1;
const Area =[];
Area[0] = new Images(0,0,Screen.Canvas.width,Screen.Canvas.height,'./Image/Scene/1.png');
Area[1] = new Images(0,0,Screen.Canvas.width,Screen.Canvas.height,'./Image/Scene/2.png');
Area[2] = new Images(0,0,Screen.Canvas.width,Screen.Canvas.height,'./Image/Scene/3.png');


function Inicio(){

 new Square(0,0,Screen.Canvas.width,Screen.Canvas.height,0,"Upper-Left", "red").Draw();
        
        //game
        if(Keyboard[Enter] == true && Teclapress==0){
                	Teclapress=1;
                	SelectScene='Select'; 
		}

	///exit
	if(Keyboard[Space] == true && Teclapress==0){
        	        Teclapress=2;
        	        console.log('exit');
	        }
	        
        //reinico tecla
        if(Teclapress==2 && Keyboard[Space] == false ){
		
		            Teclapress=0;
		                     
		}
		
        if(Teclapress==1 && Keyboard[Enter] == false){
		
		      Teclapress=0;
		                     
		}
}

function Select_Player_Menu(){

        new Square(0,0,Screen.Canvas.width,Screen.Canvas.height,0,"Upper-Left", "green").Draw();

        Time.Interval(5,10,true);
        
	if(Time.State==true){
		/*Action*/
        new Square(DestelloPosX,45,Screen.Canvas.width/2-90,Screen.Canvas.height-90,0,"Upper-Left", "white").Draw();
	
	}
else{
        new Square(DestelloPosX,45,Screen.Canvas.width/2-90,Screen.Canvas.height-90,0,"Upper-Left", '#fce94f').Draw();
}

new Images(50,
           50,
           Screen.Canvas.width/2-100,
           Screen.Canvas.height-100,
           './Image/Select-Players/Knight.png'
           ).Draw();

new Images(
        Screen.Canvas.width/2+50,
        50,
        Screen.Canvas.width/2-100,
        Screen.Canvas.height-100,
        './Image/Select-Players/Wizard.png'
        ).Draw();
        
new Text('Enter to Select','20px','Calibri','white',Screen.Canvas.width/2-50,Screen.Canvas.height-15).Draw();
        
                 if(Keyboard[Left] == true && Teclapress==0){
         	       DestelloPosX=45;
         	       PlayerSelect=0;

                  }
                  if(Keyboard[Right] == true && Teclapress==0){
         	       
                        DestelloPosX=Screen.Canvas.width/2+45;
                        PlayerSelect=1;
                  }
                   if(Keyboard[Enter] == true && Teclapress==0){
         	       Teclapress=1;
         	             SelectScene='Game';
                  }
                   if(Teclapress==1 && Keyboard[Enter] == false){
		
		      Teclapress=0;
		                     
		}


}

function Scene(){

    if(Teclapress==1 && Keyboard[Enter] == false){
		
	      Teclapress=0;
		                     
	}
    
    new Square(0,0,Screen.Canvas.width,Screen.Canvas.height,0,"Upper-Left", "white").Draw();
                Area[0].Draw();
                
                  Player.Paint(PlayerSelect);
                  
 if(EnemysArray.length==0){
	 for(let i=0; i<EnemyNumber; i++){
		Enemy.Generate();
	}
}
               Enemy.Paint();
              
                 
                
        
}


let Enemy = {
    Generate:function(){
           EnemysArray.push({	
            draw:true,
            x:0,
            y:0,
	        //X:Math.floor(Math.random() * Screen.Canvas.width+1000)+Screen.Canvas.width/2,
	        X:Screen.Canvas.width-500,
	        Y:Math.floor(Math.random() * Screen.Canvas.height)+5,
	        W:100,
	        H:100,
	        Radius:0,
	        Angle:0,
	        Rote:-90,
	        Radians:0,
	        Speed:Math.floor(Math.random() * 3)+1,
	        Number_Enemy:0,
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
				Screen.Scale();		
new Sprite(Enemys.x,Enemys.y,Enemys.X,Enemys.Y,Enemys.W,Enemys.H,Enemys.Type_Enemy[0],Enemys.Rote,'Meddle-Center').Draw();

					Enemy.Move(Player.X,Player.Y);
						
					Enemy.Colision(Player.X,Player.Y);
				
				}
				
				if(EnemyNumber!=0){Enemys.draw=true;}
				
			}	
			
			
                  },
   Move:function(X1,Y1){

	for(var i in EnemysArray){
			for(var a in EnemysArray){
	//console.log(i+'='+a);
		//let Distances = Distancepoints(EnemysArray[i].X, EnemysArray[i].Y, EnemysArray[a].X, EnemysArray[a].Y);
			//new Debug(Distances,100,188+50*a).Draw()
		console.log(Distances);
			}	
        }
	          },
    Colision:function(X1,Y1){
                      
             for(var i in EnemysArray){
				var Enemys = EnemysArray[i];
                      
                        let Distance = Distancepoints(Enemys.X,Enemys.Y,X1,Y1);
                        
                                     
                              if(Distance<=10){
									Enemys.x+=100;
									Enemys.y=200;
                              }
                              if(Distance<=3){
								if(Enemys.draw==true){
                                        
                                        Enemys.X=Screen.Canvas.width-100;
                                        Enemys.Y=Screen.Canvas.height/2;
                                        Enemys.y=0;
                                        Enemys.draw=false;
                                        EnemyNumber-=1;
                                        Score+=1;
                                        EnemysArray.splice(i,1);
									}
                              }   
                                                            
                  }
			
			}



}//clouse Enemy

const Player={
                draw:true,
                x:0,
                y:0,
		X:100,
		Y:100,
		W:100,
		H:100,
		Radius:0,
		Angle:0,
		Rote:90,
	        HP:5,
	        MP:0,
		Type_Player:['./Image/Player/SpriteKnight.png',
		           './Image/Player/SpriteWizard.png'
		           ],
                Paint:function(PlayerSelect){
                
new Sprite(Player.x,Player.y,Player.X,Player.Y,Player.W,Player.H,Player.Type_Player[PlayerSelect],Player.Rote,'Meddle-Center').Draw();
              Player.Move();
              Player.Attack_and_Defend();
              
                },
                Move:function(){
                
                 // let press = new Debug(Player.x+'|'+Player.y,100,100).Draw();
                         
                         Player.Animate();
                        /*Moving*/        
                if(Keyboard[Up] == true && Teclapress==0){
         	        //Teclapress=2;
	               // console.log('UP');
	               Player.X+=5;
	                Player.Rote=90;
	                
                  }
                  if(Keyboard[Down] == true && Teclapress==0){
         	       // Teclapress=2;
	                 //console.log('Down');
	                 Player.X-=5;
	                 Player.Rote=270;

                  }
                  if(Keyboard[Left] == true && Teclapress==0){
         	        // Teclapress=2;
	                 //console.log('Left');
	                 
	               Player.Y-=5;
	               Player.Rote=360;

                  }
                  if(Keyboard[Right] == true && Teclapress==0){
         	        //Teclapress=2;
	                // console.log('Right');
	                
	                
        	       Player.Y+=5;
	               Player.Rote=180;

                  }
                  ///diagonal
                  if(Keyboard[Up] == true && Keyboard[Left] == true && Teclapress==0){
         	       
	                Player.Rote=45;
        
                  }
                  if(Keyboard[Up] == true && Keyboard[Right] == true && Teclapress==0){
         	       
	                Player.Rote=145;
                  }
                 
                  if(Keyboard[Down] == true && Keyboard[Left] == true && Teclapress==0){
         	       
	                Player.Rote=315;
        
                  } 
                  if(Keyboard[Down] == true && Keyboard[Right] == true && Teclapress==0){
         	       
	                Player.Rote=215;
        
                  }
                  /*Atack*/
                           
                                 
                },
                Attack_and_Defend:function(){
                        if(Keyboard[X] == true && Teclapress==0){
         	       
	                            
	                              Player.y=200;
	                                   Player.x=0;

                                    }
                        if(Keyboard[Z] == true && Teclapress==0){
         	       
	                            
	                                 Player.y=200;
	                                   Player.x=100;

                                    } 
                },
                Animate:function(){
                       
                        //wallking
        if(Keyboard[Up] == true || Keyboard[Right] == true || Keyboard[Down] == true || Keyboard[Left] == true){
         	       
                                Player.x+=100;
                                Player.y=100;
                                        if(Player.x==200){
                                                Player.x=0;
                                        }
                          }
                          else{
                           //reposo
                                Player.x=0;
                                Player.y=0;
                          
                          }
                          
                },
                Colision:function(){
                
                }


}

(function LoopGame(){

        if(SelectScene==scene[0]){Inicio();}
        if(SelectScene==scene[1]){Select_Player_Menu(); }
        if(SelectScene==scene[2]){Scene(); }  

      new Debug(Teclapress+'| '+PlayerSelect+'| '+EnemysArray.length+'| '+EnemyNumber,100,100).Draw();


        Game_loop.Start(LoopGame);

})();

