import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private element:ElementRef) {
  }
  @HostBinding('style.backgroundColor') color = '';

  @HostListener('mouseenter')
  mouseenter(){
  this.highlighter("#EF6079");
  }
  highlighter(arg0: string) {

    this.color  = arg0
  }
  @HostListener("mouseleave")
  mouseleave(){
    this.highlighter("")
}

}
