import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ListService{
    constructor(private _http: HttpClient){

    }
    getCharacters(){
        return this._http.get('https://rickandmortyapi.com/api/character')
    }
}
