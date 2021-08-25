import { NgModule } from "@angular/core";

// Since we are making a browser based app - we need to make use of this module
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";

/* 
  DECORATOR: Expression that evaluates to a function allowing annotation of classes at design time
  @NgModule() is an example of a Decorator!

  @Component()

  @ => Decorator Indicatior
  Component => Decorator Name
  () => Arguments
*/

@NgModule({ // These properties are known as METADATA!
    imports: [  // can bring in other Angular Modules that your module will need
        BrowserModule,

    ],
    declarations: [ // can make component, directives, and pipes available 
                    // to your module that don't come from another module
        AppComponent,
        MediaItemComponent,
    ],
    bootstrap: [    // what to use as the starting component
        AppComponent,
    ]
})
export class AppModule {} // here we are exporting this file so that we can call/use it somewhere else NOTE: main.ts
