// La interfas no es una herencia, es un estandar
// que se debe cumplir porque previamente ya fue
// definido
// En las interfases no se pueden declarar
// variables privadas, eso le corresponde a las
// clases. Todo es público en las interfases

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// Anteriormente utilizamos las interfases de la
// siguiente manera:

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 3200
// }

// Una interfaces se implementan con la palabra
// reservada implements
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}
class MongodbDriver implements Driver {

}
