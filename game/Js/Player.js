const Player={
        draw:true,
        x:0,
        y:0,
		X:200,
		Y:Screen.Canvas.height/2,
		W:100,
		H:100,
		Radius:60,
		Angle:0,
		Rote:90,
		Speed:5,
	    HP:5,
	    MP:0,
		Type_Player:['./game/Image/Player/SpriteKnight.png',
		           './game/Image/Player/SpriteWizard.png'
		           ],
                Paint:function(PlayerSelect){
					
					
					//
									
new Sprite(Player.x,Player.y,Player.X,Player.Y,Player.W,Player.H,Player.Type_Player[PlayerSelect],Player.Rote,'Meddle-Center').Draw();


//capa colision
//new Square(Player.X-Player.W/2,Player.Y-Player.H/2,Player.W-10,Player.H,0,'Upper-Left', "rgba(100, 141, 152, 0.4)").Draw(); 


//capa colision atacque

 
 //new Circle(Player.X,Player.Y,Player.Radius, 'rgba(100, 140, 150, 0.4)').Draw(); 
             
             
                },
               Move:function(Ex,Ey,Ew,Eh){
                  Player.Animate();
     
                        /*Moving*/ 
				if(Player.X<0){ Player.X=0;}
				if(Player.X>Screen.Canvas.width){ Player.X=Screen.Canvas.width;}
				if(Player.Y<0){ Player.Y=0;}
				if(Player.Y>Screen.Canvas.height){ Player.Y=Screen.Canvas.height;}
    
                                      
                  if(Keyboard[Left] == true){
	Leftpress =  BoxCollision(((Player.X-Player.W/2)-Player.Speed),(Player.Y-Player.H/2),Player.W,Player.H, Ex,Ey,Ew,Eh);
		if(!Leftpress){ 
				Player.X-=Player.Speed;
				Player.Rote=270;
				}	 
						 else{			 
							 CollisionPos='Left';	
							  }					
                  }                 
                  if(Keyboard[Right] == true){
Rightpress =  BoxCollision(((Player.X-Player.W/2)+Player.Speed-1),(Player.Y-Player.H/2),Player.W,Player.H, Ex,Ey,Ew,Eh);
		
				if(!Rightpress){ 
					Player.X+=Player.Speed;	
					Player.Rote=90;
						}
					 else{ 
						 CollisionPos='Right';
						 	 }
					 
                  }                  
                  if(Keyboard[Up] == true){
Uppress =  BoxCollision((Player.X-Player.W/2),((Player.Y-Player.H/2)-Player.Speed),Player.W,Player.H, Ex,Ey,Ew,Eh);
					if(!Uppress){	Player.Y-=Player.Speed;	Player.Rote=0;}
					 else{	CollisionPos='Up'; }
					
                  }                  
                  if(Keyboard[Down] == true){
					  
Downpress =  BoxCollision((Player.X-Player.W/2),((Player.Y-Player.H/2)+Player.Speed),Player.W,Player.H, Ex,Ey,Ew,Eh);
				if(!Downpress){	Player.Y+=Player.Speed;	 Player.Rote=180;}
					else{	CollisionPos='Down';  }
						
                  }
//diagonal
                 if(Keyboard[Up] == true && Keyboard[Left] == true && Teclapress==0){
         	       
	                Player.Rote=315;
        
                  }
                 if(Keyboard[Up] == true && Keyboard[Right] == true && Teclapress==0){
         	       
	                Player.Rote=45;
                  }                
                 if(Keyboard[Down] == true && Keyboard[Left] == true && Teclapress==0){
         	       
	                Player.Rote=215;
        
                  } 
                 if(Keyboard[Down] == true && Keyboard[Right] == true && Teclapress==0){
         	       
	                Player.Rote=145;
        
                  }           
              
              
           PlayerData.X=Player.X-Player.W/2;   
           PlayerData.Y=Player.Y-Player.H/2;   
           PlayerData.W=Player.W;   
           PlayerData.H=Player.H; 

              
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
                          
                }                
			
                


}

//console.log(Player);
