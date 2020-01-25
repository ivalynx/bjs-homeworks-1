'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
    if(a === 0) {
        return x;
    }
    let D = b ** 2 - 4 * a * c;
    if(D < 0){
      x;
    } else if( D === 0) {
      x.push( (-b) / (2 * a) );
    } else if(D > 0) {
      x.push( ( -b + Math.sqrt(D) ) / ( 2 * a) );
      x.push( ( -b - Math.sqrt(D) ) / ( 2 * a) );
    };

    // switch(D) {          аналогично if, но не работает. Почему?
    //     case 'D < 0' : 
    //         x;
    //         break;
    //     case 0 :
    //         x.push( (-b) / (2 * a) );
    //         break;
    //     case 'D > 0' :
    //         console.log(11);
    //         x.push( ( -b + Math.sqrt(D) ) / ( 2 * a) );
    //         console.log(`first step ${x}`);
    //         x.push( ( -b - Math.sqrt(D) ) / ( 2 * a) );
    //         console.log(`second step ${x}`);
    //         break;
    // }
    
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if( marks.length > 5 ){
        console.log(`Количество оценок больше пяти! \n Программа посчитает среднее арифметическое только из первых пяти оценок`);
        marks.splice(5, marks.length - 5);
    }

    let summ = 0;
    for(let i = 0; i < marks.length; i++ ) {
        summ += marks[i];
    }

    let averageMark = summ / marks.length;    
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    const date = new Date();
    let userAge = date.getFullYear() - dateOfBirthday.getFullYear();
    console.log(userAge);
    let result;
    if( userAge >= 18 ) {
        result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    };
    console.log(result);
    return result;
}