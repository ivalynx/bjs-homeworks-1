'use strict'
  
const currentDate = new Date();

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    
let resultCheckValue = {};  
let parameterName = '';
let parameterValue = '';  
    
    checkingValues(percent, contribution, amount, date);
    if( resultCheckValue.error ) {
        console.log(resultCheckValue.message);
    } else {  
        console.log(resultCheckValue);
        const mortgageBody =  resultCheckValue.amount - resultCheckValue.contribution;
        console.log(`mortgageBody = ${mortgageBody}`);
        let months = 0;
        let years = date.getYear() - currentDate.getYear();
        if( years === 0 ) {
            months = date.getMonth() - currentDate.getMonth();
        } else {            
            months = date.getMonth() + (12 - currentDate.getMonth() );
            for(let i = 1; i < years; i++) {
                months += 12;
            };
        };
        let everyMonthPercentage = percent / 100 / 12;
        let everyMonthAmount = mortgageBody * ( everyMonthPercentage + everyMonthPercentage / ( ( Math.pow(1 + everyMonthPercentage, months) ) - 1 ) ); 
        let totalAmount = everyMonthAmount * months;
        totalAmount = Math.round(totalAmount*100)/100;
        console.log(`Общая стоимость ${totalAmount}`);
        return totalAmount;
    }

    
function checkingValues(percent, contribution, amount, date) {
    // let messageError = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;
    const percentName = 'Процентная ставка';
    const contributionName = 'Начальный взнос';
    const amountName = 'Общая стоимость';
    const dateName = 'Срок ипотеки';
    
    resultCheckValue.percent = percent;
    resultCheckValue.contribution = contribution;
    resultCheckValue.amount = amount;
    resultCheckValue.date = date;
    
    if( Number.isNaN( percent ) ) {
        parameterName = percentName;
        parameterValue = percent;        
        resultCheckValue.message = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;
        resultCheckValue.error = true;        
    } else if( Number.isNaN( contribution ) ) {
        parameterName = contributionName;
        parameterValue = contribution;
        resultCheckValue.error = true;
        resultCheckValue.message = `Параметр ${parameterName} содержит неправильное значение ${parameterValue}. `;
    } else if( Number.isNaN( amount ) ) {
        parameterName = amountName;
        parameterValue = amount;
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
}



function getGreeting(name) {
    let userName;

    // код для задачи №2 писать здесь
    checkingName(name);
    let greeting = `Привет, мир! Меня зовут ${userName}`;
    console.log(greeting);
    return greeting;
    

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
}
