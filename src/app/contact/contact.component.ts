import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedataService } from '../shareServices/sharedata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  isContact: boolean;

  constructor( private sharedataService: SharedataService) { }

  ngOnInit() {
    this.sharedataService.isContact.next(true);
  }
  ngOnDestroy() {
    this.sharedataService.isContact.next(false)
  }

}
