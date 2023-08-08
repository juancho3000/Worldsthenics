
function firstAction () {
    let askForUserName = prompt("Escribe tu nombre")
    let askForUserAge = prompt("ok" + " " + askForUserName + " " + "ahora podrias decirnos tu edad")
    if(askForUserAge < 21){
        alert("Lo lamento, pero no se aceptan compras hechas por menores a 21")
    }else if(askForUserAge >= 21){
        alert("Bienvenido" + " " + askForUserName + " " + "tienes edad suficiente para comprar")
    }
}

function dropdownAction () {
    document.getElementById("dropdown-list").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  