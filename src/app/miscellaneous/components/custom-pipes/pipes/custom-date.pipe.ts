import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: Date): string  {
    console.log('Hit pipe!!!')
    return new Date().toLocaleString();
  }

}
