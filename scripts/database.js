const database = {
    colors : [
        {id: 1, paintColor: "Silver"},
        {id: 2, paintColor: "Midnight Blue"},
        {id: 3, paintColor: "Firebrick Red"},
        {id: 4, paintColor: "Spring Green"}
    ],
    interiors : [ 
         {id: 1, fabricType: "Beige Fabric"},
         {id: 2, fabricType: "Charcoal Fabric"},
         {id: 3, fabricType: "White Leather"},
         {id: 4, fabricType: "Black Leather}"}
    ],
    technologies : [ 
        {id: 1, packageType: "Basic Package"},
        {id: 2, packageType: "Navigation Package"},
        {id: 3, packageType: "Visibility Package"},
        {id: 4, packageType: "Ultra Package"}
   ],
    wheels : [ 
        {id: 1, wheelType: "17-inch Pair Radial"},
        {id: 2, wheelType: "17-inch Pair Radial Black"},
        {id: 3, wheelType: "18-inch Pair Spoke Silver"},
        {id: 4, wheelType: "18-inch Pair Spoke Black"}
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

    


