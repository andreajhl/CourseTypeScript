(() => {

    class Avenger {
        static avgAge: number = 35;

        static getNameClass(): string {
            return this.name
        };
        // constructor(name: string, team: string, realName?: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // };

        constructor(
            private name: string,
            private team: string, 
            public realName?: string
        ) {};

        public bio():string {
            return `${this.name} (${this.team})`;
        };
    };

    const antman:Avenger = new Avenger('Atman', 'Capitan');
    console.log(antman.bio());

})();