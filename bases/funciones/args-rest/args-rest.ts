(() => {
    const fullName = (firstName: string, ...restArg: string[] ): string => {
       return `${firstName} ${restArg.join(' ')}`
    }
    console.log(fullName('Pepe', 'Grillo', 'primero'));
})();