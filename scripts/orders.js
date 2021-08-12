import { getColors, getOrders, getInteriors, getTechnologies } from "./database.js"
const colors = getColors()
const interiors = getInteriors()
const wheels = getWheels()
const technologys = getTechnologies()

const buildOrderListItem = (order) => {
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const foundTechnology = technologys.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    
const totalCost = (foundColor.price + foundInterior.price + foundWheels.price + foundTechnology.price) 
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
return`<li>
    Order #${order.id} cost ${costString}
</li>`
}


export const Orders = () => {
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}