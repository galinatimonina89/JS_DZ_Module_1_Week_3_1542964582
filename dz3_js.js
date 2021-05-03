/*Задание
Вам необходимо самостоятельно решить, для какого задания
какой цикл лучше использовать: WHILE, DO WHILE или FOR.*/


/*1. Подсчитать сумму всех чисел в заданном пользователем
диапазоне.*/
/*let one;
let two;
let result=0;
one = parseInt(prompt("Введите число  - начало дипазона"));
two = parseInt(prompt("Введите число  - конец дипазона"));

for (i=one; i <= two; i++){
    result+=i;
}
document.write('сумма всех чисел в заданном диапазоне ' + result);*/


/*2. Запросить 2 числа и найти только наибольший общий
делитель.*/
/*let one;
let two;
let min;
let max;
one = parseInt(prompt("Введите первое число"));
two = parseInt(prompt("Введите второе число"));

min = (one < two) ? one : two;
while (min >1) {
    if ((one % min==0) && (two % min==0)) {
        document.write(min + "<br>");
        let result = [];
        result.push(min);
    }
    for (let i = 0; i <= result.push; i++) {
        max = (result[i]>=result[i+1]) ? result[i] : result[i+1];
        document.write(max);
    }
    min --;

}*/


/*3. Запросить у пользователя число и вывести все делители
этого числа.*/
/*let number;

number = parseInt(prompt("Введите  число"));
for (let i=2; i<=number; i++) {
    if (number % i==0){
        document.write(i + "<br>");
    }
}*/

/*4. Определить количество цифр в введенном числе.*/
/*let number;
let step;
number = parseInt(prompt("Введите  число"));
let count = [];
let result;

for (let i = 1; i <= 100; i++) {
    step = 10 ** i;
    console.log(number);
    console.log(step);
    if ((number / step) >= 1) count.push(step);
}
result = count.length +1;
document.write(result);*/
/*5. Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.*/
/*
let numbers = [];
let plus = [];
let minus = [];
let zero = [];
let even = [];
let uneven = [];
let step;
numbers = prompt("Введите  10 чисел через запятую").split(',');

for (let i = 0; i < 10; i++){
    let number = parseInt(numbers[i]);
    if (number > 0) plus.push(i);
    if (number < 0) minus.push(i);
    if (number === 0) zero.push(i);
    if (number % 2 === 0 && numbers[i] !== 0) even.push(i);
    if (number % 2 !== 0) uneven.push(i);


}
document.write(numbers + '<br>');
document.write('Положительных чисел ' + plus.length + '<br>');
document.write('Отрицательных чисел ' + minus.length + '<br>');
document.write('Нулей ' + zero.length + '<br>');
document.write('Четных чисел ' + even.length + '<br>');
document.write('Нечетных числе ' + uneven.length + '<br>');
*/

/*6. Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется.*/

/*function calc () {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе числа');
    let operator = prompt('введите знак');
    if (operator === '-') alert(a-b);
    if (operator === '/') alert(a-b);
    if (operator === '+') alert(a-b);
    if (operator === '*') alert(a-b);
    let answer = confirm('Будете решеть другой пример?');
    console.log(answer);
    if (answer === true) {
        calc(a, b, operator);
    } else {
        alert('пока');
    }

}
calc();*/

/*7. Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).*/

/*let numbers = parseInt(prompt('Введите число'));
console.log(numbers);
let array = [];
let number = numbers;
while(numbers>0){
    array.unshift(numbers%10);
    numbers=Math.trunc(numbers/10);
}
let one = Math.trunc(number/Math.pow(10, (array.length-1)));
let two = Math.trunc(number/Math.pow(10, (array.length-2)))%10;
alert (number%(Math.pow(10,array.length-2)) + one.toString() + two.toString());*/

/*8. Зациклить вывод дней недели таким образом: «День недели.
    Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK.*/
/*function week(x) {
    let step;

    if (x === 'понедельник') {
        step = confirm('День недели вторник. Хотите увидеть следующий день? ');
        (step === true)?x = 'вторник': alert('пока');
    }
    if (x === 'вторник') {
        step = confirm('День недели среда. Хотите увидеть следующий день?');
        (step === true)?x = 'среда': alert('пока');
    }

    if (x === 'среда') {
        step = confirm('День недели четверг. Хотите увидеть следующий день?');
        (step === true)? x = 'четверг': alert('пока');
    }
    if (x === 'четверг') {
        step = confirm('День недели пятница. Хотите увидеть следующий день?');
        (step === true)?x = 'пятница': alert('пока');
    }
    if (x === 'пятница') {
        step = confirm('День недели суббота. Хотите увидеть следующий день?');
        (step === true)?x = 'суббота': alert('пока');
    }
    if (x === 'суббота') {
        step = confirm('День недели воскресенье. Хотите увидеть следующий день');
        (step === true)?x = 'воскресенье': alert('пока');
    }
    if (x === 'воскресенье') {
        step = confirm('День недели понедельник. Хотите увидеть следующий день');
        (step === true)?x = 'понедельник': alert('пока');
    }
    if (step === true) {
        week(x);
    }

}
week('понедельник');*/
/*9. Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.*/
/*
for (let i =2; i<= 9; i++) {
    for (let y = 1; y <=10;y++) {
        document.write (i + '*' + y + '=' + i*y + '<br>');

    }
    document.write('<hr>')
}*/

/*10. Игра «Угадай число». Предложить пользователю загадать
число от 0 до 100 и отгадать его следующим способом:
    каждую итерацию цикла делите диапазон чисел пополам,
    записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того
что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/

/*let number = confirm("загадайте число");

while (number === true) {

    let a = 0;
    let b = 100;
    let answer = '';
    let temp = 0;

    do {
        temp = parseInt((a + b) / 2);

        answer = prompt('Ваше число >, < или = ' + temp);

        if (answer == '>') {
            a = temp;
        } else if (answer == '<') {
            b = temp;
        }


    } while (answer != '=');

    alert('Ваше число ' + temp);


    }*/


