import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { CharacterComponent } from './character/character.component'
import { CharacterListComponent } from './character-list/character-list.component'

@NgModule({
    declarations: [
        AppComponent,
        CharacterComponent,
        CharacterListComponent,
    ],

    imports: [
        BrowserModule
    ],

    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
