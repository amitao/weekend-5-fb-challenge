(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(69)},39:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(27),l=n(0),o=n.n(l),r=n(28),i=n.n(r),u=(n(39),n(2)),s=n(3),d=n(5),h=n(4),p=n(6),m=(n(41),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header-box"},o.a.createElement("div",null,o.a.createElement("img",{className:"fb-image",src:"images/feedbackxmas.png",alt:"Feedback logo"})))}}]),t}(l.Component)),b=n(8),f=n(13),g=n.n(f),E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(){var e=n.props.reduxState.enterFeedBackReducer,t={feeling:e.Feeling,understanding:e.Understanding,support:e.Support,comments:e.Comments};console.log("sending data in redux store:",t),g.a.post("/api/feedback",t).then(function(e){console.log(e),n.props.history.push("/thankyou")}).catch(function(e){console.log("ERROR in POST request",e)})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[],t=this.props.reduxState.enterFeedBackReducer;for(var n in t)e.push(o.a.createElement("p",{className:"display-p-tag",key:n},n,": ",t[n]));return o.a.createElement("div",null,o.a.createElement("h2",null,"feedback results:"),o.a.createElement("div",null,e),o.a.createElement("button",{onClick:this.handleClick},"SUBMIT TO DB"))}}]),t}(l.Component),v=Object(b.b)(function(e){return{reduxState:e}})(E),k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={feeling:""},n.handleClick=function(){console.log("Feedback one has been clicked"),n.props.dispatch({type:"ADD_FEEDBACK",payload:{key:"Feeling",value:n.state.feeling}}),n.props.history.push("/feedbacktwo")},n.handleChange=function(e){n.setState({feeling:e.target.value})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"1 of 4 pages"),o.a.createElement("div",{className:"box"},o.a.createElement("div",null,o.a.createElement("p",{className:"questions"},"How are you feeling today?"),o.a.createElement("input",{type:"number",onChange:this.handleChange})),o.a.createElement("button",{onClick:this.handleClick},"NEXT"))," ",o.a.createElement(v,null))}}]),t}(l.Component),y=Object(b.b)()(k),O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={understanding:""},n.handleClick=function(){console.log("Two has been clicked"),n.props.dispatch({type:"ADD_FEEDBACK",payload:{key:"Understanding",value:n.state.understanding}}),n.props.history.push("/feedbackthree")},n.handleChange=function(e){n.setState({understanding:e.target.value})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"2 of 4 pages"),o.a.createElement("div",{className:"box"},o.a.createElement("div",null,o.a.createElement("p",{className:"questions"},"How well are you understanding the content?"),o.a.createElement("input",{type:"number",onChange:this.handleChange})),o.a.createElement("button",{onClick:this.handleClick},"NEXT"))," ",o.a.createElement(v,null))}}]),t}(l.Component),j=Object(b.b)()(O),C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={support:""},n.handleClick=function(){console.log("Three has been clicked"),n.props.dispatch({type:"ADD_FEEDBACK",payload:{key:"Support",value:n.state.support}}),n.props.history.push("/feedbackfour")},n.handleChange=function(e){n.setState({support:e.target.value})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"3 of 4 pages"),o.a.createElement("div",{className:"box"},o.a.createElement("div",null,o.a.createElement("p",{className:"questions"},"How well are you being supported?"),o.a.createElement("input",{type:"number",onChange:this.handleChange})),o.a.createElement("button",{onClick:this.handleClick},"NEXT"))," ",o.a.createElement(v,null))}}]),t}(l.Component),w=Object(b.b)()(C),D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={comment:""},n.handleClick=function(){console.log("Four has been clicked"),n.props.dispatch({type:"ADD_FEEDBACK",payload:{key:"Comments",value:n.state.comment}})},n.handleChange=function(e){n.setState({comment:e.target.value})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"4 of 4 pages"),o.a.createElement("div",{className:"box"},o.a.createElement("div",null,o.a.createElement("p",{className:"questions"},"Any comments for us?"),o.a.createElement("input",{type:"text",onChange:this.handleChange})),o.a.createElement("button",{onClick:this.handleClick},"Enter")),o.a.createElement(v,null))}}]),t}(l.Component),A=Object(b.b)()(D),N=n(73),F=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).handleClickReset=function(){console.log("button to reset and back to FB 1"),n.props.dispatch({type:"RESET",payload:{key:"",value:""}}),n.props.history.push("/")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"box"},o.a.createElement("h1",null,"Thank you! Your feedback has been submitted."),o.a.createElement("button",{onClick:this.handleClickReset},"New FeedBack"))}}]),t}(l.Component),B=Object(N.a)(Object(b.b)()(F)),S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={feedbackList:[]},n.getFeedback=function(){g.a.get("/api/feedback").then(function(e){console.log(e.data),n.setState({feedbackList:e.data})}).catch(function(e){console.log("Error getting data from the DB:",e)})},n.handleDelete=function(e){console.log("Delete button has been clicked"),g.a.delete("/api/feedback/".concat(e)).then(function(e){n.getFeedback()}).catch(function(e){console.log(e)})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getFeedback()}},{key:"render",value:function(){var e=this,t=this.state.feedbackList.map(function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.feeling),o.a.createElement("td",null,t.understanding),o.a.createElement("td",null,t.support),o.a.createElement("td",null,t.comments),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(n){return e.handleDelete(t.id)}},"DELETE")))});return o.a.createElement("div",null,o.a.createElement("h2",null,"Admin page"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Feeling"),o.a.createElement("th",null,"Understanding"),o.a.createElement("th",null,"Support"),o.a.createElement("th",null,"Comments"),o.a.createElement("th",null,"Delete"))),o.a.createElement("tbody",null,t)))}}]),t}(l.Component),x=(n(67),n(72)),T=n(71),R=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(x.a,null,o.a.createElement("div",{className:"main"},o.a.createElement(m,null),o.a.createElement("div",{className:"App"},o.a.createElement(T.a,{path:"/",exact:!0,component:y}),o.a.createElement(T.a,{path:"/feedbacktwo",component:j}),o.a.createElement(T.a,{path:"/feedbackthree",component:w}),o.a.createElement(T.a,{path:"/feedbackfour",component:A}),o.a.createElement(T.a,{path:"/thankyou",component:B}),o.a.createElement(T.a,{path:"/admin",component:S})),o.a.createElement("img",{className:"bg-image",src:"images/vegaBG24.png",alt:"background"})))}}]),t}(l.Component),L=Object(b.b)()(R),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var U=n(12),W=n(32),_=n.n(W),H=Object(U.d)(Object(U.c)({enterFeedBackReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"ADD_FEEDBACK"===t.type?Object(c.a)({},e,Object(a.a)({},t.payload.key,t.payload.value)):"RESET"===t.type?{}:e}}),Object(U.a)(_.a));i.a.render(o.a.createElement(b.a,{store:H},o.a.createElement(L,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/prime-feedback",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/prime-feedback","/service-worker.js");q?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):K(e)})}}()}},[[34,2,1]]]);
//# sourceMappingURL=main.65f6b738.chunk.js.map