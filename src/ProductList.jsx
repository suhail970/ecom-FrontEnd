
const GetProductList = ({products}) =>{
    return (
        <>
            <div className="row">
                {products.map(pro => {
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-10 mb-3" key={pro.id}>
                            <div className="card h-100">
                            <img src={pro.image[0].url} className="card-img-top" alt={pro.name} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{pro.name}</h5>
                                <p className="card-text"><strong>₹ {pro.price}</strong> </p>
                                <a href="#" className="btn btn-primary mt-auto align-self-start">
                                Add-TO-Cart
                                </a>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default GetProductList;