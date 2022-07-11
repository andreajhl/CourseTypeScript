(() => {
    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log("constructor Avenger");
        };

        protected getFullName():string {
            return `${this.name} (${this.realName})`;
        };
    };

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName);
        };

        public fullNameXmen(): string {
            return super.getFullName();
        };

        //no se ejecutan con "()", solo se llaman, el return tiene que ser sincrono
        get getFullNameXmen(): string {
            return `${this.name} ${this.realName}`;
        };

        //no retorna nada
        set getFullNameXmen(name: string) {
            this.name = name;
        };
    };

    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine);

})();