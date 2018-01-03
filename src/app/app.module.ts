import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {JbTabsModule} from './jb-tabs/jb-tabs.module';
import { DummyComponent } from './dummy/dummy.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';


@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    DummytwoComponent
    
  ],
  imports: [
    BrowserModule,JbTabsModule
  ],
  entryComponents:[DummyComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
