import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string; 
  @Output() btnClick = new EventEmitter()

  constructor() {
    this.text = "Hello"
    this.color = "blue"
  }

  ngOnInit() {

  }

  onClick() {
    console.log("on click")
    this.btnClick.emit();
  }
}
