(self.webpackChunkacra=self.webpackChunkacra||[]).push([[850],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},5730:function(e,t,n){"use strict";n.d(t,{l7:function(){return g},TP:function(){return m}});var a=n(7294),r=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,p=e.groupId,m=e.className,g=(0,r.Z)(),f=g.tabGroupChoices,v=g.setTabGroupChoices,k=(0,a.useState)(u),h=k[0],b=k[1],y=a.Children.toArray(e.children),N=[];if(null!=p){var C=f[p];null!=C&&C!==h&&d.some((function(e){return e.value===C}))&&b(C)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;b(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,i,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case s:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))};var d=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};function p(e){var t=e.children,n=e.type,r=e.languages;return a.createElement(u,{defaultValue:"kotlin",groupId:n,values:r},t.map((function(e){var t=e.props.children.props,n=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return a.createElement(d,{key:n,value:n},e)})))}function m(e){var t=e.children;return a.createElement(p,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function g(e){var t=e.children;return a.createElement(p,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}},7773:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(5730),l=["components"],c={sidebar_position:60,title:"Custom Extensions"},s=void 0,u={unversionedId:"Custom-Extensions",id:"Custom-Extensions",isDocsHomePage:!1,title:"Custom Extensions",description:"Implementing an extension",source:"@site/docs/Custom-Extensions.mdx",sourceDirName:".",slug:"/Custom-Extensions",permalink:"/docs/Custom-Extensions",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Custom-Extensions.mdx",version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,title:"Custom Extensions"},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/AdvancedUsage"},next:{title:"How to Debug",permalink:"/docs/How-to-debug"}},d=[{value:"Implementing an extension",id:"implementing-an-extension",children:[]},{value:"Registering an extension",id:"registering-an-extension",children:[{value:"By annotation",id:"by-annotation",children:[]},{value:"By file",id:"by-file",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"implementing-an-extension"},"Implementing an extension"),(0,o.kt)("p",null,"Create a class extending one of the supported interfaces. "),(0,o.kt)("p",null,"It has to be ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," and have a zero-argument public constructor (as a result, it cannot be an inner class)."),(0,o.kt)("p",null,"Example:"),(0,o.kt)(i.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'MyAdmin : ReportingAdministrator {\n    init {\n        Log.d("MyAdmin", "MyAdmin was loaded")\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public MyAdmin implements ReportingAdministrator {\n    public MyAdmin() {\n        Log.d("MyAdmin", "MyAdmin was loaded");\n    }\n}\n'))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Supported Extensions"),(0,o.kt)("th",{parentName:"tr",align:null},"Use Case"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.collector/-collector"},(0,o.kt)("inlineCode",{parentName:"a"},"Collector"))),(0,o.kt)("td",{parentName:"tr",align:null},"Collect additional custom data not covered by acra")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.collector/-application-startup-collector"},(0,o.kt)("inlineCode",{parentName:"a"},"ApplicationStartupCollector"))),(0,o.kt)("td",{parentName:"tr",align:null},"Collector which is also called at startup")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.interaction/-report-interaction"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportInteraction"))),(0,o.kt)("td",{parentName:"tr",align:null},"Usually not needed, as the provided options (dialog, notification, toast) cover all reasonable choices")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.config/-reporting-administrator"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportingAdministrator"))),(0,o.kt)("td",{parentName:"tr",align:null},"Control when reports are generated and when the application should be stopped")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.sender/-report-sender-factory"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportSenderFactory"))),(0,o.kt)("td",{parentName:"tr",align:null},"Register custom report senders")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.config/-configuration-builder-factory"},(0,o.kt)("inlineCode",{parentName:"a"},"ConfigurationBuilderFactory"))),(0,o.kt)("td",{parentName:"tr",align:null},"Register custom configurations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.scheduler/-sender-scheduler-factory"},(0,o.kt)("inlineCode",{parentName:"a"},"SenderSchedulerFactory"))),(0,o.kt)("td",{parentName:"tr",align:null},"Register custom sender scheduler, e.g. to prevent report sending based on custom conditions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"pathname:///javadoc/latest/acra/org.acra.startup/-startup-processor"},(0,o.kt)("inlineCode",{parentName:"a"},"StartupProcessor"))),(0,o.kt)("td",{parentName:"tr",align:null},"Do something ACRA related on app start")))),(0,o.kt)("h2",{id:"registering-an-extension"},"Registering an extension"),(0,o.kt)("p",null,"Choose one of the following alternatives:"),(0,o.kt)("h3",{id:"by-annotation"},"By annotation"),(0,o.kt)("p",null,"Add the following dependencies:"),(0,o.kt)(i.TP,{mdxType:"GradleCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'compileOnly("com.google.auto.service:auto-service-annotations:1.0")\n//either for java sources:\nannotationProcessor("com.google.auto.service:auto-service:1.0")\n//or for kotlin sources (requires kapt gradle plugin):\nkapt("com.google.auto.service:auto-service:1.0")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'compileOnly "com.google.auto.service:auto-service-annotations:1.0"\n//either for java sources:\nannotationProcessor "com.google.auto.service:auto-service:1.0"\n//or for kotlin sources (requires kapt gradle plugin):\nkapt "com.google.auto.service:auto-service:1.0"\n'))),(0,o.kt)("p",null,"Then annotate your extension with the following:"),(0,o.kt)(i.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@AutoService(<ExtensionInterface>::class)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@AutoService(<ExtensionInterface>.class)\n"))),(0,o.kt)("h3",{id:"by-file"},"By file"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/java/util/ServiceLoader.html"},"ServiceLoader")," for manual service registration"))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);