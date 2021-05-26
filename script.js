function funcao1() {
    var x;
    var r = confirm("Escolha um valor!");
    if (r == true) {
      x = "você pressionou OK!";
    }
    else {
      x = "Você pressionou Cancelar!";
    }
    document.getElementById("demo").innerHTML = x;
  }