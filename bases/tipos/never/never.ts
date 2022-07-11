(() => {
    //never, no es undefined ni void, no tiene un punto alcanzable ( no puede terminar exitosamente)
    const abc = (): never => {
        throw new Error;
    }
    const cde = (): (never | number) => {
        if(false) {
            throw new Error;
        }
        return 1;
    }
})();