import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technologies") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technology = () => {
    let html = "<ul>"

    
    const listItems = technologies.map (
        (technologies) => {
        return `<li>
            <input type="radio" name="size" value="${technologies.id}" /> ${technologies.packageType}
        </li>`
    }
)

    html += listItems.join("")
    html += "</ul>"

    return html
}