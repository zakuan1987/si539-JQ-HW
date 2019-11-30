ch3form.onsubmit = function() {
    // var fruit =
    // document.querySelectorAll('input[name="fruit"]')


    // for (let i = 0; i < fruit.length;i++){
    //     if (fruit[i].checked)
    //         return true;
    // }

    // alert("You must pick a fruit!")
    // return false;





    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
  }


  $(document).ready(function() {
    $("#ch3form").submit(function(event) {
     var class_standing = $("input[name = standing]:checked").val();
      var Fruit_selection = $("input[name = fruit]:checked").val();
      if ( Number(class_standing)>=1  && Number(Fruit_selection) >= 1 ) {
      } else {
        alert("You must pick a class standing and a fruit!");
        event.preventDefault();
      }
    })
  })
