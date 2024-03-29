import {
  Component,
  Input,
  DynamicComponentLoader,
  ViewContainerRef,
  ReflectiveInjector,
  OnInit
} from '@angular/core';

import {
  FORM_DIRECTIVES,
  FORM_PROVIDERS
} from '@angular/common';

import {
  RouteParams
} from '@angular/router-deprecated';

import {CalculationService} from "../../calculation/services/calculation-service";
import {InstanceService} from "../../calculation/services/instance-service";
import {LatexComponent} from '../../calculation/components/latex-component';
import createDynamicCalculation from './dynamic-calculation-cmp';

@Component({
  selector: 'dynamic-calculation-container',
  template: '<div #container></div>'
})
export class DynamicCalculationContainer implements OnInit {
  
  @Input() instance:any;
  private templateHtml;
  
  constructor(
    private loader: DynamicComponentLoader,
    private viewContainerRef: ViewContainerRef,
    private _params: RouteParams,
    private _instanceService: InstanceService
  ) { }
  
  ngOnInit() {
    this._loadTemplate();
  }
  
  private _loadTemplate() {
    this._instanceService
        .getTemplate(this.instance.template.templateUrl)
        .subscribe((template) => { 
          this.templateHtml = template; 
          
          let resolvedProviders = ReflectiveInjector.resolve([FORM_PROVIDERS, CalculationService]);
          this.loader.loadNextToLocation(
            createDynamicCalculation(this.templateHtml, this.instance, [FORM_DIRECTIVES, LatexComponent]),
            this.viewContainerRef,
            resolvedProviders
          )
        });
  }
}