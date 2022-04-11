// al anteponer la palabra reservada static a una
// constante, no es necesario instanciar la clase
// para acceder a ella


console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 3 , 4, 9, 2, 8));

class MyMath {
  // para prevenir que la constante sea modificada
  // agregamos readonly

  static readonly PI = 3.1416;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max > item ? max : item, numbers[0]);
  }
}

// const math = new MyMath();
// math.PI;
console.log('MyMath.PI', MyMath.PI);
// MyMath.PI = 125
const numbers = [3,48777,1,9,778,35,5689];
console.log('MyMath.max', MyMath.max(...numbers));
const numbers2 = [-6,-2,-1,-10];
console.log('MyMath.max', MyMath.max(...numbers2));
