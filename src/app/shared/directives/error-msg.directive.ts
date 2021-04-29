import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _message: string = 'This field is required!!';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }

  @Input() set valid(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    // if (changes.message) {
    //   const message = changes.message.currentValue;
    //   this.htmlElement.nativeElement.innerText = message;
    // }

    // if (changes.color) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log(changes);

  }

  
  ngOnInit(): void {
    // console.log(this.color);
    // console.log(this.message);
    
    this.setColor();
    this.setMessage();
    this.setStyle();
  }

  setStyle() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage() {
    this.htmlElement.nativeElement.innerText = this._message;
  }

}
