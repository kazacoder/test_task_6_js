// objects

let mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: 4.0,
    year: 2015,
    color: "black",
    hp: 300,
    forSale: true
}

let bmw = {
    name: "BMW",
    model: "X6",
    engine: 3.0,
    year: 2018,
    color: "white",
    hp: 313,
    forSale: false
}

let audi = {
    name: "Audi",
    model: "Q7",
    engine: 3.0,
    year: 2021,
    color: "blue",
    hp: 249,
    forSale: true
}


// part 1

let currentYear = new Date().getFullYear();
let cars = [mercedes, bmw, audi];

cars.forEach((car) => car.carAge = currentYear - car.year)

let names = cars.map(el => `${el.name} ${el.model} `).join(', ');
let averageAge = cars.reduce((sum, car) => sum + car.carAge, 0) / cars.length;
let atLeastOneForSale = cars.some(car => car['forSale'] === true)
let allYoungerThanFive = cars.every(car => car.carAge < 5)
let atLeastOneHasLittleHp = cars.some(car => car.hp < 250)

alert('Марка и модель всех авто - ' + names);
alert('Средний возраст всех авто - ' + averageAge);
alert('Хотя бы один автомобиль продаётся? - ' + atLeastOneForSale);
alert('Все авто младше 5 лет? - ' + allYoungerThanFive);
alert('Хотя бы один автомобиль имеет менее 250 лошадиных сил? - ' + atLeastOneHasLittleHp);

// part 2

let car = mercedes
// car = bmw
// car = {}

if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!')
} else {
    alert(`Это - ${car.name} ${car.model}`)
}

if (car.carAge === 0) {
    alert('Новый автомобиль')
} else if (car.carAge <= 3) {
    alert('Свежий автомобиль')
} else {
    alert(`Лет этому авто: ${car.carAge}`)
}

let consumption = car.engine > 3 ? 'Прожорливый автомобиль' : 'Экономичный автомобиль'
alert(consumption)

let russianColors = {
    black: 'черный',
    silver: 'серебристый',
    red: 'красный',
    white: 'белый',
    gray: 'серый',
    blue: 'синий',
}

let russianColor = russianColors[car.color] ?? 'Невозможно определить цвет автомобиля'
alert(russianColor)


