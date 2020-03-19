class AlarmClock { // будильник
  constructor() {
    this.alarmCollection = [];  // коллекция звонков bell
    this.timerId = null; // id системного таймера
  };
  addClock(hoursMinutes, fn, bellID) {  // bellID - id звонка
    if(!bellID) {
      throw new Error(`bellID doesn't have exist`)
    };
    if( this.alarmCollection.find( bell => Object.values(bell).includes(bellID) ) ) {
      throw new Error(`bellID have exist yet`)
    };
    this.alarmCollection.push({
      time: hoursMinutes,
      callback: fn,
      id: bellID,
    });
  };
  removeClock(bellID) {
    const notFoundBellID = this.alarmCollection.filter(bell => bell.id !== bellID);
    if( notFoundBellID.length < this.alarmCollection.length ) {
      this.alarmCollection = notFoundBellID;
      return true;
    }
    return false;
  };
  start() {
    
    function getCurrentFormattedTime() {
      const currentDate = new Date();
      let currentHH = currentDate.getHours().toString();
      let currentMM = currentDate.getMinutes().toString();
      let result = [currentHH, currentMM];
      for(let i = 0; i < result.height; i++) {
        if(result[i].length < 2) {
          result[i] = '0' + result[i];
        }
      }
      return result.join(':');
    };
    function checkClock(bell) {
      if( bell.time === getCurrentFormattedTime() ){
        bell.callback();
      }
    }
    if( this.timerId == null ) {
      let interval = 1000;
      const timerId = setInterval(this.alarmCollection.forEach( (bell) => checkClock(bell) ), interval);
      this.timerId = timerId;
    }
  };
  stop() {
    if(this.timerId) {
      clearInterval(timerId);
      this.timerId = null;
    };
  };
  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach( (bell) => console.log(`${bell.time}, ${bell.id}`) );
  };
  clearAlarms() {
    clearInterval(timerId);
    const alarmLength = this.alarmCollection.length;
    for(let i = 0; i < alarmLength; i++) {
      this.alarmCollection.shift();
    }
  };
}

const phoneAlarm = new AlarmClock();
phoneAlarm.addClock(`22:11`, () => console.log('Bzzz0'), 1);
phoneAlarm.addClock(`22:12`, () => {console.log('Bzzz1'); phoneAlarm.removeClock(2)}, 2);
// phoneAlarm.addClock(`22:33`, () => console.log('Bzzz2'));
phoneAlarm.addClock(`22:13`, () => console.log('Bzzz2'), 3);
phoneAlarm.addClock(`22:14`, () => console.log('Bzzz3'), 4);
// phoneAlarm.printAlarms();
phoneAlarm.start();
