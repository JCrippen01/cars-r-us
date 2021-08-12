import { getInteriors, setInterior } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interior = () => {
    const interiors = getInteriors()
    let html = "<ul class = 'style ul'>"

     const listItemsArray = interiors.map(
        (interior) => {
            return `<li class = "style">
                <input type="radio" name="style" value="${interior.id}" /> ${interiors.fabricType}
            </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}