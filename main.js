


//Задание 1
console.log("Задание 1");

console.log('typeof(9)');
Предположение: console.log('number');
Фактический: console.log(typeof (9));

console.log('typeof(1.2)');
Предположение: console.log('number');
Фактический: console.log(typeof (1.2));

console.log('typeof(NaN)');
Предположение: console.log('number');
Фактический: console.log(typeof (NaN));

console.log('typeof("Hello World")');
Предположение: console.log('string');
Фактический: console.log(typeof ("Hello World"));

console.log('typeof(true)');
Предположение: console.log('bool');
Фактический: console.log(typeof (true));

console.log('typeof(2 != 1)');
Предположение: console.log('number');
Фактический: console.log(typeof (2 != 1));

console.log('"сыр" + "ы"');
Предположение: console.log('сыры');
Фактический: console.log("сыр" + "ы");

console.log('"сыр" - "ы"');
Предположение: console.log(null);
Фактический: console.log("сыр" - "ы");

console.log('"2" + "4"');
Предположение: console.log('24');
Фактический: console.log("2" + "4");

console.log('"2" - "4"');
Предположение: console.log('-2');
Фактический: console.log("2" - "4");

console.log('"Сэм" + 5');
Предположение: console.log('Сэм5');
Фактический: console.log("Сэм" + 5);

console.log('"Сэм" - 5');
Предположение: console.log('NaN');
Фактический: console.log("Сэм" - 5);

console.log('99 * "шары"');
Предположение: console.log('NaN');
Фактический: console.log(99 * "шары");


/*
//Задание 2
console.log("Задание 2");

let a = Number(prompt('Задача №2 Прямоугольник' + '\nВведите длину а'));
let b = Number(prompt('Задача №2 Прямоугольник' + '\nВведите длину b'));
console.log(a);
console.log(b);

let P = a * 2 + b * 2;
console.log(P);

let S = a * b;
console.log(S);

let relation = P / S;
console.log(relation);


//Задание 3
console.log("Задание 3");

let Cgrad = Number(prompt('Задача №3 Конвертация единиц измерения' + '\nВведите значение для температуры в градусах цельсия'));
let Fgrad = Number(prompt('Задача №3 Конвертация единиц измерения' + '\nВведите значение для температуры в градусах фаренгейта'));

let Fgrad1 = Cgrad * 1.8 + 32;
let Cgrad1 = (Fgrad - 32) / 1.8;

console.log(Cgrad + "\xB0С", "соответствует", Fgrad1 + "\xB0F");
console.log(Fgrad + "\xB0F", "соответствует", Cgrad1 + "\xB0C");

//Задание 4
console.log("Задание 4");

let year = Number(prompt('Задача №4 Високосный год' + '\nВведите год'));

year % 4 == 0 ? alert('true') : alert('false');

//Задание 5
console.log("Задание 5");

let Num1 = Number(prompt('Задача №5 Проверка' + '\nВведите первое число'));
let Num2 = Number(prompt('Задача №5 Проверка' + '\nВведите второе число'));

if (Num1 == 10 || Num2 == 10 || Num1 + Num2 == 10) {
    alert('Истина');
}

//Задание 6
console.log("Задание 6");

let NumSheep = Number(prompt('Задача №6 Считаем овец' + '\nВведите число овец'));

let i;
let k;
for (i = 1; i <= NumSheep; i++) {
    k += i + " овечка...";
}

console.log(k);
//Задание 7
console.log("Задание 7");

for (j = 0; j <= 15; j++) {
    if (j % 2 == 0)
        console.log('"' + j, "Четное" + '"');
    else
        console.log('"' + j, "Нечетное" + '"');
}


//Задание 8
console.log("Задание 8");

let star = "*", grid = "#";
for (let t = 1; t < 10; t++) {
    if (t % 2 != 0) {
        console.log(star);
    } else {
        console.log(grid);
    }

    star += "*";
    grid += "#";
}

//Задание 9
console.log("Задание 9");

let Number1 = Number(prompt('Задача №9 Сортировка' + '\nВведите число'));
let Number2 = Number(prompt('Задача №9 Сортировка' + '\nВведите число'));
let Number3 = Number(prompt('Задача №9 Сортировка' + '\nВведите число'));

if (Number1 < Number2 && Number1 < Number3 && Number2 < Number3) {
    console.log(Number1, Number2, Number3);
}
if (Number1 < Number3 && Number1 < Number2 && Number3 < Number2) {
    console.log(Number1, Number3, Number2);
}

if (Number2 < Number1 && Number2 < Number3 && Number1 < Number3) {
    console.log(Number2, Number1, Number3);
}
if (Number2 < Number3 && Number2 < Number1 && Number3 < Number1) {
    console.log(Number2, Number3, Number1);
}

if (Number3 < Number1 && Number3 < Number2 && Number1 < Number2) {
    console.log(Number3, Number1, Number2);
}
if (Number3 < Number2 && Number1 < Number1 && Number2 < Number1) {
    console.log(Number3, Number2, Number1);
}

//Задание 10
console.log("Задание 10");

let N1 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите число'));
let N2 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите число'));
let N3 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите число'));
let N4 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите число'));
let N5 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите число'));


if (N1 > N2 && N1 > N3 && N1 > N4 && N1 > N5)
    console.log(N1);

if (N2 > N1 && N2 > N3 && N2 > N4 && N2 > N5)
    console.log(N2);

if (N3 > N1 && N3 > N2 && N3 > N4 && N3 > N5)
    console.log(N3);

if (N4 > N1 && N4 > N2 && N4 > N3 && N4 > N5)
    console.log(N4);

if (N5 > N1 && N5 > N2 && N5 > N3 && N5 > N4)
    console.log(N5);
*/