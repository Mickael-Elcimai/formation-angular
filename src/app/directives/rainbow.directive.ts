import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor(elementRef: ElementRef) {
  }

  rainbowColors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  @HostBinding('style.color') fontColor: string = this.rainbowColors[0];
  @HostBinding('style.borderColor') borderColor: string = this.rainbowColors[0];

  @HostListener('keyup') keyup() {
    this.fontColor = this.rainbowColors[Math.floor(Math.random() * 5) + 1];
    this.borderColor = this.rainbowColors[Math.floor(Math.random() * 5) + 1];
  }
}
