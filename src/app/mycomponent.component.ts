import { Component, Input, Output, EventEmitter, OnInit, ViewChild, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { Http } from "@angular/http";

import { CompleterService, CompleterData, CompleterItem, CompleterCmp, RemoteData } from 'ng2-completer';

import { CustomData } from "./custom-data";

import { UserService } from "./user.service";

import { NewsRes, INews, INewsShort } from './NewsRes';

import { BookService, IBook, IProfesional } from "./book.service";


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
                                [placeholder]="'search Seinfeld episode'" [textSearching]="'Buscando coincidencias...'">
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
export class MyComponent implements OnInit {

  newList: INewsShort[] = [];

  profile = {};

  private customData: CustomData;

  constructor(completerService: CompleterService, http: Http, private userService: UserService,
    private newsRes: NewsRes, private _bookService: BookService) {
    this.customData = new CustomData(http);
  }

  ngOnInit(): any {


    let respuesta = this._bookService.getBook({ id: 4275 });
    respuesta
      .$observable
      .subscribe(
      (profesionales: IProfesional[]) => {

        console.log('Medico');
        console.log(profesionales[0].prestadorPK.codigoProfesion);
        console.log(profesionales[0].prestadorPK.matricula);
        console.log(profesionales[0].prestadorPK.libro);
        console.log(profesionales[0].prestadorPK.folio);
        console.log(profesionales[0].nombre);
        //otherOneNews = receivedNews;
        // do some magic after receiving news
      }
      );


    /*this._bookService.getBook({id: 4275}).$observable.toPromise().then(() => {
          profesional.title = 'Ainsi parlait Zarathoustra';

         // PUT http://.../books/42
         return this._bookService.updateBook(book).$observable.toPromise();
       })
      .then(() => {
        // DELETE http://.../books/42
        return this._bootService.deleteBook(book).$observable.toPromise();
      });;

    console.log(profesional);

   profesional.$observable
       .toPromise()
       .then(() => {
         profesional.title = 'Ainsi parlait Zarathoustra';

         // PUT http://.../books/42
         return this._bookService.updateBook(book).$observable.toPromise();
       })
      .then(() => {
        // DELETE http://.../books/42
        return this._bootService.deleteBook(book).$observable.toPromise();
      });

*/

    // That will execute GET request https://domain.net/api/users
    // and after will assign the data to this.newsList
    // this.newList = this.newsRes.query();

    // Execute GET request https://domain.net/api/users?page=1&perPage=20
    //  this.newList = this.newsRes.query({ page: 1, perPage: 20 });

    // Execute GET request https://domain.net/api/users/12
    // and assing the data to oneNews variable
    //  let oneNews = this.newsRes.get({ id: 12 });

    // or
    //  let otherOneNews: INews = null;
    //  this.newsRes.get({ id: 12 }, (receivedNews: INews) => {
    //     otherOneNews = receivedNews;
    // do some magic after receiving news
    //   });

    // or :)
    //  let otherSomeNews = this.newsRes.get({ id: 12 });
    //   otherSomeNews
    //    .$observable
    //    .subscribe(
    //    (receivedNews: INews) => {
    //      otherOneNews = receivedNews;
    // do some magic after receiving news
    //    }
    //   );

    // Also you can cancel the requests
    // let news = this.newsRes.get({ id: 12 });
    // news.$abortRequest();

    // That kind of ways with callback, $observable and $abortRequest
    // can be used on all methods


    // Creating the news
    /*
    let newNews:INews = {
      date: '17.06.2016',
      title: 'The great day',
      text: 'The best day ever',
      fullText: 'Should be full text here';
    }*/
    // That will execute the POST request to https://domain.net/api/users
    // Expected to receive created news object which will be assigned to newNews
    //let newNews = this.newsRes.save(newNews);

    // and so on

  }

  loadUser() {
    // this.userService.getUser().subscribe(data => this.profile = data);
  }



}