import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    /* this._rederer2.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'orange'
    );*/
    this.backgroundColor = 'orange';
  }
  @HostListener('mouseleave') onMouseLeave() {
    /*this._rederer2.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor!: string;
  // ou
  private backgroundColor!: string;
  @HostBinding('style.backgroundColor') get setColor() {
    // codigo extra;
    return this.backgroundColor;
  }

  constructor() //private _elementRef: ElementRef, private _rederer2: Renderer2
  {}
}
