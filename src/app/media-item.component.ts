import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'mw-media-item',
    templateUrl: './media-item.component.html',
    styleUrls: [
        './media-item.component.css'
    ]
})
export class MediaItemComponent {

   // This is an example of a class property!!
   name = "The Redemption"; // this will be rendered on the media-item html file

   // Defining properties for components we create and making them available to be set using Input
   // Reminder we are using another Angular Decorator (@Input) which is desinged to be used on the class property
   @Input() mediaItem; // we created a new class property with the name mediaItem => will be used inside app.component.html
   // Above will let Angular know that we want it to support any property bindings placed on instances of the item elements

   // It is recommended you only use the alias so we stick with a property name of delete
   @Output() delete = new EventEmitter(); // we are exposing an event like native DOM Events

   wasWatched(){
     return true;
   };

   onDelete(){
     console.log("This was deleted!!");
     this.delete.emit(this.mediaItem); // expects to be called with an argument that represents data we can send back
   };

}