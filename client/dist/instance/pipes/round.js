"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,c=3>n?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var f=e.length-1;f>=0;f--)(a=e[f])&&(c=(3>n?a(c):n>3?a(t,r,c):a(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},core_1=require("@angular/core"),Round=function(){function e(){}return e.prototype.transform=function(e,t){return e.toFixed(t)},e=__decorate([core_1.Pipe({name:"round"}),__metadata("design:paramtypes",[])],e)}();Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=Round;