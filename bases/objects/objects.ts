import { Hero } from './type';

(() => {
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        power: ['super velocidad', 'viajes en el tiempo']
    }

    let myCustomVariable: (string | number | Hero ) = 'Andrea';
})();