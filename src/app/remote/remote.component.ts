import { Component,  } from '@angular/core';
import { TestService} from '../test.service'


@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent  {
 

   status:boolean=false;

  constructor(private Ts:TestService) { }

  ngOnInit(): void {
  }


  clickme(){
    this.Ts.setMessage();
    this.status=!this.status;
  }
}
