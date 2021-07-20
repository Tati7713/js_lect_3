// - створити функцію яка обчислює та повертає площу прямокутника висотою

function sPryamocutnyk (a, b) {
    return a * b;
}
let sPryamocutnyk1 = sPryamocutnyk(4, 5);
console.log(sPryamocutnyk1);

// - створити функцію яка обчислює та повертає площу кола

function sKolo (a) {
    return Math.PI * Math.pow(a,2);
}
let sKolo1 = sKolo(3);
console.log(sKolo1);

// - створити функцію яка обчислює та повертає площу циліндру

function sCilindr (r, h) {
    return 2 * Math.PI * r * (r + h);
}
let sCilindr1 = sCilindr(2, 4);
console.log(sCilindr1);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numbers(){
    let min = arguments[0];
    let max = arguments[0];
    for (let number of arguments) {
        if (number > max) {
            max = number;
        }
        if (number < min) {
            min = number;
        }
    }
    console.log('max ', max);
    return min;
}
console.log(numbers(41, 2, 0, -6, 87, -18));

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

function blockText (text) {
    document.write(`<div>${text}</div>`);
}
blockText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ex.');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function elements1 (element) {
    document.write(`
        <ul>
            <li>${element}</li>
            <li>${element}</li>
            <li>${element}</li>
        </ul>
    `);
}
elements1 ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, veniam.');

// - створити функцію яка  створює ul ?з трьома елементами li?. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function elements2 (t, el) {
    document.write(`<ul>`);
        for (let i = 0; i < el; i++) {
            document.write(`<li>${t}</li>`);
        }

    document.write(`</ul>`);
}

elements2 ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, magni!', 4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function mass (arguments) {
    let number = [];
    let string = [];
    let boolean = [];

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            number.push(arguments[i]);
        }
        if (typeof arguments[i] === 'string') {
            string.push(arguments[i]);
        }
        if (typeof arguments[i] === 'boolean') {
            boolean.push(arguments[i]);
        }
    }
        console.log(number);
        console.log(string);
        console.log(boolean);
}
let mass1 = [true, 'lemon', 11, false, 77, 'chery', 'apple', 45, true, 84];
mass(mass1);


