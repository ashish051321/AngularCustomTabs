import { Directive, TemplateRef, ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { PlaceHolderComponent } from './place-holder/place-holder.component';


@Directive({
  selector: '[jb-tab-label]'
})
export class JbTabLabelDirective extends CdkPortal {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    super(templateRef, viewContainerRef);

    this.viewContainerRef.createEmbeddedView(this.templateRef);

    let componentFactory =
      this.resolver.resolveComponentFactory(PlaceHolderComponent);

    let dialogComponentRef:any = this.viewContainerRef.createComponent(componentFactory);
    
    // dialogComponentRef.instance.close.subscribe(() => {
    //   dialogComponentRef.destroy();
    // });


  }
}
