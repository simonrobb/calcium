"use strict";var __decorate=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=3>r?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(3>r?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},core_1=require("@angular/core"),LatexComponent=function(){function e(e){this._elementRef=e,this._mutationObserver=new MutationObserver(this.onContentChanged.bind(this))}return e.prototype.ngOnInit=function(){this._mutationObserver.observe(this._elementRef.nativeElement.children[0],{childList:!0,characterData:!0,subtree:!0})},e.prototype.onContentChanged=function(e){var t=e[0].target.data,n="$"+t+"$",a=document.createElement("SPAN");a.innerHTML=n,this._latexEl?this._elementRef.nativeElement.replaceChild(a,this._latexEl):this._elementRef.nativeElement.appendChild(a),this._latexEl=a,MathJax.Hub.Typeset(this._latexEl)},e=__decorate([core_1.Component({selector:"latex",template:'<div style="display:none"><ng-content></ng-content></div>'}),__metadata("design:paramtypes",[core_1.ElementRef])],e)}();exports.LatexComponent=LatexComponent;