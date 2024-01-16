let openShopping = document.querySelector(".shopCartOpen");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let qty = document.querySelector(".qty");
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
    image:
     "./worldsthenics-imgs/plates/25kgs.webp",
  },

  {
    category: "plates",
    name: "20 kg plate",
    price: 45,
    image: "./worldsthenics-imgs/plates/20kgs.webp",
  },

  {
    category: "belts",
    name: "dip belt",
    price: 15,
    image: "./worldsthenics-imgs/belts/dipBelt.webp",
  },

  {
    category: "belts",
    name: "weightlifting belt",
    price: 20,
    image: "./worldsthenics-imgs/belts/BELTSBD.jpg",
  },

  {
    category: "bars",
    name: "dip bars",
    price: 300,
    image: "./worldsthenics-imgs/belts/dipBelt.webp",
  },

  {
    category: "paralelas",
    name: "pull up bar",
    price: 170,
    image: "./worldsthenics-imgs/bars/pullupBar.webp",
  },

  {
    category: "appareal-sleeves",
    name: "elbow sleeves",
    price: 17,
    image: "./worldsthenics-imgs/appareal-sleeves/elbowSleeves.jpg",
  },
  {
    category: "appareal-sleeves",
    name: "knee sleeves",
    price: 25,
    image: "./worldsthenics-imgs/appareal-sleeves/kneeSleeve.jpeg",
  },

  {
    category: "barbell",
    name: "20 kg male barbell",
    price: 17,
    image: "./worldsthenics-imgs/barbells/male20kgBar.webp",
  },
  {
    category: "barbell",
    name: "15 kg female barbell",
    price: 25,
    image: "./worldsthenics-imgs/barbells/female15kgBar.jpg",
  },
];

let listProducts = [];

function initShop() {
  products.forEach((value, key) => {
    let productsDiv = document.createElement("div");
    productsDiv.innerHTML = `
            
            
            <h1>${value.name}</h1>
            <img classname="card-photo" src="${value.image}"/>
            <p> ${value.price}</p>
            <p>${value.category}</p>
            <button><h4>Buy product<h4></button
            
        `;
    list.appendChild(productsDiv);
  });
}
initShop();
