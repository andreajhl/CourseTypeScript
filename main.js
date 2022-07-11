"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getNameClass() {
            return this.name;
        }
        ;
        ;
        bio() {
            return `${this.name} (${this.team})`;
        }
        ;
    }
    Avenger.avgAge = 35;
    ;
    const antman = new Avenger('Atman', 'Capitan');
    console.log(antman.bio());
})();
//# sourceMappingURL=main.js.map