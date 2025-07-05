//import
import './style.css'
import { products } from './products.js'
//import
const modul = document.getElementById("modul")
const closeBth = document.getElementById("close")


console.log(products)
const artk = document.getElementById("Add-Block")
artk.onclick = function(){
modul.style.display = "flex"   
}
closeBth.onclick = function(){
    modul.style.display = "none"
}

