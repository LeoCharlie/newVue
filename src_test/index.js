import indexCss from "./public/css/index.css";
import imgSrc from "./public/imgs/1.jpg";

let p = document.createElement("p");
p.innerText="pNode";
document.getElementById("root").appendChild(p);

let fn = ()=>{
    console.log("es6");
    
}
fn();

let img = new Image();
img.src = imgSrc;
document.getElementById("root").appendChild(img);