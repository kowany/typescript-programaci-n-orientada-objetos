export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {

  // hay que tener cuidado de no duplicar la variable
  // name, definiéndola como public en el constructor
  // de Dog, porque TS se confundiría, se deja
  // como una variable que se recibe y se pasa
  // al padre
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'kowany');
cheis.move();
console.log(cheis.greeting());

cheis.woof(5);
console.log(cheis.owner);
