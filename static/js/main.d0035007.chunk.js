(this["webpackJsonpgame-rock"]=this["webpackJsonpgame-rock"]||[]).push([[0],[,,,,,function(t,e,c){},function(t,e,c){},,,,,function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var s=c(1),n=c.n(s),a=c(3),i=c.n(a),o=(c(5),c(2)),u=(c(11),c(12),c(0));function r(t){var e=t.value,c=t.status,s=t.styleValue;t.openRules;return Object(u.jsx)("button",{type:"button",onClick:c,className:s,children:e})}var j=c.p+"static/media/icon-paper.8b57a6b1.svg",l=c.p+"static/media/icon-rock.476e90a9.svg",b=c.p+"static/media/icon-scissors.3b1a5d7e.svg",d=(c(14),c(6),c.p+"static/media/image-rules.1a4a9422.svg"),O=c.p+"static/media/icon-close.bde602ec.svg";function h(t){var e=t.setShowRules;return i.a.createPortal(Object(u.jsxs)("section",{className:"rules",children:[Object(u.jsx)("h1",{children:"RULES"}),Object(u.jsx)("img",{src:d,alt:"rules"}),Object(u.jsx)(r,{value:"",styleValue:"close",status:function(){e(!1)},children:Object(u.jsx)("img",{src:O,alt:"close-icon"})})]}),document.getElementById("rules"))}function p(){return Object(u.jsx)("h1",{className:"header__title",children:"ROCK PAPER SCISSORS"})}function m(t){var e=t.points;return Object(u.jsxs)("div",{className:"score__container",children:[Object(u.jsx)("h3",{children:"SCORE"}),Object(u.jsx)("p",{children:e})]})}c(15);function x(t){var e=t.points;return Object(u.jsxs)("div",{className:"header__container",children:[Object(u.jsx)(p,{}),Object(u.jsx)(m,{points:e})]})}c(16);function f(t){var e=t.hide,c=t.children;return Object(u.jsx)("div",{className:e?"buttons__container":"background buttons__container",children:c})}c(17);function v(t){var e=t.hide,c=t.event,s=t.typeButton,n=t.styleButton;return Object(u.jsx)("div",{onClick:c,className:"buttons__button ".concat(n),children:!e&&Object(u.jsx)("img",{src:s,alt:"".concat(s," icon")})})}function S(){var t,e=n.a.useState(!1),c=Object(o.a)(e,2),s=c[0],a=c[1],d=n.a.useState(0),O=Object(o.a)(d,2),p=O[0],m=O[1],S=n.a.useState(!0),y=Object(o.a)(S,2),g=y[0],k=y[1],B=n.a.useState(!1),N=Object(o.a)(B,2),_=N[0],R=N[1],P=n.a.useState(!1),E=Object(o.a)(P,2),w=E[0],C=E[1],Y=n.a.useState(!1),A=Object(o.a)(Y,2),I=A[0],L=A[1],T=n.a.useState(),V=Object(o.a)(T,2),M=V[0],U=V[1],F=n.a.useState(""),J=Object(o.a)(F,2),W=J[0],D=J[1],G=n.a.useState("empty-circle"),K=Object(o.a)(G,2),q=K[0],z=K[1],H=n.a.useState(),Q=Object(o.a)(H,2),X=Q[0],Z=Q[1],$=n.a.useState(),tt=Object(o.a)($,2),et=tt[0],ct=tt[1],st=n.a.useState(!1),nt=Object(o.a)(st,2),at=nt[0],it=nt[1],ot=[j,b,l],ut=3,rt=0,jt=Math.floor(Math.random()*(ut-rt))+rt,lt=function(){setTimeout((function(){R(!1),0===jt?(z(ot[jt]),Z("paper-cpu")):1===jt?(z(ot[jt]),Z("scissors-cpu")):2===jt&&(z(ot[jt]),Z("rock-cpu")),setTimeout((function(){jt===t?(ct("Draw"),it(!0)):0===jt&&1===t?(ct("You Win"),it(!0),m(p+1)):0===jt&&2===t||1===jt&&0===t?(ct("You Lose"),it(!0),m(p-1)):1===jt&&2===t||2===jt&&0===t?(ct("You Win"),it(!0),m(p+1)):2===jt&&1===t&&(ct("You Lose"),it(!0),m(p-1))}),1e3)}),1500)};return i.a.createPortal(Object(u.jsxs)("section",{className:"modal",children:[Object(u.jsx)(x,{points:p}),!!g&&Object(u.jsxs)(f,{children:[Object(u.jsx)(v,{hide:_,event:function(){k(!1),R(!0),L(!0),C(!0),D("paper"),U(j),lt(),t=0},typeButton:j,styleButton:"paper"}),Object(u.jsx)(v,{hide:_,event:function(){k(!1),R(!0),L(!0),C(!0),D("rock-clicked"),U(l),lt(),t=2},typeButton:l,styleButton:"rock"}),Object(u.jsx)(v,{hide:_,event:function(){k(!1),R(!0),L(!0),C(!0),D("scissors-clicked"),U(b),lt(),t=1},typeButton:b,styleButton:"scissors"})]}),!!I&&Object(u.jsxs)(f,{hide:w,children:[Object(u.jsx)(v,{typeButton:M,styleButton:W}),Object(u.jsx)("p",{className:"description left",children:"You Picked"}),Object(u.jsx)(v,{hide:_,typeButton:q,styleButton:X||q}),Object(u.jsx)("p",{className:"description right",children:"The CPU Picked"}),!!at&&Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("p",{className:"result",children:et}),Object(u.jsx)(r,{status:function(){k(!0),R(!1),C(!1),L(!1),U(),D(""),z("empty-circle"),Z(),ct(),it(!1)},styleValue:"light go-back",value:"PLAY AGAIN"})]})]}),Object(u.jsx)(r,{value:"RULES",styleValue:"transparent",status:function(){a(!0)}}),!!s&&Object(u.jsx)(h,{showRules:s,setShowRules:a})]}),document.getElementById("game"))}var y=function(){var t=n.a.useState(!1),e=Object(o.a)(t,2),c=e[0],s=e[1],a=n.a.useState(!0),i=Object(o.a)(a,2),j=i[0],l=i[1];return Object(u.jsxs)(n.a.Fragment,{children:[!!j&&Object(u.jsx)(r,{value:"START",status:function(){s(!0),l(!1)},styleValue:"light"}),!!c&&Object(u.jsx)(S,{})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.d0035007.chunk.js.map