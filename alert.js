//ALERT
/*
let name = 'Джон';
let admin = name;
alert (admin)

let earth, nick;
earth = 'Земля';
nick = 'Имя посетителя';
alert (nick)
*/

//PROMPT
/*
prompt ('Сколько тебе лет?', 100);
alert ('Ого, круто!');
*/

/*
let name = prompt ('Сколько у тебя собак?', '');
if (name > 4) {
    alert (`ух ты, у тебя ${name} собак`);
} else if (name<=4 && name>1) {
    alert (`ух ты, у тебя ${name} собаки`);
} else {
    alert (`ух ты, у тебя ${name} собака`);
}
*/

/*
let name = prompt ('Сколько у тебя собак?', '');
if (name==0 | name>4) {
    alert (`ух ты, у тебя ${name} собак`);
} else if (name>1 & name<=4 ) {
    alert (`ух ты, у тебя ${name} собаки`);
} else {
    alert (`ух ты, у тебя ${name} собака`);
}
*/

//CONFIRM
/*
let quser = confirm ('У вас есть аккаунт?');
alert (quser);
*/

/*
let usersname = prompt ('Как Вас зовут?');
alert (`Приятно познакомиться, ${usersname}`);
*/

//TYPEOF(STRING, NUMBER, BOOLEAN)
/*
let value = prompt;
alert (typeof value); // function
*/

/*
let value = prompt;
value = String (value);
alert (typeof value);
*/

/*
let stroka = "123";
stroka = Number (stroka);
alert (typeof stroka);
*/

/*
let name = 'hi';
alert (Boolean (name));
*/

/*
let apples="2";
let plums="3";
alert (+apples + +plums); // alert (number(apples) + number(plums));
*/

/*
let n=2;
n +=5;
alert (n); //7
*/

/*
let a=1, b=1;
alert (c=++a); // 2
alert (c=b++); // 1
*/

/*ПРОВЕРИТЬ
let a = prompt ("Первое число?");
let а = prompt ("Второе число?");
alert (a+b);
*/

/*
let age = prompt ('Сколько тебе лет?');
let answer = (age>18) ? 'Правильно!' : 'Неправильно';
alert (answer);
*/

//УСЛОВИЯ
/*
let question = prompt ('В каком году Аделина и Арслан начали встречаться?');
let answer = (question<1997) ? 'Стоп, мы еще не родились...':
(question<2020) ? 'Неправильно, слишком рано.':
(question<2021) ? 'Ты почти близко...':
(question>2021 & question<=2022) ? 'Немного раньше, но ты на верном пути.':
(question>2022) ? 'Ну вообще, сейчас 2022 год...':
'Правильно!';
alert (answer);
*/

/*
let question = prompt ('В каком году родилась Аделина?');
(question == '1997') ?
alert ('Верно!') : alert ('Неправильно');
*/

/*
let question = prompt ('Какое «официальное» название JavaScript?');
if (question == 'ECMAScript') {
    alert('Верно!')
} else {
    alert('Не знаете? ECMAScript!')
};
*/

/*
let number = prompt ('Напиши любое число');
if (number>0) {
    alert ('1')
} else if  (number<0) {
    alert ('-1')
} else alert ('0');
*/

/*
let number = prompt ('Напиши любое число');
(number>0) ? alert ('1'):
(number<0) ? alert ('-1'):
alert ('0');
*/

/*
result = (a+b<4) ? 'Мало' : 'Много';
*/

/*
let message=(login=='Сотрудник') ? 'Привет':
(login=='Директор') ? 'Здравствуйте':
(login=='') ? 'Нет логина':
'';
*/

// && - первое ложное
// || - первое истинное

/*
if (age>=14 && age<=90);
if (!age>=14 && age<=90);
*/

/*
let code;
let login = prompt('Кто там?');
if (login=='Админ') {
    code=prompt('Пароль?');
        if (code=='Я главный') {
            alert ('Здравствуйте!')
        }
        else if (code=='' || code==null) {
            alert ('Отменено')
        }
        else {
            alert ('Неверный пароль')
        }
} else if (login=='' || login==null) {
    alert ('Отменено')
} else alert ('Я вас не знаю');
*/


//ЦИКЛЫ
/*
while – Проверяет условие перед каждой итерацией.
do..while – Проверяет условие после каждой итерации.
for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.
бесконечный цикл, используют конструкцию while (true)
*/

//BREAK
/*
let sum=0; 
while (true) {
    let number= +prompt ('Введите число:');
    if (!number) break;
    sum +=number;
}
alert (sum);
*/

/*
for (i=0; i<10; i++) {
    if (i%2!=0)
    alert (i);
}
*/

//CONTINUE
/*
for (let i=0; i<10; i++) {
    if (i%2==0) continue;
    alert (i);
}
*/

/*
for (let i=0;i<4;i++) {
    for (let j=0;j<4;j++) {
        let input = prompt (`Значение координат: (${i}, ${j})`);
    }
}
alert ('Готово!');
*/

//МЕТКИ ДЛЯ BREAK И CONTINUE
/*
METKA: for (let i=0;i<4;i++) {
    for (let j=0;j<4;j++) {
        let input = prompt (`Значение координат: (${i}, ${j})`);
        if (!input) break METKA;
    }
}
alert ('Готово!');
*/

//while and for
// в while ++i - сначала увеличивает, потом сравнивает
// в while i++ - сначала сравнивает, потом увеличивает
//для for разницы нет i++ или ++i
/*
let i=0;
while (++i<5) alert (i); //4

let i=0;
while (++i<5) alert (i); //5
*/

/*
for (let i=2;i<=10;i++) {
    if (i%2!=0) continue; // if (i%2==0) {}
    alert (i);
}
*/

/*
let i=0;
while (i<3) {
    alert (`number ${i}`);
    i++;
}
*/

/*
let i;
    while (true) {
        let i = prompt ('Введите число больше 100:')
        if (i<100 || i==null) break;
        alert (i);
    } 
*/

/*
let i;
do {
    i=prompt ('Введите число больше 100:');
} while (i<100 || i==null);
*/

//ПОИСК ПРОСТЫХ ЧИСЕЛ
/*
let number=prompt ('Введите число:');
METKA:for (let i=2; i<=number; i++) {
    for (let j=2;j<i;j++) {
    if (i%j==0) continue METKA;
    }
    alert (i);
}
*/

//SWITCH AND IF
/*
let browser=prompt("What do you use?");
if (browser == 'Edge') {
    alert ("You've got the Edge");
} else if (browser=="Chrome" 
    || browser=="Firefox" 
    || browser=="Safari" 
    || browser=="Opera") {
    alert("Okay we support these browsers too");
} else {
    alert( "We hope that this page looks ok!" );
}
*/

/*
let browser=prompt("What do you use?"); //необязательно
switch (browser) {
    case 'Edge':
        alert ("You've got the Edge");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert("Okay we support these browsers too");
        break;
    default:
        alert( "We hope that this page looks ok!" );     
}
*/

/*
const number=+prompt('Введите число между 0 и 3');
switch (number) {
    case 0:
        alert ('Вы ввели число 0');
        break;
    case 1:
        alert ('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert ('Вы ввели число 2, а может и 3');
        break;
}
*/


//FUNCTION
/*
function checkAge(age) {
    if (age>18) {
        return true;
    } else {
        return confirm('А Вам можно?');
    }
}

let age = prompt ('Сколько Вам лет?');
if (checkAge(age)) {
    alert ('Доступ открыт');
} else {
    alert ('Доступ закрыт');
}
*/

/*
function checkAge(age) {
   return (age>18) ? true: confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age>18) || confirm('Родители разрешили?');
 }
 */

 /*
 function min(a,b) {
     if (a<b) { 
         return a;   
    } else { 
        return b;
 }
}

function mim(a,b) {
    return a<b ? a : b;
}
*/

let x=prompt('Введите x');
let n=prompt('Введите n');
function pow (x,n) {
    return (x**n);
    }
alert (pow(x,n));