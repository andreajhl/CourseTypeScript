(() => {
    //No se puede extender de una interface, tiene que usar "implements"
    interface Xmen {
        name: string,
        realName: string,
        mutantPower( id:number ):number,
    };

    interface Human {
        age: number,
    };

    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        mutantPower( id: number ): number{
            return this.age
        }
    }
})();