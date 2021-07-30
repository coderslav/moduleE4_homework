/*
Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
какими свойствами он обладает
 */
function Appliance (name, price, cons){
    this.energySource = 'Electricity';
    this.purpose = 'Domestic use';
    this.condition = 'off';
    this.name = name;
    this.price = `${price} euros`;
    this.powerConsumption = `${cons} watts`;
}
Appliance.prototype.switchOn = function (){
    this.condition = 'on';
    return `${this.name} is on`;
}
Appliance.prototype.switchOff = function (){
    this.condition = 'off';
    return `${this.name} is off`;
}



function Iron(tank, sSpeed){
    this.waterTank = `${tank} ml`;
    this.steamShockSpeed = `${sSpeed} g/min`;
}
Iron.prototype = new Appliance();
Iron.prototype.getSSS = function () {
    return `Steam shock speed of ${this.name} is ${this.steamShockSpeed}`
};



function Refrigerator(vol, freez){
    this.volume = `${vol} l`;
    this.freezer = freez;
}
Refrigerator.prototype = new Appliance();
Refrigerator.prototype.getVolume = function (){
    return `Volume of ${this.name} is ${this.volume}`;
}



let iron = new Iron(270, 190);
//TODO Сейчас будет топорный код. Но я так и не понял, как присвоить по-другому значения от родительской функции Applience:
iron.name = 'Tefal Express Steam';
iron.price = '46 euros';
iron.powerConsumption = '2400 watts';

console.log(iron.name, '\n',iron.price, '\n',iron.powerConsumption, '\n',iron.energySource, '\n',iron.purpose,
    '\n',iron.waterTank);
console.log(iron.getSSS());
console.log(iron.switchOn());
console.log(iron.switchOff());

console.log('*********************************************************************************************************')

let fridge = new Refrigerator(419, true);
//TODO Сейчас будет топорный код. Но я так и не понял, как присвоить по-другому значения от родительской функции Applience:
fridge.name = 'Bosch Serie | 4 VitaFresh';
fridge.price = '646 euros';
fridge.powerConsumption = '1200 watts';

console.log(fridge.name, '\n',fridge.price, '\n',fridge.powerConsumption, '\n',fridge.energySource,
    '\n',fridge.purpose, '\n',fridge.freezer);
console.log(fridge.getVolume());
console.log(fridge.switchOn());
console.log(fridge.switchOff());
