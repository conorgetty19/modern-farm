let plantsInField = []

//function takes seed object as argument. if seed is array, pushes first two objects to plantsInField array
//if seed object, pushes object to plantsInField
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        plantsInField.push(seed[0])
        plantsInField.push(seed[1])
    }
    else {
        plantsInField.push(seed)
    }
}

//takes no argument. Returns plantsInField array
export const usePlants = () => {
    return plantsInField
}