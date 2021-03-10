import { Component, OnInit, } from '@angular/core';
import { TestService} from '../test.service';
import {Subscription} from 'rxjs'



@Component({
  selector: 'app-room',
  templateUrl:'./room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

click:Subscription

  count :boolean=false;
 
  increment(){
    
    this.count
    this.count=!this.count;

  }


  constructor(private Ts:TestService ) { 
    

    this.click=this.Ts.getMessage().subscribe(()=>{
      this.increment();
    })
  }

  ngOnInit(): void {

   
  }

}
