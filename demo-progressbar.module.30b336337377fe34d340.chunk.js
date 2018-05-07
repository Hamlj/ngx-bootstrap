webpackJsonp(["demo-progressbar.module"],{QaWk:function(n,l){n.exports="import { Component } from '@angular/core';\nimport { ProgressbarConfig } from 'ngx-bootstrap/progressbar';\n\n// such override allows to keep some initial values\n\nexport function getProgressbarConfig(): ProgressbarConfig {\n  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150 });\n}\n\n@Component({\n  selector: 'demo-progressbar-config',\n  templateUrl: './config.html',\n  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]\n})\nexport class DemoProgressbarConfigComponent {}\n"},cfRj:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-progressbar-stacked',\n  templateUrl: './stacked.html'\n})\nexport class DemoProgressbarStackedComponent {\n  type: string;\n  stacked: any[] = [];\n\n  constructor() {\n    this.randomStacked();\n  }\n\n  randomStacked(): void {\n    let types = ['success', 'info', 'warning', 'danger'];\n\n    this.stacked = [];\n    let n = Math.floor(Math.random() * 4 + 1);\n    for (let i = 0; i < n; i++) {\n      let index = Math.floor(Math.random() * 4);\n      let value = Math.floor(Math.random() * 27 + 3);\n      this.stacked.push({\n        value,\n        type: types[index],\n        label: value + ' %'\n      });\n    }\n  }\n}\n"},eV2J:function(n,l){n.exports='<div class="row">\n  <div class="col-sm-4">\n    <div class="mb-2">\n      <progressbar [value]="55"></progressbar>\n    </div>\n  </div>\n  <div class="col-sm-4">\n    <div class="mb-2">\n      <progressbar [value]="22" type="warning" [striped]="true">22%</progressbar>\n    </div>\n  </div>\n  <div class="col-sm-4">\n    <div class="mb-2">\n      <progressbar max="200" [value]="166" type="danger" [striped]="true" [animate]="true"><i>166 / 200</i></progressbar>\n    </div>\n  </div>\n</div>\n'},hWO4:function(n,l){n.exports='<div class="row">\n  <div class="col-lg-12">\n    <div class="mb-3">\n      <progressbar class="progress" [value]="stacked" [max]="100"></progressbar>\n    </div>\n  </div>\n  <div class="col-lg-12">\n    <button type="button" class="btn btn-sm btn-primary" (click)="randomStacked()">Randomize</button>\n  </div>\n</div>\n'},heTW:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("3j3K"),r=function(){return function(){}}(),a=e("2rQb"),u=e("dGTz"),s=e("Eg9J"),o=e("q/YI"),i=e("vPBN"),c=e("6m1h"),p=e("xweS"),m=e("LSm8"),_=e("RFL4"),d=e("0T8C"),g=e("zhfR"),b=function(){return function(){}}(),f=function(){function n(){this.max=200,this.random()}return n.prototype.random=function(){var n,l=Math.floor(100*Math.random()+1);n=l<25?"success":l<50?"info":l<75?"warning":"danger",this.dynamic=l,this.type=n},n.ctorParameters=function(){return[]},n}(),v=function(){function n(){this.stacked=[],this.randomStacked()}return n.prototype.randomStacked=function(){var n=["success","info","warning","danger"];this.stacked=[];for(var l=Math.floor(4*Math.random()+1),e=0;e<l;e++){var t=Math.floor(4*Math.random()),r=Math.floor(27*Math.random()+3);this.stacked.push({value:r,type:n[t],label:r+" %"})}},n.ctorParameters=function(){return[]},n}(),y=function(){function n(){this.animate=!1,this.max=100}return n.decorators=[{type:t.w}],n.ctorParameters=function(){return[]},n}(),h=function(){function n(n){this.isStacked=!1,this.addClass=!0,this.bars=[],this._max=100,Object.assign(this,n)}return Object.defineProperty(n.prototype,"value",{set:function(n){this.isStacked=Array.isArray(n),this._value=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBs3",{get:function(){return Object(g.c)()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"max",{get:function(){return this._max},set:function(n){this._max=n,this.bars.forEach(function(n){n.recalculatePercentage()})},enumerable:!0,configurable:!0}),n.prototype.addBar=function(n){n.animate=this.animate,n.striped=this.striped,this.bars.push(n)},n.prototype.removeBar=function(n){this.bars.splice(this.bars.indexOf(n),1)},n.decorators=[{type:t.l,args:[{selector:"progressbar",template:'<bar [type]="type" [value]="_value" *ngIf="!isStacked"> <ng-content></ng-content> </bar> <ng-template [ngIf]="isStacked"> <bar *ngFor="let item of _value" [type]="item.type" [value]="item.value">{{ item.label }}</bar> </ng-template> ',styles:["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]}]}],n.ctorParameters=function(){return[{type:y}]},n.propDecorators={animate:[{type:t.z}],striped:[{type:t.z}],type:[{type:t.z}],value:[{type:t.z}],max:[{type:t.t,args:["attr.max"]},{type:t.z}],addClass:[{type:t.t,args:["class.progress"]}]},n}(),x=e("c9nv"),k=function(){function n(n){this.percent=0,this.progress=n}return Object.defineProperty(n.prototype,"value",{get:function(){return this._value},set:function(n){(n||0===n)&&(this._value=n,this.recalculatePercentage())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"setBarWidth",{get:function(){return this.recalculatePercentage(),this.percent},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBs3",{get:function(){return Object(x.a)()},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.progress.addBar(this)},n.prototype.ngOnDestroy=function(){this.progress.removeBar(this)},n.prototype.recalculatePercentage=function(){this.percent=+(this.value/this.progress.max*100).toFixed(2);var n=this.progress.bars.reduce(function(n,l){return n+l.percent},0);n>100&&(this.percent-=n-100)},n.decorators=[{type:t.l,args:[{selector:"bar",template:"<ng-content></ng-content> ",host:{role:"progressbar","aria-valuemin":"0","[class]":'"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',"[class.progress-bar-animated]":"!isBs3 && animate","[class.progress-bar-striped]":"striped","[class.active]":"isBs3 && animate","[attr.aria-valuenow]":"value","[attr.aria-valuetext]":'percent ? percent.toFixed(0) + "%" : ""',"[attr.aria-valuemax]":"max","[style.height.%]":'"100"'}}]}],n.ctorParameters=function(){return[{type:h,decorators:[{type:t.s}]}]},n.propDecorators={type:[{type:t.z}],value:[{type:t.z}],setBarWidth:[{type:t.t,args:["style.width.%"]}]},n}(),C=e("2Je8"),P=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[y]}},n.decorators=[{type:t.D,args:[{imports:[C.c],declarations:[k,h],exports:[k,h]}]}],n.ctorParameters=function(){return[]},n}();function w(){return Object.assign(new y,{animate:!0,striped:!0,max:150})}var M=function(){return function(){}}(),j=e("h7ch"),O=e("I5Bp"),B=e("89Xz"),z=e("mHEN"),S=[{name:"Usage",anchor:"usage",outlet:j.a,content:{doc:e("kh1e")}},{name:"Examples",anchor:"examples",outlet:O.a,content:[{title:"Static",anchor:"bs3-static",component:e("kzV/"),html:e("eV2J"),outlet:b},{title:"Dynamic",anchor:"bs3-dynamic",component:e("y23P"),html:e("mVrM"),outlet:f},{title:"Stacked",anchor:"bs3-stacked",component:e("cfRj"),html:e("hWO4"),outlet:v},{title:"Configuring defaults",anchor:"bs3-config",component:e("QaWk"),html:e("vD8V"),outlet:M}]},{name:"API Reference",anchor:"api-reference",outlet:B.a,content:[{title:"ProgressbarComponent",anchor:"progressbar-component",outlet:z.b},{title:"ProgressbarConfig",anchor:"progress-config",outlet:z.c}]}],D=e("bgXz"),R=function(){function n(n){this.injector=n,this.name="Progressbar",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/progressbar",this.componentContent=S,this._injectors=new Map}return n.prototype.sectionInjections=function(n){if(this._injectors.has(n))return this._injectors.get(n);var l=t.O.resolveAndCreate([{provide:D.a,useValue:n}],this.injector);return this._injectors.set(n,l),l},Object.defineProperty(n.prototype,"isBs3",{get:function(){return"undefined"!=typeof PR&&setTimeout(function(){return PR.prettyPrint()},10),Object(g.c)()},enumerable:!0,configurable:!0}),n.ctorParameters=function(){return[{type:t.y}]},n}(),F=t._19({encapsulation:2,styles:[],data:{}});function I(n){return t._45(2,[(n()(),t._22(0,null,null,8,"demo-section",[],null,null,null,p.b,p.a)),t._20(49152,null,0,m.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(n()(),t._43(0,["\n  "])),(n()(),t._22(0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t._43(null,["Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."])),(n()(),t._43(0,["\n\n  "])),(n()(),t._22(0,null,0,1,"docs-section",[],null,null,null,_.b,_.a)),t._20(49152,null,0,d.a,[t.y],{content:[0,"content"]},null),(n()(),t._43(0,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){var e=l.component;n(l,1,0,e.name,e.src,e.componentContent),n(l,7,0,e.componentContent)},null)}var N=t._17("progressbar-section",R,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"progressbar-section",[],null,null,null,I,F)),t._20(49152,null,0,R,[t.y],null,null)],null,null)},{},{},[]),W=t._19({encapsulation:2,styles:[],data:{}});function V(n){return t._45(0,[t._34(null,0),(n()(),t._43(null,[" "]))],null,null)}t._17("bar",k,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"bar",[["aria-valuemin","0"],["role","progressbar"]],[[8,"className",0],[2,"progress-bar-animated",null],[2,"progress-bar-striped",null],[2,"active",null],[1,"aria-valuenow",0],[1,"aria-valuetext",0],[1,"aria-valuemax",0],[4,"height","%"],[4,"width","%"]],null,null,V,W)),t._20(245760,null,0,k,[h],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,"progress-bar "+(t._35(l,1).type?"progress-bar-"+t._35(l,1).type+" bg-"+t._35(l,1).type:""),!t._35(l,1).isBs3&&t._35(l,1).animate,t._35(l,1).striped,t._35(l,1).isBs3&&t._35(l,1).animate,t._35(l,1).value,t._35(l,1).percent?t._35(l,1).percent.toFixed(0)+"%":"",t._35(l,1).max,"100",t._35(l,1).setBarWidth)})},{type:"type",value:"value"},{},["*"]);var E=t._19({encapsulation:0,styles:["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"],data:{}});function A(n){return t._45(0,[(n()(),t._22(0,null,null,4,"bar",[["aria-valuemin","0"],["role","progressbar"]],[[8,"className",0],[2,"progress-bar-animated",null],[2,"progress-bar-striped",null],[2,"active",null],[1,"aria-valuenow",0],[1,"aria-valuetext",0],[1,"aria-valuemax",0],[4,"height","%"],[4,"width","%"]],null,null,V,W)),t._20(245760,null,0,k,[h],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._43(0,[" "])),t._34(0,0),(n()(),t._43(0,[" "]))],function(n,l){var e=l.component;n(l,1,0,e.type,e._value)},function(n,l){n(l,0,0,"progress-bar "+(t._35(l,1).type?"progress-bar-"+t._35(l,1).type+" bg-"+t._35(l,1).type:""),!t._35(l,1).isBs3&&t._35(l,1).animate,t._35(l,1).striped,t._35(l,1).isBs3&&t._35(l,1).animate,t._35(l,1).value,t._35(l,1).percent?t._35(l,1).percent.toFixed(0)+"%":"",t._35(l,1).max,"100",t._35(l,1).setBarWidth)})}function J(n){return t._45(0,[(n()(),t._22(0,null,null,2,"bar",[["aria-valuemin","0"],["role","progressbar"]],[[8,"className",0],[2,"progress-bar-animated",null],[2,"progress-bar-striped",null],[2,"active",null],[1,"aria-valuenow",0],[1,"aria-valuetext",0],[1,"aria-valuemax",0],[4,"height","%"],[4,"width","%"]],null,null,V,W)),t._20(245760,null,0,k,[h],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._43(0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.type,l.context.$implicit.value)},function(n,l){n(l,0,0,"progress-bar "+(t._35(l,1).type?"progress-bar-"+t._35(l,1).type+" bg-"+t._35(l,1).type:""),!t._35(l,1).isBs3&&t._35(l,1).animate,t._35(l,1).striped,t._35(l,1).isBs3&&t._35(l,1).animate,t._35(l,1).value,t._35(l,1).percent?t._35(l,1).percent.toFixed(0)+"%":"",t._35(l,1).max,"100",t._35(l,1).setBarWidth),n(l,2,0,l.context.$implicit.label)})}function U(n){return t._45(0,[(n()(),t._43(null,[" "])),(n()(),t._16(16777216,null,null,1,null,J)),t._20(802816,null,0,C.m,[t._4,t.Z,t.A],{ngForOf:[0,"ngForOf"]},null),(n()(),t._43(null,[" "]))],function(n,l){n(l,2,0,l.component._value)},null)}function T(n){return t._45(0,[(n()(),t._16(16777216,null,null,1,null,A)),t._20(16384,null,0,C.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(null,[" "])),(n()(),t._16(16777216,null,null,1,null,U)),t._20(16384,null,0,C.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(null,[" "]))],function(n,l){var e=l.component;n(l,1,0,!e.isStacked),n(l,4,0,e.isStacked)},null)}t._17("progressbar",h,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"progressbar",[],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],null,null)],null,function(n,l){n(l,0,0,t._35(l,1).max,t._35(l,1).addClass)})},{animate:"animate",striped:"striped",type:"type",value:"value",max:"max"},{},["*"]);var Z=t._19({encapsulation:2,styles:[],data:{}});function q(n){return t._45(0,[(n()(),t._22(0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,7,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,4,"div",[["class","mb-2"]],null,null,null,null,null)),(n()(),t._43(null,["\n      "])),(n()(),t._22(0,null,null,1,"progressbar",[],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{value:[0,"value"]},null),(n()(),t._43(null,["\n    "])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,8,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,5,"div",[["class","mb-2"]],null,null,null,null,null)),(n()(),t._43(null,["\n      "])),(n()(),t._22(0,null,null,2,"progressbar",[["type","warning"]],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{striped:[0,"striped"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._43(0,["22%"])),(n()(),t._43(null,["\n    "])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,9,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,6,"div",[["class","mb-2"]],null,null,null,null,null)),(n()(),t._43(null,["\n      "])),(n()(),t._22(0,null,null,3,"progressbar",[["max","200"],["type","danger"]],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{animate:[0,"animate"],striped:[1,"striped"],type:[2,"type"],value:[3,"value"],max:[4,"max"]},null),(n()(),t._22(0,null,0,1,"i",[],null,null,null,null,null)),(n()(),t._43(null,["166 / 200"])),(n()(),t._43(null,["\n    "])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,7,0,55);n(l,16,0,!0,"warning",22);n(l,26,0,!0,!0,"danger",166,"200")},function(n,l){n(l,6,0,t._35(l,7).max,t._35(l,7).addClass),n(l,15,0,t._35(l,16).max,t._35(l,16).addClass),n(l,25,0,t._35(l,26).max,t._35(l,26).addClass)})}var Q=t._17("demo-progressbar-static",b,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-progressbar-static",[],null,null,null,q,Z)),t._20(49152,null,0,b,[],null,null)],null,null)},{},{},[]),X=t._19({encapsulation:2,styles:[],data:{}});function $(n){return t._45(0,[(n()(),t._22(0,null,null,12,"div",[["class","mb-2"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,5,"progressbar",[],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{value:[0,"value"],max:[1,"max"]},null),(n()(),t._43(0,["\n    "])),(n()(),t._22(0,null,0,1,"span",[["class","text-nowrap"]],null,null,null,null,null)),(n()(),t._43(null,[""," / ",""])),(n()(),t._43(0,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,2,"small",[],null,null,null,null,null)),(n()(),t._22(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),t._43(null,["No animation"])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,10,"div",[["class","mb-2"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,3,"progressbar",[["type","success"]],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{animate:[0,"animate"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._22(0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t._43(null,["","%"])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,2,"small",[],null,null,null,null,null)),(n()(),t._22(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),t._43(null,["Object (changes type based on value)"])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,5,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,2,"progressbar",[["class","progress-striped active"]],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._43(0,["",""])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,1,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0,r=n.component;"click"===l&&(t=!1!==r.random()&&t);return t},null,null)),(n()(),t._43(null,["Randomize"])),(n()(),t._43(null,["\n"]))],function(n,l){var e=l.component;n(l,3,0,e.dynamic,e.max);n(l,17,0,!1,"success",e.dynamic),n(l,29,0,e.type,e.dynamic)},function(n,l){var e=l.component;n(l,2,0,t._35(l,3).max,t._35(l,3).addClass),n(l,6,0,e.dynamic,e.max),n(l,16,0,t._35(l,17).max,t._35(l,17).addClass),n(l,19,0,e.dynamic),n(l,28,0,t._35(l,29).max,t._35(l,29).addClass),n(l,30,0,e.type)})}var G=t._17("demo-progressbar-dynamic",f,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-progressbar-dynamic",[],null,null,null,$,X)),t._20(49152,null,0,f,[],null,null)],null,null)},{},{},[]),L=t._19({encapsulation:2,styles:[],data:{}});function Y(n){return t._45(0,[(n()(),t._22(0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,7,"div",[["class","col-lg-12"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,4,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),t._43(null,["\n      "])),(n()(),t._22(0,null,null,1,"progressbar",[["class","progress"]],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{value:[0,"value"],max:[1,"max"]},null),(n()(),t._43(null,["\n    "])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,4,"div",[["class","col-lg-12"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,1,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0,r=n.component;"click"===l&&(t=!1!==r.randomStacked()&&t);return t},null,null)),(n()(),t._43(null,["Randomize"])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,7,0,l.component.stacked,100)},function(n,l){n(l,6,0,t._35(l,7).max,t._35(l,7).addClass)})}var H=t._17("demo-progressbar-stacked",v,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-progressbar-stacked",[],null,null,null,Y,L)),t._20(49152,null,0,v,[],null,null)],null,null)},{},{},[]),K=t._19({encapsulation:2,styles:[],data:{}});function nn(n){return t._45(0,[(n()(),t._22(0,null,null,6,"div",[["class","mb-2"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,3,"progressbar",[["class","progress-striped active"],["type","danger"]],[[1,"max",0],[2,"progress",null]],null,null,T,E)),t._20(49152,null,0,h,[y],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._22(0,null,0,1,"i",[],null,null,null,null,null)),(n()(),t._43(null,["136 / 150"])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,3,0,"danger",136)},function(n,l){n(l,2,0,t._35(l,3).max,t._35(l,3).addClass)})}var ln=t._17("demo-progressbar-config",M,function(n){return t._45(0,[(n()(),t._22(0,null,null,2,"demo-progressbar-config",[],null,null,null,nn,K)),t._40(5120,null,y,w,[]),t._20(49152,null,0,M,[],null,null)],null,null)},{},{},[]),en=e("NVOs"),tn=e("P73M"),rn=e("5oXY"),an=e("ElZy"),un=e("CCBf"),sn=e("FFde"),on=e("lCeh");e.d(l,"DemoProgressbarModuleNgFactory",function(){return cn});var cn=t._18(r,[],function(n){return t._32([t._33(512,t.m,t._14,[[8,[a.a,u.a,s.a,o.a,i.a,c.a,N,Q,G,H,ln]],[3,t.m],t.G]),t._33(4608,C.p,C.o,[t.C]),t._33(4608,en.z,en.z,[]),t._33(4608,tn.a,tn.a,[C.i,rn.n]),t._33(4608,an.a,an.a,[]),t._33(4608,D.a,D.a,[]),t._33(4608,y,y,[]),t._33(512,C.c,C.c,[]),t._33(512,en.w,en.w,[]),t._33(512,en.k,en.k,[]),t._33(512,un.a,un.a,[]),t._33(512,z.d,z.d,[]),t._33(512,rn.q,rn.q,[[2,rn.v],[2,rn.n]]),t._33(512,O.b,O.b,[]),t._33(512,B.b,B.b,[]),t._33(512,j.b,j.b,[]),t._33(512,sn.a,sn.a,[]),t._33(512,on.a,on.a,[]),t._33(512,P,P,[]),t._33(512,r,r,[]),t._33(1024,rn.l,function(){return[[{path:"",component:R}]]},[])])})},kh1e:function(n,l){n.exports="// RECOMMENDED (doesn't work with system.js)\nimport { ProgressbarModule } from 'ngx-bootstrap/progressbar';\n// or\nimport { ProgressbarModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [ProgressbarModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},"kzV/":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-progressbar-static',\n  templateUrl: './static.html'\n})\nexport class DemoProgressbarStaticComponent {}\n"},mVrM:function(n,l){n.exports='<div class="mb-2">\n  <progressbar [max]="max" [value]="dynamic">\n    <span class="text-nowrap">{{dynamic}} / {{max}}</span>\n  </progressbar>\n  <small><em>No animation</em></small>\n</div>\n<div class="mb-2">\n  <progressbar [animate]="false" [value]="dynamic" type="success"><b>{{dynamic}}%</b></progressbar>\n  <small><em>Object (changes type based on value)</em></small>\n</div>\n<div class="mb-3">\n  <progressbar class="progress-striped active" [value]="dynamic" [type]="type">{{type}}</progressbar>\n</div>\n<button type="button" class="btn btn-sm btn-primary" (click)="random()">Randomize</button>\n'},vD8V:function(n,l){n.exports='<div class="mb-2">\n  <progressbar class="progress-striped active"  [value]="136" type="danger"><i>136 / 150</i></progressbar>\n</div>\n'},y23P:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-progressbar-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoProgressbarDynamicComponent {\n  max: number = 200;\n  showWarning: boolean;\n  dynamic: number;\n  type: string;\n\n  constructor() {\n    this.random();\n  }\n\n  random(): void {\n    let value = Math.floor(Math.random() * 100 + 1);\n    let type: string;\n\n    if (value < 25) {\n      type = 'success';\n    } else if (value < 50) {\n      type = 'info';\n    } else if (value < 75) {\n      type = 'warning';\n    } else {\n      type = 'danger';\n    }\n\n    this.dynamic = value;\n    this.type = type;\n  }\n}\n"}});