(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"updateUser",function(){return E}),n.d(r,"removeUser",function(){return U}),n.d(r,"updateProfile",function(){return R});var u=n(0),o=n.n(u),a=n(16),c=n.n(a),s=n(9),i=n(7),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER":return Object(i.a)({},e,{user:t.data});case"REMOVE_USER":return Object(i.a)({},e,{user:null});case"UPDATE_PROFILE":return Object(i.a)({},e,{profile:t.data});default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOADER":return Object(i.a)({},e,{loader:t.data});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MEETINGLIST":return Object(i.a)({},e,{list:t.data});default:return e}},v=Object(s.b)({authReducers:l,miscellaneousReducers:d,meetingsReducers:f}),h=Object(s.c)(v),m=n(1),p=(n(27),n(2)),b=n(3),O=n(5),g=n(4),j=n(6),E=(n(29),function(e){return{type:"UPDATE_USER",data:e}}),U=function(){return{type:"REMOVE_USER"}},R=function(e){return{type:"UPDATE_PROFILE",data:e}},y=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(O.a)(this,Object(g.a)(t).call(this,e))).handleLogin=function(){n.props.updateUser({mail:"email",password:"124"})},n.state={stars:0,available:!1},n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({user:e.user})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement("button",{onClick:this.handleLogin},"Login Karo"))}}]),t}(o.a.Component),k=Object(m.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(y),w=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(O.a)(this,Object(g.a)(t).call(this,e))).state={},n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){console.log("Kid Props==>",e)}},{key:"render",value:function(){return o.a.createElement("h3",null,"Kid")}}]),t}(o.a.Component),P=Object(m.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(w),C=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(O.a)(this,Object(g.a)(t).call(this,e))).state={stars:0,available:!1},n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){console.log("Judge Props==>",e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Judge"))}}]),t}(o.a.Component),L=Object(m.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(C),D=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(O.a)(this,Object(g.a)(t).call(this,e))).handleLogout=function(){n.props.removeUser()},n.state={stars:0,available:!1},n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({user:e.user})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Dashboard"),this.state.toggleComponent&&o.a.createElement(P,null),!this.state.toggleComponent&&o.a.createElement(L,null),o.a.createElement("button",{onClick:function(){return e.setState({toggleComponent:!e.state.toggleComponent})}},"Toggle"),o.a.createElement("button",{onClick:this.handleLogout},"Logout Man"))}}]),t}(o.a.Component),S=Object(m.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(D),T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(O.a)(this,Object(g.a)(t).call(this,e))).state={user:e.user},n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e,t){this.setState({user:e.user})}},{key:"render",value:function(){var e=this.state.user;return o.a.createElement("div",{className:"App"},!e&&o.a.createElement(k,null),e&&o.a.createElement(S,null))}}]),t}(u.Component),A=Object(m.b)(function(e){return console.log(e),{user:e.authReducers.user}},function(e){return{updateUser:function(t){return e(r.updateUser(t))},removeUser:function(){return e(r.removeUser())}}})(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m.a,{store:h},o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.879ce885.chunk.js.map