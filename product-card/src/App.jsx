import './App.css'
import ProductCard from './ProductCard'

function App() {
  return (
    <div className="app">
      <ProductCard>
        <div className='product-card'>
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGcsVMtAOwzAPHHrmdJd8ynqVrC3iyI73S856FDZlENG79K3fbM5BpHRd9Hz4AJIkq-AHGE1jkEyU4GMc0J_PtBAWCcxPMo-cGFjfvtfyolPYTpbc4C4HWSHxOtMbqRhyyMY974A&usqp=CAc"    
            alt="Facwash" 
          />
          <h2>Cetaphil Facewash</h2>
          <p>Rs.499</p>
        </div>
      </ProductCard>
    </div>
  )
}

export default App