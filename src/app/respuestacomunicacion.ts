
import { PrestadorPk } from "./prestadorPk";

export class RespuestaComunicacion 
{
    constructor(public nombre:string,
    public prestadorPk:PrestadorPk ){

    }

  //[{"nombre":"MUÑOZ ERNESTO EMILIO","prestadorPK":{"codigoProfesion":1,"matricula":4275,"libro":"     ","folio":"     "}}]
// {"profile":{"username":"eric","bio":"Cofounder of Thinkster.io, kinda looks like Peeta from the Hunger Games","image":"http://i.imgur.com/S66L2XZ.jpg","following":false}}
}