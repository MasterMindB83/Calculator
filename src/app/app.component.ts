import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.display = '0';
  }
  title = 'Calculator';
  display: string;
  operand: number;
  operacija: string;
  SetDisplay(text) {
    if (this.display === '0') {
      this.display = text;
    } else {
      this.display = this.display + text;
    }
  }
  SetDisplay2(text) {
      this.display = this.display + text;
  }
  CE() {
    this.display = '0';
  }
  C() {
      this.display = this.display.substring(0, this.display.length - 1);
      if (this.display === '') {
        this.display = '0';
      }
    }
    SetOperacija(operacija1) {
      this.operand = parseFloat(this.display);
      this.operacija = operacija1;
      this.display = '0';
    }
    Evaluate() {
      if (this.operacija !== '') {
        if (this.operacija === '+') {
          this.display = (this.operand + parseFloat(this.display)).toString();
        }
        if (this.operacija === '-') {
          this.display = (this.operand - parseFloat(this.display)).toString();
        }
        if (this.operacija === '*') {
          this.display = (this.operand * parseFloat(this.display)).toString();
        }
        if (this.operacija === '/') {
          this.display = (this.operand / parseFloat(this.display)).toString();
        }
        if (this.operacija === '^') {
          this.display = (Math.pow(this.operand, parseFloat(this.display))).toString();
        }
      }
    }
    XKvadrat() {
      this.display = (Math.pow(parseFloat(this.display), 2)).toString();
    }
    JedanKrozX() {
      this.display = (1 / parseFloat(this.display)).toString();
    }
    Sqrt() {
      this.display = (Math.sqrt(parseFloat(this.display))).toString();
    }
}
