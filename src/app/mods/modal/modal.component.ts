import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  
  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement)
  }

  onCloseClick() {
    this.close.emit();
  }
  
  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove()
  }
}
