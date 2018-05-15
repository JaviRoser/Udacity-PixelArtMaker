// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
function makeGrid() {
		var inputHeight= $('#inputHeight').val();
		var inputWidth=$('#inputWidth').val();
		for (var rows = 1; rows <=inputHeight; ++rows) 
			{
			$('#pixelCanvas').append($('<tr></tr>'))
			for (var columns=1; columns <=inputWidth; ++columns) 
				{
				$('tr').last().append($('<td></td>'))
				}
			}	
		}

//
		$('#GridSizeButton').on('click', function(event){
  event.preventDefault();
  //clear grid
  $('#pixelCanvas').empty()
  //Make the grid
  makeGrid();
});

$('#pixelCanvas').on('click', 'td', function(event){
  var color = $("#colorPicker").val();
  
  // If not white, make white after clicking
  if ($(this).css('background-color') !== 'rgb(255, 255, 255)') {
    $(this).css('background-color', 'rgb(255, 255, 255)')
  } else {
    // Change color if is already white
    $(this).css('background-color', color);
  }
});





