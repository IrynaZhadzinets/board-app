import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardBackground]'
})
export class CardColorDirective implements OnInit {
  @Input('appCardBackground') dueDate : Date | string
  @Input() isDone : boolean

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const currentDate = new Date();
    const dueDate = this.dueDate ? new Date(this.dueDate) : false;

    if (dueDate) {
      const deltaDate = Math.ceil((currentDate.getTime() - dueDate.getTime()) / dayInMilliseconds);

    console.log(this.isDone);
    if (deltaDate < 3 && !this.isDone) this.renderer.setStyle(this.elementRef.nativeElement, "background", "red");
    else if (deltaDate < 7 && !this.isDone) this.renderer.setStyle(this.elementRef.nativeElement, "background", "yellow");
    else this.renderer.setStyle(this.elementRef.nativeElement, "background", "dimgray");
  }
  }
}
