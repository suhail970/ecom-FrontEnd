import { useState } from "react";

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    ratings: "",
    seller: "",
    stock: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: product.name,
      price: Number(product.price),
      category: product.category,
      description: product.description,
      ratings: Number(product.ratings),
      seller: product.seller,
      stock: Number(product.stock),
      image: [
        {
          url: product.imageUrl
        }
      ]
    };

    const response = await fetch(
      "http://localhost:8080/api/products/addproduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.text();

    alert(result);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="addproStyle text-black text-center">
              <h3 className="mb-0">Add Product</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter product name"
                    value={product.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Price */}
                <div className="mb-3">
                  <label className="form-label">
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Enter price"
                    value={product.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Category */}
                <div className="mb-3">
                  <label className="form-label">
                    Category
                  </label>

                  <input
                    type="text"
                    name="category"
                    className="form-control"
                    placeholder="Enter category"
                    value={product.category}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label">
                    Description
                  </label>

                  <textarea
                    name="description"
                    className="form-control"
                    rows="3"
                    placeholder="Enter description"
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Rating */}
                <div className="mb-3">
                  <label className="form-label">
                    Rating
                  </label>

                  <input
                    type="number"
                    name="ratings"
                    className="form-control"
                    placeholder="Enter rating"
                    min="0"
                    max="5"
                    step="0.1"
                    value={product.ratings}
                    onChange={handleChange}
                  />
                </div>

                {/* Seller */}
                <div className="mb-3">
                  <label className="form-label">
                    Seller
                  </label>

                  <input
                    type="text"
                    name="seller"
                    className="form-control"
                    placeholder="Enter seller name"
                    value={product.seller}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Stock */}
                <div className="mb-3">
                  <label className="form-label">
                    Stock
                  </label>

                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    placeholder="Enter stock"
                    value={product.stock}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Image URL */}
                <div className="mb-4">
                  <label className="form-label">
                    Image URL
                  </label>

                  <input
                    type="url"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Enter image URL"
                    value={product.imageUrl}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Button */}
                <div className="d-grid">

                  <button
                    type="submit"
                    className="addprobutStyle btn"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;