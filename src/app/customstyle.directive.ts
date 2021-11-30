import { Directive,ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

 
  @Input() color:any;

  constructor(private el:ElementRef,private renderer: Renderer2) { 
    // renderer.setStyle(el.nativeElement,'backgroundColor','gray')
    
  }
  @HostListener ('mouseover') onMouseOver(){
    this.highlight(this.color);
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','red')
  }

  @HostListener('mouseout') onMouseOut(){
    this.highlight('');
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','white')
  }

  private highlight(color: string) {

    this.el.nativeElement.style.backgroundColor = color;
  }
  



}
