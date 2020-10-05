import { Component, OnInit } from '@angular/core';    
import { EventEmitterService } from '../event-emitter.service';    
    
@Component({    
  selector: 'app-first',    
  templateUrl: './first.component.html',    
  styleUrls: ['./first.component.css']    
})    
export class FirstComponent implements OnInit {    
    
  constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }    
    
  ngOnInit() {    
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.firstRomyFunction();    
      });    
    }    
  }    
    
  firstRomyFunction() {    
    alert( 'Hello ' + '\nWelcome to Romy \nFunction in First romy Component');    
  }    
}    