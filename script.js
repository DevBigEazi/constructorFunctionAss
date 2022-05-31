// 1. Use a constructor function to implement a Car. A car has a make and a speed property. 
// The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, 
// and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, 
// and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀 

//SOLUTION

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
    this.accelerate = function(speed, increase){
        console.log('Accelerate: ', speed * increase);
    }

    this.brake = function(speed, decrease){
        console.log('Brake: ', speed - decrease);
    }
}

const car1 = new Car('BMW', 120);
car1.accelerate(120, 10);
car1.brake(120, 5);

console.log(car1);

const car2 = new Car('Mercedes', 95);
car2.accelerate(95, 10);
car2.brake(95, 5);

console.log(car2);