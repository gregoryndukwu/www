$(document).ready(function(){
var info = $('#articlesList')
    $( "#link" ).click(function(e) {
        e.preventDefault();
        $('#container').append("<section ><article><p>Here is an Account -<a href='#' target='blank' id='link'>Click to Add a new Account</a> </p></article> </section>")
      });
});