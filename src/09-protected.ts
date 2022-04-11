// El método protected se comporta como un
// método privado, pero tiene herencia. No
// permite la modificación desde el exterior

export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}

const cheis = new Dog('cheis', 'kowany');
cheis.move();
console.log(cheis.greeting());

console.log(cheis.owner);
// cheis.name = 'Otro nombre';

cheis.woof(1);
// cheis.doSomething();
cheis.move();
