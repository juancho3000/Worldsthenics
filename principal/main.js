
function calcularEdad() {

 let userAge = document.getElementById("DOB").value;
 let dob = new Date(userAge);
  if(userAge==null || userAge=='') {
    document.getElementById("message").innerHTML = "**Escribe tus datos!";  
    return false; 
  } else {
  
 
 let month_diff = Date.now() - dob.getTime();
  
  
 let age_dt = new Date(month_diff); 
  
     
 let year = age_dt.getUTCFullYear();
  
 
  let age = Math.abs(year - 1970);
  
 
  return document.getElementById("result").innerHTML =  
           "tu edad es: " + age + " anos. ";
  }
}

function dropdownAction () {
  document.getElementById("dropdown-list").classList.toggle("show");
}
  

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
     let dropdowns = document.getElementsByClassName("dropdown-content");
     let i;
      for (i = 0; i < dropdowns.length; i++) {
       let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

  const productsDropdown = document.getElementById("dropdown-test")
  const productsImages = document.getElementById("drop-test-image")

   function dropdownPesas(){
    const productosPesas = [
      {id:1, name:"25 kg disco", precio:20, img:"images/plates-imgs/25-kgs.avif"},
      {id:2, name:"20 kg disco", precio:20, img:"images/plates-imgs/20-kgs.avif"},
      {id:3, name:"15 kg disco", precio:20, img:"images/plates-imgs/15-kgs.avif"},
      {id:4, name:"10 kg disco", precio:20, img:"images/plates-imgs/10-kgs.webpp"},
      {id:5, name:"5 kg disco", precio:20, img:"images/plates-imgs/5-kgs.webpp"},
    ]
    const outcomePesas = productosPesas.map((el) => el.img);
    let OutcomeAnswerPesas = prompt("has seleccionado ropa?, es para confirmar")
    let respuestaPositivaPesas = "si"

    if(OutcomeAnswerPesas === respuestaPositivaPesas){
      alert("has seleccionado los productos con id:" + " " + productosPesas.map((el) => el.id))
    }if(OutcomeAnswerPesas== ""){
      alert("para ver los id tienes que escribir si")
    }
    else if(OutcomeAnswerPesas === "no"){
      alert("ok, puedes selecconar otra opcion entonces")
    }
    console.log(outcomePesas);
  }

  function dropdownAcc(){
    const productosAccesorios = [
      {id:6, name:"Cinturon de lastre", precio:10, img:"images/accessories-imgs/dip-belt.webpp"},
      {id:7, name:"Cinturon de peso", precio:10, img:"images/accessories-imgs/sbd-belt.jpg"},
      {id:8, name:"coderas", precio:5, img:"images/accessories-imgs/elbow-sl.jpeg"},
      {id:9, name:"munequeras", precio:5, img:"images/accessories-imgs/wrist-wraps.jpg"},
      {id:10, name:"rodilleras", precio:7, img:"images/accessories-imgs/elbow-sl.jpeg"}
    ]
    const outcomeAcc = productosAccesorios.map((el) => el.img);
    let OutcomeAnswerAcc = prompt("has seleccionado ropa?, es para confirmar")
    let respuestaPositivaAcc = "si"

    if(OutcomeAnswerAcc === respuestaPositivaAcc){
      alert("has seleccionado los productos con id:" + " " + productosAccesorios.map((el) => el.id))
    }if(OutcomeAnswerAcc== ""){
      alert("para ver los id tienes que escribir si")
    }
    else if(OutcomeAnswerAcc === "no"){
      alert("ok, puedes selecconar otra opcion entonces")
    }
    console.log(outcomeAcc);
  }
  
   function dropdownParallettes(){
      const productosParallettes = [
        {id:11, name:"paralelas bajas", precio:15, img:"images/parallettes-imgs/low-pl.webp"},
        {id:12, name:"paralelas altas", precio:18, img:"images/parallettes-imgs/high-pl.jpeg"},
        {id:13, name:"estacion de fondos", precio:30, img:"images/parallettes-imgs/dip-bars.webp"},
        {id:14, name:"barra front lever", precio:15, img:"images/parallettes-imgs/front-lever-bar.jpeg"},
        {id:15, name:"anillas", precio:10, img:"images/parallettes-imgs/gym-rings.jpg"}
    ]
    const outcomeParallettes = productosParallettes.map((el) => el.img);
    let OutcomeAnswerParallettes = prompt("has seleccionado ropa?, es para confirmar")
    let respuestaPositivaParallettes = "si"

    if(OutcomeAnswerParallettes === respuestaPositivaParallettes){
      alert("has seleccionado los productos con id:" + " " + productosParallettes.map((el) => el.id))
    }if(OutcomeAnswerParallettes == ""){
      alert("para ver los id tienes que escribir si")
    }
    else if(OutcomeAnswerParallettes === "no"){
      alert("ok, puedes selecconar otra opcion entonces")
    }
    console.log(outcomeParallettes);
   }
  
    function dropdownRopa(){
      const productosRopa = [
      {id:16, name:"franela algodon", precio:15, img:"images/clothes-imgs/cotton-shirt.webp"},
      {id:17, name:"franela algodon oversize", precio:20, img:"images/clothes-imgs/Oversize-shirt.webp"},
      {id:18, name:"pantalon largo algodon", precio:25, img:"images/clothes-imgs/long-pants.webp"},
      {id:19, name:"shorts de algodon", precio:10, img:"images/clothes-imgs/shorts.webp"},
      {id:20, name:"sweater", precio:25, img:"images/clothes-imgs/sweater-hoodie.webp"}
    ]
    const outcomeRopa = productosRopa.map((el) => el.img);
    let OutcomeAnswerRopa = prompt("has seleccionado ropa?, es para confirmar")
    let respuestaPositivaRopa = "si"

    if(OutcomeAnswerRopa === respuestaPositivaRopa){
      alert("has seleccionado los productos con id:" + " " + productosRopa.map((el) => el.id))
    }if(OutcomeAnswerRopa == ""){
      alert("para ver los id tienes que escribir si")
    }
    else if(OutcomeAnswerRopa === "no"){
      alert("ok, puedes selecconar otra opcion entonces")
    }
    console.log(outcomeRopa);
    }