class Weapon {
  constructor(object){
    this.name = object.name;
    this.attack = object.attack;
    this.durability = object.durability;
    this.range = object.range;
    this.firstDurability = object.durability;
  }
  takeDamage(damage) {
    this.durability = this.durability - damage;
    if(this.durability < 0) {
      this.durability = 0;
    }
  };
  getDamage() {
    if( this.durability === 0 ) {
      this.attack = undefined;
      return 0;
    } else if( this.durability >= (this.firstDurability / 100 * 30) ) {
      return this.attack;
    } else {
      return this.attack / 2;
    };
  };
  isBroken() {
    if( this.durability > 0 ) {
      return false;
    } else {
      return true;
    };
  };
}

const oldSword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

// const oldSword = new Weapon('Старый меч', 20, 10, 1); 
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч',	25,	500, 1);
const knife = new Weapon('Нож', 5,	300,	1);
const staff = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', bow.durability, 15, 4);
const axe = new Weapon('Секира', 27, 800, sword.durability);
const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);	

// oldSword.takeDamage(5);
// console.log(oldSword.durability); // 5
// oldSword.takeDamage(50);
// console.log(oldSword.durability); // 0

// arm.takeDamage(20);
// console.log(arm.durability); // Infinity

// bow.takeDamage(20);
// console.log(bow.durability); // 180
// bow.takeDamage(200);
// console.log(bow.durability); // 0
// console.log(bow.getDamage()); // 0
// console.log(bow.isBroken()); // true

// console.log(arm.durability); // Infinity
// console.log(arm.getDamage()); // 1
// console.log(arm.isBroken()); // false

// console.log(arm, bow, sword, oldSword, knife, staff, longBow, axe, stormStaff );

// #2
class WeaponCommon {  
  constructor(name, attack, durability, range){
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.firstDurability = durability;
  }
  takeDamage(damage) {
    this.durability = this.durability - damage;
    if(this.durability < 0) {
      this.durability = 0;
    }
  };
  getDamage() {
    if( this.durability === 0 ) {
      this.attack = undefined;
      return 0;
    } else if( this.durability >= (this.firstDurability / 100 * 30) ) {
      return this.attack;
    } else {
      return this.attack / 2;
    };
  };
  isBroken() {
    if( this.durability > 0 ) {
      return false;
    } else {
      return true;
    };
  };
}

class Arm extends WeaponCommon {
  constructor(name, attack, durability, range) {
    super('Рука', 1, Infinity, 1);
  };
};
class Bow extends WeaponCommon {
  constructor(name, attack, durability, range) {
    super('Лук', 10, 200, 3);
  };
};
class Sword extends WeaponCommon {
  constructor(name, attack, durability, range) {
    super('Меч',	25,	500, 1);
  };
};
class OldSword extends Sword {
  constructor(name, attack, durability, range) {
    super(range);
    this.name = 'Старый меч';
    this.attack = 20;
    this.durability = 10;
    this.firstDurability = this.durability;
  };
};
class Knife extends WeaponCommon {
  constructor(name, attack, durability, range) {
    super('Нож', 5,	300,	1);
  };
};
class Staff extends WeaponCommon {
  constructor(name, attack, durability, range) {
    super('Посох', 8, 300, 2);
  };
};
class LongBow extends Bow {
  constructor(name, attack, durability, range) {
    super(durability);
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
    this.firstDurability = this.durability;
  };
};
class Axe extends Sword {
  constructor(name, attack, durability, range) {
    super(range);
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.firstDurability = this.durability;
  };
};
class StormStaff extends Staff {
  constructor(name, attack, durability, range) {
    super(durability);
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
    this.firstDurability = this.durability;
  };
};

const arm1 = new Arm();
const bow1 = new Bow();
const sword1 = new Sword();
const oldSword1 = new OldSword();
const knife1 = new Knife();
const staff1 = new Staff();
const longBow1 = new LongBow();
const axe1 = new Axe();
const stormStaff1 = new StormStaff();

 console.log(arm1, bow1, sword1, oldSword1, knife1, staff1, longBow1, axe1, stormStaff1 );

// #3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  };
  getName() {
    return this.name;
  };
  addGrade(grade, subject) {
    if( this.subjects[subject] == undefined ) {
      this.subjects[subject] = [];
    }
    if( isNaN(grade) || grade < 1 || grade > 5 ) {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      return this.subjects[subject].length;
    } 
    this.subjects[subject].push(grade);
    return this.subjects[subject].length;
  };
  getAverageBySubject(subject) {
    if( this.subjects[subject] == undefined ) {
      return 0;
    } else {
      let summ = 0;
      for( let i = 0; i < this.subjects[subject].length; i++ ) {
        summ += this.subjects[subject][i];
      };
      console.log(summ);
      return summ / this.subjects[subject].length;
    };
  };
  getTotalAverage() {
    let totalSumm = 0;
    let amountGrades = 0;
    let totalAverage = 0;
    for( let key in this.subjects ) {      
      let summ = 0;
      for( let i = 0; i < this.subjects[key].length; i++ ) {
        summ += this.subjects[key][i];
        amountGrades += 1;
      };
      totalSumm += summ;
    };
    totalAverage = totalSumm / amountGrades;
    if( isNaN(totalAverage) ) {
      return 0;
    }
    return totalAverage;
  };
};

const log = new StudentLog('Олег Никифоров');
// console.log(log.getName())
// // console.log(log.addGrade(5, 'algebra'));
// // log.addGrade(2, 'algebra');
// // log.addGrade(4, 'algebra');
// // log.addGrade(5, 'geometry');
// // log.addGrade(4, 'geometry');
// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0
// console.log(log.getTotalAverage());