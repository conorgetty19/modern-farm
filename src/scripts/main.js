console.log("Welcome to the main module")

//import relevant modules
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import {createPlan} from "./plan.js"//
import { Catalog } from "./catalog.js"
import {plantSeeds} from "./tractor.js"//

//invokes two functions
//create plan for farm and plant seeds in the field (plan from plan.js) (planting from tractor.js)
plantSeeds(createPlan())

//Stores array created by addPlant (from field.js) via plantSeeds (from tractor.js)
const plants = usePlants()
//Stores result of passing array returned by usePlants to harvestPlants
const harvest = harvestPlants(plants)

//searches HTML doc for location of selected class and stores in a variable
const parentHTMLElement = document.querySelector(".messages")

//at above location, passes value held at harvest to catalog function (from catalog.js)
parentHTMLElement.innerHTML = Catalog(harvest) 