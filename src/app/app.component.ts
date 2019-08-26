import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showNews: boolean;
  showStats: boolean;
  showItemShop: boolean = false;
  response: any;
  responseUserId: any;
  responseStats: any;
  responseItemShop: any; 

  constructor(private http: HttpClient) {
    
  }
  
  show_News() {
    this.showNews = true;
    this.showItemShop = false;
    this.showStats = false;
  }

  show_Stats() {
    this.showNews = false;
    this.showItemShop = false;
    this.showStats = true;
  }

  show_ItemShop() {
    this.showNews = false;
    this.showItemShop = true;
    this.showStats = false;
  }


  ngOnInit() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', '4b351fadd63fbfa34b559e5e329a1217')
    }

    this.http.get("https://fortnite-api.theapinetwork.com/br_motd/get", header)
    .subscribe((response1) => {
      this.response = response1;
      console.log(this.response);
    })

    this.http.get("https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=54d6bb5f40f244729be68a81f852299b", header)
    .subscribe((response3) => {
      this.responseStats = response3;
      console.log(this.responseStats);
    })

    this.http.get("https://fortnite-api.theapinetwork.com/store/get", header)
    .subscribe((response) => {
      this.responseItemShop = response;
      console.log(this.responseItemShop);
    })
  }

  
}
