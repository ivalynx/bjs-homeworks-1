class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  };
  addClock(HH, MM, fn, timerID) {
    if(!timerID) {
      throw new Error(`timerID doesn't have exist`)
    };
    if( this.alarmCollection.find(alarm => timerID in alarm) ) {
      throw new Error(`timerID have exist yet`)
    };
    this.alarmCollection.push({
      time: `${HH}:${MM}`;
      callback: fn;
      id: timerID;
    });
  };
  removeClock(timerID) {
    const notFoundTimerID = this.alarmCollection.filter(alarm => alarm.id !== timerID);
    if( notFoundTimerID.length < this.alarmCollection.length ) {
      this.alarmCollection = notFoundTimerID;
      return true;
    }
    return false;
  };
  getCurrentFormattedTime() {
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
  }
  start() {
    function checkClock(alarm) {
      if( alarm.time === getCurrentFormattedTime() ){
        return alarm.callback;
      }
    }
    if( this.timerId === undefined ) {
      const setInterval = for(let i = 0; i < this.alarmCollection.length; i++) => this.alarmCollection[i].checkClock();

    }
  }
}

const alarmClock = new AlarmClock();
alarmClock.addClock(11, 40, alert('Bzzz'), bzzz);

