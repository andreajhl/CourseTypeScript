export interface Car {
    encender: boolean,
    velocidadMaxima: number,
    acelear():void,
};

export interface Actions {
    reir?: boolean,
    comer?: boolean,
    llorar?: boolean,
};

export interface City {
    ( ciudadanos:string[] ):number
}

export interface Person {
    nombre: string,
    edad: number,
    sexo: string,
    estadoCivil: string,
    imprimirBio(): void 
}