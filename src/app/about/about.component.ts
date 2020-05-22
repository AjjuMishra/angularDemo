import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../shareServices/sharedata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  msgName: string;

  constructor(private sharedataService: SharedataService) { }

  ngOnInit() {
   this.sharedataService.currentGreetMessage.subscribe(
      (res) => {
        this.msgName = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
