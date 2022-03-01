window.onload = function(){
    var params = window.location.search.substring(1).split('&');
    var size = params.length;
    var userName = params[0].split("=",2);
    var login = paramse[1].split("=",2);
    var check = params[2].split("=",2);
    console.log(size)

    document.getElementById('login').innerHTML = userName[1];
    document.getElementById('password').innerHTML = login[1];
    
    if (size > 3 ){
        document.getElementById('checked').innerHTML = "Checked is On";
    }else{
        document.getElementById('checked').innerHTML = "Checked is Off";
    }

  function clean(){
      alert('clean')
  } 

}