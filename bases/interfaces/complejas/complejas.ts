(() => {
    //la buena practica es tener solo un nivel
    //no usa "=>" para señalar el resultado en una funcion usa ":"
    //si colocamos un metodo, cada objecto debe implementarlo
    //No crea instancias
    //La mayor diferencia con una clase abstracta es que las interfaces no tienen constructor
    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress( id: string): string
    };

    interface Address {
        id: number,
        zip: string,
        city: string,
    }

    const client: Client = {
        name: "Andrea",
        age: 23,
        address: {
            id: 120,
            zip: "KY2 SUD",
            city: "Ottawa"
        },
        getFullAddress(id: string) {
            return id;
        },
    };
})();