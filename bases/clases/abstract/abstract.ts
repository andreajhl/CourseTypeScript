(() => {

    //no sirve para crear instancias, sirve para crear otras que exotiendan de ella
    abstract class Mutante {
        constructor(public name: string, public realName: string) {
            console.log("constructor Mutante");
        };
    };

    class Xmen extends Mutante {
        salvarMundo():string {
            return "Mundo Salvado"
        }
    };
    class Villiam extends Mutante {
        conquistarMundo():string {
            return "Mundo Conquistado"
        }
    };

    const wolverine: Xmen = new Xmen("Wolverine", "Logan");
    const magneto: Villiam = new Villiam("Macneto", "Magnus");
    console.log(wolverine);

})();