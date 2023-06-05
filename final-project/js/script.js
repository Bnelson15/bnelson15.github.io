
$(document).ready(function(){
    $(".btn1").click(function(){
      $("table").slideUp();
    });
    $(".btn2").click(function(){
      $("table").slideDown();
    });
  });

  function submitForm() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var isValid = true;

    if (name === "") {
      isValid = false;
      document.getElementById("name").classList.add("error");
    } else {
      document.getElementById("name").classList.remove("error");
    }
    if (message === "") {
      isValid = false;
      document.getElementById("message").classList.add("error");
    } else {
      document.getElementById("message").classList.remove("error");
    }

    if (isValid) {
      // Clear text from textboxes
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";

    alert("Submitted");
    } else {
      alert("Form is not valid. Please fill in all the required fields.");
    }
  }