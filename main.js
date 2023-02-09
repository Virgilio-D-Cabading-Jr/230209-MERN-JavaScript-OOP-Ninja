/////////////////////////////////////////
// 230209 Ninja Class

/**
 * **************************************
 * Ninja Class
 */
class Ninja {

    // *** Constructor ******
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    // *** Methods ******

    /**
     * Say Name Method: Logs the ninja's name to the console
     */
    sayName() {
        console.log("This ninja's name is", this.name);
    }

    /**
     * Show Stats Method: Logs the ninja's name, health, speed and strength to the console
     */
    showStats() {
        console.log("Ninja Stats ******");
        console.log("Name:", this.name, "| health:", this.health, "| speed:", this.speed, "| strength:", this.strength);
    }

    /**
     * Drink Sake Method: Adds 10 to the Ninja's Health
     */
    drinkSake() {
        this.health += 10;
        console.log("Ninja", this.name, "drinks sake --> new health is", this.health);
    }
}

console.log("*******************************");
console.log("Ninja Class main.js\n")

let Brian = new Ninja("Brian");
Brian.sayName();
Brian.showStats();
Brian.drinkSake();
Brian.showStats();