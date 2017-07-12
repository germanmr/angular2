import { Injectable } from '@angular/core';
import { Resource, ResourceParams, ResourceAction, ResourceMethod } from 'ngx-resource';
import { RequestMethod } from '@angular/http';

export interface IQueryInput {
  page?: number;
  perPage?: number;
  dateFrom?: string;
  dateTo?: string;
  isRead?: string;
}

export interface INewsShort {
  id: number;
  date: string;
  title: string;
  text: string;
}

export interface INews extends INewsShort {
  image?: string;
  fullText: string;
}

@Injectable()
@ResourceParams({
  url: 'https://www.amr.org.ar/AutorizadorWeb/api/v3/'
})
export class NewsRes extends Resource {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IQueryInput, INewsShort[]>;

// profesional/
    // profesionmatricula?codigoProfesion=1&matriculaProfesional="+term+"&buscaSoloHabilitados=true
    // Parametros

  @ResourceAction({
    path: '/profesional/profesionmatricula?codigoProfesion=1&matriculaProfesional={!id}&buscaSoloHabilitados=true'
  })
  get: ResourceMethod<{ id: any }, INews>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<INews, INews>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/{!id}'
  })
  update: ResourceMethod<INews, INews>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/{!id}'
  })
  remove: ResourceMethod<{ id: any }, any>;

  // Alias to save
  create(data: INews, callback?: (res: INews) => any): INews {
    return this.save(data, callback);
  }

}