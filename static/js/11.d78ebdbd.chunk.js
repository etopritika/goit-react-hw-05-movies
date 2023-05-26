"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[11],{11:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r,a=n(439),i=n(791),s=n(689),c=n(87),o=n(168),u=n(444),h=(0,u.ZP)(c.rU)(r||(r=(0,o.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  max-width: 160px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),l=n(184);function f(e){var t=e.to,n=e.children;return(0,l.jsx)(h,{to:t,children:n})}var p,d,v,g,x,m=n(128),k=n(321),y=u.ZP.div(p||(p=(0,o.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  > img {\n    margin-right: 10px;\n  }\n"]))),w=u.ZP.li(d||(d=(0,o.Z)(["\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),j=u.ZP.ul(v||(v=(0,o.Z)(["\n  display: flex;\n"]))),b=u.ZP.ul(g||(g=(0,o.Z)(["\n  margin-right: 10px;\n  &:last-child {\n    margin-right: 0px;\n  }\n"]))),Z=u.ZP.ul(x||(x=(0,o.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  > li {\n    margin-right: 10px;\n    &:last-child {\n      margin-right: 0px;\n    }\n  }\n"]))),_=new(n(910).Z);function P(){var e=(0,i.useState)({}),t=(0,a.Z)(e,2),n=t[0],r=t[1],o=(0,i.useState)("idle"),u=(0,a.Z)(o,2),h=u[0],p=u[1],d=(0,s.UO)().movieId,v=(0,s.TH)(),g=(0,i.useRef)(v);(0,i.useEffect)((function(){p("pending"),_.movieId=d,_.fetchDetails().then((function(e){p("resolved"),r(e)})).catch(console.log)}),[d]);var x=n.original_title,P=n.poster_path,I=n.vote_average,S=n.overview,U=n.genres,E=n.release_date,F=new Date(E).getFullYear();return"pending"===h?(0,l.jsx)(k.Z,{}):"resolved"===h?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(f,{to:g.current.state,children:[(0,l.jsx)(m.jTe,{size:"24"}),"Back to movies"]}),(0,l.jsxs)(y,{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(P),alt:""}),(0,l.jsxs)("ul",{children:[(0,l.jsx)(w,{children:(0,l.jsxs)("b",{children:[x," (",F,")"]})}),(0,l.jsxs)(w,{children:["User score: ",(10*I).toFixed(0),"%"]}),(0,l.jsxs)(w,{children:[(0,l.jsx)("b",{children:"Overview"}),(0,l.jsx)("br",{})," ",S]}),(0,l.jsxs)(w,{children:[(0,l.jsx)("b",{children:"Genres:"}),(0,l.jsx)(j,{children:U.map((function(e){var t=e.name;return(0,l.jsx)(b,{children:t},t)}))})]})]})]}),(0,l.jsx)("p",{children:"Additional informationk"}),(0,l.jsxs)(Z,{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(k.Z,{}),children:(0,l.jsx)(s.j3,{})})]}):void 0}},910:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(861),a=n(671),i=n(144),s=n(757),c=n.n(s),o=n(686),u=n.n(o),h="https://api.themoviedb.org/",l="604d147cd55c0bcd03b68a72549a64de",f=function(){function e(){(0,a.Z)(this,e),this.searchQuery="avatar",this.page=1,this.getMovieId=""}return(0,i.Z)(e,[{key:"fetchMovies",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/search/movie?api_key=").concat(l,"&query=").concat(this.searchQuery,"&page=").concat(this.page,"&language=en-US&include_adult=false"));case 3:if((t=e.sent).ok){e.next=8;break}if(404!==t.status){e.next=7;break}throw new Error(u().Notify.failure("Search result not successful. Try again"));case 7:return e.abrupt("return");case 8:return e.next=10,t.json();case 10:if(n=e.sent,0!==(r=n.results).length){e.next=15;break}return u().Notify.failure("Search result not successful. Enter the correct movie name."),e.abrupt("return");case 15:return e.abrupt("return",r);case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchTrending",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/trending/movie/week?api_key=").concat(l,"&page=").concat(this.page,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch trending movies"));case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.results,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchDetails",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/movie/").concat(this.getMovieId,"?api_key=").concat(l,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchCast",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/movie/").concat(this.getMovieId,"/credits?api_key=").concat(l));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.cast,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchReviews",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/movie/").concat(this.getMovieId,"/reviews?api_key=").concat(l));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.results,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.page=this.page+1}},{key:"decrementPage",value:function(){this.page=this.page-1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.getMovieId},set:function(e){this.getMovieId=e}},{key:"moviePage",get:function(){return this.page},set:function(e){this.page=e}}]),e}()}}]);
//# sourceMappingURL=11.d78ebdbd.chunk.js.map