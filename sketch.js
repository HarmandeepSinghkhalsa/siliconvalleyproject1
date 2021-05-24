

var engine, world, dustbin, paper;
var gameState = 0
var count = 0
var score = 0


function preload(){
	tomImage = loadImage("sprite_0.png")
	jerryImage = loadAnimation("sprite.png")
	tableImage = loadImage("table image.jpg")
	bg = loadImage("desert image.jpg")
	obstacleImage=loadImage("cactus.png")
}

function setup(){
createCanvas(displayWidth,displayHeight);
rectMode(CENTER);




table = createSprite(0,displayHeight-100,displayWidth*10,10)
table.velocityX = -10
tom = createSprite(100,displayHeight-200)
jerry = createSprite(500,displayHeight-200)
jerry.addAnimation("run",jerryImage)
jerry.scale=0.5
table.visible = false
tom.visible = false
jerry.visible = false

obstacleGroup = createGroup()

tom.addImage(tomImage)
//jerry.addImage(jerryImage)
//table.addImage(tableImage)

	
}

function draw() {
	if(gameState === 1){

	
	background(bg)
	
	if(keyDown("SPACE")&&jerry.y>=displayHeight/2+250){

		jerry.velocityY=-15

	}
	jerry.velocityY = jerry.velocityY+0.5
	jerry.collide(table)

	if(table.x<0){
		table.x = displayWidth/2
	}
	camera.position.x = jerry.x
	tom.visible = true
	jerry.visible = true
	table.visible = false
	
	tom.x = jerry.x-200
	if(frameCount%100 === 0){
		obstacle = createSprite(displayWidth -200, displayHeight -150,20,100)
		obstacle.addImage(obstacleImage)
		obstacle.velocityX = -10;
		obstacle.lifetime = displayWidth/10;
		obstacle.scale=0.175
		obstacleGroup.add(obstacle)
		obstacle.debug = true
		obstacle.setCollider("rectangle",0,0,200,300)
		score = score +5
		
		

	}
	

	jerry.debug = true

	
		for(var i=0; i<obstacleGroup;i++){

		
	if(obstacleGroup.get(i).isTouching(tom)){
		count= count+1
console.log(count)
		obstacleGroup.get(i).destroy()
	}
}
if(obstacleGroup.isTouching(jerry)){
	gameState = 2

	obstacleGroup.destroyEach()
}
if(count === 3 && gameState === 1){
	gameState = 3
}


drawSprites()
	}
	if(gameState === 2){
		background("red")
		table.visible = false
		tom.visible = false
		jerry.visible = false
		textSize (45)
		text("Tom Caught You",500,500)
		

		
	}
	if(gameState === 3){
		background("green")
		table.visible = false
		tom.visible = false
		jerry.visible = false
		textSize (45)
		text("Tom was Cut out",500,500)
		
	}
if(gameState === 0){
	background("cyan")
	textSize(15)
	text("Press SPACE to start the game",displayWidth/2,200)
	text("press space to make jerry jump",displayWidth/2,300)
	
	
if(keyDown("SPACE")){
	gameState = 1
	fill("cyan")

	
}


	

}


textSize(20)
		text("SCORE"+score,displayWidth/3,100)

}



	


	
	





	
	






