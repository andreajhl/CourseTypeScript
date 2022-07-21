import axios from 'axios'
import { Pokemon } from './interface';

/**
 *
    export const printObject = ( argument: any ) => {
        console.log( argument )
    }


    export function genericFunction<T>( argument: T ):T {
        return argument;
    }

    export const genericFunctionArrow = <T>( argument: T ) => argument;
 * 
 */


export const getPokemon = async( pokemonId: number ): Promise<Pokemon> => {

    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
    // console.log( data )

    return data;
}