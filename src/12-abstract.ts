import { Animal, Dog } from "./09-protected";

// Cada vez que implementamos una clase abstracta, no
// podemos crear instancias de esa clase, sino solo de las
// clases hijas.

// const animal = new Animal('elite');
// animal.greeting();

const cheis = new Dog('cheis', 'kowany');
cheis.greeting();
cheis.woof(2);
