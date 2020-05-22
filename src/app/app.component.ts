import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SharedataService } from './shareServices/sharedata.service';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'fxo';
  @ViewChild(NavigationComponent, {static: false}) child: NavigationComponent;
  constructor( private sharedataService: SharedataService) {}
  ngOnInit() {}

  ngAfterViewInit() {
      console.log(this.child);
  }

  updateMsg() {
    this.sharedataService.changeMessage('Sanskar');
  }
}
