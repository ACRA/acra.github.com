(self.webpackChunkacra=self.webpackChunkacra||[]).push([[372],{7698:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var i=n(2122),o=n(9756),a=(n(7294),n(3905)),r=["components"],s={sidebar_position:90,title:"Troubleshooting Guide"},u=void 0,l={unversionedId:"Troubleshooting-Guide",id:"Troubleshooting-Guide",isDocsHomePage:!1,title:"Troubleshooting Guide",description:"On this page you'll find some common issues and their solutions.",source:"@site/docs/Troubleshooting-Guide.mdx",sourceDirName:".",slug:"/Troubleshooting-Guide",permalink:"/docs/Troubleshooting-Guide",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Troubleshooting-Guide.mdx",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,title:"Troubleshooting Guide"},sidebar:"tutorialSidebar",previous:{title:"How to Debug",permalink:"/docs/How-to-debug"}},d=[{value:"Instant Run",id:"instant-run",children:[]},{value:"Legacy Multidex",id:"legacy-multidex",children:[]},{value:"Application.onCreate()",id:"applicationoncreate",children:[]}],c={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On this page you'll find some common issues and their solutions."),(0,a.kt)("h2",{id:"instant-run"},"Instant Run"),(0,a.kt)("p",null,"We cannot guarantee ACRA will work with instant run enabled. Always try to reproduce an error with instant run disabled before reporting it. "),(0,a.kt)("h2",{id:"legacy-multidex"},"Legacy Multidex"),(0,a.kt)("p",null,"If you are using legacy multidex, ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"ACRA.init(...)")," is called ",(0,a.kt)("strong",{parentName:"p"},"after")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Multidex.install()"),"."),(0,a.kt)("h2",{id:"applicationoncreate"},"Application.onCreate()"),(0,a.kt)("p",null,"ACRA uses a service to send crash reports. This service runs in a ",(0,a.kt)("strong",{parentName:"p"},"separate process")," to ensure that reports can be sent even when your own VM is dying from an unhandled exception. This means that a new instance of your application will be started and ",(0,a.kt)("inlineCode",{parentName:"p"},"Application.onCreate()")," will be called again. If you are performing once only tasks in ",(0,a.kt)("inlineCode",{parentName:"p"},"Application.onCreate()")," then check the name of the current process and don't do them if the process name is ",(0,a.kt)("inlineCode",{parentName:"p"},":acra"),". You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ACRA.isACRASenderServiceProcess()")," for this."))}p.isMDXComponent=!0}}]);