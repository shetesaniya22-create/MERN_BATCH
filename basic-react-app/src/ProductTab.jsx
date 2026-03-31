import Product from "./Product";

function ProductTab() {

    let options = ["hi-tech", "durable", "fast"];

    return (
        <>
            <Product title="Phone" price={30000/2} features={options} />
            <Product title="Laptop" price={100000/2} />
            <Product title="Tab" price={60000/2} />
        </>
    );
}

export default ProductTab;
