// Acceso público
// Si no le defines el acceso a ninguna variable
// por default sera pública.
export class MyDate {
  year: number;
  month: number ;
  day: number;
  constructor(year: number, month: number, day: number){
      this.year = year;
      this.month = month;
      this.day = day;
  }

  printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
