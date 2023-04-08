"use strict";(self.webpackChunkacra=self.webpackChunkacra||[]).push([[804],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?n.createElement(g,i(i({ref:a},s),{},{components:t})):n.createElement(g,i({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4059:function(e,a,t){t.d(a,{l7:function(){return S},TP:function(){return x}});var n=t(7294),r=t(3117),l=t(6010),i=t(2466),o=t(6775),u=t(1980),c=t(7392),s=t(12);function p(e){return function(e){var a,t;return null!=(a=null==(t=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function d(e){var a=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=a?a:p(t);return function(e){var a=(0,c.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function g(e){var a=e.queryString,t=void 0!==a&&a,r=e.groupId,l=(0,o.k6)(),i=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,n.useCallback)((function(e){if(i){var a=new URLSearchParams(l.location.search);a.set(i,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[i,l])]}function f(e){var a,t,r,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,c=e.groupId,p=d(e),f=(0,n.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),k=f[0],h=f[1],v=g({queryString:u,groupId:c}),N=v[0],b=v[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(a),r=t[0],l=t[1],[r,(0,n.useCallback)((function(e){a&&l.set(e)}),[a,l])]),C=y[0],w=y[1],T=function(){var e=null!=N?N:C;return m({value:e,tabValues:p})?e:null}();return(0,n.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:k,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),b(e),w(e)}),[b,w,p]),tabValues:p}}var k=t(2389),h="tabList__CuJ",v="tabItem_LNqP";function N(e){var a=e.className,t=e.block,o=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var a=e.currentTarget,t=s.indexOf(a),n=c[t].value;n!==o&&(p(a),u(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=s.indexOf(e.currentTarget)+1;t=null!=(n=s[r])?n:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;t=null!=(l=s[i])?l:s[s.length-1]}null==(a=t)||a.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},c.map((function(e){var a=e.value,t=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:function(e){return s.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===a})}),null!=t?t:a)})))}function b(e){var a=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var i=l.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})})))}function y(e){var a=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(N,(0,r.Z)({},e,a)),n.createElement(b,(0,r.Z)({},e,a)))}function C(e){var a=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(a)},e))}var w="tabItem_Ymn6";function T(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(w,r),hidden:t},a)}function V(e){var a=e.children,t=e.type,r=e.languages;return n.createElement(C,{defaultValue:"kotlin",groupId:t,values:r},a.map((function(e){var a=e.props.children.props,t=a&&a.className?a.className.replace(/^(language-)/,""):"kotlin";return n.createElement(T,{key:t,value:t},e)})))}function x(e){var a=e.children;return n.createElement(V,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},a)}function S(e){var a=e.children;return n.createElement(V,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},a)}},3917:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var n=t(3117),r=t(102),l=(t(7294),t(3905)),i=t(4059),o=["components"],u={sidebar_position:1},c=void 0,s={unversionedId:"Setup",id:"Setup",title:"Setup",description:"This Tutorial will show you how to set up ACRA and guide you through your initial configuration choices.",source:"@site/docs/Setup.mdx",sourceDirName:".",slug:"/Setup",permalink:"/docs/Setup",draft:!1,editUrl:"https://github.com/acra/acra/edit/master/web/docs/Setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Interactions",permalink:"/docs/Interactions"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Define ACRA Version",id:"define-acra-version",level:3},{value:"Choose sender",id:"choose-sender",level:3},{value:"Choose interaction",id:"choose-interaction",level:3},{value:"Optional Plugins",id:"optional-plugins",level:3},{value:"Configuration",id:"configuration",level:2}],m={toc:d};function g(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This Tutorial will show you how to set up ACRA and guide you through your initial configuration choices."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"This guide assumes you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"com.android.tools.build:gradle:4.0.0")," or later."),(0,l.kt)("p",null,"Acra requires java 8 (native, not RetroLambda or similar):"),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},"android {\n    compileOptions {\n        sourceCompatibility = JavaVersion.VERSION_1_8\n        targetCompatibility = JavaVersion.VERSION_1_8\n    }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"android {\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n}\n"))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"Everything you find in this section belongs into the ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," block:"),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},"dependencies {\n    //here\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    //here\n}\n"))),(0,l.kt)("h3",{id:"define-acra-version"},"Define ACRA Version"),(0,l.kt)("p",null,"Add the following snippet (with the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ACRA/acra/releases/latest"},"latest version"),")"),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val acraVersion = "<latest version>"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"def acraVersion = '<latest version>'\n"))),(0,l.kt)("h3",{id:"choose-sender"},"Choose sender"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Http:"))),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-http:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-http:$acraVersion"\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Email:"))),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-mail:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-mail:$acraVersion"\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Custom:"))),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-core:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-core:$acraVersion"\n'))),(0,l.kt)("p",null,"More info: ",(0,l.kt)("a",{parentName:"p",href:"Senders"},"Senders")),(0,l.kt)("h3",{id:"choose-interaction"},"Choose interaction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dialog:"))),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-dialog:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-dialog:$acraVersion"\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Notification:"))),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-notification:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-notification:$acraVersion"\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Toast:"))),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-toast:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-toast:$acraVersion"\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Silent:"))),(0,l.kt)("p",null,"Add nothing."),(0,l.kt)("p",null,"More info: ",(0,l.kt)("a",{parentName:"p",href:"interactions"},"Interactions")),(0,l.kt)("h3",{id:"optional-plugins"},"Optional Plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Limiter:")," ")),(0,l.kt)("p",null,"Limits how many reports acra sends from one device"),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-limiter:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-limiter:$acraVersion"\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Advanced Scheduler:")," ","[since 5.2.0-rc1]"," ")),(0,l.kt)("p",null,"Controls when reports are sent (e.g. only on wifi) and can restart an application after a crash"),(0,l.kt)(i.TP,{mdxType:"GradleCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("ch.acra:acra-advanced-scheduler:$acraVersion")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "ch.acra:acra-advanced-scheduler:$acraVersion"\n'))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"If you don't already have an ",(0,l.kt)("inlineCode",{parentName:"p"},"Application")," class, create one. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Creating an Application class")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a new class in your package root."),(0,l.kt)("li",{parentName:"ul"},"Give it a name like: ",(0,l.kt)("inlineCode",{parentName:"li"},"MyApplication")," extending from ",(0,l.kt)("inlineCode",{parentName:"li"},"android.app.Application")," (or another subclass of that)"),(0,l.kt)("li",{parentName:"ul"},"Update the ",(0,l.kt)("inlineCode",{parentName:"li"},"application")," element in your ",(0,l.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml")," to reference the new class.")),(0,l.kt)("p",null,"ACRA is configured inside your ",(0,l.kt)("inlineCode",{parentName:"p"},"Application")," class:"),(0,l.kt)(i.l7,{mdxType:"AndroidCode"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyApplication : Application() {\n  override fun attachBaseContext(base:Context) {\n    super.attachBaseContext(base)\n\n    initAcra {\n        //core configuration:\n        buildConfigClass = BuildConfig::class.java\n        reportFormat = StringFormat.JSON\n        //each plugin you chose above can be configured in a block like this:\n        toast {\n            text = getString(R.string.acra_toast_text)\n            //opening this block automatically enables the plugin.\n        }\n    }\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class MyApplication extends Application {\n    @Override\n    protected void attachBaseContext(Context base) {\n        super.attachBaseContext(base);\n\n        ACRA.init(this, new CoreConfigurationBuilder()\n                //core configuration:\n                .withBuildConfigClass(BuildConfig.class)\n                .withReportFormat(StringFormat.JSON)\n                .withPluginConfigurations(\n                    //each plugin you chose above can be configured with its builder like this:\n                    new ToastConfigurationBuilder()\n                        .withText(getString(R.string.acra_toast_text))\n                        .build()\n                )\n            );\n    }\n}\n"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full configuration options documentation:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-core-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"Core"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-http-sender-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"HttpSender"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-mail-sender-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"MailSender"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-dialog-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"Dialog"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-notification-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"Notification"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-toast-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"Toast"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-limiter-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"Limiter"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pathname:///javadoc/latest/acra/org.acra.config/-scheduler-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"Scheduler")))),(0,l.kt)("p",null,"See also: ",(0,l.kt)("a",{parentName:"p",href:"Interactions"},"Interactions"),", ",(0,l.kt)("a",{parentName:"p",href:"Senders"},"Senders")))}g.isMDXComponent=!0}}]);