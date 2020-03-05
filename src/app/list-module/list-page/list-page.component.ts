import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'demo-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  allCharacters:any[];
  sortOrder: string;
  searchName: string;
  constructor(private _listService: ListService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }
   
  getAllCharacters(){
    this._listService.getCharacters().subscribe(
      (res:any)=>{
        console.log(res)
        this.allCharacters = res.results;
      },
      err=>{
        console.log(err)
      }
    )
  }
  
}
