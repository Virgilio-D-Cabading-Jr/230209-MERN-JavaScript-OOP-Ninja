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
}

console.log("*******************************");
console.log("Ninja Class main.js\n")

let Brian = new Ninja("Brian");
Brian.sayName();
Brian.showStats();