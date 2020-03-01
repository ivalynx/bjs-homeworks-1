function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

function sum(...args) {
  // Замедление на половину секунды.
  // sleep(500);  Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

// Данные при sleep(500):
// start test sum
// timer sum: 60120.382080078125ms
// start test mSum
// timer mSum: 0.25390625ms

// After deleted sleep(500)
// start test sum
// task.js:94 timer sum: 0.60400390625ms
// task.js:96 start test mSum
// task.js:100 timer mSum: 0.720947265625ms

function compareArrays( arr1, arr2 ) {
  if( !Array.isArray(arr1) ) {
    throw new Error('Первый аргумент не является массивом');
  };
  if( !Array.isArray(arr2) ) {
    throw new Error('Второй аргумент не является массивом');
  };
  if( arr1.length != arr2.length ) {
    return false;
  }   
  return arr1.every( (item, index) => item === arr2[index] );
}

// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize(fn, limit) {
  const memory = [];
  return function(){
    let args = Array.from(arguments);
    let search = memory.find( (item) => {
      return compareArrays(item.args, args)
    });
      if(search) {
        console.log(`Found ${search}`);
        return memory.result;
      } else {
        console.log(`Npt found ${search}`);
        let resultFn = fn(...args);
        memory.push(
          {
            args: args, 
            result: resultFn,
          }
        );
        if( memory.length > limit) {
          let elShift = limit - memory.length;
          for( let i = 0; i < elShift; i++ ) {
            memory.shift();
          }
        };
        return fn(args);
      };
  };
}

const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

function testCase() {
  let test = [
    [1,2,3], 
    [1,2], 
    [1,2,3], 
    [1,2], 
    [9,5,2,4],
    [1,4,5],
    [1,1],
    [2,2],
    [7,7],
    [5,5],
    [9,9],
    [10,10]
   ];
  console.time('timer sum');  
  console.log('start test sum');
  for(let i = 0; i < 10; i++) {
    test.forEach(item => sum(...item));
  };
  console.timeEnd('timer sum');
  console.time('timer mSum');  
  console.log('start test mSum');
  for(let i = 0; i < 10; i++) {
    test.forEach(item => mSum(...item));
  };
  console.timeEnd('timer mSum');
};

testCase();