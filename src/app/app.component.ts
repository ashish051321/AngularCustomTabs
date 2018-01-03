import { Component, OnInit, AfterContentInit, ContentChild, ElementRef, ViewChild, TemplateRef, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { JbtabComponent } from './jb-tabs/jbtab/jbtab.component';
import { DummyComponent } from './dummy/dummy.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = "Avara Kedavara";
  arr: [number] = [0, 220, 130, 450];
  @ViewChild('mytemp') tempRef: TemplateRef<any>;
  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;

  dummyComponentView;

  constructor(private injector: Injector,
    private r: ComponentFactoryResolver) {
  }
}//class ends
