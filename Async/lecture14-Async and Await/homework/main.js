const container = document.getElementById("toastrContainer")

document.getElementById("successBtn").addEventListener("click", () => {
    createToast("success")
})

document.getElementById("infoBtn").addEventListener("click", () => {
    createToast("info")
})

document.getElementById("errorBtn").addEventListener("click", () => {
    createToast("error")
})

document.getElementById("warningBtn").addEventListener("click", () => {
    createToast("warning")
})

function createToast(type) {
    const toast = document.createElement("div")
    toast.className = `toastr ${type}`
    
    toast.textContent = type.toUpperCase() + " toast"

    toast.addEventListener("click", () => {
        prompt(`You clicked ${type.toUpperCase()} toast`)
    })

    container.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 3000)
}
