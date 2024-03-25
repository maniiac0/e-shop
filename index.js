window.onload = function () {
    let cart = [];
   
   
    function addToCart(item) {
      cart.push(item);
      displayCart();
    }
   
   
    function displayCart() {
      products_cart.innerHTML = "";
      cart.forEach(function (item) {
        let cart_item = document.createElement("div");
        let img = document.createElement("img");
        let cart_title = document.createElement("div");
        cart_title.textContent = item.title;
        cart_item.appendChild(img);
        cart_item.appendChild(cart_title);
        products_cart.appendChild(cart_item);
      });
    }
    let container = document.getElementById("products-container");
    let products_cart = document.getElementById("products-cart");
    fetch("https://fakestoreapi.com/products")
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        data.forEach(function (item) {
          let product = document.createElement("div");
          let img = document.createElement("img");
          let product_info = document.createElement("div");
          let product_price = document.createElement("div");
          let product_name = document.createElement("div");
          let add_btn = document.createElement("button");
          product.appendChild(img);
          product.appendChild(product_info);
          product_info.appendChild(product_price);
          product_info.appendChild(product_name);
          product_info.appendChild(add_btn);
          img.src = item.image;
          product_name.textContent = item.title;
          // console.log(item, "item");
          product_price.textContent = item.price + "$";
          add_btn.textContent = "Add to cart";
          product.classList = "product";
          product_info.classList = "product_info";
   
   
          add_btn.addEventListener("click", function () {
            addToCart(item);
          });
          console.log(cart, "my cart");
          container.appendChild(product);
        });
      })
      .catch();
   };
   