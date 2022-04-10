// Para evitar realizar las declaraciones de las
// propiedades y asignarlas posteriormente en el
// constructor HAY que declarar el alcance de los
// parámetros para que las asignacions se realicen
// de manera automática. Al no declararla solo se
// podrían acceder como una variable más de ese
// método -el constructor- en el cuerpo de este.

export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
    ){
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
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

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(2002);
console.log('(2002) =>', myDate3.printFormat());

const myDate4 = new MyDate(2002, 3);
console.log('(2002, 3) =>', myDate4.printFormat());
