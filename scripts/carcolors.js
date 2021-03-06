import { getColors, setColor } from "./database.js"

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colors") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<ul>"

    
    const listItems = colors.map (
        (color) => {
        return `<li>
            <input type="radio" name="colors" value="${color.id}" /> ${color.paintColor}
        </li>`
    }
)

    html += listItems.join("")
    html += "</ul>"

    return html
}