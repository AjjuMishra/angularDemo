import { Component, OnInit } from "@angular/core";
import { SharedataService } from "../shareServices/sharedata.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  msgName: string;
  isContact: boolean;

  constructor(private sharedataService: SharedataService) {
    this.sharedataService.isContact.subscribe((res) => {
      this.isContact = res;
    });
  }

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
