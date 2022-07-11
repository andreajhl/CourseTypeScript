(() => {
    const addNumber = (a: number, b:number): number => a + b;
    const greet = (name: string): string => name;
    const saveTheWorld = (): string => 'El mundo esta a salvo';

    //type function addNumber
    //let myFunction: (y: number) => number;

    let myFunction: Function;

    // myFunction = 10
    // console.log(myFunction);

    myFunction = addNumber;
    console.log(myFunction(1, 2));

    myFunction = greet
    console.log(myFunction('Fernando'));

    myFunction = saveTheWorld
    console.log(myFunction());
})();