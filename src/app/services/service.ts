import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
// let apiKey: String = ""  // insert your API key here

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseURL: string;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = 'http://localhost:8080/api/';
  }
  
  // getAllData() {
  //   return this.http.get(this.baseURL);
  // }

  public getAllData(){
    let endPoints="movies";

    //   this.httpClient.get(this.baseURL+endPoints).subscribe(data => {
    //   console.log(data);
    // });
    console.log(this.baseURL+endPoints);
    return this.httpClient.get(this.baseURL+endPoints);
  }

  public getDataById(){
    let id : number = 1113;
    let endPoints="movies/" + id ;
      this.httpClient.get(this.baseURL+endPoints).subscribe(data => {
      console.log(data);
    });
    //return this.httpClient.get(this.baseURL+endPoints);
  }

  public addPost(postData: Object) {
    let endPoints = "movies"
    this.httpClient.post(this.baseURL + endPoints, postData).subscribe(data => {
      console.log(data);
    });
  }

  public updatePost(updatedId : number) {

    let endPoints = "movies/" + updatedId;
    let postData : object;
    console.log(this.baseURL+endPoints);
    this.httpClient.put(this.baseURL + endPoints, postData).subscribe(data => {
      console.log(data);
    });
  }

  public deletePost(deleteId:number) {
    let endPoints = "movies/" + deleteId;
    console.log(this.baseURL+endPoints);
    this.httpClient.delete(this.baseURL + endPoints).subscribe(deleteId => {
      console.log(deleteId);
    });
  }
}


