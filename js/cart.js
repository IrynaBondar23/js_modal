const modalCart = document.querySelector(".cart_modal");
const cardOpen = document.querySelector(".cart_icon");

const cart = {
  goodsImg:
    "https://appstudio.com.ua/image/cache/catalog/ipad/iPad_10.5/rfb-ipad-pro10in-rosegold-wifi-2017-800x800.jpg",
  goodsName: "Ipad X2310",
  // goodsCount: "1",
  goodsPrice: 23000,
};
const cartModal = `<div class="modal_start">
<p class="modal_title">Ваші замовлення</p>
<img src="./img/Close.svg" alt="" class="close_btn" />
</div>
<div class="cart_order">
<img src="${cart.goodsImg}" alt=""/> 
<p>${cart.goodsName}</p> 
<p class="less_btn">-</p>
<input type="text" class="goodsCount" value="1" min="1">
<p class="plus_btn">+</p>
<p>${cart.goodsPrice}</p>
</div>
<div class="modal_end">
<a href="#" class="go_back_btn">Повернутись до покупок</a>
<button class="pay_btn">Оплатити</button>
</div>`;
modalCart.insertAdjacentHTML("afterbegin", cartModal);

const lessBtn = document.querySelector(".less_btn");
const plusBtn = document.querySelector(".plus_btn");
const goodsNumber = document.querySelector(".goodsCount");

plusBtn.addEventListener("click", (e) => {
  let currentValue = Number.parseInt(goodsNumber.value);
  goodsNumber.value = currentValue += 1;
});
lessBtn.addEventListener("click", (e) => {
  let currentValue = Number.parseInt(goodsNumber.value);
  goodsNumber.value = currentValue -= 1;
});

cardOpen.addEventListener("click", (e) => {
  modalCart.style.display = "block";
});

const closeBtn = document.querySelector(".close_btn");
closeBtn.addEventListener("click", (e) => {
  modalCart.style.display = "none";
});
