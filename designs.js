// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
    // Prevent default submit action from reloading page.
    e.preventDefault();

    // Destroy any existing table cells.
    $('#pixelCanvas').find('*').each(function() {
        $(this).remove();
    });

    let h = $("#inputHeight").val();
    let w = $("#inputWidth").val();

    for(let x = 0; x < h; x++) {
      $('#pixelCanvas').append("<tr>");
      for(let y = 0; y < w; y++) {
        $('tr:last-child').append("<td>");
      }
    }
}

$('#sizePicker').submit(makeGrid);
$('#pixelCanvas').on('click','td', function(e){
  $(e.target).css('background-color',$('#colorPicker').val());
})