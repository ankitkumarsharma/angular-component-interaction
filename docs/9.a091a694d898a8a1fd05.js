(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{HBpd:function(t,e,a){"use strict";a.r(e),a.d(e,"ServiceGetSetBasedModule",function(){return f});var n=a("ofXK"),c=a("tyNb");const r={title:"Angular Service (Get/Set) ",subTitle:"Service based via getter/setter methods"};var s=a("fXoL");let o=(()=>{class t{constructor(){this.isEnable=!1}setData(t){this.isEnable=t}getData(){return this.isEnable}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=a("1vAT");let b=(()=>{class t{constructor(t){this.dataService=t,this.contactData=r}ngOnInit(){this.changeValue=this.dataService.getData()}changeCondition(){this.changeValue=!this.changeValue,this.dataService.setData(this.changeValue),alert("Done, Now click on Go to Parent")}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(o))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-child"]],decls:12,vars:1,consts:[[1,"space-30"],["routerLink","/",1,"primary-btn"],[3,"data"],[1,"secondary-btn",3,"click"],["routerLink","/service-based",1,"primary-btn"]],template:function(t,e){1&t&&(s.Jb(0,"div",0),s.Nb(1,"button",1),s.jc(2,"Back"),s.Mb(),s.Jb(3,"app-contact",2),s.Nb(4,"p"),s.jc(5,"child works!"),s.Mb(),s.Nb(6,"button",3),s.Ub("click",function(){return e.changeCondition()}),s.jc(7,"Change Condition"),s.Mb(),s.Jb(8,"br"),s.Jb(9,"br"),s.Nb(10,"a",4),s.jc(11," <<< Go to Parent"),s.Mb()),2&t&&(s.wb(3),s.Zb("data",e.contactData))},directives:[c.a,i.a,c.b],styles:[""]}),t})();const l=function(t,e){return{true:t,false:e}};let u=(()=>{class t{constructor(t){this.dataService=t}ngOnInit(){this.getData()}getData(){this.show_flag=this.dataService.getData()}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(o))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-parent"]],decls:9,vars:5,consts:[[1,"ak-title"],[3,"ngClass"],["routerLink","child",1,"primary-btn"]],template:function(t,e){1&t&&(s.Nb(0,"p"),s.jc(1,"parent works!"),s.Mb(),s.Nb(2,"h2",0),s.jc(3,"This is a "),s.Nb(4,"span",1),s.jc(5),s.Mb(),s.jc(6," condition"),s.Mb(),s.Nb(7,"a",2),s.jc(8,"Go to child >>>"),s.Mb()),2&t&&(s.wb(4),s.Zb("ngClass",s.cc(2,l,e.show_flag,!e.show_flag)),s.wb(1),s.kc(e.show_flag?"True":"False"))},directives:[n.h,c.b],styles:[".true[_ngcontent-%COMP%]{color:green}.false[_ngcontent-%COMP%]{color:#ff4545}"]}),t})();const p=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(){this.contactData=r}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Cb({type:t,selectors:[["app-service-get-set-based"]],decls:6,vars:1,consts:[[1,"space-30"],["routerLink","/",1,"primary-btn"],[3,"data"]],template:function(t,e){1&t&&(s.Jb(0,"div",0),s.Nb(1,"button",1),s.jc(2,"Back"),s.Mb(),s.Jb(3,"app-contact",2),s.Jb(4,"router-outlet"),s.Jb(5,"app-parent")),2&t&&(s.wb(3),s.Zb("data",e.contactData))},directives:[c.a,i.a,c.d,u],styles:[""]}),t})()},{path:"child",component:b},{path:"parent",component:u}];let d=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[c.c.forChild(p)],c.c]}),t})();var h=a("PCNd");let f=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[n.b,d,h.a]]}),t})()}}]);