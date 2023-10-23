let history = []


document.addEventListener("DOMContentLoaded", (event) => {
    const squares = document.querySelectorAll("#board div")
    squares.forEach(square => {
        square.classList.add("square")
        square.addEventListener("click", (event) => {
            if (square.textContent != "") {
                return
            }
            if (history.length == 0 || history[history.length - 1] == "O") {
                square.textContent = "X"
                history.push("X")

            }
            else {
                square.textContent = "O"
                history.push("O")
            }
            checkWin()
        })
        square.addEventListener("mouseover", (event) => {
            square.classList.add("hover")
        })
        square.addEventListener("mouseout", (event) => {
            square.classList.remove("hover")
        })
    })
})


function checkWin() {
    const squares = document.querySelector("#board").children
    let statusEl = document.querySelector("#status")
    let xCount, oCount, response
    //Checking Rows
    for (let index = 0; index < squares.length; index++) {
        if (index % 3 == 0) {
            xCount = 0
            oCount = 0
        }
        response = checkWinner(squares, index, xCount, oCount, statusEl)
                if(response.winner == true){
                    return
                }
                xCount = response.xCount
                oCount = response.oCount
    }
    xCount = 0
    oCount = 0
    //Checking Columns
    for (let index1 = 0; index1 < 3; index1++) {
        xCount = 0
        oCount = 0
        for (let index2 = index1; index2 < squares.length; index2 += 3) {
            response = checkWinner(squares, index2, xCount, oCount, statusEl)
                if(response.winner == true){
                    return
                }
                xCount = response.xCount
                oCount = response.oCount
        }
    }
    xCount = 0
    oCount = 0
    //Checking Diagonals
    for (let index1 = 0; index1 < 3; index1 += 2) {
        xCount = 0
        oCount = 0
        if (index1 == 0) {
            for (let index2 = index1; index2 < squares.length; index2 += 4) {
                response = checkWinner(squares, index2, xCount, oCount, statusEl)
                if(response.winner == true){
                    return
                }
                xCount = response.xCount
                oCount = response.oCount
            }
        }
        else {
            for (let index2 = index1; index2 < squares.length-1; index2 += 2) {
                response = checkWinner(squares, index2, xCount, oCount, statusEl)
                if(response.winner == true){
                    return
                }
                xCount = response.xCount
                oCount = response.oCount
            }
        }
    }

}

function setStatusWinner(winner, statusEl) {
    statusEl.textContent = `Congratulations! ${winner} is the Winner`
    statusEl.classList.add("you-won")
    return true
}

function checkWinner(squares, index, xCount, oCount, statusEl) {
    let winner = false
    if (squares[index].textContent == "X")
        xCount++
    if (squares[index].textContent == "O")
        oCount++
    if (xCount == 3) {
        winner = setStatusWinner("X", statusEl)
    }
    if (oCount == 3) {
        winner = setStatusWinner("O", statusEl)
    }
    return {
        xCount: xCount,
        oCount: oCount,
        winner: winner
    }
}
