'use strict';
// Задача №1

let result = new Object();

function getSolutions( a, b, c ) {
  let D = b ** 2 - 4 * a * c;
  result.D = D;
  if( D === 0) {
    let x1 = -b / (2 * a);
    result.roots = [x1];
  } else if(D > 0) {
    let x1 = ( -b + Math.sqrt(D) ) / ( 2 * a);
    let x2 = ( -b - Math.sqrt(D) ) / ( 2 * a);
    let objX2 = {x2};   
    result.roots = [x1, objX2];
  };
  return result;
}

function showSolutionsMessage( a, b, c ) {
  getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  switch(result.roots.length) {
    case 0:
      console.log(`Уравнение не имеет вещественных корней`);
      break;
    case 1: 
      console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
      break;
    case 2:
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1].x2}`);
      break;
  }  
}

showSolutionsMessage( 7, 20, -3 );

// D > 0 = 7, 20, -3    x1, x2
// D === 0 = 2, 4, 2    x1
// D < 0 = 1, 2, 3      undefined


// Задача №2
let resultAverageScore = {};
let averageMark = 0;
function getAverageScore( data ) {
  let averageScore = 0;
  let subject = 0;

  for(let prop in data) {
    let key = prop;
    subject += 1;
    resultAverageScore[key] = getAverageMark(data[prop]);
    averageScore += getAverageMark(data[prop]);
  };
  resultAverageScore.average = averageScore / subject;
  if(subject < 10) {
    let subjects = '';
    switch(subject) {
      case 1:
        subjects = `указанный ${subject} предмет`; 
        break;
      case 2:
      case 3:
      case 4:
        subjects = `указанные ${subject} предмета`; 
        break;
      default:
        subjects = `указанные ${subject} предметов`; 
        break;
    }

    console.log(`Внимание! Количество предметов меньше 10, средняя оценка выдана только за ${subjects}.`);
  }
  return console.log(resultAverageScore);
}

function getAverageMark( arr ){
  let summ = 0;
  for(let i = 0; i < arr.length; i++ ) {
      summ += arr[i];
  }

  let averageMark = summ / arr.length;    
  return averageMark;
}

console.log( getAverageScore({
  algebra: [5, 5, 4, 3, 5, 2, 4],
  russian: [5, 5, 4, 3, 5, 5, 5, 2],
  geometry: [5, 5, 4, 3, 5, 3],
  physic: [5, 5, 4, 3, 5],
  literature: [5, 5, 4, 3],
  art: [5, 5, 4, 3, 5, 3, 4],
  music: [5, 5, 4, 3, 5, 2],
  english: [5, 5, 4, 3, 5, 1],
  french: [5, 5, 4, 3, 5, 2, 5, 3],
  //chemistry: [5, 5, 4, 3, 5, 2, 1],
}));

// Задача №3
