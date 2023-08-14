const container=document.querySelector(".container")

const btn=document.querySelector(".btn")

const popup= document.querySelector(".popup-contain")

const close=document.querySelector(".close-icon")


btn.addEventListener('click',()=>{
container.classList.add("active")
popup.classList.remove("active")
})

close.addEventListener("click",()=>{
    popup.classList.add("active")
    container.classList.remove("active")


})