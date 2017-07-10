import { Component } from '@angular/core';

import { Afiliado } from "./afiliado/afiliado";

import { IMyDpOptions } from 'mydatepicker';

import { AfiliadoService } from "./afiliado.service";

import { RespuestaComunicacion } from "./respuestacomunicacion";

@Component({
    selector: 'afiliado',
    templateUrl: './afiliado/afiliado.component.html',
})
export class AfiliadoComponent {

    arrayOfStrings = ['this', 'is', 'list', 'of', 'string', 'element'];

    valueChanged(newVal: any) {
        console.log("Case 2: value is changed to ", newVal);
    }

    private respuestaComunicacion: RespuestaComunicacion;

    constructor(private afiliadoService: AfiliadoService) { }

    afiliado = new Afiliado('German Muñoz', 'Zeballos 1768', 29001807, new Date(), 'M');

    submitted = false;

    getRespuesta() {
        this.afiliadoService.getRespuestaComunicacion().then(data => this.respuestaComunicacion = data);
    }

    loadUser() {
        this.afiliadoService.getUser().subscribe(data => this.profile = data);
    }
    profile = {};

    ngOnInit() {
        this.loadUser();
        this.getRespuesta();
    }

    onSubmit() {

        console.log('console.log(this.profile); ');
        console.log(this.profile);
        console.log('console.log(JSON.stringify(this.profile)); ');
        console.log(JSON.stringify(this.profile));
        console.log('Respuesta: ');
        console.log(JSON.stringify(this.respuestaComunicacion));

        this.submitted = true;
    }


    /**
     * Opciones del DatePicker
     */
    private fechaNacimiento: Object = { jsdate: new Date() };
    private myDatePickerOptions: IMyDpOptions = { dateFormat: 'dd/mm/yyyy' };
    // Initialized to specific date (09.10.2018).
    //private fechaNacimiento: Object = { new Date() };

    get diagnostic() {
        return JSON.stringify(this.afiliado);
    }


}