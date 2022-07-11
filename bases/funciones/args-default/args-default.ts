(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
       return upper ? `${firstName} ${lastName}`.toUpperCase() : `${firstName} ${lastName}`
    }
    console.log(fullName('Pepe', 'Grillo'));
})();