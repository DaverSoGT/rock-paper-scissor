(this["webpackJsonpgame-rock"]=this["webpackJsonpgame-rock"]||[]).push([[0],[,,,,,function(e,t,s){},function(e,t,s){},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(3),o=s.n(a),i=(s(5),s(2)),u=(s(11),s(12),s(0));function r(e){var t=e.value,s=e.status,c=e.styleValue;e.openRules;return Object(u.jsx)("button",{type:"button",onClick:s,className:c,children:t})}s(14),s(6);var l=s.p+"static/media/icon-paper.8b57a6b1.svg",j=s.p+"static/media/icon-rock.476e90a9.svg",d=s.p+"static/media/icon-scissors.3b1a5d7e.svg";var b=n.a.createContext();function O(e){var t,s=n.a.useState(!1),c=Object(i.a)(s,2),a=c[0],o=c[1],r=function(e,t){var s,c=localStorage.getItem(e);c?s=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),s=t);var a=n.a.useState(s),o=Object(i.a)(a,2),u=o[0],r=o[1];return[u,function(t){var s=JSON.stringify(t);localStorage.setItem(e,s),r(t)}]}("SCORE_V1",""),O=Object(i.a)(r,2),h=O[0],p=O[1],m=n.a.useState(h||0),x=Object(i.a)(m,2),f=x[0],v=x[1],S=n.a.useState(!0),y=Object(i.a)(S,2),B=y[0],g=y[1],k=n.a.useState(!1),R=Object(i.a)(k,2),C=R[0],N=R[1],w=n.a.useState(!1),_=Object(i.a)(w,2),P=_[0],E=_[1],I=n.a.useState(!1),T=Object(i.a)(I,2),V=T[0],Y=T[1],A=n.a.useState(),J=Object(i.a)(A,2),L=J[0],U=J[1],M=n.a.useState(""),F=Object(i.a)(M,2),W=F[0],D=F[1],G=n.a.useState("empty-circle"),K=Object(i.a)(G,2),q=K[0],z=K[1],H=n.a.useState(),Q=Object(i.a)(H,2),X=Q[0],Z=Q[1],$=n.a.useState(),ee=Object(i.a)($,2),te=ee[0],se=ee[1],ce=n.a.useState(!1),ne=Object(i.a)(ce,2),ae=ne[0],oe=ne[1],ie=[l,d,j],ue=3,re=0,le=Math.floor(Math.random()*(ue-re))+re,je=function(){setTimeout((function(){N(!1),0===le?(z(ie[le]),Z("paper-cpu")):1===le?(z(ie[le]),Z("scissors-cpu")):2===le&&(z(ie[le]),Z("rock-cpu")),setTimeout((function(){le===t?(se("Draw"),oe(!0)):0===le&&1===t?(se("You Win"),oe(!0),v(f+1)):0===le&&2===t||1===le&&0===t?(se("You Lose"),oe(!0),v(0===f?0:f-1)):1===le&&2===t||2===le&&0===t?(se("You Win"),oe(!0),v(f+1)):2===le&&1===t&&(se("You Lose"),oe(!0),v(0===f?0:f-1))}),1e3)}),1500)};return n.a.useEffect((function(){p(f)})),Object(u.jsx)(b.Provider,{value:{points:f,hideButtons:B,hideBase:C,paperClick:function(){g(!1),N(!0),Y(!0),E(!0),D("paper"),U(l),je(),t=0},rockClick:function(){g(!1),N(!0),Y(!0),E(!0),D("rock-clicked"),U(j),je(),t=2},scissorsClick:function(){g(!1),N(!0),Y(!0),E(!0),D("scissors-clicked"),U(d),je(),t=1},paper:l,scissors:d,rock:j,results:V,hideResult:P,selectedButtonType:L,selectedButtonStyle:W,showButton:q,showResult:ae,state:te,styleCPUButton:X,comeBack:function(){g(!0),N(!1),E(!1),Y(!1),U(),D(""),z("empty-circle"),Z(),se(),oe(!1)},showRules:a,setShowRules:o,openRules:function(){o(!0)}},children:e.children})}var h=s.p+"static/media/image-rules.1a4a9422.svg",p=s.p+"static/media/icon-close.bde602ec.svg";function m(e){var t=e.setShowRules;return o.a.createPortal(Object(u.jsx)("div",{className:"rules-container",children:Object(u.jsxs)("div",{className:"rules",children:[Object(u.jsx)("h1",{children:"RULES"}),Object(u.jsx)("img",{src:h,alt:"rules"}),Object(u.jsx)(r,{value:"",styleValue:"close",status:function(){t(!1)},children:Object(u.jsx)("img",{src:p,alt:"close-icon"})})]})}),document.getElementById("rules"))}function x(){return Object(u.jsx)("h1",{className:"header__title",children:"ROCK PAPER SCISSORS"})}function f(e){var t=e.points;return Object(u.jsxs)("div",{className:"score__container",children:[Object(u.jsx)("h3",{children:"SCORE"}),Object(u.jsx)("p",{children:t})]})}s(15);function v(e){var t=e.points;return Object(u.jsxs)("div",{className:"header__container",children:[Object(u.jsx)(x,{}),Object(u.jsx)(f,{points:t})]})}s(16);function S(e){var t=e.hide,s=e.children;return Object(u.jsx)("div",{className:t?"buttons__container":"background buttons__container",children:s})}s(17);function y(e){var t=e.hide,s=e.event,c=e.typeButton,n=e.styleButton;return Object(u.jsx)("div",{onClick:s,className:"buttons__button ".concat(n),children:!t&&Object(u.jsx)("img",{src:c,alt:"".concat(c," icon")})})}function B(){var e=n.a.useContext(b),t=e.points,s=e.hideButtons,c=e.hideBase,a=e.paperClick,i=e.paper,l=e.rockClick,j=e.rock,d=e.scissorsClick,O=e.scissors,h=e.results,p=e.hideResult,x=e.selectedButtonType,f=e.selectedButtonStyle,B=e.showButton,g=e.showResult,k=e.state,R=e.comeBack,C=e.styleCPUButton,N=e.openRules,w=e.showRules,_=e.setShowRules;return o.a.createPortal(Object(u.jsxs)("section",{className:"modal",children:[Object(u.jsx)(v,{points:t}),!!s&&Object(u.jsxs)(S,{children:[Object(u.jsx)(y,{hide:c,event:a,typeButton:i,styleButton:"paper"}),Object(u.jsx)(y,{hide:c,event:l,typeButton:j,styleButton:"rock"}),Object(u.jsx)(y,{hide:c,event:d,typeButton:O,styleButton:"scissors"})]}),!!h&&Object(u.jsxs)(S,{hide:p,children:[Object(u.jsx)(y,{typeButton:x,styleButton:f}),Object(u.jsx)("p",{className:"description left",children:"You Picked"}),Object(u.jsx)(y,{hide:c,typeButton:B,styleButton:C||B}),Object(u.jsx)("p",{className:"description right",children:"The CPU Picked"}),!!g&&Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("p",{className:"result",children:k}),Object(u.jsx)(r,{status:R,styleValue:"light go-back",value:"PLAY AGAIN"})]})]}),Object(u.jsx)(r,{value:"RULES",styleValue:"transparent",status:N}),!!w&&Object(u.jsx)(m,{showRules:w,setShowRules:_})]}),document.getElementById("game"))}function g(){return Object(u.jsx)(O,{children:Object(u.jsx)(B,{})})}var k=function(){var e=n.a.useState(!1),t=Object(i.a)(e,2),s=t[0],c=t[1],a=n.a.useState(!0),o=Object(i.a)(a,2),l=o[0],j=o[1];return Object(u.jsxs)(n.a.Fragment,{children:[!!l&&Object(u.jsx)(r,{value:"START",status:function(){c(!0),j(!1)},styleValue:"light"}),!!s&&Object(u.jsx)(g,{})]})};o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.6907d372.chunk.js.map