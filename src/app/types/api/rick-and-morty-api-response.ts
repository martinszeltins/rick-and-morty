import Character from '../character'

export default interface RickAndMortyApiResponse {
    info: {
        count: number
        next: string
        pages: number
        prev: string
    },

    results: Character[]
}