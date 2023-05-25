src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"; defer>

$(document).ready(function() {
    $(".header").animate({
        left:'250px',
        opacity:'0.5',
        height:'150px',
        width:'150px'
    });
});

function ajaxpost () {
   
    var data = new FormData(document.getElementById("myForm"));
   
    
    fetch("1c-server.html", { method:"POST", body:data })
    .then(res => res.text())
   
    
    .then(response => {
      console.log(response);
      if (response == "OK") { alert("SUCCESSFUL!"); }
      else { alert("FAILURE!"); }
    })
   
   
    .catch(err => console.error(err));
   
   
    return false;
  }