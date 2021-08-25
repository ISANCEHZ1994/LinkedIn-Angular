import { Component } from "@angular/core";

@Component({
    selector: 'mw-app',
    // refers to element called <app-root> INSIDE of index.html
    // if the selector changes - change the element tag as well in this case: mw-app

    templateUrl: './app.component.html',   // we use Url when there is more than three lines of HTML! 
    styleUrls: ['./app.component.css']     // same with templateUrl => both are preference!
})
export class AppComponent {

    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 12321453265434,
        isFavorite: false
      };
  
      onMediaItemDelete(mediaItem){
  
      }; 

}
