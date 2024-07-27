let elem = document.querySelector('#name')
elem.textContent = Math.floor(Math.random() * 100)
   


let names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"]
 let colors = ["red", "green", "blue", "black", "yellow", "red"]
let divs = document.querySelectorAll('#dbd')
for (let i = 0;i < names.length; i++){
    let random = Math.floor(Math.random() * divs.length)
    divs[i].textContent = names[random]
    divs[i].style.color = colors[random]
}