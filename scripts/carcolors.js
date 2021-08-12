import { getColors, setColors } from "./database.js"

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colors") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    
    const listItems = colors.map (
        (color) => {
        return `<li>
            <input type="radio" name="size" value="${color.id}" /> ${color.paintColor}
        </li>`
    }
)

    html += listItems.join("")
    html += "</ul>"

    return html
}