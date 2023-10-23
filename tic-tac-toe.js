document.addEventListener("DOMContentLoaded", (event)=>{
    const squares = document.querySelectorAll("#board div")
    squares.forEach(square => {
        square.classList.add("square")
    })
})

