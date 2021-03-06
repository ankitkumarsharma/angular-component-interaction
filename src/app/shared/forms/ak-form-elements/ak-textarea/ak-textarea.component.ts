import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ak-textarea',
  templateUrl: './ak-textarea.component.html',
  styleUrls: ['./ak-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AkTextareaComponent),
      multi: true
    }
  ]
})
export class AkTextareaComponent implements OnInit {
  onChange: any = () => { };
  onTouch: any = () => { };
  @Input('value') input!: any;
  @Input() labelName!: string;
  control!: FormControl;
  @Input() errorMessage!: string;
  error: boolean = false;
  focusinState = false;
  focusoutState = false;
  @Output() touchState = new EventEmitter();
  @Output() stateChange = new EventEmitter<string>();
  @Input() readonly: boolean = false;
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    if (this.errorMessage) {
      this.error = true;
    }
  }
  set value(val: any) {
    if(val !== undefined && this.input !== val){
      this.input = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }
  writeValue(input: string) {
    this.input = input;
    this.control = new FormControl(this.input);
    this.control.valueChanges.subscribe((value)=>{
      this.onChange(value);
    })
  }
  registerOnChange(value: any): void {
    this.onChange = value;
  }
  registerOnTouch(value: any): void {
    this.onTouch = value;
  }
  updateTouchState() {
    if (this.focusinState && this.focusoutState) {
      this.onChange(this.control.value);
      this.onTouch();
      this.touchState.emit();
    }
  }
  getLabelName() {
    if (this.labelName)
      return `${this.labelName}:`;
    else
      return '';
  }

}
