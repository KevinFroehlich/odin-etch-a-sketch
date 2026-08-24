const container = document.getElementById("container")
const page = document.getElementById("page")
const sizeButton = document.createElement("button")
const errorMessage = document.createElement("div")



sizeButton.textContent = "Adjust Size"
sizeButton.addEventListener("click", () => {
    let input = prompt("Enter a number not higher than 100.")

    if(input === null) {
        return
    }

    let number = Number(input)
    if(Number.isInteger(number) && number <= 100) {
        size = number
        errorMessage.textContent = ""
        createGrid()
    } else {
        errorMessage.textContent = "Wrong Input. Please enter a number not higher than 100."
    }
})
page.append(sizeButton)

let size = 16

function createGrid() {
    container.innerHTML = ""
    for(let i = 0; i < size * size; i++) {
        
        const div = document.createElement("div")
        div.id = `${i + 1}`
        div.classList = "cell"
        div.style.width = `${100/size}%`
        div.style.height = `${100/size}%`
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue"
        })
        container.append(div, errorMessage)
    }
}

createGrid()