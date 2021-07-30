/*
Задание 5.

Переписать консольное приложение из предыдущего юнита (Task_4) на классы.
 */
class Appliance {
    constructor(name, price, cons) {
        this.energySource = 'Electricity';
        this.purpose = 'Domestic use';
        this.condition = 'off';
        this.name = name;
        this.price = `${price} euros`;
        this.powerConsumption = `${cons} watts`;
    }
    switchOn() {
    this.condition = 'on';
    return `${this.name} is on`;
    }
    switchOff() {
    this.condition = 'off';
    return `${this.name} is off`;
    }

}



class Iron extends Appliance {
    constructor(name, price, cons, tank, sSpeed) {
        super(name, price, cons);
        this.waterTank = `${tank} ml`;
        this.steamShockSpeed = `${sSpeed} g/min`;
    }

    getSSS() {
        return `Steam shock speed of ${this.name} is ${this.steamShockSpeed}`
    }
}



class Refrigerator extends Appliance {
    constructor(name, price, cons, vol, freez) {
        super(name, price, cons);
        this.volume = `${vol} l`;
        this.freezer = freez;
    }
    getVolume() {
    return `Volume of ${this.name} is ${this.volume}`;
}
}



let iron = new Iron('Tefal Express Steam', 46, 2400, 270, 190);

console.log(iron.name, '\n',iron.price, '\n', iron.powerConsumption, '\n',iron.energySource, '\n',iron.purpose,
    '\n',iron.waterTank);
console.log(iron.getSSS());
console.log(iron.switchOn());
console.log(iron.switchOff());

console.log('*********************************************************************************************************')

let fridge = new Refrigerator('Bosch Serie | 4 VitaFresh', 646, 1200, 419, true);

console.log(fridge.name, '\n',fridge.price, '\n',fridge.powerConsumption, '\n',fridge.energySource, '\n',fridge.purpose,
    '\n',fridge.freezer);
console.log(fridge.getVolume());
console.log(fridge.switchOn());
console.log(fridge.switchOff());
