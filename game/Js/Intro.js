function Welcome(){

 new Images(0,
           0,
           Screen.Canvas.width,
           Screen.Canvas.height,
           './Image/Portada/Portada.png'
           ).Draw();  
        
        
new Text('Press Enter','50px','Calibri','white',Screen.Canvas.width/2-150,Screen.Canvas.height-50).Draw();
        
        
        //game
        if(Keyboard[Enter] == true && Teclapress==0){
                Teclapress=1;
                SelectScene='Select';


		}
		

	///exit
	if(Keyboard[Space] == true && Teclapress==0){
        	        Teclapress=2;
        	        
	     }
	        
        //reinico tecla
    if(Teclapress==2 && Keyboard[Space] == false ){
		
		            Teclapress=0;
		                     
		}
		
    if(Teclapress==1 && Keyboard[Enter] == false){
		
		      Teclapress=0;
		                     
		}
		
}
