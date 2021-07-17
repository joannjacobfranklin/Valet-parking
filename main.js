canvas = document.getElementById("mylovelyCanvas");
ctx = canvas.getContext("2d");

car_width = 75;
car_height = 150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_X = 430;
car_y = 100;

function add() {
	background_image_Tag = new Image;
	background_image_Tag.onload = uploadBackground;
	background_image_Tag.src = background_image;

	car_image_Tag  = new Image;
	car_image_Tag.onload = uploadgreencar;
	car_image_Tag.src = greencar_image;

	
}

function uploadBackground() {

	//Define function ‘uploadBackground’
	ctx.drawImage(background_image_Tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {

	//Define function ‘uploadgreencar’.
    ctx.drawImage(car_image_Tag, car_X, car_y, car_width, car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y > 0){

		car_y = car_y - 10;
		console.log("current Y of car is" + car_y + "current X of car is" + car_X);
		greencar_image = "car2.png";
		uploadBackground();
		uploadgreencar();

	}
}

function down()
{
	//Define function to move the car downward
	if (car_y < 350){

		car_y = car_y + 10;
		console.log("current Y of car is" + car_y +  "current X of car is" + car_X);
		greencar_image = "car2.png";
		uploadBackground();
		uploadgreencar();

	}
}

function left()
{
	//Define function to move the car left side
	if (car_X > 0){

		car_X = car_X - 10;
		console.log("current Y of car is" + car_y + "</br>" + "current X of car is" + car_X);
		uploadBackground();
		uploadgreencar();

	}
}

function right()
{
	//Define function to move the car right side
	if (car_X < 720){

        
		car_X = car_X + 10;
		console.log("current Y of car is" + car_y + "</br>" + "current X of car is" + car_X);
		uploadBackground();
		uploadgreencar();


	}
}
