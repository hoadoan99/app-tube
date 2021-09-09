import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TubeService {
  data: any[];
  searchValue: string;
  constructor(private http:HttpClient) { }
    // call api
getDataApi(name:string){
  // return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyDOwINZY5x8U9DZvtsSyKZWE_jfgDPya_c&type=video&maxResults=50`);
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyAEk57ceq0Je7Y-9urYGiItuNdyfLpCjpg&type=video&maxResults=50`);

}
addSearch(value:string){
    this.searchValue = value;
}
getSearchValue(){
  return this.searchValue;
}

// setData(items: any[]){
//       for(let i = 0 ;  i< items.length ; i++){
//           this.data.push(items[i]);
//       }

// }
// getData(){
//     return this.data;
// }

}
