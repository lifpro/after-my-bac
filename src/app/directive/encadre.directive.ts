import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEncadre]'
})
export class EncadreDirective {

  constructor(public e: ElementRef, public r: Renderer2) {
    this.r.setStyle(this.e.nativeElement, 'border', '2px solid #FFF');

  }

}
