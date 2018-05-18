// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
// Your code goes here!

function makeGrid() {
  const inputHeight = $('#inputHeight').val();
  const inputWidth = $('#inputWidth').val();

  for (let rows = 1; rows <= inputHeight; ++rows) {
    $('#pixelCanvas').append($('<tr></tr>'));
    for (let columns = 1; columns <= inputWidth; ++columns) {
      $('tr').last().append($('<td></td>'));
    }
  }
}


/*

Button to Draw 
grid of squares

*/


$('#GridSizeBtn').on('click', function (event) {
  event.preventDefault();
  //clear grid
  $('#pixelCanvas').empty()
  makeGrid();
});


/*

Button to clear
grid of squares

*/


document.getElementById("clearGridSizeBtn").addEventListener("click", function (event) {
  $('#pixelCanvas').empty();
});


/*To choose color to fill quares*/


$('#pixelCanvas').on('click', 'td', function (event) {
  var color = $("#colorPicker").val();
  // If not white, make white after clicking
  if ($(this).css('background-color') !== 'rgb(255, 255, 255)') {
    $(this).css('background-color', color);
  }
});