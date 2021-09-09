import { Component } from '@angular/core';
import { TubeService } from '../app/services/tube.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data : any[];
  loading = false;
  constructor(private tubeService : TubeService){

  }
  setData(event){
    this.data = [];
    this.data = event;
    console.log(this.data);

    // this.loading = true;
  }
}
