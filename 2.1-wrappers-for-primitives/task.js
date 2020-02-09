'use strict'
  
const currentDate = new Date();
let resultCheckValue = {};  
let parameterName = '';
let parameterValue = '';    

function calculateTotalMortgage(percent, contribution, amount, date) {
    resultCheckValue = {};
    // код для задачи №1 писать здесь  
    checkingValues(percent, contribution, amount, date);
    if( resultCheckValue.error ) {
        console.log(resultCheckValue.message);
    } else {  
        const mortgageBody =  resultCheckValue.amount - resultCheckValue.contribution;
        let months = 0;
        let years = date.getYear() - currentDate.getYear();
        if( years === 0 ) {
            months = date.getMonth() - currentDate.getMonth() + 1;
        } else {            
            months = date.getMonth() + (12 - currentDate.getMonth() );
            for(let i = 1; i < years; i++) {
                months += 12;
            };
        };
        let everyMonthPercentage = percent / 100 / 12;
        console.log(everyMonthPercentage);
        // let everyMonthAmount = resultCheckValue.amount * ( everyMonthPercentage + everyMonthPercentage / ( ( Math.pow(1 + everyMonthPercentage, months) ) - 1 ) );  // 22149.56
        let everyMonthAmount = resultCheckValue.amount * ( everyMonthPercentage + everyMonthPercentage / ( ( ( 1 + everyMonthPercentage ) ** months ) - 1 ) ); //22149.56
        let totalAmount = everyMonthAmount * months;
        totalAmount = Math.round(totalAmount*100)/100;
        // totalAmount = totalAmount.toFixed(2);
        console.log(`Общая стоимость ${totalAmount}`);
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
    
//     // Попытка сохранить данные после того, как из них выделили число, чтоб два раза не вычислять
    const parsedPercent = Number.parseFloat(nonParsedPercent);
    const parsedContribution = Number.parseFloat(nonParsedContribution); 
    const parsedAmount = Number.parseFloat(nonParsedAmount);

//     // Запишем числовые данные в объект результата
    resultCheckValue.percent = parsedPercent;
    resultCheckValue.contribution = parsedContribution;
    resultCheckValue.amount = parsedAmount;
    resultCheckValue.date = nonParsedDate;
    
    if( Number.isNaN( parsedPercent ) ) {
        parameterName = percentName;
        parameterValue = nonParsedPercent;        
        resultCheckValue.message = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;
        resultCheckValue.error = true;        
    } else if( Number.isNaN( parsedContribution ) ) {
        parameterName = contributionName;
        parameterValue = nonParsedContribution;
        resultCheckValue.error = true;
        resultCheckValue.message = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;
    } else if( Number.isNaN( parsedAmount ) ) {
        parameterName = amountName;
        parameterValue = nonParsedAmount;
        resultCheckValue.error = true;
        resultCheckValue.message = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;
    } else if( !Date.parse(date) || currentDate > date ) {
        parameterName = dateName;
        parameterValue = date;
        resultCheckValue.error = true;
        resultCheckValue.message = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;
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