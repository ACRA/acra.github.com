(self.webpackChunkacra=self.webpackChunkacra||[]).push([[131],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},6076:function(e,t,n){"use strict";n.d(t,{l7:function(){return h},TP:function(){return f}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=a(),h=f.tabGroupChoices,g=f.setTabGroupChoices,y=(0,r.useState)(o),v=y[0],b=y[1],k=r.Children.toArray(e.children),w=[];if(null!=d){var C=h[d];null!=C&&C!==v&&p.some((function(e){return e.value===C}))&&b(C)}var S=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;b(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,o,a,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case u:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:S,onClick:S},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var d=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)};function m(e){var t=e.children,n=e.type,o=e.languages;return r.createElement(p,{defaultValue:"kotlin",groupId:n,values:o},t.map((function(e){var t=e.props.children.props,n=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return r.createElement(d,{key:n,value:n},e)})))}function f(e){var t=e.children;return r.createElement(m,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function h(e){var t=e.children;return r.createElement(m,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}},8442:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(6076),s=["components"],l={sidebar_position:3},u=void 0,c={unversionedId:"Senders",id:"Senders",isDocsHomePage:!1,title:"Senders",description:"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations.",source:"@site/docs/Senders.mdx",sourceDirName:".",slug:"/Senders",permalink:"/docs/Senders",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Senders.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/Interactions"},next:{title:"Backends",permalink:"/docs/Backends"}},p=[{value:"Choosing a content type",id:"choosing-a-content-type",children:[]},{value:"Sending reports via HTTP",id:"sending-reports-via-http",children:[]},{value:"Sending reports by email",id:"sending-reports-by-email",children:[]},{value:"Implementing your own sender",id:"implementing-your-own-sender",children:[{value:"Registering your sender",id:"registering-your-sender",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations."),(0,a.kt)("h2",{id:"choosing-a-content-type"},"Choosing a content type"),(0,a.kt)("p",null,"All official report senders support two types of report formats: ",(0,a.kt)("inlineCode",{parentName:"p"},"StringFormat.JSON")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StringFormat.KEY_VALUE_LIST")," (form-data-compliant for http). Choose whichever your backend requires / which you like best:"),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"initAcra {\n    reportFormat = StringFormat.JSON\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"coreConfigurationBuilder.withReportFormat(StringFormat.JSON)\n"))),(0,a.kt)("h2",{id:"sending-reports-via-http"},"Sending reports via HTTP"),(0,a.kt)("p",null,"The most convenient way to send your report with no necessary user interaction is via HTTP."),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'httpSender {\n    //required. Https recommended\n    uri = "https://your.server.com/report"\n    //optional. Enables http basic auth\n    basicAuthLogin = "acra"\n    //required if above set\n    basicAuthPassword = "password"\n    // defaults to POST\n    httpMethod = HttpSender.Method.POST\n    //defaults to 5000ms\n    connectionTimeout = 5000\n    //defaults to 20000ms\n    socketTimeout = 20000\n    // defaults to false\n    dropReportsOnTimeout = false\n    //the following options allow you to configure a self signed certificate\n    keyStoreFactoryClass = MyKeyStoreFactory::class.java\n    certificatePath = "asset://mycert.cer"\n    resCertificate = R.raw.mycert\n    certificateType = "X.509"\n    //defaults to false. Recommended if your backend supports it\n    compress = false\n    //defaults to all\n    tlsProtocols = arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(HttpSenderConfigurationBuilder.class)\n    //required. Https recommended\n    .withUri("https://your.server.com/report")\n    //optional. Enables http basic auth\n    .withBasicAuthLogin("acra")\n    //required if above set\n    .withBasicAuthPassword("password")\n    // defaults to POST\n    .withHttpMethod(HttpSender.Method.POST)\n    //defaults to 5000ms\n    .withConnectionTimeout(5000)\n    //defaults to 20000ms\n    .withSocketTimeout(20000)\n    // defaults to false\n    .withDropReportsOnTimeout(false)\n    //the following options allow you to configure a self signed certificate\n    .withKeyStoreFactoryClass(MyKeyStoreFactory::class.java)\n    .withCertificatePath("asset://mycert.cer")\n    .withResCertificate(R.raw.mycert)\n    .withCertificateType("X.509")\n    //defaults to false. Recommended if your backend supports it\n    .withCompress(false)\n    //defaults to all\n    .withTlsProtocols(arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1))\n'))),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," mode, ACRA adds the Report ID at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," automatically."),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"Backends"},"Backends")),(0,a.kt)("h2",{id:"sending-reports-by-email"},"Sending reports by email"),(0,a.kt)("p",null,"For some applications, sending reports to a http based solution is not an option. The problem is that they require the ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission."),(0,a.kt)("p",null,"For pure offline applications, users might even be frightened to grant this permission and can be suspicious about the\nreal goal of the app or the developer."),(0,a.kt)("p",null,"To get crash reports without granting ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission, you can use the mail sender:"),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'mailSender {\n    //required\n    mailTo = "acra@yourserver.com"\n    //defaults to true\n    reportAsFile = true\n    //defaults to ACRA-report.stacktrace\n    reportFileName = "Crash.txt"\n    //defaults to "<applicationId> Crash Report"\n    subject = getString(R.string.mail_subject)\n    //defaults to empty\n    body = getString(R.string.mail_body)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(MailSenderConfigurationBuilder.class)\n    //required\n    .withMailTo("acra@yourserver.com")\n    //defaults to true\n    .withReportAsFile(true)\n    //defaults to ACRA-report.stacktrace\n    .withReportFileName("Crash.txt")\n    //defaults to "<applicationId> Crash Report"\n    .withSubject(getString(R.string.mail_subject))\n    //defaults to empty\n    .withBody(getString(R.string.mail_body))\n'))),(0,a.kt)("p",null,"Emails are sent with an ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTION_SEND_MULTIPLE")," intent. This means that the following steps are required for the application user before any report is sent:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pick preferred email client (if no default app set)"),(0,a.kt)("li",{parentName:"ul"},"review & actually send the email")),(0,a.kt)("h2",{id:"implementing-your-own-sender"},"Implementing your own sender"),(0,a.kt)("p",null,"You can implement your own ",(0,a.kt)("inlineCode",{parentName:"p"},"ReportSender")," and configure ACRA to use that instead of or in addition to other senders."),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class YourOwnSender : ReportSender {\n\n  override fun send(context: Context, report: CrashReportData) {\n    // Iterate over the CrashReportData instance and do whatever\n    // you need with each pair of ReportField key / String value\n  }\n}\n\nclass YourOwnSenderfactory : ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    override fun create(context: Context, config: ACRAConfiguration) : ReportSender {\n        return YourOwnSender()\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    override fun enabled(coreConfig : CoreConfiguration) : Boolean {\n        return true\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class YourOwnSender implements ReportSender {\n\n    @Override\n    public void send(Context context, CrashReportData report) throws ReportSenderException {\n        // Iterate over the CrashReportData instance and do whatever\n        // you need with each pair of ReportField key / String value\n    }\n}\n\npublic class YourOwnSenderfactory implements ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    @Override\n    public ReportSender create(Context context, ACRAConfiguration config) {\n        return new YourOwnSender(someConfigPerhaps);\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    @Override\n    public boolean enabled(@NonNull CoreConfiguration coreConfig) {\n        return true;\n    }\n}\n"))),(0,a.kt)("h3",{id:"registering-your-sender"},"Registering your sender"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/Custom-Extensions"},"Custom extensions"),"."),(0,a.kt)("p",null,"You can also look at our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ACRA/acra/tree/master/examples"},"example projects"),", which contain an example of a custom sender each."))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);