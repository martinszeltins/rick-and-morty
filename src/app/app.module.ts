import { NgModule } from '@angular/core'
import { AppComponent } from '@/app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { CharacterComponent } from '@/components/character/character.component'
import { CharacterListComponent } from '@/components/character-list/character-list.component'

@NgModule({
    declarations: [
        AppComponent,
        CharacterComponent,
        CharacterListComponent,
    ],

    imports: [
        BrowserModule,
        HttpClientModule,
        InfiniteScrollModule,
    ],

    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
