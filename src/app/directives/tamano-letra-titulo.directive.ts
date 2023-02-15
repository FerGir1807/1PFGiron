import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTamanoLetraTitulo]'
})
export class TamanoLetraTituloDirective implements OnInit{

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20px');

  }
}
