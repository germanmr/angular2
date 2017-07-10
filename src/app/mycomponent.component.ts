import { Component, Input, Output, EventEmitter, OnInit, ViewChild, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { Http } from "@angular/http";

import { CompleterService, CompleterData, CompleterItem, CompleterCmp, RemoteData } from 'ng2-completer';

import { CustomData } from "./custom-data";

import { UserService } from "./user.service";

@Component({
  selector: 'my-component',
  template: `<h1>Suggest box con datos remotos ( RE RE MOTO, Y HACIENDO UILLI) </h1>

          <h3>Custom data provider</h3>
          <p>Custom data provider. Seinfeld episodes data from <a href="https://mysafeinfo.com/">mysafeinfo.com</a>
          </p>

            <div class="card">
              <div class="card-block">
                <div class="form-group row">
                  <div class="col-5">
                    <ng2-completer [(ngModel)]="seinfeldEpisode" [datasource]="customData" [minSearchLength]="3"
                                  [inputClass]="'form-control'"
                                  [placeholder]="'search Seinfeld episode'" [textSearching]="'Please wait...'">
                    </ng2-completer>
                  </div>
                  <div class="col-6">
                    <p class="form-control-static"><b> {{seinfeldEpisode}}</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button (click)="loadUser()">Load profile</button>
              {{ profile | json }}
            </div>
          
          
            `
})
export class MyComponent {

  profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }

  private customData: CustomData;

  constructor(completerService: CompleterService, http: Http,private userService: UserService) {
    this.customData = new CustomData(http);
  }

}