import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNoRendu]'
})
export class NoRenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.border = '1px dashed red';
    el.nativeElement.style.backgroundColor = 'red';
  }

}
