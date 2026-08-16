import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({setSearchName, setRatings, setPri}) => {
    const [val, setVal] = useState("");

    const handleInput = (event) =>{
        setVal(event.target.value);
    }

    const handleButton = () =>{
        setSearchName(val);
    }

    const handlePrice = (event) =>{
        setPri(event.target.value);
    }

    const handleRatings = (event) =>{
        setRatings(Number(event.target.value));
    }

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Bankai
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/addProduct">Add Product</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <select className="navigation" name="" id="" onChange={handlePrice}>
                <option value="">Normal</option>
                <option value="asc">Price : Low to High</option>
                <option value="dec">Price : High to Low</option>
            </select>

             <select className="ratings" name="" id="" onChange={handleRatings}>
                <option value="0">Rating NONE</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
            </select>

          </ul>

          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={val}
              onChange={handleInput}
            />

            <button className="btn btn-outline-success bg-warning-subtle" onClick={handleButton}>
              search
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;