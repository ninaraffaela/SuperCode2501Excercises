//! CREATEELEMENT()
// create HTML Element in TS. set all properties

// ! APPENDCHILD()
// append a created element to another element - as child

// ! APPEND()
// c

const shopContainer = document.querySelector(".products");
const sortAscBtn = document.querySelector(".prise-asc");
const sortDescBtn = document.querySelector(".price-desc");

type shopItem = {
  productName: string;
  price: number;
  description: string;
  imgUrl: string;
  stock: number;
};

const shopItemsArr: shopItem[] = [
  {
    productName: "T-Shirt",
    price: 19.99,
    description: "Baumwoll-T-Shirt in verschiedenen Farben",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 50,
  },
  {
    productName: "Jeans",
    price: 49.99,
    description: "Slim-Fit-Jeans aus Denim",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 30,
  },
  {
    productName: "Sneakers",
    price: 79.99,
    description: "Bequeme Sneakers für den Alltag",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 20,
  },
  {
    productName: "Hoodie",
    price: 39.99,
    description: "Warmer Hoodie für kalte Tage",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 40,
  },
  {
    productName: "Jacke",
    price: 99.99,
    description: "Wind- und wasserabweisende Jacke",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 15,
  },
  {
    productName: "Hose",
    price: 29.99,
    description: "Leichte Stoffhose für den Sommer",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 60,
  },
  {
    productName: "Socken",
    price: 9.99,
    description: "Bequeme Socken aus Baumwolle",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 100,
  },
  {
    productName: "Mütze",
    price: 14.99,
    description: "Warme Mütze für den Winter",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 25,
  },
  {
    productName: "Schal",
    price: 24.99,
    description: "Weicher Schal aus Wolle",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 35,
  },
  {
    productName: "Handschuhe",
    price: 19.99,
    description: "Warme Handschuhe aus Leder",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 1,
  },
];

console.log(shopItemsArr);


// * pack the for Each in a function
function renderProducts(products: shopItem[]) {
  if(shopContainer) shopContainer.innerHTML = "";

  products.forEach((singleShopItem) => {
    // create a div. give it the class shop-item
    const productCard = document.createElement("div");
    productCard.classList.add("shop-item");

    // create a h2. put productName from the array in it
    const title = document.createElement("h2");
    title.innerText = singleShopItem.productName;

    const price = document.createElement("p");
    price.innerText = `${singleShopItem.price} €`;
    // price.hidden = true;
    // price.style.backgroundColor = "green";

    const description = document.createElement("p");
    description.innerText = singleShopItem.description;

    const image = document.createElement("img");
    image.src = singleShopItem.imgUrl;
    image.alt = singleShopItem.productName;

    const stock = document.createElement("p");
    stock.innerText = `${singleShopItem.stock.toString()} auf Lager`;

    productCard.append(image, title, stock, price, description);

    if (shopContainer) {
      shopContainer.appendChild(productCard);
    }
  });
}

renderProducts(shopItemsArr);



sortAscBtn?.addEventListener("click", sortPriceAscending);
sortDescBtn?.addEventListener("click", sortPriceDescending);

function sortPriceAscending() {
  console.log("i´ve been clicked");
  const sortedProducts = [...shopItemsArr];
  sortedProducts.sort((a, b) => a.price - b.price);
}

function sortPriceDescending() {
  console.log("i´ve been clicked");
  // get a copied array
  const sortedProducts = [...shopItemsArr];
  // compare price of the elements
  sortedProducts.sort((a, b) => b.price - a.price);
  renderProducts(sortedProducts);
  //
}
