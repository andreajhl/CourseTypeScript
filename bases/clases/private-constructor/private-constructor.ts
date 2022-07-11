(() => {
    class Apocalipsis {
        static intance:Apocalipsis;

        private constructor(public name: string) {
            console.log("constructor Apocalipsis");
        };

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis) {
                Apocalipsis.intance = new Apocalipsis("soy apocalipsis el unico")
            }
            return Apocalipsis.intance;
        }

        public changeName(newName: string): void {
            this.name= newName;
        }
    };

    const apocalipsis:Apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis)
})();