(() => {
    const hero: string = 'Flash';

    function returnName (): string{
        return hero;
    };

    const returnNameArrow = (): string => hero;
})();
