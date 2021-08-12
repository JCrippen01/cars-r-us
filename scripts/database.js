const database = {
    color : [
        {id: 1, paintColor: "Silver"},
        {id: 2, paintColor: "Midnight Blue"},
        {id: 3, paintColor: "Firebrick Red"},
        {id: 4, paintColor: "Spring Green"}
    ],
    interior : [ 
         {id: 1, fabricType: "Beige Fabric"},
         {id: 2, fabricType: "Charcoal Fabric"},
         {id: 3, fabricType: "White Leather"},
         {id: 3, fabricType: "Black Leather}"}
    ],
    technology : [ 
        {id: 1, fabricType: "Basic Package"},
        {id: 2, fabricType: "Navigation Package"},
        {id: 3, fabricType: "Visibility Package"},
        {id: 3, fabricType: "Ultra Package"}
   ],
    wheels : [ 
        {id: 1, fabricType: "Beige Fabric"},
        {id: 2, fabricType: "Charcoal Fabric"},
        {id: 3, fabricType: "White Leather"},
        {id: 3, fabricType: "Black Leather}"}
    ],
    carOrder : [],
    
    orderBuilder: {},
}
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
    }
    
export const setSize = (id) => {
    database.orderBuilder.sizeId = id
    }
    
export const setStyle = (id) => {
    database.orderBuilder.styleId = id
    }
   
export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
    }
    
export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
    }
    
export const getStyles = () => {
    return database.styles.map(style => ({...style}))
    }
    
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
    


}