import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, ElementRef, Renderer, Input, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { JbtabComponent } from '../jbtab/jbtab.component';

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs

@Component({
  selector: 'jb-tab-group',
  templateUrl: './jbtabs.component.html',
  styleUrls: ['./jbtabs.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush  ----- very useful as well as dangerous property ! :P
})
export class JbtabsComponent {

  constructor(private elt: ElementRef, private renderer: Renderer) {

  }

  mytabs: any;
  mycontent: any; // [{allTabs:{label:"labelname",innerHTML:"some html code"}];
  activeTab: any;

  //------------------------------------------------------------------
  returnMyLabel(nodeList) {
    var str = "";

    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].nodeName == 'APP-PLACE-HOLDER') { break; }
      else {
        if (nodeList[i].nodeName == "#comment") { continue; }
        else if (nodeList[i].nodeName == "#text") { str += nodeList[i].textContent; }
        else {
          str += nodeList[i].outerHTML;
        }
      }

    }
    console.log(str);
    return str;
  }

  giveMeRefinedNodes(x) {
    var nodeList = x.childNodes;
    while (nodeList[0].nodeName != 'APP-PLACE-HOLDER') {
      x.removeChild(nodeList[0]);}
    return x;
  }


  ngAfterViewInit() {

    setTimeout(() => {
      console.log("inside ngAfterViewInit");
      console.log(this.elt.nativeElement.querySelectorAll('jb-tab'));
      this.mytabs = this.elt.nativeElement.querySelectorAll('jb-tab');

      this.mycontent = [];
      this.mytabs.forEach((x) => {
        let dObj = { label: "", content: "" };
        if (!x.getAttribute("label")) {
          console.log(x.childNodes);
          dObj.label = this.returnMyLabel(x.childNodes);
          this.giveMeRefinedNodes(x);
          dObj.content = x.outerHTML;
          // dObj.content = x.outerHTML;
        }
        else {
          dObj.label = x.getAttribute("label");
          dObj.content = x.outerHTML;
        }

        this.mycontent.push(dObj);
      });


      // console.log(this.mycontent);
      this.activeTab = this.mycontent[0];
      this.setTabContent(this.activeTab);

    }, 0);
  }//ngAfterViewInit ends

  //------------------------------------------------------------------

  setTabContent(activetab) {
    console.log("----setTabContent called----->");
    // console.log(this.elt.nativeElement.querySelector(".tabcontent"));
    this.elt.nativeElement.querySelector(".tabcontent").innerHTML = activetab.content;
  }

  //------------------------------------------------------------------

  changeTab(item) {
    this.activeTab = item;
    this.setTabContent(item);
    // console.log(this.elt.nativeElement.querySelector('.tab').offsetWidth);
    // var availableTabWidth = this.elt.nativeElement.querySelector('.tab').offsetWidth;
    // // calculate the width occupied by tablinks
    // var totalTabWidth = 0;
    // var allTabs = this.elt.nativeElement.querySelectorAll('.tablinks');
    // allTabs.forEach((x) => {
    //   totalTabWidth += x.offsetWidth;
    // });
    // if (availableTabWidth < totalTabWidth) {
    //   console.log("There is an overflow");
    // }
    // else {
    //   console.log("No Overflow");
    // }
  }

  //------------------------------------------------------------------
}
