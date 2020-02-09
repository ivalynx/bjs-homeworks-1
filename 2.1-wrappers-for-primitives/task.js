'use strict'
  
const currentDate = new Date();
let resultCheckValue = {};
let parameterName = '';
let parameterValue = '';      

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь  
    checkingValues(percent, contribution, amount, date);
    if( resultCheckValue.error ) {
        console.log(resultCheckValue.message);
    } else {        
        console.log(resultCheckValue);
        // Посчитайте сумму, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос) Тело кредита   
        const mortgageBody =  resultCheckValue.amount - resultCheckValue.contribution;
        console.log(`mortgageBody = ${mortgageBody}`);
        // Посчитайте количество выплачиваемых месяцев
        let months = 0;
        let years = date.getYear() - currentDate.getYear();
        if( years === 0 ) {
            months = date.getMonth() - currentDate.getMonth() + 1;
        } else {            
            months = date.getMonth() + (12 - currentDate.getMonth() );
            for(let i = 0; i < years; i++) {
                months += 12;
            };
        };
// Ежемесячная оплата рассчитывается по формуле: Платеж=S*(P+P/(((1+P)^n)-1)), где: S - сумма кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
        let everyMonthPercentage = percent / 100 / 12;
        console.log(`everyMonthPercentage = ${everyMonthPercentage}`);
        let everyMonthAmount = resultCheckValue.amount * ( everyMonthPercentage + everyMonthPercentage / ( ( Math.pow(1 + everyMonthPercentage, months) )  -1 ) ); // , где:  ^ - возведение в степень
        console.log(`everyMonthAmount = ${everyMonthAmount}`);      
// Посчитайте общую сумму, которую придется заплатить клиенту.
        let totalAmount = everyMonthAmount * months;
// Округлите результат до двух значений после запятой.
        totalAmount = Math.round(totalAmount*100)/100;
// Выведите результат в консоль, а также верните его из функции. Результатом функции должно быть значение числового типа.
        console.log(`Общая стоимость ${totalAmount} \n Ежемесячная оплата ${everyMonthAmount}`);
        return totalAmount;
    }
}


function checkingValues(percent, contribution, amount, date) {  
    let messageError = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;  
    const percentName = 'Процентная ставка';
    const contributionName = 'Начальный взнос';
    const amountName = 'Общая стоимость';
    const dateName = 'Срок ипотеки';
    // Попытка сохранить передаваемые в функцию данные для того, чтоб потом их подставить в ${parameterValue}
    const nonParsedPercent = percent;
    const nonParsedContribution = contribution;
    const nonParsedAmount = amount;
    const nonParsedDate = date;

    // Попытка сохранить данные после того, как из них выделили число, чтоб два раза не вычислять
    const parsedPercent = Number.parseFloat(percent);
    const parsedContribution = Number.parseFloat(contribution); 
    const parsedAmount = Number.parseFloat(amount);

    // Запишем числовые данные в объект результата
    resultCheckValue.percent = parsedPercent;
    resultCheckValue.contribution = parsedContribution;
    resultCheckValue.amount = parsedAmount;
    resultCheckValue.date = nonParsedDate;

    if( Number.isNaN( parsedPercent ) ) {
        parameterName = percentName;
        parameterValue = nonParsedPercent;
        resultCheckValue.error = true;
        resultCheckValue.message = messageError;
    } else if( Number.isNaN( parsedContribution ) ) {
        parameterName = contributionName;
        parameterValue = nonParsedContribution;
        resultCheckValue.error = true;
        resultCheckValue.message = messageError;
    } else if( Number.isNaN( parsedAmount ) ) {
        parameterName = amountName;
        parameterValue = nonParsedAmount;
        resultCheckValue.error = true;
        resultCheckValue.message = messageError;
    } else if( currentDate > date ) {
        parameterName = dateName;
        parameterValue = date;
        resultCheckValue.error = true;
        resultCheckValue.message = messageError;
    } else {        
        resultCheckValue.error = false;
    };
    
    return resultCheckValue;
} 
let userName;

function getGreeting(name) {
    // код для задачи №2 писать здесь
    checkingName(name);
    let greeting = `Привет, мир! Меня зовут ${userName}`;
    console.log(greeting);
    return greeting;
}

function checkingName(name) {    
    switch(name) {
        case '' :
        case null :
        case undefined :
            userName = 'Аноним';
            break;
        default:
            userName = name;
            break;        
    }
    return userName;
}