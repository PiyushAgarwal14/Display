function validateForm() {
    var x = document.forms["myForm"]["user"].value;
    if (x == "" || x == null) {
      alert("Username must be filled out");
      return false;
    }
    var y =document.forms["myForm"]["pass"].value;
     if (y== "" || y== null) {
      alert("Passowrd must be filled out");
      return false;
     } 
  }



document.addEventListener('contextmenu', function(e) {
  alert("You Can Not Do This!");
  e.preventDefault();
});
