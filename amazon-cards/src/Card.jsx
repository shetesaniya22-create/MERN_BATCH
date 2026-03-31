function Card({ name, features, price }) {
return (
    <div className="card">
        <h2>{name}</h2>

        <ul>
            {features.map((feature, index) => {
            return <li key={index}>{feature}</li>;
        })}
        </ul>

        <p className="price">Price: ₹{price}</p>
    </div>
);
}

export default Card;
