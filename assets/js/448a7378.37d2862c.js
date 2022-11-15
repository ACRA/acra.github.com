"use strict";(self.webpackChunkacra=self.webpackChunkacra||[]).push([[850],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5130:function(e,t,n){n.d(t,{l7:function(){return b},TP:function(){return k}});var a=n(7294),r=n(3117),o=n(6010),l=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,g=e.values,f=e.groupId,v=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),x=N.tabGroupChoices,C=N.setTabGroupChoices,E=(0,a.useState)(y),w=E[0],j=E[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=x[f];null!=A&&A!==w&&b.some((function(e){return e.value===A}))&&j(A)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==w&&(T(t),j(a),null!=f&&C(f,String(a)))},S=function(e){var t,n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;n=null!=(o=O[l])?o:O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}var g="tabItem_Ymn6";function f(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(g,r),hidden:n},t)}function v(e){var t=e.children,n=e.type,r=e.languages;return a.createElement(m,{defaultValue:"kotlin",groupId:n,values:r},t.map((function(e){var t=e.props.children.props,n=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return a.createElement(f,{key:n,value:n},e)})))}function k(e){var t=e.children;return a.createElement(v,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function b(e){var t=e.children;return a.createElement(v,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}},4383:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=n(5130),i=["components"],u={sidebar_position:60,title:"Custom Extensions"},s=void 0,c={unversionedId:"Custom-Extensions",id:"Custom-Extensions",title:"Custom Extensions",description:"Implementing an extension",source:"@site/docs/Custom-Extensions.mdx",sourceDirName:".",slug:"/Custom-Extensions",permalink:"/docs/Custom-Extensions",draft:!1,editUrl:"https://github.com/acra/acra/edit/master/web/docs/Custom-Extensions.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,title:"Custom Extensions"},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/AdvancedUsage"},next:{title:"How to Debug",permalink:"/docs/How-to-debug"}},p={},d=[{value:"Implementing an extension",id:"implementing-an-extension",level:2},{value:"Registering an extension",id:"registering-an-extension",level:2},{value:"By annotation",id:"by-annotation",level:3},{value:"By file",id:"by-file",level:3}],m={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"implementing-an-extension"},"Implementing an extension"),(0,o.kt)("p",null,"Create a class extending one of the supported interfaces. "),(0,o.kt)("p",null,"It has to be ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," and have a zero-argument public constructor (as a result, it cannot be an inner class)."),(0,o.kt)("p",null,"Example:"),(0,o.kt)(l.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'MyAdmin : ReportingAdministrator {\n    init {\n        Log.d("MyAdmin", "MyAdmin was loaded")\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public MyAdmin implements ReportingAdministrator {\n    public MyAdmin() {\n        Log.d("MyAdmin", "MyAdmin was loaded");\n    }\n}\n'))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Supported Extensions"),(0,o.kt)("th",{parentName:"tr",align:null},"Use Case"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.collector/-collector"},(0,o.kt)("inlineCode",{parentName:"a"},"Collector"))),(0,o.kt)("td",{parentName:"tr",align:null},"Collect additional custom data not covered by acra")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.collector/-application-startup-collector"},(0,o.kt)("inlineCode",{parentName:"a"},"ApplicationStartupCollector"))),(0,o.kt)("td",{parentName:"tr",align:null},"Collector which is also called at startup")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.interaction/-report-interaction"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportInteraction"))),(0,o.kt)("td",{parentName:"tr",align:null},"Usually not needed, as the provided options (dialog, notification, toast) cover all reasonable choices")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.config/-reporting-administrator"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportingAdministrator"))),(0,o.kt)("td",{parentName:"tr",align:null},"Control when reports are generated and when the application should be stopped")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.sender/-report-sender-factory"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportSenderFactory"))),(0,o.kt)("td",{parentName:"tr",align:null},"Register custom report senders")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.config/-configuration-builder-factory"},(0,o.kt)("inlineCode",{parentName:"a"},"ConfigurationBuilderFactory"))),(0,o.kt)("td",{parentName:"tr",align:null},"Register custom configurations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.scheduler/-sender-scheduler-factory"},(0,o.kt)("inlineCode",{parentName:"a"},"SenderSchedulerFactory"))),(0,o.kt)("td",{parentName:"tr",align:null},"Register custom sender scheduler, e.g. to prevent report sending based on custom conditions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.startup/-startup-processor"},(0,o.kt)("inlineCode",{parentName:"a"},"StartupProcessor"))),(0,o.kt)("td",{parentName:"tr",align:null},"Do something ACRA related on app start")))),(0,o.kt)("h2",{id:"registering-an-extension"},"Registering an extension"),(0,o.kt)("p",null,"Choose one of the following alternatives:"),(0,o.kt)("h3",{id:"by-annotation"},"By annotation"),(0,o.kt)("p",null,"Add the following dependencies:"),(0,o.kt)(l.TP,{mdxType:"GradleCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'compileOnly("com.google.auto.service:auto-service-annotations:1.0")\n//either for java sources:\nannotationProcessor("com.google.auto.service:auto-service:1.0")\n//or for kotlin sources (requires kapt gradle plugin):\nkapt("com.google.auto.service:auto-service:1.0")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'compileOnly "com.google.auto.service:auto-service-annotations:1.0"\n//either for java sources:\nannotationProcessor "com.google.auto.service:auto-service:1.0"\n//or for kotlin sources (requires kapt gradle plugin):\nkapt "com.google.auto.service:auto-service:1.0"\n'))),(0,o.kt)("p",null,"Then annotate your extension with the following:"),(0,o.kt)(l.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@AutoService(<ExtensionInterface>::class)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@AutoService(<ExtensionInterface>.class)\n"))),(0,o.kt)("h3",{id:"by-file"},"By file"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/java/util/ServiceLoader.html"},"ServiceLoader")," for manual service registration"))}g.isMDXComponent=!0}}]);