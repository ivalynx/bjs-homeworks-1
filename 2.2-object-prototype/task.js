'use strict'

function getAnimalSound(animal) {
    function Tiger(color) {
        this.color = color;
    }
    Tiger.prototype = animal;
    const tiger = new Tiger('striped');
    const animalSound = tiger.sound;
    
    if(animal == undefined) {
        return null;
    } else {
       return animalSound;
    };
}

function getAverageMark(marks) {
    let average = 0;
    if( marks.length > 0) {
        for(let i = 0; i < marks.length; i++) {
            average += Number.parseInt(marks[i]);
        };
        average = average / marks.length;    
        let roundedAverage = Math.round(average);
        return roundedAverage;
    } else {
        return 0;
    };
    
}

function checkBirthday(birthday) {
    const currentDate =  Date.now();
    if( Number.isNaN( Number.parseInt(birthday) ) ) {
        return false;
    } else {
        const birthdayUser = Date.parse(birthday);
        const diff = currentDate - birthdayUser;
        const yearMS = 31536000000;
        const leapYearMS = 31622400000;
        let ageUser = 0;
        let diffInterim = diff;
        for(let i = 0; diffInterim > yearMS; i++) {
            if( i < 2 ) {
                diffInterim -= yearMS;                          
                ageUser += 1;
            } else {  
                console.log(1972);    
                for(let j = 0; diffInterim > yearMS; j++) {         
                    if( i % 4 === 0 ) {
                        diffInterim -= leapYearMS;
                     } else {
                        diffInterim -= yearMS;
                     }
                     ageUser += 1;
                }; 
            };  
        };
        if( ageUser >= 18 ) {
            return true;
        } else {
            return false;
        };
    }; 
}