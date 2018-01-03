import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  avar: string = "This is just a variable";
  arr = [10,20,30,40,50];
  constructor() { }

  ngOnInit() {
  }

}
