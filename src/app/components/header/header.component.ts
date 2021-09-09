import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TubeService } from 'src/app/services/tube.service';
import { Tube } from '../../models/tube';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 videos: Tube[] = [];
 @Output() setData = new EventEmitter<any>();
  constructor(private tubeService: TubeService) {

  }

  ngOnInit(): void {
  }
  onSearch(event){
    let svl =  this.tubeService.getSearchValue();
    this.tubeService.getDataApi(svl)
        .subscribe((data:any)=>{
       for(let item of data.items){
              this.videos.push(
                {
                  title: item.snippet.title,
                  urlVideo:item.id.videoId,
                  description: item.snippet.description,
                  thumbnails: item.snippet.thumbnails.high.url
                }
              );

       }

    })
      // console.log(this.videos);
      // this.tubeService.setData(this.videos);
      // let data = this.tubeService.getData();
      // console.log(data);
      this.setData.emit(this.videos);

  }
}
