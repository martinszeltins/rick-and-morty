import Character from '@/types/character'
import { Component, OnInit } from '@angular/core'
import { CharacterRepositoryService } from '@/services/character-repository.service'

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
})

export class CharacterListComponent implements OnInit {
    characters: Character[] = []
    
    constructor(private characterRepositoryService: CharacterRepositoryService) {}

    getCharacters() {
        this.characterRepositoryService.getAll().subscribe(characters => {
            this.characters = characters.results
        })
    }

    ngOnInit() {
        this.getCharacters()
    }
}
