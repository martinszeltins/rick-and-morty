import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import RickAndMortyApiResponse from '@/types/api/rick-and-morty-api-response'

@Injectable({
    providedIn: 'root'
})

export class CharacterRepositoryService {
    private apiUrl = 'https://rickandmortyapi.com/api/character?page=1'

    constructor(private httpClient: HttpClient) {}

    getAll() {
        return this.httpClient.get<RickAndMortyApiResponse>(this.apiUrl)
    }
}
