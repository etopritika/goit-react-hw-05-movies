"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[610],{610:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(439),i=r(791),s=r(689),a=r(87),c=r(128),o=r(184);function u(e){var t=e.to,r=e.children;return(0,o.jsxs)(a.rU,{to:t,children:[(0,o.jsx)(c.jTe,{size:"24"}),r]})}var h=new(r(910).Z);function l(){var e,t,r=(0,i.useState)({}),c=(0,n.Z)(r,2),l=c[0],f=c[1],v=(0,s.UO)().movieId,d=(0,s.TH)(),p=(0,i.useRef)(null!==(e=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");(0,i.useEffect)((function(){h.movieId=v,h.fetchDetails().then((function(e){return f(e)}))}),[v]);var g=l.original_title,x=l.poster_path,k=l.vote_average,m=l.overview,j=l.genres;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{to:p.current,children:"Back to movies"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(x),alt:""}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:g}),(0,o.jsxs)("li",{children:["User score: ",(10*k).toFixed(0),"%"]}),(0,o.jsxs)("li",{children:["Overview: ",m]}),(0,o.jsxs)("li",{children:["Genres: ",(0,o.jsx)("ul",{children:j&&j.map((function(e){var t=e.name;return(0,o.jsx)("li",{children:t},t)}))})]})]})]}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(s.j3,{})})]})}},910:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(861),i=r(671),s=r(144),a=r(757),c=r.n(a),o=r(686),u=r.n(o),h="https://api.themoviedb.org/",l="604d147cd55c0bcd03b68a72549a64de",f=function(){function e(){(0,i.Z)(this,e),this.searchQuery="avatar",this.page=1,this.getMovieId=""}return(0,s.Z)(e,[{key:"fetchMovies",value:function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/search/movie?api_key=").concat(l,"&query=").concat(this.searchQuery,"&page=").concat(this.page,"&language=en-US&include_adult=false"));case 3:if((t=e.sent).ok){e.next=8;break}if(404!==t.status){e.next=7;break}throw new Error(u().Notify.failure("Search result not successful. Try again"));case 7:return e.abrupt("return");case 8:return e.next=10,t.json();case 10:if(r=e.sent,0!==(n=r.results).length){e.next=15;break}return u().Notify.failure("Search result not successful. Enter the correct movie name."),e.abrupt("return");case 15:return e.abrupt("return",n);case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchTrending",value:function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/trending/movie/week?api_key=").concat(l,"&page=").concat(this.page,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch trending movies"));case 6:return e.next=8,t.json();case 8:return r=e.sent,n=r.results,e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchDetails",value:function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"3/movie/").concat(this.getMovieId,"?api_key=").concat(l,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.page=this.page+1}},{key:"decrementPage",value:function(){this.page=this.page-1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.getMovieId},set:function(e){this.getMovieId=e}},{key:"moviePage",get:function(){return this.page},set:function(e){this.page=e}}]),e}()}}]);
//# sourceMappingURL=610.d3be870f.chunk.js.map