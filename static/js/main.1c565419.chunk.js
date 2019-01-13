(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,n,t){e.exports=t(81)},47:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(17),o=t.n(i),l=(t(47),t(18)),c=t(1),s=t(7),u=t(8),p=t(10),d=t(9),g=t(11),h=t(40),m=t(16),f=t.n(m),v="https://api.github.com";function b(e){var n="".concat(v,"/users/").concat(e,"/repos?per_page=250");return f.a.get(n).then(function(e){return e.data})}function x(e){return f.a.all([f.a.get("".concat(v,"/users/").concat(e)),f.a.get("".concat(v,"/users/").concat(e,"/orgs"))]).then(function(e){var n=Object(h.a)(e,2),t=n[0],a=n[1];return{user:t.data,orgs:a.data}})}var E=t(2);function O(){var e=Object(c.a)(["\n    fill: white;\n    vertical-align: middle;\n    text-align: center;\n    position: relative;\n    padding: 0 20px;\n"]);return O=function(){return e},e}function j(){var e=Object(c.a)(["\n    input{\n        background-color: hsla(0,0%,100%,.125);\n        min-height: 26px;\n        font-size: 16px;\n        line-height: 20px;\n        border: none;\n        padding: 6px 8px;\n        vertical-align: middle;\n        border-radius: 3px;\n        width: 70%;\n        color: white;\n    }\n    button{\n        background-color: #28a745;\n        background-image: linear-gradient(-180deg,#34d058,#28a745 90%);\n        color: #fff;\n        -webkit-appearance: none;\n        -webkit-user-select: none;\n        appearance: none;\n        background-position: -1px -1px;\n        background-repeat: repeat-x;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27,31,35,.2);\n        border-radius: .25em;\n        margin-left: 2%;\n        cursor: pointer;\n        display: inline-block;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 6px 12px;\n        position: relative;\n        user-select: none;\n        vertical-align: middle;\n        white-space: nowrap;\n    }\n    background-color: #24292e;\n    color: hsla(0,0%,100%,.75);\n    padding-bottom: 12px;\n    padding-top: 12px; \n"]);return j=function(){return e},e}var w=E.a.div(j()),y=E.a.svg(O()),k=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).inputChanged=function(e){return t.setState({inputText:e.target.value.trim()})},t.buttonClicked=function(){t.state.inputText&&(t.props.apiCall(b,t.state.inputText),t.props.apiCall(x,t.state.inputText))},t.state={},t}return Object(g.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement("a",{href:"https://github.com/","data-hotkey":"g d","aria-label":"Homepage","data-ga-click":"Header, go to dashboard, icon:logo"},r.a.createElement(y,{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),r.a.createElement("input",{type:"text",placeholder:"Please enter github username...",onChange:this.inputChanged}),r.a.createElement("button",{onClick:this.buttonClicked},"Search"))}}]),n}(r.a.Component),C=t(38);function L(){var e=Object(c.a)(["\n    height: 100%:\n    width: 100%;\n"]);return L=function(){return e},e}var z=E.a.div(L()),N=function(e){var n=e.component,t=e.children;return n.failed?r.a.createElement("p",null,n.err||"Sorry there's an issue with connection"):n&&r.a.createElement(z,null,n.isLoading?r.a.createElement("div",{className:"loading"}):r.a.createElement(C.Fade,null,t))},S=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).handleImageLoaded=function(e){t.setState({loaded:!0}),e.target.classList.remove("preLoad")},t.state={loaded:!1},t}return Object(g.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.source,t=e.className;return r.a.createElement("div",{className:t},r.a.createElement("div",{style:{height:"20%",width:"20%"},className:this.state.loaded?"":"loading"}),r.a.createElement("img",{className:"preLoad",onLoad:this.handleImageLoaded,src:n,alt:"user avatar"}))}}]),n}(r.a.Component);function I(){var e=Object(c.a)(["\n    img{\n        height: 100%;\n        width: auto;\n        position: relative;\n        opacity: 1;\n        transition: opacity 0.5s ease-in-out;\n        border-radius: 3px;\n    }\n    div{\n        position: absolute;\n    }\n    height: 80px;\n    width: 80px;\n    position: relative;\n    display: grid;\n    align-self: center;\n"]);return I=function(){return e},e}function _(){var e=Object(c.a)(["\n    div{\n        h4{\n            font-size: 14px;\n            color: #24292e;\n            white-space: normal;\n        }\n        p{\n            font-size: 14px;\n            color: #24292e;\n            white-space: normal;\n        }\n        padding-left: 20px;\n    }\n    display: grid;\n    justify-content: center;\n    grid-template-columns: 1fr 2fr;\n    position: absolute;\n    heigth: 250px;\n    width: 250px;\n    background-color: white;\n    border: 1px solid black;\n    padding: 20px;\n    z-index: 100;\n    transform: translateY(-130%);\n"]);return _=function(){return e},e}var H=E.a.div(_()),M=Object(E.a)(S)(I()),T=function(e){var n=e.orgs;return r.a.createElement(H,null,r.a.createElement(M,{source:n.avatar_url}),r.a.createElement("div",null,r.a.createElement("h4",null,n.login),r.a.createElement("p",null,n.description)))};function B(){var e=Object(c.a)(["\n    img{\n        height: 100%;\n        width: auto;\n        position: relative;\n        opacity: 1;\n        transition: opacity 0.5s ease-in-out;\n        border-radius: 3px;\n    }\n    div{\n        position: absolute;\n    }\n    height: 35px;\n    width: 35px;\n    position: relative;\n"]);return B=function(){return e},e}function R(){var e=Object(c.a)(["\n    ul{\n        list-style: none;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-row-gap: 10px;\n        overflow-y: scroll;\n        max-width: 230px;\n        justify-content: flex-start;\n        padding: 0;\n        white-space: nowrap;\n        height: 100%;\n        min-height: 100px;\n    }\n    h4{\n        text-align: left;\n    }\n"]);return R=function(){return e},e}var A=E.a.div(R()),J=Object(E.a)(S)(B()),P=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).onHover=function(e){var n="LI"===e.target.nodeName?e.target:"LI"===e.target.parentNode.nodeName?e.target.parentNode:e.target.parentNode.parentNode;t.setState({hovered:n.id})},t.onLeave=function(){t.setState({hovered:!1})},t.state={hovered:!1},t}return Object(g.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this,n=this.props.orgs,t=n&&n.map(function(n,t){return r.a.createElement("li",{key:t,id:t,onMouseOver:e.onHover,onMouseLeave:e.onLeave},r.a.createElement(J,{source:n.avatar_url}),parseInt(e.state.hovered)===t&&r.a.createElement(T,{orgs:n}))});return r.a.createElement(A,null,r.a.createElement("h4",null,"Organizations"),t.length?r.a.createElement("ul",null,t):r.a.createElement("p",null,"Nothing to display"))}}]),n}(r.a.Component);function F(){var e=Object(c.a)(["\n    img{\n        height: 100%;\n        width: auto;\n        position: relative;\n        opacity: 1;\n        transition: opacity 0.5s ease-in-out;\n    }\n    div{\n        position: absolute;\n    }\n    height: 229px;\n    width: 229px;\n    position: relative;\n"]);return F=function(){return e},e}function Y(){var e=Object(c.a)(["\n    h1{\n        font-size: 26px;\n        line-height: 30px;\n        color: #24292e;\n        margin: 0;\n        margin-top: 0.67em;\n    }\n    h2{\n        color: #666;\n        font-size: 20px;\n        font-style: normal;\n        font-weight: 300;\n        line-height: 24px;\n        margin: 0;\n    }\n    span{\n        font-size: 14px;\n        padding-left: 10px;\n        color: #24292e;\n    }\n    svg{\n        vertical-align: text-bottom;\n        fill: #6a737d;\n    }\n    text-align: left;\n    line-height: 30px;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 0.67em;\n    \n"]);return Y=function(){return e},e}var q=E.a.div(Y()),D=Object(E.a)(S)(F()),G=function(e){var n=e.user;return r.a.createElement("div",null,r.a.createElement(D,{source:n.avatar_url}),r.a.createElement(q,null,r.a.createElement("h1",null,n.name),r.a.createElement("h2",null,n.login),n.location&&r.a.createElement("svg",{viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"})),r.a.createElement("span",null,n.location)))},K=function(e){var n=e.userInfo;return r.a.createElement(N,{component:n},r.a.createElement(G,{user:n.user}),r.a.createElement(P,{orgs:n.orgs}))};function Q(){var e=Object(c.a)(["\n    li{\n        h4{\n            a{\n                text-decoration: none;\n            }\n        }\n        p{\n            color: #586069!important;\n            font-size: 12px!important;\n        }\n        height: 100px;\n        width: 300px;\n        border: 1px solid gray;\n        padding: 16px!important;\n        position: relative;\n        overflow: scroll;\n        margin: 0 10px;\n    }\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-row-gap: 20px;\n    list-style: none;\n    overflow-y: scroll;\n    max-height: 100%;\n    height: 50vh;\n    font-size: 14px;\n    padding: 20px;\n\n"]);return Q=function(){return e},e}var U=E.a.ul(Q()),V=function(e){var n=e.repos,t=e.page,a=n.length&&n.slice(t-5,t).map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("h4",null,r.a.createElement("a",{href:e.svn_url},e.name)),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.language))});return r.a.createElement(U,null,a)};function W(){var e=Object(c.a)(["\n    width: 100px;\n    height: 30px;\n    font-size: 15px;\n    text-align: center;\n    margin-left: 10px;\n"]);return W=function(){return e},e}var X=E.a.select(W()),Z=function(e){for(var n=e.repo,t=e.onChange,a=Math.ceil(n.length/5),i=[],o=0;o<a;o++)i.push(r.a.createElement("option",{key:o,value:o},o+1));return r.a.createElement(X,{onChange:t},i)},$=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).onSelectChange=function(e){var n=parseInt(e.target.selectedOptions[0].innerHTML);t.setState({page:n})},t.state={page:1},t}return Object(g.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.repo;return r.a.createElement(N,{component:e},r.a.createElement("h1",null,"Repositories"),e.repositories&&r.a.createElement("div",null,r.a.createElement(V,{repos:e.repositories,page:5*this.state.page}),r.a.createElement("span",null,"Page:"),r.a.createElement(Z,{onChange:this.onSelectChange,repo:e.repositories})))}}]),n}(r.a.Component);function ee(){var e=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-top: 50px;\n    margin-left: 50px;\n    heigth: 100%;\n    width: 100%;\n"]);return ee=function(){return e},e}var ne=E.a.div(ee()),te=function(e){var n=e.apiHandler,t=e.userInfo,a=e.repositories;return r.a.createElement("div",{className:"App"},r.a.createElement(k,{apiCall:n}),r.a.createElement(ne,null,r.a.createElement(K,{userInfo:t}),r.a.createElement($,{repo:a})))},ae=t(24),re=t.n(ae),ie=t(39),oe=t(12),le=t(15),ce=b.name.toString(),se=x.name.toString();console.log(ce,se);var ue=Object(le.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{repositories:!1,user:!1},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"b":return Object(oe.a)({},e,{repositories:{repositories:n.response,isLoading:n.isLoading}});case"b_failed":return Object(oe.a)({},e,{repositories:Object(oe.a)({},n.response,{isLoading:n.isLoading})});case"x":case"x_failed":return Object(oe.a)({},e,{user:Object(oe.a)({},n.response,{isLoading:n.isLoading})});default:return e}},Object(le.a)(function(e){return function(n){return function(t){return console.dir(t),t.type?n(t):e}}}));ue.subscribe(function(){return console.log("state has changed",ue.getState())});var pe=ue,de=function(){var e=Object(ie.a)(re.a.mark(function e(n,t){var a,r;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.name.toString(),e.prev=1,pe.dispatch({type:a,isLoading:!0}),e.next=5,n(t);case 5:r=e.sent,pe.dispatch({type:a,isLoading:!1,response:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),pe.dispatch({type:a+"_failed",isLoading:!1,response:{failed:!0,err:e.t0.response&&e.t0.response.data.message}});case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(n,t){return e.apply(this,arguments)}}(),ge=Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{repositories:e.repositories,userInfo:e.user}},{apiHandler:de})(te);o.a.render(r.a.createElement(l.a,{store:pe},r.a.createElement(ge,null)),document.getElementById("root"))}},[[42,2,1]]]);
//# sourceMappingURL=main.1c565419.chunk.js.map