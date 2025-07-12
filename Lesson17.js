const car = {
    name: "Toyota",
    year: 2000,
    color: "red",
    price: 10000
}

car.model = "Corolla"; // Adding a new property to the car object
car.price = 20000;

console.log(car);

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

const car2 = {
    tires: 4,
    engine: "V6",
    fuel: "Gasoline",
}

const car3 = {...car, windows: "fixed",...car2, engine: "V7"};

console.log(car3);