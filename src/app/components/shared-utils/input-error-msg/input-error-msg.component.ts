import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-error-msg',
  templateUrl: './input-error-msg.component.html',
  styleUrls: ['./input-error-msg.component.css']
})
export class InputErrorMsgComponent implements OnInit {

  @Input() msgErro: string;
  @Input() viewErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
