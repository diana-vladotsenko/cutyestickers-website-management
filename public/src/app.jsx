import { createRoot } from "react-dom/client";


const App = () => {
    return (
        <h1>Welcome to the Product Page</h1>
    // <div className="a" style="display:none">
    //     <div className = "contact-basket-container" style={"margin-left:80px;margin-right:80px;"}>
    //     <p className="pages-container">
    //         <a className="page-1" href = "/">Home/</a>
    //         <a className="page-2" href = "/product">Product</a>
	//     </p>
	//     <i className="bi-basket">
	// 	    <img src="/icons/basket.svg" alt="Basket Icon" className="basket-icon"/>
	//     </i>
    //     </div>
    // </div>
    );
  };
  const container = document.getElementById("root");
  const root = createRoot(container);
  
  root.render(<App/>);
