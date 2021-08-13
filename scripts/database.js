const database = {
    colors : [
        {id: 1, paintColor: "Silver", price: 1500},
        {id: 2, paintColor: "Midnight Blue", price: 1600},
        {id: 3, paintColor: "Firebrick Red", price: 1700},
        {id: 4, paintColor: "Spring Green", price: 1800}
    ],
    interiors : [ 
         {id: 1, fabricType: "Beige Fabric", price: 500},
         {id: 2, fabricType: "Charcoal Fabric", price: 600},
         {id: 3, fabricType: "White Leather", price: 700},
         {id: 4, fabricType: "Black Leather}", price: 800}
    ],
    technologies : [ 
        {id: 1, packageType: "Basic Package", price: 250},
        {id: 2, packageType: "Navigation Package", price: 200},
        {id: 3, packageType: "Visibility Package", price: 150},
        {id: 4, packageType: "Ultra Package", price: 100}
   ],
    wheels : [ 
        {id: 1, wheelType: "17-inch Pair Radial", price: 400},
        {id: 2, wheelType: "17-inch Pair Radial Black", price: 500},
        {id: 3, wheelType: "18-inch Pair Spoke Silver", price: 600},
        {id: 4, wheelType: "18-inch Pair Spoke Black", price: 700}
    ],
    carOrder : [],
    
    orderBuilder: {},
}
export const getColors = () => {
    return database.colors.map(color => ({...color}))
    }
    
export const setColor = (id) => {
    database.orderBuilder.colorId = id
    }
    
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
    }

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    }
   
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
    }
    
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
    }
    
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
    }

export const setWheel = (id) => {
     database.orderBuilder.wheelId = id
    }
export const getOrders = () => {
    return database.carOrder.map(order => ({...order}))
    }
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    
    if (database.carOrder.length === 0){
        newOrder.id = 1
    } else { 
    const lastIndex = database.carOrder.length - 1
    newOrder.id = database.carOrder[lastIndex].id + 1
}
    newOrder.timestamp = Date.now()
    database.carOrder.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
    


