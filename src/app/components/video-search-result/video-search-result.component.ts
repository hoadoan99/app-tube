import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Tube } from 'src/app/models/tube';

@Component({
  selector: 'app-video-search-result',
  templateUrl: './video-search-result.component.html',
  styleUrls: ['./video-search-result.component.css']
})
export class VideoSearchResultComponent implements OnInit {
    @Input() data:Tube[];
    items : Tube[];
  constructor() { }

  ngOnInit(): void {
    this.items = this.data.slice(0 , 5);
  }
  // pagination
 // MatPaginator Inputs
 length = 100;
 pageSize = 10;
 pageSizeOptions: number[] = [5, 10, 25, 100];

 // MatPaginator Output
 pageEvent: PageEvent;
//  setPageSizeOptions(setPageSizeOptionsInput: string) {
//    if (setPageSizeOptionsInput) {
//      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
//    }

//  }
 onChange(event){

 }
}
