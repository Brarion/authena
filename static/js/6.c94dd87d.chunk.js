(this.webpackJsonpauthena=this.webpackJsonpauthena||[]).push([[6],{47:function(e,t,s){"use strict";s.r(t),s.d(t,"Task",(function(){return E}));var c=s(0),a=s.n(c),n=s(2),r=s(57),i=s(75),l=s.n(i),d=s(58),j=s(62),o=s(60),b=s(11),u=s(27),_=s(61),O=s(10),x=s(65),h=s(64),v=s(63),p=s(5),m=s(76),y=s.n(m),f=s(9),T=function(){var e=a.a.useState(""),t=Object(p.a)(e,2),s=t[0],c=t[1];return Object(f.jsx)("div",{className:y.a.automaticTask,children:Object(f.jsxs)("div",{className:y.a.step,children:[Object(f.jsx)("div",{className:"".concat(y.a.stepCount," ").concat(s?y.a.done:""),children:"1"}),Object(f.jsxs)("div",{className:y.a.contentPart,children:[Object(f.jsx)("div",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(f.jsx)("div",{children:["JavaScript","Python","Go"].map((function(e){return Object(f.jsx)("div",{className:"".concat(y.a.language," ").concat(e===s?y.a.selectedLanguage:""),onClick:function(){return c(e)},children:e},e)}))})]})]})})},N=function(){return Object(f.jsx)("div",{children:"\u0440\u0443\u0447\u043a\u0430\u043c\u0438"})},g=function(){return Object(f.jsx)("div",{children:"\u0442\u0435\u0441\u0442\u0438\u043a"})},k=s(77),C=s.n(k),A=function(e){var t=e.setTab,s=e.tab;return Object(f.jsxs)("div",{className:C.a.tabsWrapper,children:[Object(f.jsx)("div",{className:C.a.tabs,children:["\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b","\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u043f\u044b\u0442\u043e\u043a"].map((function(e,c){return Object(f.jsxs)("div",{className:C.a.tab,onClick:function(){return t(c)},children:[Object(f.jsx)("div",{className:s===c?C.a.selectedTab:"",children:e}),s===c&&Object(f.jsx)("div",{className:C.a.underline})]},e)}))}),Object(f.jsx)("div",{className:C.a.divider})]})},W=s(78),L=s.n(W),S=function(e){var t=e.taskType,s=a.a.useState(0),c=Object(p.a)(s,2),n=c[0],r=c[1];return Object(f.jsxs)("div",{className:L.a.loadTaskWrapper,children:[Object(f.jsx)(A,{setTab:r,tab:n}),0===n&&function(){switch(t){case O.b.AUTOMATIC_CHECK:return Object(f.jsx)(T,{});case O.b.MANUAL_CHECK:return Object(f.jsx)(N,{});case O.b.TEST:default:return Object(f.jsx)(g,{})}}(),1===n&&Object(f.jsx)("div",{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u043f\u044b\u0442\u043e\u043a"})]})},E=function(){var e,t,s,c,a,i,p,m=Object(n.g)();Object(b.b)(u.e.taskGate,m.taskID);var y=Object(b.c)(u.e.$store),T=y.task,N=y.pending;Object(_.a)(null!==(e=null===T||void 0===T?void 0:T.name)&&void 0!==e?e:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",[T]);return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{style:{height:"100vh"},children:[Object(f.jsx)(r.a,{}),Object(f.jsxs)("main",{className:l.a.main,children:[Object(f.jsx)(d.a,{}),Object(f.jsx)(j.a,{className:l.a.mainWrapper,children:N||null===T?Object(f.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{}),Object(f.jsxs)("div",{className:l.a.content,children:[Object(f.jsx)("h2",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 - ".concat(T.name)}),Object(f.jsx)("h3",{children:"\u041e\u0446\u0435\u043d\u043a\u0430: ".concat(T.status).concat(T.statusDate?", ".concat(null===(t=T.statusDate)||void 0===t?void 0:t.toLocaleDateString()):"")}),Object(f.jsxs)("div",{className:l.a.taskInfo,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"\u041a\u0443\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c:\xa0"}),Object(f.jsx)("span",{children:"".concat(T.teacher.surname," ").concat(T.teacher.name[0],". ").concat(void 0!==T.teacher.patronymic?"".concat(T.teacher.patronymic[0],"."):"")})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"\u0422\u0438\u043f \u0437\u0430\u0434\u0430\u043d\u0438\u044f:"}),Object(f.jsx)("span",{className:l.a.icon,children:function(e){switch(e){case O.b.AUTOMATIC_CHECK:return Object(f.jsx)(x.a,{});case O.b.MANUAL_CHECK:return Object(f.jsx)(h.a,{});case O.b.TEST:default:return Object(f.jsx)(v.a,{})}}(T.type)}),Object(f.jsx)("span",{children:function(e){switch(e){case O.b.AUTOMATIC_CHECK:return"\u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0441 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u043e\u0439";case O.b.MANUAL_CHECK:return"\u0441 \u0440\u0443\u0447\u043d\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u043e\u0439";case O.b.TEST:default:return"\u0441 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430"}}(T.type)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"\u0421\u0440\u043e\u043a \u0441\u0434\u0430\u0447\u0438:\xa0"}),Object(f.jsx)("span",{children:"\u043d\u0430 \u043e\u0446\u0435\u043d\u043a\u0443 \u041e\u0422\u041b\u0418\u0427\u041d\u041e - \u0434\u043e ".concat(null!==(s=null===(c=T.deadline)||void 0===c?void 0:c.five.toLocaleDateString())&&void 0!==s?s:"\u043d\u0435\u0442 \u0441\u0440\u043e\u043a\u0430","; \u043d\u0430 \u043e\u0446\u0435\u043d\u043a\u0443 \u0425\u041e\u0420\u041e\u0428\u041e - \u0434\u043e ").concat(null!==(a=null===(i=T.deadline)||void 0===i?void 0:i.four.toLocaleDateString())&&void 0!==a?a:"\u043d\u0435\u0442 \u0441\u0440\u043e\u043a\u0430")})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"\u041d\u0430\u0443\u0434\u0430\u0447\u043d\u044b\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a:\xa0"}),Object(f.jsx)("span",{children:"".concat(T.countOfTry[0],"/").concat(T.countOfTry[1])})]})]}),Object(f.jsx)(S,{taskType:T.type})]})]})}),Object(f.jsx)(H,{resources:null!==(p=null===T||void 0===T?void 0:T.resources)&&void 0!==p?p:[]})]})]})})},H=function(e){var t=e.resources;return Object(f.jsxs)("div",{className:l.a.resourcesWrapper,children:[Object(f.jsx)("h2",{children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),t.length>0?t.map((function(e,s){return Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)("div",{className:l.a.divider}),Object(f.jsx)("div",{className:l.a.resource,children:e}),t.length===s+1&&Object(f.jsx)("div",{className:l.a.divider})]},s)})):Object(f.jsx)("div",{className:l.a.resource,children:"\u041f\u0443\u0441\u0442\u043e \ud83d\ude25"})]})}},75:function(e,t,s){e.exports={main:"styles_main__2MX_f",mainWrapper:"styles_mainWrapper__1u6Fs",content:"styles_content__2HLBX",taskInfo:"styles_taskInfo__1xSi4",icon:"styles_icon__16VA1",resourcesWrapper:"styles_resourcesWrapper__1ttTo",divider:"styles_divider__h8mfJ",resource:"styles_resource__NwTVb"}},76:function(e,t,s){e.exports={automaticTask:"styles_automaticTask__3y4RR",step:"styles_step__26gH_",stepCount:"styles_stepCount__2xBbp",done:"styles_done__zRC5o",contentPart:"styles_contentPart__3kSpb",language:"styles_language__K3m2o",selectedLanguage:"styles_selectedLanguage__3XgRW"}},77:function(e,t,s){e.exports={tabsWrapper:"styles_tabsWrapper__1dimx",tabs:"styles_tabs__16kYU",tab:"styles_tab__mmTbJ",selectedTab:"styles_selectedTab__3LM79",underline:"styles_underline__Q8_Lu",divider:"styles_divider__5Ezsm"}},78:function(e,t,s){e.exports={loadTaskWrapper:"styles_loadTaskWrapper__3FxDv"}}}]);
//# sourceMappingURL=6.c94dd87d.chunk.js.map