function LoopGame(){
	Screen.Clear();
        if(SelectScene==scene[0]){Welcome();}
        if(SelectScene==scene[1]){Select_Player_Menu(); }
        if(SelectScene==scene[2]){
					
					WordGame(AreaNumber);
					
					Player.Paint(PlayerSelect);
					Player.Move(EnemyData.X, EnemyData.Y,EnemyData.W,EnemyData.H);
					Player.Attack_and_Defend();
					
				if(EnemyDestroy<TotalEnemyDestroy){
					
					Enemy.CallEnemyGenerate(EnemyNumber);
					Enemy.Paint();
					Enemy.Animation();
					Enemy.Move(PlayerData.X,PlayerData.Y,PlayerData.W,PlayerData.H);
					Enemy.Attack(PlayerData.X,PlayerData.Y);
					
					
CollisionPlayerEnemy(PlayerData.X,PlayerData.Y,PlayerData.W,PlayerData.H,EnemyData.X,EnemyData.Y,EnemyData.W,EnemyData.H);

				}
				else
					if(EnemyDestroy==TotalEnemyDestroy){
						EnemyData.X=0;
						EnemyData.Y=0;
						}
				
					
					ChargeWord(PlayerData.X);
					
					Interfaz_Game();  
					 Victory_GameOver();    
			 }  
	Game_loop.Start(LoopGame);
		
}

window.onload = LoopGame();

