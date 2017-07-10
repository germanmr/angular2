import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "suggestbox",
  template: `
    <h1> Autocomplete Directive Test - Local Source </h1>
    
    <h3>With Array of Strings</h3>
    <div ng2-auto-complete
      [source]="arrayOfStrings"
      (valueChanged)="valueChanged($event)"
      placeholder="enter text">
      <input [ngModel]="model1" />
    </div>
    
    Please check console for event(s); \`valueChange\`

 `,
  styles: [`
    ng2-auto-complete, input {
      display: block; border: 1px solid #ccc; width: 300px;
    }
  `]
})
export class SuggestBoxComponent {
  
  arrayOfStrings = ['this', 'is', 'list', 'of', 'string', 'element'];

  valueChanged(newVal:string) {
    console.log("Case 2: value is changed to ", newVal);
  }
}
