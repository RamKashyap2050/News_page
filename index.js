function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("navbar")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    if(y.style.display==="block"){
        y.style.display="grid";
    }
    else{
        y.style.display="block";
    }
    
  }