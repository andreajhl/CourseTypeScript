(() => {
    //void, the function does not return anything, it is not equal to undefined.
    function name(): void {}

    const firstName = (): void => {}

    const a = name();
    console.log(a);
})();