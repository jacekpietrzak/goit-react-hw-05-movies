"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[105],{663:function(n,e,r){r.d(e,{HI:function(){return v},Pg:function(){return o},Xj:function(){return f},gI:function(){return p},vw:function(){return s}});var t=r(861),a=r(757),c=r.n(a),u=r(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="9419a46407ab6d0a86a089cd8749b3b7",s=function(){var n=(0,t.Z)(c().mark((function n(e,r,t){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/".concat(e,"/").concat(r,"/").concat(t,"?api_key=").concat(i));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},105:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,a=r(861),c=r(439),u=r(757),i=r.n(u),s=r(791),o=r(689),p=r(663),f=r(705),v=r(168),h=r(444),l=r(184),d=h.ZP.li(t||(t=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"])));var x,w=function(n){var e=n.review;return(0,l.jsxs)(d,{children:[(0,l.jsxs)("h3",{children:["Author: ",e.author," "]}),(0,l.jsx)("p",{children:e.content})]})},Z=h.ZP.ul(x||(x=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  list-style: none;\n"])));var g=function(n){var e=n.reviews;return(0,l.jsx)(Z,{children:e.map((function(n){return(0,l.jsx)(w,{review:n},n.id)}))})},m=r(2);var k=function(){var n=(0,o.UO)().movieId,e=(0,s.useState)(!1),r=(0,c.Z)(e,2),t=r[0],u=r[1],v=(0,s.useState)([]),h=(0,c.Z)(v,2),d=h[0],x=h[1],w=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,(0,p.Xj)(n);case 4:r=e.sent,x(r.data.results),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:return e.prev=10,u(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,8,10,13]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){w()}),[]),(0,l.jsx)(f.PP,{children:t?(0,l.jsx)(m.Z,{text:"reviews"}):(0,l.jsx)("div",{children:0===d.length?(0,l.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,l.jsx)(g,{reviews:d})})})}}}]);
//# sourceMappingURL=105.54279eda.chunk.js.map