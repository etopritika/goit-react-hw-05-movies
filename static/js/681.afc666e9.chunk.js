"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(439),a=r(791),c=r(689),s=r(910),i=r(184),o=new s.Z;function u(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],s=t[1],u=(0,c.UO)().movieId;return(0,a.useEffect)((function(){o.movieId=u,o.fetchReviews().then((function(e){return s(e)})).catch(console.log)}),[u]),(0,i.jsx)(i.Fragment,{children:0!==r.length&&(0,i.jsx)("ul",{children:r.map((function(e){var t=e.author,r=e.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:(0,i.jsx)("b",{children:t})}),(0,i.jsx)("br",{}),r]},t)}))})})}},910:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(861),a=r(671),c=r(144),s=r(757),i=r.n(s),o=r(686),u=r.n(o),f="https://api.themoviedb.org/",h="604d147cd55c0bcd03b68a72549a64de",p=function(){function e(){(0,a.Z)(this,e),this.searchQuery="avatar",this.page=1,this.getMovieId=""}return(0,c.Z)(e,[{key:"fetchMovies",value:function(){var e=(0,n.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/search/movie?api_key=").concat(h,"&query=").concat(this.searchQuery,"&page=").concat(this.page,"&language=en-US&include_adult=false"));case 3:if((t=e.sent).ok){e.next=8;break}if(404!==t.status){e.next=7;break}throw new Error(u().Notify.failure("Search result not successful. Try again"));case 7:return e.abrupt("return");case 8:return e.next=10,t.json();case 10:if(r=e.sent,0!==(n=r.results).length){e.next=15;break}return u().Notify.failure("Search result not successful. Enter the correct movie name."),e.abrupt("return");case 15:return e.abrupt("return",n);case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchTrending",value:function(){var e=(0,n.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/trending/movie/week?api_key=").concat(h,"&page=").concat(this.page,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch trending movies"));case 6:return e.next=8,t.json();case 8:return r=e.sent,n=r.results,e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchDetails",value:function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/movie/").concat(this.getMovieId,"?api_key=").concat(h,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchCast",value:function(){var e=(0,n.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/movie/").concat(this.getMovieId,"/credits?api_key=").concat(h));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return r=e.sent,n=r.cast,e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchReviews",value:function(){var e=(0,n.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/movie/").concat(this.getMovieId,"/reviews?api_key=").concat(h));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(u().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return r=e.sent,n=r.results,e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.page=this.page+1}},{key:"decrementPage",value:function(){this.page=this.page-1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.getMovieId},set:function(e){this.getMovieId=e}},{key:"moviePage",get:function(){return this.page},set:function(e){this.page=e}}]),e}()}}]);
//# sourceMappingURL=681.afc666e9.chunk.js.map