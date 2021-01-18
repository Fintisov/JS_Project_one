//---Обучение по крсу от ФрилансерПоЖизни---
/*Инструкции JS  могут состоять из
* Значения
* Оператора
* Выражения
* Ключевые слова
* Комментарии
* */

/*--------Значения (values):-------
-Фиксированные (литералы),
-Константы,
-Переменные.
*/

//Фиксированные (литералы)
25//литерал целого числа
23.8//литерал дробного числа
'JavaScript'//литерал строки
"JavaScript"//литерал строки
/*
 [] литерал массива
[15,7,89] литерал массива
{
    name: 'Фрилансер',
        surname: 'по жизни'
} литерал объекта

(ab|bc) Литерал регулярного выражения
   */


//Контанты | Переменные
/*В языках програмирования константы и переменные используются
для хранения значений данных
*/
var section = 'JS';//переменная
let arr = ['HTML','CSS','JS'];//переменная
const maxValue = 17;//константа

/*-----Операторы-------
В JS имеется много операторов. Все они обозначают операцию,
которую нужно произмести.
Примеры:
_____ * / + - = и.т.д ______
 */
console.log('Учим' + 'JS');

//Выражения
/*
Выражение (expression) - это комбинация значений, переменных
и операторов, которые либо присваивают переменной
значениу, либо возвращают какое-то значение без его присваевания.
 */
//Примеры выражения
let num = 4; //выражение присвоения
console.log(num);
'Учим' + 'JS' //выражение без пирисвоения

//Ключевые слова
/*
Инструкции JS часто начинаются с ключевого слова (keyword).
Оно предназначенно для того, что бы определить какое действие
JS необходимо выполнить.
 */
//Примеры ключевого слова
// let num = 'Учим JS'; указывает браузеру создать переменную
console.log(num);

//Блок инструкций
/*
JS инструкции можно сгрупировать с помощью так называемого блока,
состоящего из фигурных скобок {...}.
Как правило используется в функциях, циклах и т.д...
 */
//Пример блока инструкций
function name () {
    console.log('Учим');
    console.log('JS');
}

/*Строгий режим (Use strict);
Строгий режим должен быть написан над выполняемым кодом.
В противном случае он не будет работать
Перед записью 'use strict' допускаются к написанию только
коментрарии.
 */
//Пример "use strict" или 'use strict'

//-----------------------------------------------------------------

//---Обучению по курсу notion.so/JS-Course-2020---
//---Неделя 1
//Однострочные коментарии

/*
Многострочные коментарии
 */

/**
 *JSDoc коментарии
 */

//--------Типы данных--------
/*
*Типы данных:
* 1. Примитивные
* -Number: 2019, 1.5, NaN, Infinity
* -String: `Hello`, "Hello",
* -Boolean: true, false
* -Nul: null
* -Undefined: undefined
* _Symbol()
*/

//Number
console.log(2019, 1.5);
console.log(20 * 'addada');
console.log(1 / 0);

//String
console.log(`Hello`, "Hello", 'Hello');

//Boolean
console.log(true, false);

//Nul
console.log(null);

//Undefined
console.log(undefined);

//Symbol
console.log(Symbol());

/*
* Типы данных:
* 2. Объекты. (Reference type) Передаються по ссылке.
* -Object: { name: 'Denis', age: 30 }
*  * Array: [1, 2, 3]
*  * Function: function foo() {}
*  * Date: new Date()
*  .......
*/

console.log({name: 'Denis', age: 30});

console.table({name: 'Artur', age: 27});

console.log([1, 2, 3, 4]);

console.clear(); //Отчистка консоли

//--------Переменые--------
//var, let, const
var name = 'Denis';
console.log(name);
name = 'Den';
console.log(name);

var age;
console.log(age);
age = 30;
console.log(age);

var $name = 'Ivan';
var _name = 'Den';

//Стиль написания переменных
// (нужно везде предерживатся одного стиля наименования)

var userAge = 30; //
var user_age = 30; //
var userage = 30;

//let
let nickname = 'dm-game';
nickname = 'game';
console.log(nickname);

//const
const user = {
    name: 'Dennn',
    age: 30
};

user.name = 'Tema';
user.age = 23;
console.log(user);

console.clear();
//Преобразования типов

//Явны преобразования
let value;
//Number to string
value = String(10);
value = String(10 + 40);
value = (50).toString(); //Этот метод делает какие либо преобразования с данными находящимися с лева от .toString();

//Boolean to string
value = String(true);
value = String(false);

//Array to string
value = String([1, 2, 3, 4]);

//Object to string
value = String({name: 'Denis'})


//Неявное преобразование
value = 30 + '';
value = 30 + '' + 30;
value = 30 - '';
value = 30 + 5;
value = 30 + 'weq';
value = 30 - 'weq';
value = true + 10;
value = true + true + true;
value = false + 10;
value = null + 10;
value = 2 + '' + undefined;
value = false + undefined;

//String to number
value = Number('23');
value = Number(true);
value = Number(false);
value = Number(null);
value = Number([1, 2, 3]);

//parseInt() Служит для целых чисел
//parseFloat() Служит для дробных чисел


value = parseInt('200');
value = parseInt('200px');
value = parseInt('px200');

value = parseFloat('202.20');
value = parseFloat('202.20px');
value = parseFloat('px202.20');

//Boolean
value = Boolean ('hello');//true
value = Boolean ('');//false
value = Boolean (100);//true
value = Boolean (-100);//true
value = Boolean (0);//false
value = Boolean (undefined);//false
value = Boolean (null);//false
value = Boolean ({});//true
value = Boolean ([]);//true




console.log(value);
console.log(typeof value);

console.clear();

//Дз
'use strict';
let use = 'я учу js';
console.log(use);

//ДЗ
let colorIse = '';
console.log(colorIse);

console.clear();
//---------------------------------------------------------------


console.log('Учим JS');

