import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.hightlight('red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hightlight('black');
  }

  private hightlight(color: string){
    this.el.nativeElement.style.color = color;
  }

}
