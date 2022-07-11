import { Car, Actions, Person, City } from './interface';
// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Car ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Car = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason: Actions = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Actions ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

const ciudadGotica: City = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person{
    public edad: number;
    public sexo: string;
    public nombre: string;
    public estadoCivil: string;

    public imprimirBio(): void {
      console.log(`
        name: ${this.nombre},
        edad: ${this.edad},
        sexo: ${this.sexo},
        estadoCivil: ${this.estadoCivil}
      `)
    }
}