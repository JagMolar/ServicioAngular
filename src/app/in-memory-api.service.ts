import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

// @inyectable gessiona las dependencias de la clase con el http client qeu gestiona las peticiones al servicio
@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {

  constructor() { }


  //implementamos el método createDb()
  createDb(){
    //Con la herramienta online Jsongenerator, creamos el array de usuarios 
    const users = [
      {
        "id": "5e5668f18079e3a84ccb36f8",
        "isActive": true,
        "name": "Stephenson Mcfarland",
        "email": "stephensonmcfarland@neteria.com"
      },
      {
        "id": "5e5668f114d0e51bfbb8ab59",
        "isActive": true,
        "name": "Stacy Walton",
        "email": "stacywalton@neteria.com"
      },
      {
        "id": "5e5668f192717a5dddaffef0",
        "isActive": false,
        "name": "Nina Dennis",
        "email": "ninadennis@neteria.com"
      },
      {
        "id": "5e5668f17eb15c62f9c35d4e",
        "isActive": true,
        "name": "Dorothea Chambers",
        "email": "dorotheachambers@neteria.com"
      },
      {
        "id": "5e5668f1c08bf958bf496f82",
        "isActive": true,
        "name": "Tamara Whitfield",
        "email": "tamarawhitfield@neteria.com"
      },
      {
        "id": "5e5668f1f6610ac0bfa27465",
        "isActive": false,
        "name": "Contreras Melendez",
        "email": "contrerasmelendez@neteria.com"
      },
      {
        "id": "5e5668f1ea0c966896dada12",
        "isActive": true,
        "name": "Paul Leach",
        "email": "paulleach@neteria.com"
      },
      {
        "id": "5e5668f1628bf623488c0878",
        "isActive": true,
        "name": "Thornton Stephens",
        "email": "thorntonstephens@neteria.com"
      },
      {
        "id": "5e5668f1dff3b9e135b4b9f0",
        "isActive": false,
        "name": "Williams Vincent",
        "email": "williamsvincent@neteria.com"
      },
      {
        "id": "5e5668f1d6dd583a088c7ca4",
        "isActive": true,
        "name": "Lucinda Saunders",
        "email": "lucindasaunders@neteria.com"
      },
      {
        "id": "5e5668f15e932d11c335eb9a",
        "isActive": false,
        "name": "Lucas Nunez",
        "email": "lucasnunez@neteria.com"
      },
      {
        "id": "5e5668f1c7c0ad5c0079cc90",
        "isActive": true,
        "name": "Dianna Rosa",
        "email": "diannarosa@neteria.com"
      },
      {
        "id": "5e5668f11260ede475b53db0",
        "isActive": true,
        "name": "Fran Glover",
        "email": "franglover@neteria.com"
      },
      {
        "id": "5e5668f15d1ca128a38fe04a",
        "isActive": true,
        "name": "Pittman Montoya",
        "email": "pittmanmontoya@neteria.com"
      },
      {
        "id": "5e5668f1c634dbbfb84068d8",
        "isActive": false,
        "name": "Tasha Holder",
        "email": "tashaholder@neteria.com"
      },
      {
        "id": "5e5668f1162fa87b4e854405",
        "isActive": false,
        "name": "White Key",
        "email": "whitekey@neteria.com"
      },
      {
        "id": "5e5668f13c50e39a128d16b2",
        "isActive": true,
        "name": "Casey Wade",
        "email": "caseywade@neteria.com"
      },
      {
        "id": "5e5668f18071c2129f662550",
        "isActive": false,
        "name": "Richardson Gray",
        "email": "richardsongray@neteria.com"
      },
      {
        "id": "5e5668f1bda6fe98bfce9fff",
        "isActive": false,
        "name": "Kaye Mueller",
        "email": "kayemueller@neteria.com"
      },
      {
        "id": "5e5668f1fc1c9f92901d9cd2",
        "isActive": false,
        "name": "Ross Morin",
        "email": "rossmorin@neteria.com"
      },
      {
        "id": "5e5668f10b51b0eb60509b44",
        "isActive": true,
        "name": "Hood Flores",
        "email": "hoodflores@neteria.com"
      },
      {
        "id": "5e5668f16d5c450a684e470b",
        "isActive": true,
        "name": "Nunez Floyd",
        "email": "nunezfloyd@neteria.com"
      },
      {
        "id": "5e5668f15043f8a924596425",
        "isActive": false,
        "name": "Cheryl Perez",
        "email": "cherylperez@neteria.com"
      },
      {
        "id": "5e5668f17424c6fc1c110f6f",
        "isActive": false,
        "name": "Gonzalez Singleton",
        "email": "gonzalezsingleton@neteria.com"
      },
      {
        "id": "5e5668f12d555a12d2cc6c38",
        "isActive": false,
        "name": "Clarice Winters",
        "email": "claricewinters@neteria.com"
      },
      {
        "id": "5e5668f1e8f2ef330912fbc6",
        "isActive": false,
        "name": "Muriel Meyers",
        "email": "murielmeyers@neteria.com"
      },
      {
        "id": "5e5668f1221a41714ca583e7",
        "isActive": false,
        "name": "Madge Carpenter",
        "email": "madgecarpenter@neteria.com"
      },
      {
        "id": "5e5668f13dff6635c64f4be6",
        "isActive": true,
        "name": "Nellie Moss",
        "email": "nelliemoss@neteria.com"
      },
      {
        "id": "5e5668f1c8d85c5c90065849",
        "isActive": true,
        "name": "Dionne Rivera",
        "email": "dionnerivera@neteria.com"
      },
      {
        "id": "5e5668f1d4066a173935774d",
        "isActive": true,
        "name": "Bond Snow",
        "email": "bondsnow@neteria.com"
      },
      {
        "id": "5e5668f1c8123a33b101d2fb",
        "isActive": false,
        "name": "Duncan Jones",
        "email": "duncanjones@neteria.com"
      },
      {
        "id": "5e5668f1703fe20ddebc53df",
        "isActive": true,
        "name": "Mcgowan Austin",
        "email": "mcgowanaustin@neteria.com"
      },
      {
        "id": "5e5668f167416b2170ee49fc",
        "isActive": false,
        "name": "Alissa Ford",
        "email": "alissaford@neteria.com"
      }
    ];
    return {users};
  }
}
