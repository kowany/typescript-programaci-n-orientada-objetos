// Singleton garantiza que cada vez que creemos una instancia
// de MyService, no se creen múltiples instancias, si no una
// única instancia

export class MyService {
  static instance: MyService | null = null;
  // para construir un singleton anteponemos la palabra
  // clave private al constructor
  private constructor( private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('debería entrar una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

// En este caso crea la instancia con el primero que la llamó
// Luego regresa la misma instancia.
const myService = MyService.create('service 1');
console.log( myService.getName());
const myService2 = MyService.create('service 2');
console.log( myService2.getName());
const myService3 = MyService.create('service 3');
console.log( myService3.getName());

console.log(myService === myService2);
