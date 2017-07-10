import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { AfiliadoComponent } from "./afiliado.component";

import { DateValueAccessor } from "./date-value-accessor";

import { MyDatePickerModule } from 'mydatepicker';

import { HttpModule }    from '@angular/http';

import { AfiliadoService } from "./afiliado.service";

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { SuggestBoxComponent } from "./autocomplete.component";

import { Ng2CompleterModule } from "ng2-completer";

import { MyComponent } from "./mycomponent.component";

@NgModule({
  imports: [BrowserModule, 
  FormsModule, MyDatePickerModule, HttpModule,Ng2AutoCompleteModule,Ng2CompleterModule],
  declarations: [AppComponent, AfiliadoComponent,MyComponent],
  bootstrap: [AppComponent],
  providers:[AfiliadoService]
})
export class AppModule { }
