
const GetProductList = ({products}) =>{
    return (
        <>
            <div className="row">
                {products.map(pro => {
                    return (
                        <div className='card col-lg-3 col-md-6 col-sm-12 mb-3' key={pro.id}>
                            <img src={pro.image[0].url} className="card-img-top" alt={pro.name} />
                            <div className="card-body">
                                <h5 className="card-title">{pro.name}</h5>
                                <p className="card-text"><strong>{pro.price}</strong> </p>
                                <a href="#" className="btn btn-primary">
                                Add-TO-Cart
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default GetProductList;