(self.webpackChunkacra=self.webpackChunkacra||[]).push([[514,608],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Oe}});var r=n(7294),a=n(3905),o=n(2263),l=n(6291),i=n(2611),c=n(2122),s=n(9756),u=n(6010),d=n(6700),p=n(944),m=n(1839),h=n(3783),f=n(7898),y=n(6742),b=n(3919),g=n(5537),v=function(e){return r.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(4478),E=n(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",_="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",T="menu_Bmed",j="menuLinkText_2aKo",O="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",S="collapseSidebarButtonIcon_3E-R",P="sidebarMenuIcon_fgN0",w="sidebarMenuCloseIcon_1lpH",I="menuLinkExternal_1OhN";var L=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},B=(0,r.memo)((function(e){var t=e.items,n=(0,s.Z)(e,["items"]);return t.map((function(e,t){return r.createElement(A,(0,c.Z)({key:t,item:e},n))}))}));function A(e){switch(e.item.type){case"category":return r.createElement(R,e);case"link":default:return r.createElement(D,e)}}function R(e){var t,n,a,o=e.item,l=e.onItemClick,i=e.collapsible,d=e.activePath,p=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),m=o.items,h=o.label,f=L(o,d),y=(n=f,a=(0,r.useRef)(n),(0,r.useEffect)((function(){a.current=n}),[n]),a.current),b=(0,r.useState)((function(){return!!i&&(!f&&o.collapsed)})),g=b[0],v=b[1],k=(0,r.useRef)(null),E=(0,r.useState)(void 0),C=E[0],N=E[1],_=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){f&&!y&&g&&v(!1)}),[f,y,g]);var Z=(0,r.useCallback)((function(e){e.preventDefault(),C||_(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[C]);return 0===m.length?null:r.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[j]=!i,t)),onClick:i?Z:void 0,href:i?"#!":void 0},p),h),r.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){g||_(!1)}},r.createElement(B,{items:m,tabIndex:g?"-1":"0",onItemClick:l,collapsible:i,activePath:d})))}function D(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,d=n.label,p=L(n,o);return r.createElement("li",{className:"menu__list-item",key:d},r.createElement(y.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":p},t[I]=!(0,b.Z)(i),t)),to:i},(0,b.Z)(i)&&{isNavLink:!0,exact:!0,onClick:a},l),d))}function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",x),onClick:t},r.createElement(v,{className:S}))}function F(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,u.Z)(P,w)},"\xd7"):r.createElement(k.Z,{className:P,height:24,width:24}))}var W=function(e){var t,n,a=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,c=e.onCollapse,s=e.isHidden,y=function(){var e=(0,p.Z)().isAnnouncementBarClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),b=(0,d.LU)(),v=b.navbar.hideOnScroll,k=b.hideableSidebar,E=(0,p.Z)().isAnnouncementBarClosed,j=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var a=(0,h.Z)();return(0,r.useEffect)((function(){a===h.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=j.showResponsiveSidebar,S=j.closeResponsiveSidebar,P=j.toggleResponsiveSidebar;return r.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=v,t[_]=s,t))},v&&r.createElement(g.Z,{tabIndex:-1,className:Z}),r.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",T,(n={"menu--show":x},n[O]=!E&&y,n))},r.createElement(F,{responsiveSidebarOpened:x,onClick:P}),r.createElement("ul",{className:"menu__list"},r.createElement(B,{items:o,onItemClick:S,collapsible:i,activePath:a}))),k&&r.createElement(M,{onClick:c}))},H={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},z={Prism:n(7410).Z,theme:H};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=/\r\n|\r|\n/,J=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},V=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=$({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=$({},n,{backgroundColor:null}),a};function G(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var X=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),U(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Y(e.theme,e.language):void 0;return t.themeDict=n})),U(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=$({},G(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?$({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),U(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),U(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=$({},G(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?$({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),U(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=V(u,d.type),d.alias&&(u=V(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(K),m=p.length;i.push({types:u,content:p[0]});for(var h=1;h<m;h++)J(i),c.push(i=[]),i.push({types:u,content:p[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return J(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var q=n(7594),Q=n.n(q),ee={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},te=n(5350),ne=function(){var e=(0,d.LU)().prism,t=(0,te.Z)().isDarkTheme,n=e.theme||ee,r=e.darkTheme||n;return t?r:n},re="codeBlockContainer_K1bP",ae="codeBlockContent_hGly",oe="codeBlockTitle_eoMF",le="codeBlock_23N8",ie="codeBlockWithTitle_2JqI",ce="copyButton_Ue-o",se="codeBlockLines_39YC",ue=/{([\d,-]+)}/,de=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function pe(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,d.LU)().prism,i=(0,r.useState)(!1),s=i[0],p=i[1],m=(0,r.useState)(!1),h=m[0],f=m[1];(0,r.useEffect)((function(){f(!0)}),[]);var y=(0,d.bc)(a)||o,b=(0,r.useRef)(null),g=[],v=ne(),k=Array.isArray(t)?t.join(""):t;if(a&&ue.test(a)){var C=a.match(ue)[1];g=Q()(C).filter((function(e){return e>0}))}var N=n&&n.replace(/language-/,"");!N&&l.defaultLanguage&&(N=l.defaultLanguage);var _=k.replace(/\n$/,"");if(0===g.length&&void 0!==N){for(var Z,T="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return de(["js","jsBlock"]);case"jsx":case"tsx":return de(["js","jsBlock","jsx"]);case"html":return de(["js","jsBlock","html"]);case"python":case"py":return de(["python"]);default:return de()}}(N),O=k.replace(/\n$/,"").split("\n"),x=0;x<O.length;){var S=x+1,P=O[x].match(j);if(null!==P){switch(P.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":T+=S+",";break;case"highlight-start":Z=S;break;case"highlight-end":T+=Z+"-"+(S-1)+","}O.splice(x,1)}else x+=1}g=Q()(T),_=O.join("\n")}var w=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(_),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(X,(0,c.Z)({},z,{key:String(h),theme:v,code:_,language:N}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:re},y&&r.createElement("div",{style:a,className:oe},y),r.createElement("div",{className:(0,u.Z)(ae,N)},r.createElement("div",{tabIndex:0,className:(0,u.Z)(n,le,"thin-scrollbar",(t={},t[ie]=y,t))},r.createElement("div",{className:se,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:b,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(ce),onClick:w},s?r.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var me="enhancedAnchor_2LWZ",he=function(e){return function(t){var n,a=t.id,o=(0,s.Z)(t,["id"]),l=(0,d.LU)().navbar.hideOnScroll;return a?r.createElement(e,o,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[me]=!l,n)),id:a}),o.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,E.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,o)}},fe={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(pe,e):r.createElement("code",e)},a:function(e){return r.createElement(y.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(pe,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:he("h1"),h2:he("h2"),h3:he("h3"),h4:he("h4"),h5:he("h5"),h6:he("h6")},ye=n(4608),be=n(5977),ge="docPage_31aa",ve="docMainContainer_3ufF",ke="docMainContainerEnhanced_3NYZ",Ee="docSidebarContainer_3Kbt",Ce="docSidebarContainerHidden_3pA8",Ne="collapsedDocSidebar_2JMH",_e="expandSidebarButtonIcon_1naQ",Ze="docItemWrapperEnhanced_2vyJ",Te="docItemWrapper_3FMP";function je(e){var t,n,l,c,s,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,f=(0,o.default)(),y=f.siteConfig,b=f.isClient,g=m.pluginId,k=m.permalinkToSidebar,C=m.docsSidebars,N=m.version,_=k[p.path],Z=C[_],T=(0,r.useState)(!1),j=T[0],O=T[1],x=(0,r.useState)(!1),S=x[0],P=x[1],w=(0,r.useCallback)((function(){S&&P(!1),O(!j)}),[S]);return r.createElement(i.Z,{key:b,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(g,N)}},r.createElement("div",{className:ge},Z&&r.createElement("div",{className:(0,u.Z)(Ee,(t={},t[Ce]=j,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ee)&&j&&P(!0)},role:"complementary"},r.createElement(W,{key:_,sidebar:Z,path:p.path,sidebarCollapsible:null==(n=null==(l=y.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:w,isHidden:S}),S&&r.createElement("div",{className:Ne,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:w,onClick:w},r.createElement(v,{className:_e}))),r.createElement("main",{className:(0,u.Z)(ve,(c={},c[ke]=j||!Z,c))},r.createElement("div",{className:(0,u.Z)("container padding-vert--lg",Te,(s={},s[Ze]=j,s))},r.createElement(a.Zo,{components:fe},h)))))}var Oe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,be.LX)(a.pathname,e)}));return o?r.createElement(je,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t)):r.createElement(ye.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(2611),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);