
 src="https://code.jquery.com/jquery-3.6.3.min.js" 
$(document).ready(function(){
    $("#mytable").hide();
    
    function slideDownTable(){
        $("#myTable").slideDown("slow");
    }
    $("#myButton").click(function(){
        slideDownTable();
    });
});