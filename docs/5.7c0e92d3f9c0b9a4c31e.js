(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iydT:function(t,n,e){"use strict";e.r(n),e.d(n,"HomeModule",function(){return m});var i=e("ofXK"),o=e("tyNb");const a=[{name:"@Input",info:"Parent to Child",link:"/input-based",status:!0},{name:"@Output",info:"Child to Parent",link:"/output-based",status:!0},{name:"@ViewChild",info:"Parent to Child",link:"/view-child-based",status:!0},{name:"Service - Get/Set",info:"Service based via getter/setter method",link:"/service-based",status:!0}],s={title:"Angular Component Interaction",subTitle:"We can communicate between components with multiple ways in Angular"};var b=e("fXoL"),c=e("1vAT");const r=function(t){return{disabled:t}};function l(t,n){if(1&t&&(b.Fb(0,"div",7),b.Fb(1,"div",8),b.Fb(2,"div",9),b.Fb(3,"h2",10),b.Yb(4),b.Eb(),b.Fb(5,"h3",11),b.Yb(6),b.Eb(),b.Eb(),b.Eb(),b.Eb()),2&t){const t=n.$implicit;b.Pb("title",t.status?"Done":"Pending"),b.tb(1),b.Pb("routerLink",t.link),b.Ob("ngClass",b.Qb(5,r,!t.status)),b.tb(3),b.Zb(t.name),b.tb(2),b.Zb(t.info)}}const d=[{path:"",component:(()=>{class t{constructor(){this.componentType=a,this.contactData=s}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.wb({type:t,selectors:[["app-home"]],decls:10,vars:2,consts:[[1,"space-30"],[1,"row"],[1,"col-md-12"],[1,"ak-title","text-center"],[1,"ak-title-lg"],[3,"data"],["class","col-md-3",3,"title",4,"ngFor","ngForOf"],[1,"col-md-3",3,"title"],[1,"card",3,"routerLink","ngClass"],[1,"card-body"],[1,"ak-title"],[1,"ak-sub-title"]],template:function(t,n){1&t&&(b.Db(0,"div",0),b.Fb(1,"div",1),b.Fb(2,"div",2),b.Fb(3,"h2",3),b.Yb(4,"This tutorial is going for "),b.Fb(5,"span",4),b.Yb(6,"Component Interaction"),b.Eb(),b.Eb(),b.Eb(),b.Eb(),b.Db(7,"app-contact",5),b.Fb(8,"div",1),b.Xb(9,l,7,7,"div",6),b.Eb()),2&t&&(b.tb(7),b.Ob("data",n.contactData),b.tb(2),b.Ob("ngForOf",n.componentType))},directives:[c.a,i.i,o.a,i.h],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=b.Ab({type:t}),t.\u0275inj=b.zb({factory:function(n){return new(n||t)},imports:[[o.c.forChild(d)],o.c]}),t})();var p=e("PCNd");let m=(()=>{class t{}return t.\u0275mod=b.Ab({type:t}),t.\u0275inj=b.zb({factory:function(n){return new(n||t)},imports:[[i.b,u,p.a]]}),t})()}}]);