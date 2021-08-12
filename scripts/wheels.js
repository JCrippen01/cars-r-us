import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"

    
    const listItems = wheels.map (
        (wheel) => {
        return `<li>
            <input type="radio" name="size" value="${wheel.id}" /> ${wheel.carets}
        </li>`
    }
)

    html += listItems.join("")
    html += "</ul>"

    return html
}