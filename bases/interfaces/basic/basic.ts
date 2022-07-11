(() => {
    //es igual al type, la diferencia de interfaces puede extensible
    //type se recomiendas bastante en redux
    interface Hero {
        name: string,
        age: number,
        power: string[],
        getName?: () => string;
    };
})();