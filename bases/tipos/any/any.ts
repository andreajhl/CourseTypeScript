(() => {
    //casteo, puedo definir el tipo de dato si inicialmente es any
    let avenger: any = 123;
    avenger = 'Dr Stange';

    console.log((avenger as string).charAt(0));
    console.log((<number>avenger).toFixed(2));
})();
