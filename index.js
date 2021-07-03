const links = document.querySelectorAll(".btn")
const home = document.querySelector(".homebtn")
const cart = document.querySelector(".cartbtn")
const cart1 = document.querySelector(".cartbtn1")
const menu = document.querySelector(".menu")
const menubox = document.createElement("DIV")
const cartbox = document.createElement("DIV")

menubox.id = "menubox"
document.body.appendChild(menubox)
cartbox.id = "cartbox"
document.body.appendChild(cartbox)

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


    
