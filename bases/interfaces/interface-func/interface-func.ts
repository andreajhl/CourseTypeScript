(() => {
    //podria servir para restringir como luce una func.
    interface addTwoNumbers {
        (a: number, b: number): number,
    };

    let addNumbersFunc: addTwoNumbers = (a: number, b: number) => {
        return a + b;
    }
})();