
$(document).ready(function(){
    $(".btn1").click(function(){
      $("table").slideUp();
    });
    $(".btn2").click(function(){
      $("table").slideDown();
    });
  });
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
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
      alert("Form is valid! You can submit it.");
    } else {
      alert("Form is not valid. Please fill in all the required fields.");
    }
  }