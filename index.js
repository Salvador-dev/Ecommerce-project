const links = document.querySelectorAll(".btn")
const home = document.querySelector(".homebtn")

home.addEventListener("click", ()=>{
    window.scrollTo(0,0)
})

links.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let el = document.querySelector("." + item.getAttribute("data-link"))
        el.scrollIntoView();
    })
})