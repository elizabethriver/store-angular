import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Store - app angular';
  items = ['nicolas', 'julian', 'andres'];
  objetc = {};
  power = 10;

  addItem = () => {
    this.items.push('new item');
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
