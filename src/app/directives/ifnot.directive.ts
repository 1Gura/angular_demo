import {
  Directive, Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: '[appIfNot]'
})

export class IfnotDirective {
  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
      //скрыть
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }
}
