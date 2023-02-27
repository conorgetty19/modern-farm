//function takes array as argument. iterates through items of array. if arrayItem.type is Corn,
//uses loop to push corn objects (half output number) to harvestSeeds array
//if not corn, loop sends full output number of objects to harvestSeeds
//returns harvestSeeds array
export const harvestPlants = (plants) => {
    const harvestSeeds = []

    for (const plant of plants) {
        if (plant.type === "Corn") {
            for (let i = 0; i < (plant.output/2); i++) {
                harvestSeeds.push(plant)
            }
        }
        else {
            for (let i = 0; i < plant.output; i++) {
                harvestSeeds.push(plant)
            }
        }

    }
    return harvestSeeds
}