import React from "react";
import { createRoot } from "react-dom/client";



function staticContainer({}) {
    return React.createElement("div", {className: "contact-basket-container", style: {marginLeft: "80px", marginRight: "80px"}},
        React.createElement("p", {className: "pages-container"},
        React.createElement("a", {className: "page-1", href: "/"}, "Home/"),
        React.createElement("a", {className: "page-2", href: "/product"}, "Product")
        ),
        React.createElement("img",{src: "../icons/basket.svg", alt:"Basket Icon", className:"basket-icon"}) 
    )
}

function pageProductSection({}) {
    return React.createElement("div", {className: "page-product-container"},
        React.createElement("div", {className: "page-product-images"},
            React.createElement("img", {src: "/database/products/images/potato_set.webp", alt: "Page Product Image", className: "product-image-small"}),
        ),
    )
}


const App = ()=>{
    return React.createElement(
        "div", null, 
        React.createElement(staticContainer),
        React.createElement(pageProductSection),
    )
}

const container= document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(<App/>)); 
