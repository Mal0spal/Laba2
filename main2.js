

//Задание 1

function Abs(a) {
    if (a < 0) {
        return a * -1;
    } else return a

}

let Num = Number(prompt('Задача №1 Абсолютное значение' + '\nВведите число'));

console.log(Abs(Num));

//Задание 2

function isPalindrome(word) {

    let l = word.length - 1;
    let k = 0;

    for (i = word.length - 1; i > 0; i--) {
        if (word[i] == word[l - i]) {
            k += 1;
        } else {
            k -= 1;
        }
    }

    if (k == word.length - 1) {
        console.log(true);
    } else {
        console.log(false);
    }

}

let Word1 = String(prompt('Задача №2 Палиндром' + '\nВведите слово'));


isPalindrome(Word1);


//Задание 3




//Задание 4

let student = {
    group: "201 - 324",
    last_name: "Бражников ",
    first_name: "Иван"
};

console.log("Студент " + student.last_name + student.first_name + " учится в " + student.group + " группе");


//Задание 5

