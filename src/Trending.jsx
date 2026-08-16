const GetTrendingProduct = ({products}) =>{
    const trendingProduct = [...products].sort(
        (a, b) => b.rating - a.rating
    )[0];

    return (
        <>
            {trendingProduct && (
                <img
                    src={trendingProduct.image[0].url}
                    alt={trendingProduct.name}
                    className="img-fluid"
                />
            )}
        </>
    );
} 

export default GetTrendingProduct;