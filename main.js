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
     * Say Name Method
     * Logs the ninja's name to the console
     */
    sayName() {
        console.log("This ninja's name is", this.name);
    }
}