import {Input, Component, OnInit, OnChanges, SimpleChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { JbTabLabelDirective } from '../jb-tab-label.directive';

@Component({
  selector: 'jb-tab',
  templateUrl: './jbtab.component.html',
  styleUrls: ['./jbtab.component.css']
})
export class JbtabComponent {

  constructor() { }

  // @ViewChild(JbTabLabelDirective) jbTabLabel;
  
  ngOnInit() {
    
  }

  
  
}
