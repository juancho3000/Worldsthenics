let openShopping = document.querySelector(".shopCartOpen");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let qty = document.querySelector(".qty");
let total = document.querySelector(".total")
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    category: "plates",
    name: "25 kg plate",
    price: 52,
    image: "worldsthenics/worldsthenics-imgs/plates/25kgs.webp",
  },

  {
    category: "plates",
    name: "20 kg plate",
    price: 45,
    image: "worldsthenics/worldsthenics-imgs/plates/20kgs.webp",
  },

  {
    category: "belts",
    name: "dip belt",
    price: 15,
    image: "worldsthenics/worldsthenics-imgs/belts/dipBelt.webp",
  },

  {
    category: "belts",
    name: "weightlifting belt",
    price: 20,
    image: "worldsthenics/worldsthenics-imgs/belts/BELTSBD.jpg",
  },

  {
    category: "bars",
    name: "dip bars",
    price: 300,
    image: "worldsthenics/worldsthenics-imgs/bars/dipBar.webp",
  },

  {
    category: "bars",
    name: "pull up bar",
    price: 170,
    image: "worldsthenics/worldsthenics-imgs/bars/pullupBar.webp",
  },

  {
    category: "appareal-sleeves",
    name: "elbow sleeves",
    price: 17,
    image: "worldsthenics/worldsthenics-imgs/appareal-sleeves/kneeSleeve.jpeg",
  },
  {
    category: "appareal-sleeves",
    name: "knee sleeves",
    price: 25,
    image: "worldsthenics/worldsthenics-imgs/appareal-sleeves/kneeSleeve.jpeg",
  },

  {
    category: "barbell",
    name: "20 kg barbell",
    price: 17,
    image: "worldsthenics/worldsthenics-imgs/barbells/male20kgBar.webp",
  },
  {
    category: "barbell",
    name: "15 kg barbell",
    price: 25,
    image: "worldsthenics/worldsthenics-imgs/barbells/female15kgBar.jpg",
  },
];

let listProducts = [];

function initShop() {
  products.forEach((value, key) => {
    let productsDiv = document.createElement("div");
    productsDiv.classList.add("item", value.category, "hide");
    productsDiv.innerHTML = `
            
            
            <h1 class="producto-name">${value.name}</h1>
            <img classname="card-photo" src="${value.image}"/>
            <p>$ ${value.price.toLocaleString()}</p>
            <p>${value.category}</p>
            <button onclick="addToCart(${key})">Buy product</button
            
        `;
    list.appendChild(productsDiv);
  });
}
initShop();

function addToCart(key) {
    if(listProducts[key] == null){
        listProducts[key] = products[key];
        listProducts[key].qty = 1;
        prices = products[key].price
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listProducts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.qty;

        if(value != null){
            let cartDiv = document.createElement("li");
            cartDiv.innerHTML = `
            <div><img src="${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.category}</div>
            <div>
                <button id="minus" onclick="changeQty(${key}, ${value.qty - 1})">-</button>
            <div classname="count">${value.qty}</div>
            <button id="plus" onclick="changeQty(${key}, ${value.qty + 1})">+</button>
            </div>
            `;
            listCard.appendChild(cartDiv);
        }
    })

    total.innerText = totalPrice.toLocaleString();
    qty.innerText = count;
}

function changeQty(key, qty){
    if(qty == 0){
        delete listProducts[key];
    } else {
        listProducts[key].qty = qty;
        listProducts[key].price = qty * prices;
    }
    reloadCard();
}


//filter and searchbar testing
function filterProductos(value) {
  let dropButtons = document.querySelectorAll(".button-value");
  dropButtons.forEach((button) => {
    if(value.toUpperCase() == button.innerText.toUpperCase()){
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let productoElements = document.querySelectorAll(".item");
  productoElements.forEach((element) => {
    if(value == "all"){
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
  let inputCards = document.querySelectorAll(".item");

  inputElements.forEach((element, index) => {
    if(element.innerText.includes(busquedaInput.toUpperCase())) {
      inputCards[index].classList.remove("hide");
    } else {
      inputCards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProductos("all")
}
//filter and searchbar testing
