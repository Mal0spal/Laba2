

//Задание 1
console.log("Задание 1");
function Abs(a) {
    if (a < 0) {
        return a * -1;
    } else return a

}

let Num = Number(prompt('Задача №1 Абсолютное значение' + '\nВведите число'));

console.log(Abs(Num));

//Задание 2
console.log("Задание 2");
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
console.log("Задание 3");
function matrixAddition(mat1, mat2) {
    let matString1 = mat1.length;
    let matString2 = mat2.length;

    let matСolumn1 = mat1[0].length;
    let matСolumn2 = mat2[0].length;

    let SumMat ="";
    let SM = 0;

    if (matString1 == matString2 && matСolumn1 == matСolumn2) {
        for (let i = 0; i < matСolumn1; i++) {
            for (let j = 0; j < matString1; j++) {
                SM = mat1[i][j] + mat2[i][j];
                SumMat += SM + "\t";
            }
            SumMat += "\n";
        }

        console.log(`Cумма матриц равна\n${SumMat}`)
    }

}

let matrix1 = [[8, 6], [15, 66]];
let matrix2 = [[7, 4], [55, 33]];


matrixAddition(matrix1, matrix2);



//Задание 4
console.log("Задание 4");
let student = {
    group: "201 - 324",
    last_name: "Бражников ",
    first_name: "Иван"
};

console.log("Список свойств: " + Object.keys(student));
console.log(`Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);


//Задание 5

