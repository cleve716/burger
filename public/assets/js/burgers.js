// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-it").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var newState = {
        devoured: true
    };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
        }).then(
        function() {
          console.log("changed status to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  console.log( $("#bgr").val().trim());

      var newBurger = {
        name: $("#bgr").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
         location.reload();
        }
      );
    });
  });