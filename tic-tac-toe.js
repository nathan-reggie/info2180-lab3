let history = []

document.addEventListener("DOMContentLoaded", (event)=>{
    const squares = document.querySelectorAll("#board div")
    squares.forEach(square => {
        square.classList.add("square")
        square.addEventListener("click", (event)=>{
            if (square.textContent != ""){
                return
            }
            if (history.length == 0 || history[history.length - 1]=="O"){
                square.textContent = "X"
                history.push("X")
            }
            else
            {
                square.textContent = "O"
                history.push("O")
            }
        })
        square.addEventListener("mouseover", (event)=>{
            square.classList.add("hover")
        })
        square.addEventListener("mouseout", (event)=>{
            square.classList.remove("hover")
        })
    })
})

const squares = document.querySelectorAll("#board div")
