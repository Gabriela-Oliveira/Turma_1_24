import { react } from "./descReact.js"
import { javaScript } from "./descJavaScript.js"

function conteudoReact() {
    console.log('CHAMOU A FUNÇÃO DO REACT');
    let divContainer = document.getElementById("container");
    divContainer.innerHTML = "";
    
    let elemento = document.createElement("p");

    let item = document.createTextNode(react());
    elemento.appendChild(item);
    divContainer.appendChild(elemento);
}

function conteudoJavaScript() {
    console.log('CHAMOU A FUNÇÃO DO Java Script');
    let divContainer = document.getElementById("container");
    divContainer.innerHTML = "";
    
    let elemento = document.createElement("p");

    let item = document.createTextNode(javaScript());
    elemento.appendChild(item);
    divContainer.appendChild(elemento);
}

let clickReact = document.getElementById("react");
clickReact.addEventListener("click", conteudoReact);

let clickJavaScript = document.getElementById("javaScript");
clickJavaScript.addEventListener("click", conteudoJavaScript);