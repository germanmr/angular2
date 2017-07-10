
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Afiliado } from "./afiliado/afiliado";
import { RespuestaComunicacion } from "./respuestacomunicacion";

@Injectable()
export class AfiliadoService {

    //private afiliadoUrl = 'api/heroes';  // URL to web api
    //private urlPrueba='https://www.amr.org.ar/gestion/webServices/autorizador/test/ambulatorio/pruebaconectividad';
    private urlPrueba = 'https://www.amr.org.ar/AutorizadorWeb/api/v3/profesional/profesionmatricula?codigoProfesion=1&matriculaProfesional=4275&buscaSoloHabilitados=true';

    constructor(private http: Http) { }

    getRespuestaComunicacion(): Promise<RespuestaComunicacion> {
        return this.http.get(this.urlPrueba)
            .toPromise()
            .then(response => response.json() as RespuestaComunicacion)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getUser() {
        return this.http.get(this.urlPrueba).map((res: Response) => res.json());
    }

}