(()=>{"use strict";var e={808:(e,t,s)=>{s.r(t)},804:(e,t,s)=>{s.r(t)},140:(e,t,s)=>{s.r(t)},374:(e,t,s)=>{s.r(t)},736:(e,t,s)=>{s.r(t)},828:(e,t,s)=>{s.r(t)},443:(e,t,s)=>{s.r(t)},303:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDate=void 0,t.getDate=()=>{const e=new Date;return`${e.getDate()}.${["01","02","03","04","05","06","07","08","09","10","11","12"][e.getMonth()]}.${e.getFullYear()} ${e.getHours()}:${e.getMinutes()<10?`0${e.getMinutes()}`:e.getMinutes()}:${e.getSeconds()<10?`0${e.getSeconds()}`:e.getSeconds()}`}},599:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.listenToPopstate=void 0;const n=s(312);t.listenToPopstate=()=>{window.addEventListener("popstate",(e=>{if(null===e.state||""===e.state.page)(0,n.loadContent)("/");else{const{page:t}=e.state;(0,n.loadContent)(t)}}))}},312:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loadContent=void 0;const n=s(296),a=s(500),i=s(454),o=s(56);t.loadContent=e=>{"/"!==e&&""!==e||(sessionStorage.getItem("currentUserLogin")?(new n.ChatPage).render(document.body):(new i.LoginPage).render(document.body)),"info"===e&&(new a.InfoPage).render(document.body),"login"===e&&(new i.LoginPage).render(document.body),"chat"===e&&((0,o.getAllUsers)(),(new n.ChatPage).render(document.body))}},566:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.moveToPage=void 0;const n=s(312);t.moveToPage=e=>{window.history.pushState({page:e},e,`/${e}`),(0,n.loadContent)(e)}},56:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMsgHistory=t.sendMsg=t.logout=t.getAllUsers=t.createUser=t.socket=void 0,t.socket=new WebSocket("ws://localhost:4000"),t.createUser=(e,s)=>{t.socket.onopen=()=>{t.socket.send(JSON.stringify({id:crypto.randomUUID(),type:"USER_LOGIN",payload:{user:{login:e,password:s}}}))}},t.getAllUsers=()=>{let e=[];return t.socket.onopen=()=>{t.socket.send(JSON.stringify({id:crypto.randomUUID(),type:"USER_ACTIVE",payload:null})),t.socket.send(JSON.stringify({id:crypto.randomUUID(),type:"USER_INACTIVE",payload:null})),t.socket.onmessage=t=>{const s=[],{users:n}=JSON.parse(t.data).payload;n&&(s.push(...n),e=[...e,...s])},setTimeout((()=>{sessionStorage.setItem("allAuthorizedUsers",JSON.stringify(e))}),100)},e},t.logout=()=>{let e;sessionStorage.getItem("currentUserLogin")&&(e=JSON.parse(sessionStorage.getItem("currentUserLogin")||"{}")),t.socket.onopen=()=>{t.socket.send(JSON.stringify({id:crypto.randomUUID(),type:"USER_LOGOUT",payload:{user:{login:null==e?void 0:e.login,password:null==e?void 0:e.password}}}))}},t.sendMsg=(e,s)=>{const n=[];return t.socket.onopen=()=>{t.socket.send(JSON.stringify({id:crypto.randomUUID(),type:"MSG_SEND",payload:{message:{to:e,text:s}}})),t.socket.onmessage=e=>{const{message:t}=JSON.parse(e.data).payload;t&&n.push(...t)}},n},t.getMsgHistory=e=>{let s=[];t.socket.onopen=()=>{t.socket.send(JSON.stringify({id:crypto.randomUUID(),type:"MSG_FROM_USER",payload:{user:{login:e}}})),t.socket.onmessage=e=>{const t=[],{messages:n}=JSON.parse(e.data).payload;n&&(t.push(...n),s=[...s,...t])}},setTimeout((()=>{sessionStorage.setItem("currentChatMessages",JSON.stringify(s))}),1e3)}},474:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor({tag:e="div",styles:t=[]}){this.element=document.createElement(e),this.element.classList.add(...t)}}},240:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const n=s(474);s(808);const a={tag:"button",styles:["btn"]};class i extends n.BaseComponent{constructor(e){super(a),this.element.textContent=e.name,this.element.classList.add(...e.styles)}render(e){return e.append(this.element),this.element}}t.Button=i},396:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChatMsg=void 0;const n=s(474);s(804);const a={tag:"div",styles:["chat-msg"]};class i extends n.BaseComponent{constructor(e,t,s,n){super(a);const i=document.createElement("div");i.classList.add("top-wrapper"),this.from=document.createElement("div"),this.from.innerText=e,this.time=document.createElement("div"),this.time.classList.add("time"),this.time.innerText=t,i.append(this.from,this.time),this.message=document.createElement("div"),this.message.classList.add("inner-msg"),this.message.innerText=s;const o=document.createElement("div");o.classList.add("bottom-wrapper"),this.status=document.createElement("div"),this.status.innerText=n,o.append(this.status),this.element.append(i,this.message,o)}render(e){e.append(this.element)}}t.ChatMsg=i},675:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LoginForm=void 0;const n=s(566),a=s(56),i=s(474),o=s(240);s(140);const r=s(378),d={tag:"form",styles:["login-form"]},l={name:"Login",styles:["login-btn"]},c={name:"Information",styles:["info-btn"]};class h extends i.BaseComponent{constructor(){super(d),this.fieldset=document.createElement("fieldset"),this.fieldset.classList.add("fieldset"),this.legend=document.createElement("legend"),this.legend.textContent="Fill here your name and password",this.legend.classList.add("legend"),this.inputName=document.createElement("input"),this.inputName.setAttribute("type","text"),this.inputName.setAttribute("placeholder","Name"),this.inputName.classList.add("input"),this.inputPassword=document.createElement("input"),this.inputPassword.setAttribute("type","password"),this.inputPassword.setAttribute("placeholder","Password"),this.inputPassword.classList.add("input"),this.messageName=document.createElement("div"),this.messageName.classList.add("message-name"),this.messageName.textContent="Minimum length is 4 characters. Only latin and cyrillic letters, numbers and dash [ - ] are allowed.",this.messagePassword=document.createElement("div"),this.messagePassword.classList.add("message-password"),this.messagePassword.textContent="Minimum length is 4 characters. Only latin letters and numbers are allowed.",this.element.append(this.fieldset),this.fieldset.append(this.legend,this.inputName,this.messageName,this.inputPassword,this.messagePassword),this.init(),(0,a.getAllUsers)()}init(){new o.Button(l).render(this.element).addEventListener("click",(e=>{e.preventDefault(),(0,r.validateForm)(this.inputName,this.inputPassword,this.messageName,this.messagePassword)&&(sessionStorage.setItem("currentUserLogin",JSON.stringify({login:this.inputName.value,password:this.inputPassword.value})),(0,a.createUser)(this.inputName.value,this.inputPassword.value),(0,n.moveToPage)("chat"))})),new o.Button(c).render(this.element).addEventListener("click",(e=>{e.preventDefault(),(0,n.moveToPage)("info")}))}render(e){e.append(this.element)}}t.LoginForm=h},378:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateForm=void 0;const n=s(596);t.validateForm=(e,t,s,a)=>{var i,o;let r=!1,d=!1;return e.value.length>=n.MIN_INPUT_LENGTH&&(null===(i=e.value.match(/[A-Za-zА-Яа-я0-9-]/g))||void 0===i?void 0:i.join(""))===e.value?(r=!0,e.classList.remove("incorrect"),s.classList.remove("incorrect")):(e.classList.add("incorrect"),s.classList.add("incorrect")),t.value.length>=n.MIN_INPUT_LENGTH&&(null===(o=t.value.match(/[A-Za-z0-9]/g))||void 0===o?void 0:o.join(""))===t.value?(d=!0,t.classList.remove("incorrect"),a.classList.remove("incorrect")):(t.classList.add("incorrect"),a.classList.add("incorrect")),r&&d}},402:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserItem=void 0;const n=s(474);s(374);const a={tag:"div",styles:["user-item"]};class i extends n.BaseComponent{constructor(e){super(a),this.status=document.createElement("div"),this.status.classList.add("status"),this.name=document.createElement("div"),this.name.classList.add("name"),this.name.textContent=e.login,this.init(e.isLogined)}init(e){!0===e?(this.status.classList.remove("offline"),this.status.classList.add("online")):(this.status.classList.remove("online"),this.status.classList.add("offline")),this.element.addEventListener("click",(()=>{sessionStorage.setItem("selectedUserStatus",this.status.classList.value.includes("online")?"online":"offline"),sessionStorage.setItem("selectedUserName",this.name.innerText)}))}render(e){this.element.append(this.status,this.name),e.append(this.element)}}t.UserItem=i},596:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ONE=t.ZERO=t.HISTORY_BACK=t.MIN_INPUT_LENGTH=void 0,t.MIN_INPUT_LENGTH=4,t.HISTORY_BACK=-1,t.ZERO=0,t.ONE=1},296:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPage=void 0;const n=s(303),a=s(566),i=s(56),o=s(474),r=s(240),d=s(396),l=s(402);s(736);const c={tag:"div",styles:["chat-page"]},h={name:"Logout",styles:["logout-btn"]},m={name:"Info",styles:["info-btn"]},u={name:"Send",styles:["send-btn"]};class g extends o.BaseComponent{constructor(){super(c),this.header=document.createElement("header"),this.header.classList.add("header"),this.currentUser=document.createElement("div"),this.currentUser.classList.add("current-user"),this.title=document.createElement("div"),this.title.classList.add("title"),this.btnWrapper=document.createElement("div"),this.btnWrapper.classList.add("btn-wrapper"),this.infoBtn=new r.Button(m).render(this.btnWrapper),this.logoutBtn=new r.Button(h).render(this.btnWrapper),this.main=document.createElement("main"),this.main.classList.add("main"),this.users=document.createElement("div"),this.users.classList.add("users"),this.chat=document.createElement("div"),this.chat.classList.add("chat"),this.chatHeader=document.createElement("div"),this.chatHeader.classList.add("chat-header"),this.chatHeaderLogin=document.createElement("div"),this.chatHeaderStatus=document.createElement("div"),this.chatField=document.createElement("div"),this.chatField.classList.add("chat-field"),this.answerField=document.createElement("form"),this.answerField.classList.add("answer-field"),this.answerInput=document.createElement("input"),this.answerInput.setAttribute("type","text"),this.answerField.append(this.answerInput),this.sendButton=new r.Button(u).render(this.answerField),this.footer=document.createElement("footer"),this.footer.classList.add("footer"),this.school=document.createElement("div"),this.nickname=document.createElement("div"),this.year=document.createElement("div"),this.init(),this.selectUser(),this.getUsers()}getName(){let e;sessionStorage.getItem("currentUserLogin")&&(e=JSON.parse(sessionStorage.getItem("currentUserLogin")||"{}"),this.currentUser.textContent=`Your name: ${e.login}`)}init(){this.infoBtn.addEventListener("click",(()=>{sessionStorage.removeItem("selectedUserName"),sessionStorage.removeItem("selectedUserStatus"),this.answerInput.disabled=!0,this.sendButton.disabled=!0,this.sendButton.classList.add("disabled"),(0,a.moveToPage)("info")})),this.logoutBtn.addEventListener("click",(()=>{sessionStorage.removeItem("currentUserLogin"),(0,i.logout)(),(0,a.moveToPage)("login"),sessionStorage.removeItem("selectedUserName"),sessionStorage.removeItem("selectedUserStatus")})),this.sendButton.addEventListener("click",(e=>{e.preventDefault();const t=sessionStorage.getItem("selectedUserName");t&&(0,i.sendMsg)(t,this.answerInput.value),this.loadHistory("you",(0,n.getDate)(),this.answerInput.value),this.answerInput.value=""}))}loadHistory(e="you",t=(0,n.getDate)(),s="",a="delivered"){new d.ChatMsg(e,t,s,a).render(this.chatField)}selectUser(){this.chatHeaderStatus.classList.add("chat-header-status"),this.users.addEventListener("click",(()=>{this.chatHeaderLogin.textContent=sessionStorage.getItem("selectedUserName"),this.chatHeaderStatus.textContent=sessionStorage.getItem("selectedUserStatus"),"online"===this.chatHeaderStatus.textContent?(this.chatHeaderStatus.classList.remove("offline"),this.chatHeaderStatus.classList.add("online")):(this.chatHeaderStatus.classList.remove("online"),this.chatHeaderStatus.classList.add("offline")),sessionStorage.getItem("selectedUserName")&&(0,i.getMsgHistory)(sessionStorage.getItem("selectedUserName")||"")})),window.onclick=()=>{sessionStorage.getItem("selectedUserName")?(this.answerInput.disabled=!1,this.sendButton.disabled=!1,this.sendButton.classList.remove("disabled")):(this.answerInput.disabled=!0,this.sendButton.disabled=!0,this.sendButton.classList.add("disabled"))},window.onload=()=>{sessionStorage.removeItem("selectedUserName"),sessionStorage.removeItem("selectedUserStatus"),this.answerInput.disabled=!0,this.sendButton.disabled=!0,this.sendButton.classList.add("disabled")}}getUsers(){(0,i.getAllUsers)();const e=JSON.parse(sessionStorage.getItem("allAuthorizedUsers")||"[]");setTimeout((()=>{e.forEach((e=>{new l.UserItem(e).render(this.users)}))}),200)}render(e){this.getName(),this.title.textContent="Fun chat",this.school.textContent="RSSchool",this.nickname.textContent="kagerka",this.year.textContent="2024",this.element.append(this.header,this.main,this.footer),this.header.append(this.currentUser,this.title,this.btnWrapper),this.main.append(this.users,this.chat),this.chat.append(this.chatHeader,this.chatField,this.answerField),this.chatHeader.append(this.chatHeaderLogin,this.chatHeaderStatus),this.footer.append(this.school,this.nickname,this.year),e.replaceChildren(this.element)}}t.ChatPage=g},500:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InfoPage=void 0;const n=s(566),a=s(474),i=s(240);s(828);const o={tag:"div",styles:["info-page"]},r={name:"Go back",styles:["go-back-btn"]};class d extends a.BaseComponent{constructor(){super(o),this.heading=document.createElement("h1"),this.heading.textContent="Fun chat",this.aboutText=document.createElement("p"),this.aboutText.textContent="This chat will allow you to talk with your friends or teammates. Find necessary name and send your message. When this person will be online, he will read and answer back. Easy to use and funny to chat!",this.author=document.createElement("a"),this.author.href="https://github.com/kagerka",this.author.textContent="Author: kagerka",this.element.append(this.heading,this.aboutText,this.author),this.goBackBtn=new i.Button(r).render(this.element),this.init()}init(){this.goBackBtn.addEventListener("click",(()=>{window.history.back(),sessionStorage.getItem("currentUserLogin")?(0,n.moveToPage)("chat"):(0,n.moveToPage)("login")}))}render(e){e.replaceChildren(this.element)}}t.InfoPage=d},454:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LoginPage=void 0;const n=s(474),a=s(675),i={tag:"div",styles:["login-page"]};class o extends n.BaseComponent{constructor(){super(i),this.init()}init(){(new a.LoginForm).render(this.element)}render(e){e.replaceChildren(this.element)}}t.LoginPage=o}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=s(599),t=s(312);s(443),sessionStorage.getItem("currentUserLogin")?(0,t.loadContent)("chat"):(0,t.loadContent)("login"),(0,e.listenToPopstate)()})()})();