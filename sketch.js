var bullet,bullet2,bullet3,bullet4,line1,line2,line3,line4,wall,wall2, wall3,wall4
var thickness,speed,weight










function setup() {
  createCanvas(1600,400);


thickness= random(22,83) 
  bullet = createSprite(25,19,9,9)
  wall = createSprite(1200,24,10,55)
   //bullet2 = createSprite(22,118,9,9)
  
  //line2 = createSprite(19,174,900,10)
  
  // bullet3 = createSprite(20,230,9,9)
  
  //line3 = createSprite(19,259,900,9)
  
  //line1 = createSprite(32,60,900,10)
  
  //wall2 = createSprite(363,113,10,30)
  //wall3 = createSprite(360,212,10,30)
  //wall4 = createSprite(363,289,10,30)
  
  
  // bullet4 = createSprite(19,299,9,9)
  
 // bullet.shapeColor = color(255)
  wall.shapeColor = color(230,230,230)
  
  speed = random(55,90)
  weight = random(400,1500)
  bullet.velocityX = speed
  bullet.weight = weight
  // bullet2.velocityX = speed
 //  bullet3.velocityX = speed
 //bullet4.velocityX = speed  
}

function draw() {
  background("lightgrey");  



// if ( bullet.isTouching(wall)) {
//   reset()
// }



// if ( bullet3.isTouching(wall)) {
//   reset()
// }

// if ( bullet4.isTouching(wall)) {
//   reset()
// }



wall.width = 0





// if (wall.x-bullet.x <(bullet.width+wall.width)/2) {
// bullet.velocityX = 0
// var deformation = 0.5 * weight * speed* speed/22509
// }

// if(deformation>180){
//   bullet.shapeColor = color(255,0,0)
  
// }

// if(deformation<160 && deformation>100){
// bullet.shapeColor  = color(230,230,0) 
  
// }




if (wall.x-bullet.x <(bullet.width+wall.width)/2) {
bullet.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509


if(deformation>10){
  bullet.shapeColor = color(255,0,0)
  
}

if(deformation<10){
bullet.shapeColor  = color(0,255,0) 
  
}

}

















// if (wall3.x-bullet3.x <(bullet3.width+wall3.width)/2) {
// bullet3.velocityX = 0
// var deformation = 0.5 * weight * speed* speed/22509
// }

// if(deformation>180){
//   bullet3.shapeColor = color(255,0,0)
  
// }

// if(deformation<160 && deformation>100){
// bullet3.shapeColor  = color(230,230,0) 
  
// }
















// if (bullet3.x- bullet.x <( bullet4.width+wall3.width)/2) {
//  bullet4.velocityX = 0
// var deformation = 0.5 * weight * speed* speed/22509
// }

// if(deformation>180){
//    bullet4.shapeColor = color(255,0,0)
  
// }

// if(deformation<160 && deformation>100){
//  bullet4.shapeColor  = color(230,230,0) 
  
// }







  drawSprites();
}





function hasCollided(lbullet,lwall){


bulletRightEdge = lbullet.x + lbullet.width
wallLeftEdge = lwall.x
if (bulletRightEdge > wallLeftEdge) {
  return true
} 
return false












  













}