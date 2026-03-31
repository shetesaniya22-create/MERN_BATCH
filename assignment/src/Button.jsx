
function Button() {
    let handleClick=(e)=>{
        e.target.style.backgroundColor="green";
    }
  return (
    <div>
        <button 
        onClick={handleClick}
        >
        </button>
    </div>
  )
}

export default Button