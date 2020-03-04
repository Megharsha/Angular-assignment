import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'demo-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(private _listService: ListService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }
   
  getAllCharacters(){
    this._listService.getCharacters().subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
