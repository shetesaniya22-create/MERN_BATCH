import './App.css';
import Card from './Card';

function App() {
  let cardDetails = [
  {
    id: 1,
    name: "Logitech MX Master 3s",
    features: ["8000 DPI", "5 Programmable Buttons"],
    price: 2000
  },
  {
    id: 2,
    name: "Apple Pencil",
    features: ["Intuitive Touch Surface", "Designed for iPad Pro"],
    price: 3000
  },
  {
    id: 3,
    name: "Zebronics",
    features: ["Wireless", "RGB Lighting"],
    price: 6000
  }
];


  return (
    <div className="card-container">
      
    {cardDetails.map((card)=>(
      <Card
      key={card.id}
      name={card.name}
      features={card.features}
      price={card.price}

      />
    ))}
      
    </div>
  )
}

export default App
