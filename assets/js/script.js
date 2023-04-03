import { imgData } from "../imagesData/images.js";

const box = document.querySelector("#images");

let select = "";
let add;
imgData.map(item =>{
    add += `<img src="${item.photo}" alt="">`
})
box.innerHTML = add;
console.log('test');