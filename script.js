import { createCard, q } from "./utils.js";

const BASE_URL = "https://fakestoreapi.com/products";

const productEl = q(".products");
const contatoreHeader = document.getElementById("contatoreDiVestiti");
const contatoreFooter = document.getElementById("productCounter");
fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    const newList = data
      .filter((product) => product.rating.count >= 200)
      .map((product) =>
        createCard(productEl, product.image, product.title, product.price)
      );
    let newListCounter = newList.length;
    contatoreHeader.innerHTML = newListCounter;
    contatoreFooter.innerHTML = newListCounter;
  });
