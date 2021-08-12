import { CarColors } from "./carcolors.js"
import { CarInteriors } from "./carinterior.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {

            addCustomOrder()
        }        
    }
)

export const CarsRUs = () => {
    const storeName= "Cars-R-Us"
    return `
        <h1>Rattle Rattle Thunder Clatter, Boom, Boom, Boom! ${Cars-R-Us}, Can get you back on the road.</h1>
            
        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__interior">
                <h2>Interior</h2>
                ${Interior()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${Technology()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="carOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}