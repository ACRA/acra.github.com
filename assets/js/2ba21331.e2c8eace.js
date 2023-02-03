"use strict";(self.webpackChunkacra=self.webpackChunkacra||[]).push([[187],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),f=i,p=g["".concat(s,".").concat(f)]||g[f]||d[f]||r;return n?a.createElement(p,o(o({ref:t},c),{},{components:n})):a.createElement(p,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4059:function(e,t,n){n.d(t,{l7:function(){return N},TP:function(){return x}});var a=n(7294),i=n(3117),r=n(6010),o=n(2466),l=n(6775),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,r=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:i});return[(0,s._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[o,r])]}function m(e){var t,n,i,r,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=g(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:d})})),h=m[0],b=m[1],v=p({queryString:s,groupId:u}),w=v[0],y=v[1],_=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),i=n[0],r=n[1],[i,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),k=_[0],R=_[1],T=function(){var e=null!=w?w:k;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),R(e)}),[y,R,d]),tabValues:d}}var h=n(2389),b="tabList__CuJ",v="tabItem_LNqP";function w(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},f=function(e){var t,n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var a,i=c.indexOf(e.currentTarget)+1;n=null!=(a=c[i])?a:c[0];break;case"ArrowLeft":var r,o=c.indexOf(e.currentTarget)-1;n=null!=(r=c[o])?r:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:g},o,{className:(0,r.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,i=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var r=n.find((function(e){return e.props.value===i}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})})))}function _(e){var t=m(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",b)},a.createElement(w,(0,i.Z)({},e,t)),a.createElement(y,(0,i.Z)({},e,t)))}function k(e){var t=(0,h.Z)();return a.createElement(_,(0,i.Z)({key:String(t)},e))}var R="tabItem_Ymn6";function T(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(R,i),hidden:n},t)}function S(e){var t=e.children,n=e.type,i=e.languages;return a.createElement(k,{defaultValue:"kotlin",groupId:n,values:i},t.map((function(e){var t=e.props.children.props,n=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return a.createElement(T,{key:n,value:n},e)})))}function x(e){var t=e.children;return a.createElement(S,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function N(e){var t=e.children;return a.createElement(S,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}},1093:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return _},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return w}});var a=n(3117),i=n(102),r=n(7294),o=n(3905),l=n(4059),s="container_gaFB",u="float_I4op";function c(e){var t=e.children,n=e.src,a=e.alt;return r.createElement("div",{id:s},r.createElement("img",{id:u,src:n,alt:a}),t)}var d=n.p+"assets/images/toast-2906fe51ada0457d3659be83b99b46c2.png",g=n.p+"assets/images/dialog-9664f2575b9591f672c285a494c87502.png",f=n.p+"assets/images/notification-1995232157133ae76345efb2882b385c.png",p=["components"],m={sidebar_position:2},h=void 0,b={unversionedId:"Interactions",id:"Interactions",title:"Interactions",description:"The default behavior of ACRA is to send crash reports silently. From the application user point of view, the app closes, and that's all. Though, a report has been sent without the user being aware of it.",source:"@site/docs/Interactions.mdx",sourceDirName:".",slug:"/Interactions",permalink:"/docs/Interactions",draft:!1,editUrl:"https://github.com/acra/acra/edit/master/web/docs/Interactions.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/Setup"},next:{title:"Senders",permalink:"/docs/Senders"}},v={},w=[{value:"Silent",id:"silent",level:2},{value:"Toast",id:"toast",level:2},{value:"Dialog",id:"dialog",level:2},{value:"Notification",id:"notification",level:2}],y={toc:w};function _(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The default behavior of ACRA is to send crash reports silently. From the application user point of view, the app closes, and that's all. Though, a report has been sent without the user being aware of it."),(0,o.kt)("p",null,"Depending on the state of your application and your concern of your users data plan usage and private data handling, you might prefer notifying them that a crash report has been sent, or even ask them the authorization to send one... and why not ask them to describe what they were doing during the crash.\nThe following section details those user interactions."),(0,o.kt)("h2",{id:"silent"},"Silent"),(0,o.kt)("p",null,"Nothing shown, nothing to configure."),(0,o.kt)(c,{src:d,alt:"Toast Example",mdxType:"SideImage"},(0,o.kt)("h2",{id:"toast"},"Toast"),(0,o.kt)("p",null,"A Toast with your text is shown. No user interaction."),(0,o.kt)(l.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"toast { \n     //required\n    text = getString(R.string.toast_text)\n    //defaults to Toast.LENGTH_LONG\n    length = Toast.LENGTH_LONG \n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"new ToastConfigurationBuilder()\n    //required\n    .withText(getString(R.string.toast_text))\n    //defaults to Toast.LENGTH_LONG\n    .withLength(Toast.LENGTH_LONG)\n    .build()\n")))),(0,o.kt)(c,{src:g,alt:"Dialog Example",mdxType:"SideImage"},(0,o.kt)("h2",{id:"dialog"},"Dialog"),(0,o.kt)("p",null,"A widely customizable dialog is shown. A report will only be sent if the user agrees."),(0,o.kt)(l.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"dialog {\n    //required\n    text = getString(R.string.dialog_text)\n    //optional, enables the dialog title\n    title = getString(R.string.dialog_title)\n    //defaults to android.R.string.ok\n    positiveButtonText = getString(R.string.dialog_positive)\n    //defaults to android.R.string.cancel\n    negativeButtonText = getString(R.string.dialog_negative)\n    //optional, enables the comment input\n    commentPrompt = getString(R.string.dialog_comment)\n    //optional, enables the email input\n    emailPrompt = getString(R.string.dialog_email)\n    //defaults to android.R.drawable.ic_dialog_alert\n    resIcon = R.drawable.dialog_icon\n    //optional, defaults to @android:style/Theme.Dialog\n    resTheme = R.style.dialog_theme\n    //allows other customization\n    reportDialogClass = MyCustomDialog::class.java\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"new DialogConfigurationBuilder()\n    //required\n    .withText(getString(R.string.dialog_text))\n    //optional, enables the dialog title\n    .withTitle(getString(R.string.dialog_title))\n    //defaults to android.R.string.ok\n    .withPositiveButtonText(getString(R.string.dialog_positive))\n    //defaults to android.R.string.cancel\n    .withNegativeButtonText(getString(R.string.dialog_negative))\n    //optional, enables the comment input\n    .withCommentPrompt(getString(R.string.dialog_comment))\n    //optional, enables the email input\n    .withEmailPrompt(getString(R.string.dialog_email))\n    //defaults to android.R.drawable.ic_dialog_alert\n    .withResIcon(R.drawable.dialog_icon)\n    //optional, defaults to @android:style/Theme.Dialog\n    .withResTheme(R.style.dialog_theme)\n    //allows other customization\n    .withReportDialogClass(MyCustomDialog.class)\n    .build()\n"))),(0,o.kt)("p",null,"If you need more control than the configuration provides, you can set your own dialog activity in ",(0,o.kt)("inlineCode",{parentName:"p"},"reportDialogClass"),". Remember, activities have to be registered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n    \x3c!-- required --\x3e\n    android:name="my.package.MyCustomDialog"\n    android:process=":acra"\n    \x3c!-- recommended --\x3e\n    android:excludeFromRecents="true"\n    android:finishOnTaskLaunch="true"\n    android:launchMode="singleInstance"/>\n'))),(0,o.kt)(c,{src:f,alt:"Notification Example",mdxType:"SideImage"},(0,o.kt)("h2",{id:"notification"},"Notification"),(0,o.kt)("p",null,"A notification is shown. A report will only be sent if the user agrees."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If the user has disabled this notification channel in the Android settings, no report will be sent!\nThis may be the default setting. It is your own responsibility to ask the user to allow these notifications.")),(0,o.kt)(l.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"notification {\n    //required\n    title = getString(R.string.notification_title)\n    //required\n    text = getString(R.string.notification_text)\n    //required\n    channelName = getString(R.string.notification_channel)\n    //optional channel description\n    channelDescription = getString(R.string.notification_channel_desc)\n    //defaults to NotificationManager.IMPORTANCE_HIGH\n    resChannelImportance = NotificationManager.IMPORTANCE_MAX\n    //optional, enables ticker text\n    tickerText = getString(R.string.notification_ticker)\n    //defaults to android.R.drawable.stat_sys_warning\n    resIcon = R.drawable.notification_icon\n    //defaults to android.R.string.ok\n    sendButtonText = getString(R.string.notification_send)\n    //defaults to android.R.drawable.ic_menu_send\n    resSendButtonIcon = R.drawable.notification_send\n    //defaults to android.R.string.cancel\n    discardButtonText = getString(R.string.notification_discard)\n    //defaults to android.R.drawable.ic_menu_delete\n    resDiscardButtonIcon = R.drawable.notification_discard\n    //optional, enables inline comment button\n    sendWithCommentButtonText = getString(R.string.notification_send_with_comment)\n    //required if above is set\n    resSendWithCommentButtonIcon = R.drawable.notification_send_with_comment\n    //optional inline comment hint\n    commentPrompt = getString(R.string.notification_comment)\n    //defaults to false\n    sendOnClick = false\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"new NotificationConfigurationBuilder()\n    //required\n    .withTitle(getString(R.string.notification_title))\n    //required\n    .withText(getString(R.string.notification_text))\n    //required\n    .withChannelName(getString(R.string.notification_channel))\n    //optional channel description\n    .withChannelDescription(getString(R.string.notification_channel_desc))\n    //defaults to NotificationManager.IMPORTANCE_HIGH\n    .withResChannelImportance(NotificationManager.IMPORTANCE_MAX)\n    //optional, enables ticker text\n    .withTickerText(getString(R.string.notification_ticker))\n    //defaults to android.R.drawable.stat_sys_warning\n    .withResIcon(R.drawable.notification_icon)\n    //defaults to android.R.string.ok\n    .withSendButtonText(getString(R.string.notification_send))\n    //defaults to android.R.drawable.ic_menu_send\n    .withResSendButtonIcon(R.drawable.notification_send)\n    //defaults to android.R.string.cancel\n    .withDiscardButtonText(getString(R.string.notification_discard))\n    //defaults to android.R.drawable.ic_menu_delete\n    .withResDiscardButtonIcon(R.drawable.notification_discard)\n    //optional, enables inline comment button\n    .withSendWithCommentButtonText(getString(R.string.notification_send_with_comment))\n    //required if above is set\n    .withResSendWithCommentButtonIcon(R.drawable.notification_send_with_comment)\n    //optional inline comment hint\n    .withCommentPrompt(getString(R.string.notification_comment))\n    //defaults to false\n    .withSendOnClick(false)\n    .build()\n")))))}_.isMDXComponent=!0}}]);