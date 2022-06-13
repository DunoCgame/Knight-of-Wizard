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
        
new Text('Enter to Select','50px','Calibri','white',Screen.Canvas.width/2-150,Screen.Canvas.height-15).Draw();
        
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
