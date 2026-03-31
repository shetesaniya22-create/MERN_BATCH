import "./Product.css";

function Product({ title, price = 1}) {
    let isDiscount=price>30000;
    let styles={backgroundColor:isDiscount?"pink":""};
    
    
        return (
        <div className="Product" style={styles}>
            <h1>{title}</h1>
            <h3>Price: ₹{price}</h3>
            {isDiscount ?<p>Discount is 5%</p>:<a href="/">Get discount</a>}
        </div>

        
    );
    
}

export default Product;
