
$("document").ready(function() {

  $("#add_new_animal_button").on(
    "click",
    function() {
      // Data to be submitted
      newAnimal = {
        "animal": {
          "name": $("#animal_name").val(),
          "latin_name": $("#animal_latin_name").val(),
          "kingdom": $("#animal_kingdom").val()
        }
      }

      $.ajax({
        dataType: 'json',
        url: '/animals',
        method: 'POST',
        data: newAnimal,
        success: function(dataFromServer) {
          add_to_animal_list(dataFromServer);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });
  });// end add wine

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_animal_list(data) {
  $("#animal_list").append(
    '<tr><td>' + data.name  + '</td><td>' +
    data.latin_name + '</td><td>' + data.kingdom + '</td><td>' + '<a href="/animals/' + data.id + '">Show</a></td><td>' + '<a href="/animals/' + data.id + '/edit' + '">Edit</a></td><td>' + '<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/animals/' + data.id + '">Destroy</a></td></tr>');
}
