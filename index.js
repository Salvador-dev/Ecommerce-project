const links = document.querySelectorAll(".btn")
const home = document.querySelector(".homebtn")
const cart = document.querySelector(".cartbtn")
const cart1 = document.querySelector(".cartbtn1")
const menu = document.querySelector(".menu")
const menubox = document.createElement("DIV")
const cartbox = document.getElementById("cartbox")



menubox.id = "menubox"
document.body.appendChild(menubox)


const nav = document.querySelector(".ul")
const x = document.querySelector(".x")

menu.addEventListener("click", ()=>{
   menubox.classList.add("active")
   menubox.appendChild(x)
   x.classList.add("active")
   menubox.appendChild(nav)
   nav.classList.add("active")
})

x.addEventListener("click", ()=>{
    menubox.classList.remove('active')
    cartbox.classList.remove('active')
    lightbox.classList.remove('active')
    x.classList.remove('active')
    
})


cart.addEventListener("click", ()=>{
    cartbox.classList.add("active")
    cartbox.appendChild(x)
    x.classList.add("active")
    
 })

cart1.addEventListener("click", ()=>{
    cartbox.classList.add("active")
    cartbox.appendChild(x)
    x.classList.add("active")
        
     })


home.addEventListener("click", ()=>{
    window.scrollTo(0,0)
})

links.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let el = document.querySelector("." + item.getAttribute("data-link"))
        el.scrollIntoView();
        menubox.classList.remove("active")
    })
})

const addToCart = document.querySelectorAll(".addbtn")

addToCart.forEach((button) => {
    button.addEventListener("click", addToCartClicked)
})

const buyButton = document.querySelector(".buybtn")
buyButton.addEventListener("click", buyButtonClicked)

const cartItemsContainer = document.querySelector(".cartItemsContainer")

function addToCartClicked(event){
    const button = event.target
    const item = button.closest(".item")
    

    const tittle = item.querySelector(".details .tittle").textContent
    const price = item.querySelector(".details .price").textContent
    const size = item.querySelector(".details .size").textContent
    const Image = item.querySelector(".image").src
  
    addItemToCart(tittle, price, size, Image);
}

function addItemToCart(tittle, price, size, Image){

    const elementsTittle = cartItemsContainer.getElementsByClassName("cartItemName")
  
    for(let i=0; i < elementsTittle.length; i++){
        if (elementsTittle[i].innerText === tittle){
          
        let elementQuantity =  elementsTittle[i].parentElement.parentElement.querySelector(".cartItemQuantity")
    
        elementQuantity.value++;
        updateShoppingCartTotal()
        return
        }
      }

      const cartRow = document.createElement('div');
      const cartContent = `
  <div class="cartItem">

  <div class="cartItemInfo">
  <img src=${Image} class="cartImage">
  <h6 class="cartItemName">${tittle}</h6>
  <h6 class="cartItemSize">${size}</h6>
  </div>

   <div class="cartItemInfo">
  <p class="cartItemPrice">${price}</p>
   </div>

   <div class="cartItemInfo">
  <input class="cartItemQuantity" type="number"
      value="1">
  <button class="buttonDelete" type="button">X</button>
   </div>    
   </div>
         `;

  cartRow.innerHTML = cartContent;
  cartItemsContainer.append(cartRow)

  cartRow.querySelector(".buttonDelete").addEventListener('click', removeCartItem);

  cartRow.querySelector(".cartItemQuantity").addEventListener("change", quantityChanged)

  updateShoppingCartTotal()
  updateCartQ()
}


function updateShoppingCartTotal(){
    let total =0;
    const cartTotal = document.querySelector(".cartTotal")
    
    const cartItems = document.querySelectorAll(".cartItem")
  
    cartItems.forEach(cartItem =>{
  
      const cartItemPriceElement = cartItem.querySelector(".cartItemPrice")
      
      const cartItemPrice = Number(cartItemPriceElement.textContent.replace("$", ""))
      
      const cartItemQuantityElement = cartItem.querySelector(".cartItemQuantity")
  
      const cartItemQuantity = Number(cartItemQuantityElement.value)
  
      total = total + cartItemPrice * cartItemQuantity
      
      
  
    })
    cartTotal.innerHTML = `${total.toFixed(2)}$`
    
    }
  
    function removeCartItem(event){
      const buttonClicked = event.target;
  
      buttonClicked.closest(".cartItem").remove();
      updateShoppingCartTotal()
      updateCartQ()
    }
  
    function quantityChanged(event){
      const input = event.target;
  
      if(input.value <= 0){
        input.value = 1;
      }
  
      updateShoppingCartTotal()
  
    }
  
    function buyButtonClicked() {


      cartItemsContainer.innerHTML = "<h2>Thanks for your purchase, your order will arrive soon!</h2>";
      updateShoppingCartTotal()
      updateCartQ()

      setTimeout(() => {
        cartbox.classList.remove("active")
        x.classList.remove("active")
        cartItemsContainer.innerHTML = " ";
        window.scrollTo(0,0)


      }, 3000);
  

    }

    
    

    const cartQ = document.querySelector(".cartQ")
    const cartQ1 = document.querySelector(".cartQ1") 

    cartQ.innerHTML = 0;
    cartQ1.innerHTML = 0;

    if(cartQ.innerHTML == 0){
      cartQ.classList.add("active")
    }

    if(cartQ1.innerHTML == 0){
      cartQ1.classList.add("active")
    }


    function updateCartQ(){
      
      cartQ.classList.remove("active")
      cartQ1.classList.remove("active")

      cartQ.innerHTML = document.querySelectorAll(".cartItem").length;
      cartQ1.innerHTML = document.querySelectorAll(".cartItem").length;

      if(cartQ.innerHTML == 0){
        cartQ.classList.add("active")
      }

      if(cartQ1.innerHTML == 0){
        cartQ1.classList.add("active")
      }
  
    }

    const lightbox = document.createElement('div')
    
    lightbox.id = 'lightbox'
    document.body.appendChild(lightbox)
    

    const images = document.querySelectorAll('.image')
    
    images.forEach(image => {
    image.addEventListener('click', e => {
      lightbox.classList.add('active') 

      const imgItem = event.target
      const itemDetails = imgItem.parentElement.querySelector(".details")

    const tittle = itemDetails.querySelector(".details .tittle").textContent
    const price = itemDetails.querySelector(".details .price").textContent
    const size = itemDetails.querySelector(".details .size").textContent

    const itemRow = document.createElement('div');
    itemRow.innerHTML = `
     <div class="itemDetails">

     <h6 class="dtlsName">${tittle}</h6>
     <h6 class="dtlsSize">${size}</h6>


     <h6 class="dtlsPrice">${price}</h6>
 
     <button class="dtlsbtn"><img src="addtocart.svg" alt=""></button>
       `;


      const img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild){
          lightbox.removeChild(lightbox.firstChild)
      }

      while (lightbox.lastChild){
        lightbox.removeChild(lightbox.lastChild)
    }



      
      lightbox.appendChild(img)
      lightbox.appendChild(x)
      lightbox.appendChild(itemRow)
      x.classList.add("active")

      const dtlsbtn = itemRow.querySelector(".dtlsbtn")

      dtlsbtn.addEventListener("click", ()=>{

        const tittle = image.parentElement.querySelector(".addbtn").closest(".item").querySelector(".details .tittle").textContent
        const price = image.parentElement.querySelector(".addbtn").closest(".item").querySelector(".details .price").textContent
        const size = image.parentElement.querySelector(".addbtn").closest(".item").querySelector(".details .size").textContent
        const Image= image.parentElement.querySelector(".addbtn").closest(".item").querySelector(".image").src
  
  
    
        addItemToCart(tittle, price, size, Image);
  
      })
    })
})
