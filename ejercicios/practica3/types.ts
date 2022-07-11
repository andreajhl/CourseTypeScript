export type Auto = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void,
};

export type Villano = {
    nombre: string,
    edad: ( number | undefined),
    mutante: boolean,
};

export type Charles = {
    poder: string,
    estatura: number,
};

export type Apocalipsis = {
    lider: boolean,
    miembros: string[]
}