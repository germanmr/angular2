import { Http, Response } from "@angular/http";
import { Subject } from "rxjs/Subject";

import { CompleterData, CompleterItem } from "ng2-completer";

export class CustomData extends Subject<CompleterItem[]> implements CompleterData {
    
    private urlBusqueda="";

    private urlBase="https://www.amr.org.ar/AutorizadorWeb/api/v3/";
    // profesional/
    // profesionmatricula?codigoProfesion=1&matriculaProfesional="+term+"&buscaSoloHabilitados=true
    // Parametros
    
    constructor(private http: Http) {
        super();
    }

    public search(term: string): void {
        
        // this.urlBusqueda="http://mysafeinfo.com/api/data?list=seinfeldepisodes&format=json&nm=";

        this.urlBusqueda="https://www.amr.org.ar/AutorizadorWeb/api/v3/profesional/profesionmatricula?codigoProfesion=1&matriculaProfesional="+term+"&buscaSoloHabilitados=true";

        //this.http.get(this.urlBusqueda + term + ",contains")
        this.http.get(this.urlBusqueda)
            .map((res: Response) => {
                // Convert the result to CompleterItem[]
                let data = res.json();
                let matches: CompleterItem[] = data.map((profesional: any) => this.convertToItem(profesional));
                this.next(matches);
            })
            .subscribe();
    }


    public convertToItem(data: any): CompleterItem | null {
        
        if (!data) {
            return null;
        }
        // data will be string if an initial value is set
        return {title: typeof data === "string" ? data : data.nombre} as CompleterItem;
    }

    public cancel() {
        // Handle cancel
    }
}
