import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

import { TestService } from './shared/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private api_url: string = environment.API_URL;
  response: any;

  constructor(private testService: TestService) {
    console.log(this.api_url);
  }
  title = 'Karla Read';

  ngOnInit() {
    this.getGreeting();
  }

  getGreeting() {
    this.testService.getGreeting().subscribe(
      data => { this.response = data; console.log(data); },
      err => console.error(err),
      () => console.log('done loading greeting')
    );
  }

}
