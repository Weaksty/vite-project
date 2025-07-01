//import
import './style.css'
import { products } from './products.js'
//import

console.log(products)
const artk = document.getElementById("Add-Block")
artk.onclick = function(){
    window.location.href = "/AddToCataloge/AddToCataloge.html"
}

