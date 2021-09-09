import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TubeService } from '../../../services/tube.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @ViewChild('input')
  inputElement!: ElementRef;
  @Output() searchValue = new EventEmitter<any>();
  constructor(private tubeService: TubeService) { }
  ngOnInit(): void {
  }
  onEnter(value:string): void{
    this.tubeService.addSearch(value);
    let search = this.tubeService.getSearchValue();
    this.searchValue.emit(value);
  }
}
