import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:[DataService]
})
export class DisplayComponent implements OnInit {
   public currentRecords : any;
   pageTitle = 'Events';
   loading: boolean;
   //isDataAvailable:boolean = false;
   private tweet_content: string;
   public isDelete = false;

  constructor(private dataService : DataService, ) { 
    this.loading = true;

    this.dataService.getAllData().subscribe(
      (data: any) => {
        console.log("current records : ", data);
        this.currentRecords = data;
      }
    );
  }

  ngOnInit(): void {
    //this.title.setTitle(this.pageTitle);
  }
 
  deleteUser(deleteId:number): void {
    this.dataService.deletePost(deleteId);
  };

  editUser(udapteId:number): void {
    this.dataService.updatePost(udapteId);
  };

  addUser(): void {
    this.dataService.addPost(this.tweet_content);
  };
   




  // public addPost(): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }


}
