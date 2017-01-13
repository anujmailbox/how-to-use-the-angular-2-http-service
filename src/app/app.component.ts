import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  sampleData: any;
  errorMessage: any;

  constructor(private sampleService: SampleService) { }

  getSamples() {
    this.sampleService
        .getSamples()
        .subscribe(
                     samples => this.sampleData = samples,
                     error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getSamples();
  }
}
