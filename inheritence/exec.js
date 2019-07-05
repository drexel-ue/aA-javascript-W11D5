Function.prototype.inherits = function (taco) {
    // function Surrogate() { }
    // Surrogate.prototype = taco.prototype;
    // this.prototype = new Surrogate();
    this.prototype = Object.create(taco.prototype);
    this.prototype.constructor = this;
} //AppAcdemyway

function MovingObject() { }

MovingObject.prototype.move = function () {
    console.log(`${this.name} is moving.....`);
}

function Ship(name) {
    this.name = name;
}
Ship.inherits(MovingObject);
const ship = new Ship('tom');
ship.move();

function Asteroid(name) {
    this.name = name;
}
Asteroid.inherits(MovingObject);
const asteroid = new Asteroid('harry');
asteroid.move();

