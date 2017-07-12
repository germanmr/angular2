// app/books/book.service.ts
import {Injectable} from '@angular/core';
import {RequestMethod} from '@angular/http';

import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {RestClient} from './rest-client';

export interface IQueryInput {
  page?: number;
  perPage?: number;
  dateFrom?: string;
  dateTo?: string;
  isRead?: string;
}

export interface IBookShort {
  id?: number;
  cover?: string;
  title: string;
  author: string;
}

export interface IBook extends IBookShort {
  summary?: string;
  publishedDate?: Date;
}
//[{"nombre":"MUÑOZ ERNESTO EMILIO","prestadorPK":{"codigoProfesion":1,"matricula":4275,"libro":"     ","folio":"     "}}]
export class IProfesional {
  prestadorPK: IPrestadorPK;
  nombre: string;
}
export class IPrestadorPK {
  codigoProfesion: number;
  matricula: number;
  libro: string;
  folio: string;
}

@Injectable()
@ResourceParams({
  url: 'https://www.amr.org.ar/AutorizadorWeb/api/v3/'
})
export class BookService extends RestClient {

  @ResourceAction({
    isArray: true,
    path: '/'
  })
  getBooks: ResourceMethod<IQueryInput, IBookShort[]>;

  @ResourceAction({
    isArray: true,
    path: '/profesional/profesionmatricula?codigoProfesion=1&matriculaProfesional=4275&buscaSoloHabilitados=true'
  })
  getBook: ResourceMethod<{id: any}, IProfesional[]>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  saveBook: ResourceMethod<IBook, any>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/{!id}'
  })
  updateBook: ResourceMethod<IBook, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/{!id}'
  })
  deleteBook: ResourceMethod<{id: any}, any>;
}