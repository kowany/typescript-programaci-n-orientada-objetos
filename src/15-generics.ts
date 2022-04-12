import {Dog} from './09-protected';

// function getValue(value: unknown) {
//     return value;
// }

// function getValue(value: number | string) {
//     return value;
// }

function getValue<T>(value: T) {
  const array: T[] = [];
    return value;
}

getValue<number>(22).toFixed();
getValue<string>('13').toLowerCase();
getValue<number[]>([12,34,322,988]).forEach;
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting();
/*
  Examples
  Promise<boolean>
  axios.get<string[]>
*/
