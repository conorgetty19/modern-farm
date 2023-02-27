//function takes array as argument. declare empty string. iterates through items in array
//Stores template literal in string
//Returns string
export const Catalog = (harvestFoods) => {
    let innerHTML = ""
    for (const food of harvestFoods){
        innerHTML += `<section class="plant">${food.type}</section>\n`
    }
    return innerHTML
}