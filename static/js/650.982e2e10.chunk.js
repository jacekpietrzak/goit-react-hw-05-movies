"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[650],{663:function(n,t,e){e.d(t,{HI:function(){return l},Pg:function(){return s},Xj:function(){return f},gI:function(){return p},vw:function(){return o}});var r=e(861),a=e(757),u=e.n(a),c=e(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="9419a46407ab6d0a86a089cd8749b3b7",o=function(){var n=(0,r.Z)(u().mark((function n(t,e,r){var a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/".concat(t,"/").concat(e,"/").concat(r,"?api_key=").concat(i));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},313:function(n,t,e){e.d(t,{Z:function(){return s}});var r=e(168),a=e(87),u=e(184);var c,i=function(n){var t=n.movie,e=n.location;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})})},o=e(444).ZP.ul(c||(c=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-left: 18px;\n"])));var s=function(n){var t=n.movies,e=n.location;return(0,u.jsx)(o,{children:t.map((function(n){return(0,u.jsx)(i,{movie:n,location:e},n.id)}))})}},650:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u=e(861),c=e(439),i=e(757),o=e.n(i),s=e(791),p=e(87),f=e(689),l=e(663),v=e(168),d=e(444),h=e(184),x=d.ZP.input(r||(r=(0,v.Z)(["\n  padding: 5px;\n"]))),m=d.ZP.button(a||(a=(0,v.Z)(["\n  padding: 5px;\n  cursor: pointer;\n"])));var g=function(n){var t=n.handleSubmit,e=n.handleInputChange,r=n.inputValue;return(0,h.jsxs)("form",{onSubmit:t,children:[(0,h.jsx)(x,{type:"text",placeholder:"search for a movie",value:r,onChange:e}),(0,h.jsx)(m,{type:"submit",children:"Search"})]})},Z=e(313),b=e(2);var w=function(){var n,t=(0,s.useState)(!1),e=(0,c.Z)(t,2),r=e[0],a=e[1],i=(0,s.useState)(""),v=(0,c.Z)(i,2),d=v[0],x=v[1],m=(0,s.useState)([]),w=(0,c.Z)(m,2),y=w[0],k=w[1],_=(0,f.TH)(),j=(0,p.lr)(),S=(0,c.Z)(j,2),C=S[0],I=S[1],P=C.get(null!==(n="query")?n:""),U=function(){var n=(0,u.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),n.prev=1,n.next=4,(0,l.HI)(P);case 4:t=n.sent,k(t.data.results),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:return n.prev=10,a(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,8,10,13]])})));return function(){return n.apply(this,arguments)}}(),q=function(n){I(""!==n?{query:n}:{})};return(0,s.useEffect)((function(){null!==P&&U()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{handleSubmit:function(n){n.preventDefault(),null!==P?U():alert("type something")},handleInputChange:function(n){var t=n.target.value;x(t),q(t)},inputValue:d}),r?(0,h.jsx)(b.Z,{}):(0,h.jsx)(Z.Z,{movies:y,location:_})]})}}}]);
//# sourceMappingURL=650.982e2e10.chunk.js.map