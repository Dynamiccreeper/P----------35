//Create variables here
 var dog,happyDog,normalDog;
 var foodS,foodStock;
 var database;
 var position;
 var food=20;
function preload()
{
  happyDog=loadImage("images/dogImg1.png");
  normalDog=loadImage("images/dogImg.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,5,5);
  dog.addImage(normalDog);
  dog.scale=0.1;


  database=firebase.database();
  console.log(database);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDog);


}
if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS);
  dog.addImage(normalDog);



  food=food-1;

  


  }
  if(food===0){
    fill("black")
    text("the ddog is out of food woof! ",200,100);
 
  }
  drawSprites();
  //add styles here
  fill("red");
text("Food" + food,250,200);
}

function readStock(data){
foodS=data.val();


}

function writeStock(x){
database.ref('/').set({
Food:x

})

}