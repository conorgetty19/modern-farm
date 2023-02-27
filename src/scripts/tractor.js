import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js";

//function takes a single parameter (array containing three arrays filled with six strings)
//iterates contents of outer array. iterates contents of inner array.
//uses switch statement. Plant type determines which createSeed function runs (from asparagus.js etc.)
//Then result of createSeed is run through addPlant (from field.js)
export const plantSeeds = (plan) => {
    for (const plantsList of plan) {
        for (const plant of plantsList) {
            switch (plant) {
                case "Corn":
                    addPlant(createCorn());
                    break;
                case "Asparagus":
                    addPlant(createAsparagus());
                    break;
                case "Potato":
                    addPlant(createPotato());
                    break;
                case "Soybean":
                    addPlant(createSoybean());
                    break;
                case "Sunflower":
                    addPlant(createSunflower());
                    break;
                case "Wheat":
                    addPlant(createWheat());
            }
        }
    }
}