import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JbtabsComponent } from './jbtabs/jbtabs.component';
import { JbtabComponent } from './jbtab/jbtab.component';
import { JbTabLabelDirective } from './jb-tab-label.directive';
import { PlaceHolderComponent } from './place-holder/place-holder.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JbtabsComponent, JbtabComponent, JbTabLabelDirective, PlaceHolderComponent],
  entryComponents: [PlaceHolderComponent],
  exports:[JbtabsComponent,JbtabComponent,JbTabLabelDirective]
})
export class JbTabsModule { }
