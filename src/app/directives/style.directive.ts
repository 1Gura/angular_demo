import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input('fontWeight') fontWeight: string = 'normal';
  @HostBinding('style.color') elColor: string | null = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el)
    console.log(renderer)
  }

  @HostListener('click', ['$event']) onClick(event: Event) {

  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);

  }
}
