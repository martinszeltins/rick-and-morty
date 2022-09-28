import Character from '@/types/character'
import { Component, OnInit } from '@angular/core'
import { CharacterRepositoryService } from '@/services/character-repository.service'

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
})

export class CharacterListComponent implements OnInit {
    page = 1
    characters: Character[] = []
    
    constructor(private characterRepositoryService: CharacterRepositoryService) {}

    getCharacters() {
        this.characterRepositoryService.get({ page: this.page }).subscribe(characters => {
            this.characters = [ ...this.characters, ...characters.results ]
        })
    }

    onScroll() {
        this.page++
        this.getCharacters()
    }

    ngOnInit() {
        this.getCharacters()
    }
}
