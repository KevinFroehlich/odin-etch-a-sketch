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
            let opacity = parseFloat(div.style.opacity) || 0
            opacity += 0.1

            if (opacity > 1) {
                opacity = 1
            }

            div.style.opacity = opacity
            
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)

            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        })
        container.append(div, errorMessage)
    }
}

createGrid()