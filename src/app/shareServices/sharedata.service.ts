import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  private greetMessage = new BehaviorSubject<any>('Abhay');
          currentGreetMessage = this.greetMessage.asObservable();

          isContact = new BehaviorSubject<boolean>(false);

  constructor() { }

  changeMessage(msgName: string) {
    return this.greetMessage.next(msgName);
  }
}
