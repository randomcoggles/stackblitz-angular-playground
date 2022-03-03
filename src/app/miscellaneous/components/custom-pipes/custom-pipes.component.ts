import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent {

  date = new Date();
  
  text = 'Hello World!';

  changeText(){
    this.text = 'Hello Custom Pipes!';
  }


}
