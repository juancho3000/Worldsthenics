let openCart = document.querySelector('.shopping-cart');
let closeCart = document.querySelector('.closeShop');
let bodyCart = document.querySelector('body');
let listCard = document.querySelectorAll('.listCard');

openCart.addEventListener('click', () =>{
  bodyCart.classList.add('activo');
})
closeCart.addEventListener('click', ()=>{
  bodyCart.classList.remove('activo');
})
  
      let dropProducts = {
        data: [ 
      {categoria: "pesas", name:"25 kg disco", precio:35, image:"public/images/plates-imgs/25-kgs.avif",},
      {categoria: "pesas", name:"20 kg disco", precio:25, image:"public/images/plates-imgs/20-kgs.avif",},
      {categoria: "pesas", name:"15 kg disco", precio:20, image:"public/images/plates-imgs/15-kgs.avif",},
      {categoria: "pesas", name:"10 kg disco", precio:15, image:"public/images/plates-imgs/10-kgs.webp",},
      {categoria: "pesas", name:"5 kg disco", precio:10, image:"public/images/plates-imgs/5-kgs.webp",},
      {categoria: "accesorios", name:"Cinturon de lastre", precio:10, image:"public/images/accessories-imgs/dip-belt.webp",},
      {categoria: "accesorios", name:"Cinturon de peso", precio:10, image:"public/images/accessories-imgs/sbd-belt.jpg",},
      {categoria: "accesorios", name:"coderas", precio:5, image:"public/images/accessories-imgs/elbow-sl.jpeg",},
      {categoria: "accesorios", name:"munequeras", precio:5, image:"public/images/accessories-imgs/wrist-wraps.jpg",},
      {categoria: "accesorios", name:"rodilleras", precio:7, image:"public/images/accessories-imgs/knee-sl.webp",},
      {categoria: "paralelas", name:"paralelas bajas", precio:15, image:"public/images/parallettes-imgs/low-pl.webp",},
      {categoria: "paralelas", name:"paralelas altas", precio:18, image:"public/images/parallettes-imgs/high-pl.jpeg",},
      {categoria: "paralelas", name:"estacion de fondos", precio:30, image:"public/images/parallettes-imgs/dip-bars.webp",},
      {categoria: "paralelas", name:"barra front lever", precio:15, image:"public/images/parallettes-imgs/front-lever-bar.jpeg",},
      {categoria: "paralelas", name:"anillas", precio:10, image:"public/images/parallettes-imgs/gym-rings.jpg",},
      {categoria: "ropa", name:"franela algodon", precio:15, image:"public/images/clothes-imgs/cotton-shirt.webp",},
      {categoria: "ropa", name:"franela algodon oversize", precio:20, image:"public/images/clothes-imgs/Oversize-shirt.webp",},
      {categoria: "ropa", name:"pantalon largo algodon", precio:25, image:"public/images/clothes-imgs/long-pants.jpeg",},
      {categoria: "ropa", name:"shorts de algodon", precio:10, image:"public/images/clothes-imgs/shorts.webp",},
      {categoria: "ropa", name:"sweater", precio:25, image:"public/images/clothes-imgs/sweater-hoodie.webp",},      
    ],
      };
      

      let listProducts = [];

      for(let i of dropProducts.data){
        let card = document.createElement("div");
        card.classList.add("card", i.categoria, "hide");

        let imagenContenedor = document.createElement("div");
        imagenContenedor.classList.add("imagen-cont");

        let imagenProducto = document.createElement("img");
        imagenProducto.setAttribute("src", i.image);
        imagenContenedor.appendChild(imagenProducto);
        card.appendChild(imagenContenedor);

        let contenedorProducto = document.createElement("div");
        contenedor.classList.add("cont");

        let nombreProducto = document.createElement("h4");
        nombreProducto.classList.add("producto-name");
        nombreProducto.innerText = i.name.toUpperCase();
        contenedorProducto.appendChild(nombreProducto);

        let precioProducto = document.createElement("h5");
        precioProducto.innerText = "$" + i.precio;
        contenedorProducto.appendChild(precioProducto);

       
          
            let productoCompButton = document.createElement('h6');
            productoCompButton.innerText= "Comprar";
            productoCompButton.addEventListener('click',() =>{
              console.log("total:" + i.precio);
                 let subTotal = 0 ;
            let totalSum = subTotal + i.precio;
        let cantidadTotal = document.querySelector('.total');
        cantidadTotal.innerText = totalSum;
            
            });
           
            contenedorProducto.appendChild(productoCompButton);
            card.appendChild(contenedorProducto);
            document.getElementById("productos").appendChild(card)
       

           
          
         
      function filterProductos(value) {
        let dropButtons = document.querySelectorAll(".button-value");
        dropButtons.forEach((button) => {
          if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
          } else {
            button.classList.remove("active");
          }
        });

        let productoElements = document.querySelectorAll(".card");
        productoElements.forEach((element) => {
          if(value == "todos"){
            element.classList.remove("hide");
          } else {
            if(element.classList.contains(value)) {
              element.classList.remove("hide")
            } else {
              element.classList.add("hide");
            }
          }
        });
      }

      document.getElementById("busqueda").addEventListener("click", () => {
        let busquedaInput = document.getElementById("busqueda-input").value;
        let inputElements = document.querySelectorAll(".producto-name");
        let inputCards = document.querySelectorAll(".card");

        inputElements.forEach((element, index) => {
          if(element.innerText.includes(busquedaInput.toUpperCase())) { 
            inputCards[index].classList.remove("hide");
          } else {
            inputCards[index].classList.add("hide");
          }
        });
      });

      window.onload = () => {
        filterProductos("todos")
      }
      }