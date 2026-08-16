import { useEffect, useState } from "react"
import GetProductList from "./ProductList";
import Navbar from "./NavBar";
import GetProductFilterList from "./ProductFilterList";
import GetTrendingProduct from "./Trending";
import GetFooter from "./Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [pri, setPri] = useState("");
  const [ratings, setRatings] = useState(0);

  useEffect( () => {
    const getSearchProducts = async() =>{
        try{
        const params = new URLSearchParams();

        if (searchName !== "") params.append("key", searchName);
        if (pri !== "") params.append("order", pri);
        if (ratings !== 0) params.append("rating", ratings);

        console.log(params);

        const url =
        params.toString().length > 0
          ? `http://localhost:8080/api/products/search?${params.toString()}`
          : "http://localhost:8080/api/products";

        const response = await fetch(url);

        const data = await response.json();
        if(params.toString().length > 0){
          setProducts(data);
        }
        else{
          setProducts(data.products);
        }
        }
        catch (error){
          console.error(error);
        }
      };
    getSearchProducts();
  }, [searchName, pri, ratings]);


  return (
    <>
      <div className="box">
        <div className="topbox">
          <Navbar setSearchName={setSearchName} setRatings={setRatings} setPri={setPri}/>
        </div>
        <div className="trendingg">
          {searchName === "" && pri === "" && ratings === 0 ? 
          <>
          <i><h1>Trending Product</h1></i>
          <GetTrendingProduct products={products} /> 
          </>
          : null}
        </div>
        <hr />
        <div className="header11">
          <h3>Products</h3>
        </div>
        <div className="cenbox">
          {products.length ? searchName === "" && pri === "" && ratings === 0 ? <GetProductList products={products} /> : <GetProductFilterList products={products} /> : <p>Products Not Found</p>}
        </div>
        <div className="footerbox">
          <GetFooter />
        </div>
      </div>
    </>
  )
}

export default App
