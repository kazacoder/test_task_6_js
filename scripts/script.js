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

const date = new Date();
let year = date.getFullYear();
let cars = [mercedes, bmw, audi];
let carsArray = []
let carsAges = []
let carsForSale = []
let carsHP = []

for (let car of cars) {
    car.carAre = year - car.year;
    carsArray.push(car.name + " " + car.model)
    carsAges.push(car.carAre)
    carsForSale.push(car.forSale)
    carsHP.push(car.hp)
}


let names = carsArray.join(', ');
let averageAge = carsAges.reduce((a, b) => a + b) / carsAges.length;
let atLeastOneForSale = carsForSale.some((el) => {
    return el === true
})
let allYoungerThanFive = carsAges.every((el) => {
    return el < 5
})
let atLeastOneHasLittleHp = carsHP.some((el) => {
    return el < 250
})

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
    alert('Это - ' + car.name + ' ' + car.model)
}

if (car.carAre === 0) {
    alert('Новый автомобиль')
} else if (car.carAre < 3) {
    alert('Свежий автомобиль')
} else {
    alert('Лет этому авто: ' + car.carAre)
}

var consumption = (car.engine > 3) ? ('Прожорливый автомобиль') : ('Экономичный автомобиль')
alert(consumption)


let russianColors = {
    black: 'черный',
    silver: 'серебристый',
    red: 'красный',
    white: 'белый',
    gray: 'серый',
    blue: 'синий',
}

let russianColor = (russianColors[car.color]) ? (russianColors[car.color]) : ('Невозможно определить цвет автомобиля')
alert(russianColor)


// классика :)) :
switch (car.color) {
    case 'black':
        russianColor = 'черный'
        break;
    case 'silver':
        russianColor = 'серебристый'
        break;
    case 'red':
        russianColor = 'красный'
        break;
    case 'white':
        russianColor = 'белый'
        break;
    case 'gray':
        russianColor = 'серый'
        break;
    case 'blue':
        russianColor = 'синий'
        break;
    default:
        russianColor = 'Невозможно определить цвет автомобиля'
}
alert(russianColor)