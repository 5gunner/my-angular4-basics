import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPaint]'
})
export class PaintDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#e23636');
  }
}
