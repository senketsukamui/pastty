(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),s=a.n(i),o=a(9),c=a(15),l=a(34),u=a(35),d=a.n(u),p={previousEditorValue:"// Enter your code here\n",editorValue:"// Enter your code here\n",editorSyntax:"java",editorStatus:"initial",editorDescription:null,createdPasteLink:null,pasteAuthor:null,pasteTimeCreated:null},m=Object(c.c)({guest:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"UPDATE_GUEST_PASTE":return Object.assign({},e,{editorValue:t.payload});case"UPDATE_GUEST_SYNTAX":return Object.assign({},e,{editorSyntax:t.payload});case"CREATE_PASTE":return Object.assign({},e,{editorStatus:"loading"});case"CREATE_PASTE_SUCCESS":return Object.assign({},e,{previousEditorValue:e.editorValue,createdPasteLink:t.payload,editorStatus:"paste"});case"FETCH_PASTE":return Object.assign({},e,{editorStatus:"loading"});case"FETCH_PASTE_SUCCESS":return Object.assign({},e,{editorStatus:"paste",editorValue:t.payload.code,editorSyntax:t.payload.type,editorDescription:t.payload.description,pasteTimeCreated:t.payload.timeOfCreation,pasteAuthor:t.payload.author});case"FETCH_PASTE_FAIL":case"SET_STATUS_TO_GUEST":return Object.assign({},e,p);case"FORK_PASTE":return Object.assign({},e,{createdPasteLink:null,editorStatus:"initial"});default:return e}}}),h=[l.a,d.a],E=Object(c.d)(m,{},c.a.apply(void 0,h)),v=a(6),b=a(7),f=a(11),S=a(8),y=a(10),g=a(131),T=a(130),O=a(5),j=a(17),N=a.n(j),P=a(36),A=a.n(P),C=function(t,n){return function(a){a({type:"CREATE_PASTE"});var e={method:"PUT",body:JSON.stringify(t),headers:{ContentType:"application/json"}};fetch("http://sn.a6raywa1cher.com:9000/script",e).then(function(e){return e.json()}).then(function(e){var t=e.shortname;a({type:"CREATE_PASTE_SUCCESS"}),n.push("/"+t)})}},_=function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(f.a)(this,Object(S.a)(a).call(this,e))).handleSelect=t.handleSelect.bind(Object(O.a)(Object(O.a)(t))),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"handleSelect",value:function(e){var t=e.target.value;this.props.setEditorSyntax(t),window.ace.edit("paste").getSession().setMode("ace/mode/"+t)}},{key:"render",value:function(){return r.a.createElement("select",{value:this.props.editorSyntax,className:"form-control",onChange:this.handleSelect},r.a.createElement("option",{value:"java"},"Java 8"),r.a.createElement("option",{value:"c_cpp"},"C / C++"),r.a.createElement("option",{value:"javascript"},"JavaScript"),r.a.createElement("option",{value:"kotlin"},"Kotlin"),r.a.createElement("option",{value:"golang"},"Golang"),r.a.createElement("option",{value:"python"},"Python"),r.a.createElement("option",{value:"rust"},"Rust"),r.a.createElement("option",{value:"typescript"},"TypeScript"))}}]),a}(n.Component),k=Object(o.b)(function(e){return{editorSyntax:e.guest.editorSyntax}},function(a){return{setEditorSyntax:function(e){return a((t=e,function(e){e({type:"UPDATE_GUEST_SYNTAX",payload:t})}));var t}}})(_),V=a(128),x=a(129),w=function(e){return e.length?e&&void 0!==e&&""!==e.trim():!!e},L=function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(f.a)(this,Object(S.a)(a).call(this,e))).createAndSavePaste=t.createAndSavePaste.bind(Object(O.a)(Object(O.a)(t))),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"createAndSavePaste",value:function(){var e=this.props,t=e.editorValue,a=e.editorStatus,n=e.previousEditorValue,r=e.editorSyntax;if(w(t))if("paste"!==a&&t!==n){var i={name:"Test Paste",code:t,description:"Test",type:r,codeType:"snippet"};this.props.createPaste(i,this.props.history)}else this.props.forkPaste(this.props.history)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header-module col-12 no-front-paddings"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},r.a.createElement(V.a,{to:"/",className:"navbar-brand"},"Pastty"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#main_navbar","aria-controls":"main_navbar","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"main_navbar"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active ml-2"},r.a.createElement(V.a,{to:"/",className:"btn btn-primary",onClick:function(){return e.props.setStatusToGuest()}},r.a.createElement("i",{className:"fas fa-plus-circle"})," New")),r.a.createElement("li",{className:"nav-item ml-2"},r.a.createElement("button",{className:"btn btn-success",onClick:this.createAndSavePaste},"paste"===this.props.editorStatus?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-code-branch"})," Fork"):r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-save"})," Save"))),r.a.createElement("li",{className:"nav-item ml-2"},r.a.createElement(k,null)))),r.a.createElement("a",{href:"https://github.com/phen0menon/pastty",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-secondary my-2 my-sm-0"},r.a.createElement("i",{className:"fab fa-github"})," GitHub")))}}]),a}(n.Component),U=Object(x.a)(Object(o.b)(function(e){return{editorValue:e.guest.editorValue,editorSyntax:e.guest.editorSyntax,editorStatus:e.guest.editorStatus,createdPasteLink:e.guest.createdPasteLink,previousEditorValue:e.guest.previousEditorValue}},function(a){return{createPaste:function(e,t){return a(C(e,t))},setStatusToGuest:function(){return a(function(e){e({type:"SET_STATUS_TO_GUEST"})})},forkPaste:function(e){return a((t=e,function(e){e({type:"FORK_PASTE"}),t.push("/")}));var t}}})(L)),F={theme:"dracula",height:"100%",width:"100%",wrapEnabled:!0,cursorStart:2,fontSize:14,name:"paste",editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0},D=Object.assign({},F,{readOnly:!0,highlightActiveLine:!1,highlightGutterLine:!1,enableLiveAutocompletion:!1}),G=(a(56),function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(f.a)(this,Object(S.a)(a).call(this,e))).pasteHandler=t.pasteHandler.bind(Object(O.a)(Object(O.a)(t))),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"pasteHandler",value:function(){if(w(this.props.editorValue)&&"initial"===this.props.editorStatus&&this.props.editorValue!==this.props.previousEditorValue){var e=this.props,t={name:"Test Paste",code:e.editorValue,description:"Test",type:e.editorSyntax,codeType:"snippet"};this.props.createPaste(t,this.props.history)}}},{key:"componentDidMount",value:function(){var t=this,e=window.ace.edit("paste");e.renderer.setScrollMargin(3,3),e.commands.addCommand({name:"Save (update) paste",bindKey:{win:"Ctrl-s",mac:"Command-s"},exec:function(e){t.pasteHandler()}}),e.focus(),e.gotoLine(e.getSession().getValue().split("\n").length),e.navigateFileEnd()}},{key:"render",value:function(){var t=this,e=Object.assign({},F,{onChange:function(e){return t.props.setEditorValue(e)},value:this.props.editorValue,defaultValue:this.props.editorValue,mode:this.props.editorSyntax});return r.a.createElement("div",{className:"w-100",style:{opacity:"loading"===this.props.editorStatus?.5:1}},r.a.createElement("div",{className:"chat-sidebar d-none d-md-block"},r.a.createElement("div",{className:"chat-sidebar-inner"},r.a.createElement("div",{className:"paste-info"},r.a.createElement("div",{className:"datetime text-center"},this.props.editorDescription)))),r.a.createElement("div",{className:"chat-module no-front-paddings"},r.a.createElement("div",{className:"chat-module-inner"},r.a.createElement(N.a,e))))}}]),a}(n.Component)),H=Object(x.a)(Object(o.b)(function(e){return{editorValue:e.guest.editorValue,editorSyntax:e.guest.editorSyntax,editorStatus:e.guest.editorStatus,createdPasteLink:e.guest.createdPasteLink,previousEditorValue:e.guest.previousEditorValue}},function(a){return{setEditorValue:function(e){return a((t=e,function(e){e({type:"UPDATE_GUEST_PASTE",payload:t})}));var t},createPaste:function(e,t){return a(C(e,t))}}})(G)),R=a(39),J=function(e){function t(){return Object(v.a)(this,t),Object(f.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPaste(this.props.match.params.paste,this.props.history);var e=window.ace.edit("paste");e.renderer.setScrollMargin(3,3),e.setOptions({readOnly:!0,highlightActiveLine:!1,highlightGutterLine:!1}),e.renderer.$cursorLayer.element.style.display="none",e.getSession().setUseWorker(!1)}},{key:"render",value:function(){var t=this,e=Object.assign({},D,{onChange:function(e){return t.props.setEditorValue(e)},value:this.props.editorValue,defaultValue:this.props.editorValue,mode:this.props.editorSyntax});return r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"chat-sidebar d-none d-md-block"},r.a.createElement("div",{className:"chat-sidebar-inner"},r.a.createElement("div",{className:"paste-info"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"undertitle"},"Author"),r.a.createElement("div",null,this.props.pasteAuthor)),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"undertitle"},"Created at"),r.a.createElement("div",null,this.props.pasteTimeCreated)),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"undertitle"},"Description"),r.a.createElement("div",null,this.props.editorDescription)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"undertitle"},"Link"),r.a.createElement("input",{className:"form-control",onFocus:function(e){return e.target.select()},readOnly:!0,value:"http://localhost:3000/"+this.props.match.params.paste}))))),r.a.createElement("div",{className:"chat-module no-front-paddings"},r.a.createElement("div",{className:"chat-module-inner"},r.a.createElement(N.a,e))))}}]),t}(n.Component),M=Object(x.a)(Object(o.b)(function(e){return{editorValue:e.guest.editorValue,editorSyntax:e.guest.editorSyntax,editorStatus:e.guest.editorStatus,editorDescription:e.guest.editorDescription,pasteTimeCreated:R.utc(e.guest.pasteTimeCreated).local().format("LLL"),pasteAuthor:e.guest.pasteAuthor}},function(r){return{fetchPaste:function(e,t){return r((a=e,n=t,function(t){t({type:"FETCH_PASTE"}),fetch("http://sn.a6raywa1cher.com:9000/script/"+a,{method:"GET"}).then(function(e){return e.json()}).then(function(e){t({type:"FETCH_PASTE_SUCCESS",payload:e})}).catch(function(e){t({type:"FETCH_PASTE_FAIL"}),A()({type:"error",title:"Ошибка!",text:"Вы получили это сообщение, потому что перешли по несуществующей ссылке!",footer:""}),n.push("/")})}));var a,n}}})(J)),K=(a(57),a(58),a(59),a(60),a(61),a(62),a(63),a(64),a(65),a(66),a(67),a(68),a(69),a(70),a(71),a(72),a(73),a(74),a(75),a(76),a(77),a(79),a(80),a(81),a(82),a(83),a(84),a(85),a(87),a(88),a(89),a(90),a(91),a(92),a(93),a(94),a(95),a(96),a(97),a(98),a(99),a(100),a(101),a(102),a(103),a(104),a(105),a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(113),a(114),a(115),a(116),a(117),a(118),a(119),a(120),a(121),a(122),a(123),function(e){function t(){return Object(v.a)(this,t),Object(f.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"row main-module no-front-margins no-front-paddings"},r.a.createElement(U,null),r.a.createElement(T.a,{exact:!0,path:"/",component:H}),r.a.createElement(T.a,{path:"/:paste",component:M})))}}]),t}(n.Component)),I=(a(125),document.getElementById("root"));s.a.render(r.a.createElement(o.a,{store:E},r.a.createElement(K,null)),I)},41:function(e,t,a){e.exports=a(127)}},[[41,2,1]]]);