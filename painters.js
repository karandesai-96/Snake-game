
		var paintJob = document.getElementById("canvas");
        var paintBucket = paintJob.getContext("2d");
        var cellDimension=10;
        
		// Inbuilt functions used: 
		// 1. fillStyle & strokeStyle: Sets which color is to be filled inside and on boundary...
		// 2. fillRect & strokeRect: Accepts the pixel coordinates, height and width, and fill them with color and stroke.
		
		//This function paints the the whole canvas.
		function paintCanvas()
		{
		    paintBucket.fillStyle = "white";
    		paintBucket.fillRect(0, 0, 500, 500);
		    paintBucket.strokeStyle = "black";
		    paintBucket.strokeRect(0, 0, 500, 500);
		}
		
		//This function paintes the cell with the color passed as an argument.
		function paintCell(x,y,color)
		{
			
			paintBucket.fillStyle = color;
			paintBucket.fillRect(x*cellDimension, y*cellDimension, cellDimension, cellDimension);
            paintBucket.strokeStyle = "white";
			paintBucket.strokeRect(x*cellDimension, y*cellDimension, cellDimension, cellDimension);
		}
		
        //This function paints the score on the canvas.
		function paintScore(score)
		{
		    var text = "Score: " + score;
		    paintBucket.fillStyle = "#000000";
		    paintBucket.fillText(text,20,20);
		}
		
		//This function paints the snake alternatively light and dark blue.
		function paintWholeSnake(array)
		{
		    for(var i = 0; i < array.length; i++)
		    {
		    	var temp = array[i];
		    	if(i%2 == 0)
		        paintCell(temp.x, temp.y, "#31D0F4");
		        else
		        paintCell(temp.x, temp.y, "#042B72");
		    }
		}