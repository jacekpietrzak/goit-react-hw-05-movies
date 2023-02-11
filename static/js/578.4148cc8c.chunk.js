"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[578],{663:function(e,n,t){t.d(n,{HI:function(){return v},Pg:function(){return o},Xj:function(){return l},gI:function(){return p},vw:function(){return u}});var r=t(861),a=t(757),i=t.n(a),s=t(912);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="9419a46407ab6d0a86a089cd8749b3b7",u=function(){var e=(0,r.Z)(i().mark((function e(n,t,r,a){var u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(n,"/").concat(t,"/").concat(r,"?api_key=").concat(c));case 2:return u=e.sent,e.abrupt("return",u.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},578:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r,a,i,s,c=t(861),u=t(439),o=t(757),p=t.n(o),l=t(87),v=t(689),d=t(791),f=t(663),x=t(168),h=t(444),m=t(184),g=h.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  gap: 15px;\n  padding: 15px 0;\n"]))),Z=h.ZP.img(a||(a=(0,x.Z)(["\n  display: block;\n  max-height: 350px;\n"]))),j=h.ZP.div(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),w=h.ZP.ul(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  list-style: none;\n"])));var y,b,k=function(e){var n=e.moviePoster,t=e.movieTitle,r=e.movieReleaseDate,a=e.MovieUserScore,i=e.movieOverview,s=e.movieGenres;return(0,m.jsxs)(g,{children:[(0,m.jsx)(Z,{src:n,alt:t}),(0,m.jsxs)(j,{children:[(0,m.jsxs)("h2",{children:[t," (",r,")"]}),(0,m.jsxs)("p",{children:["User Score: ",a]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:i})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)(w,{children:s.map((function(e){return(0,m.jsxs)("li",{children:[" ",e.name]},e.id)}))})]})]})]})},_=h.ZP.div(y||(y=(0,x.Z)(["\n  padding: 15px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),S=h.ZP.ul(b||(b=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n"])));var P=function(){return(0,m.jsxs)(_,{children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsxs)(S,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]})},U=t(2);var G=function(){var e=(0,v.UO)().movieId,n=(0,v.TH)(),t=(0,d.useState)(!1),r=(0,u.Z)(t,2),a=r[0],i=r[1],s=(0,d.useState)(""),o=(0,u.Z)(s,2),x=o[0],h=o[1],g=(0,d.useState)(""),Z=(0,u.Z)(g,2),j=Z[0],w=Z[1],y=(0,d.useState)(""),b=(0,u.Z)(y,2),_=b[0],S=b[1],G=(0,d.useState)([]),O=(0,u.Z)(G,2),R=O[0],C=O[1],I=(0,d.useState)(""),T=(0,u.Z)(I,2),D=T[0],E=T[1],F=(0,d.useState)(0),H=(0,u.Z)(F,2),M=H[0],q=H[1],A=(0,d.useState)(""),B=(0,u.Z)(A,2),L=B[0],X=B[1];(0,d.useEffect)((function(){var e,t;X(null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")}),[e]);var z=function(){var n=(0,c.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,n.next=4,(0,f.Pg)(e);case 4:t=n.sent,h(t.release_date),w(t.title),S(t.overview),C(t.genres),E("https://image.tmdb.org/t/p/w500/null"==="https://image.tmdb.org/t/p/w500/".concat(t.poster_path)?"https://via.placeholder.com/150":"https://image.tmdb.org/t/p/w500/".concat(t.poster_path)),q(t.vote_average),n.next=15;break;case 13:n.prev=13,n.t0=n.catch(1);case 15:return n.prev=15,i(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,13,15,18]])})));return function(){return n.apply(this,arguments)}}();return(0,d.useEffect)((function(){z()}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:(0,m.jsx)(l.rU,{to:L,children:"Go Back"})}),a?(0,m.jsx)(U.Z,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k,{moviePoster:D,movieTitle:j,movieReleaseDate:x,MovieUserScore:M,movieOverview:_,movieGenres:R}),(0,m.jsx)("hr",{}),(0,m.jsx)(P,{}),(0,m.jsx)("hr",{}),(0,m.jsx)(d.Suspense,{fallback:(0,m.jsx)(U.Z,{text:"subpage"}),children:(0,m.jsx)(v.j3,{})})]})]})}}}]);
//# sourceMappingURL=578.4148cc8c.chunk.js.map