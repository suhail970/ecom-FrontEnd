import { useEffect, useState } from "react"
import GetProductList from "./ProductList";
import Navbar from "./NavBar";
import GetProductFilterList from "./ProductFilterList";

function App() {
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [pri, setPri] = useState("");

  const getProducts = () =>{
    fetch("http://localhost:8080/api/products")
    .then(res => {
      if(!res.ok){
        throw new Error("Failed to fetch Products!(Gapacho)");
      }
      return res.json();
    })
    .then(data => setProducts(data.products))
    .catch(error => console.error(error));
  }

  const getSearchProducts = () =>{
    if(searchName !== "" || pri !== ""){
      fetch(`http://localhost:8080/api/products/search?key=${encodeURIComponent(searchName)}&order=${pri}`)
      .then(res => {
        if(!res.ok){
          throw new Error("Failed to fetch Products!(Gapacho)");
        }
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error(error));
    }
    else{
      getProducts();
    }
  }

  useEffect(getProducts,[]);
  useEffect(getSearchProducts, [searchName, pri]);

  return (
    <>
      <div className="box">
        <div className="topbox">
          <Navbar setSearchName={setSearchName}  setPri={setPri}/>
        </div>
        <div className="cenbox">
          {products.length ? searchName === "" && pri === "" ?  <GetProductList products={products} />: <GetProductFilterList products={products} /> : <p>Products Not Found</p>}
        </div>
      </div>
    </>
  )
}

export default App
