
$('#ch4form').submit(function(e) {
    var Fullname = $("#fullname")
    var Streetaddress = $("#streetaddr")
      if (Fullname.val().length == 0){

        $("#nameerrormsg").css("display", "block");
        e.preventDefault();
      }else {
        $("#nameerrormsg").css("display", "none");
      }
      if ( Streetaddress.val().length == 0){

        e.preventDefault();

        $("#addrerrormsg").css("display", "block");
      }else {
        $("#addrerrormsg").css("display", "none");
      }

  })
