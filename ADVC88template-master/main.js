var canvas = new fabric.Canvas('myCanvas');

ball_x = 10;
ball_y = 10;

goal_x = 600
goal_y = 400

block_image_width = 5;
block_image_height = 5;

function load_img()
{
fabric.Image.fromURL("golf-h.png",function(Ing)
{
    ball_object = Ing;

    ball_object.scaleToWidth(150);
    ball_object.scaleToHeight(140);
    ball_object.set({
        top:goal_y,
        left:goal_x
    });
    canvas.add(ball_object);
});
	new_image();
	fabric.Image.fromURL("ball.png",function(Ing)
{
    ball_object = Ing;

    ball_object.scaleToWidth(150);
    ball_object.scaleToHeight(140);
    ball_object.set({
        top:ball_y,
        left:ball_x
    });
    canvas.add(ball_object);
});
	new_image();
}

function ball_update()
{
fabric.Image.fromURL("ball.png",function(Ing)
{
    ball_object = Ing;

    ball_object.scaleToWidth(150);
    ball_object.scaleToHeight(140);
    ball_object.set({
        top:ball_y,
        left:ball_x
    });
    canvas.add(ball_object);
});
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Ing)
    {
        block_image_object = Ing;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(block_image_object);
    });
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

	
		function up()
		{
			if (ball_y >= 0)
			{
				ball_y = ball_y - block_image_height;
				console.log("Block Image Height" + block_image_height);
				console.log("When up arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
				canvas.remove(ball_object);
				ball_update();
			}
		}
		
		function down()
		{
			if (ball_y <= 550)
			{
				ball_y = ball_y + block_image_height;
				console.log("Block Image Height" + block_image_height);
				console.log("When down arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
				canvas.remove(ball_object);
				ball_update();
			}
		}
		
		function left()
		{
			if (ball_x >= 0)
			{
				ball_x = ball_x - block_image_width;
				console.log("Block Image Width" + block_image_width);
				console.log("When left arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
				canvas.remove(ball_object);
				ball_update();
			}
		}
		
		function right()
		{
			if (ball_x <= 850)
			{
				ball_x = ball_x + block_image_height;
				console.log("Block Image Width" + block_image_height);
				console.log("When right arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
				canvas.remove(ball_object);
				ball_update();
			}
		}

		if (ball_x == 600 && ball_y == 400)
		{
			document.getElementById("hd3").innerHTML = "U win!"
		}

}

