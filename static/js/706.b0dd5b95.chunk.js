"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[706],{706:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,a,c,i=n(439),o=n(686),u=n.n(o),s=n(791),f=n(87),h=n(689),p=n(168),l=n(444),v=l.ZP.form(r||(r=(0,p.Z)(["\n  margin-bottom: 10px;\n"]))),g=l.ZP.input(a||(a=(0,p.Z)(["\n  padding: 4px 2px;\n"]))),d=n(184);function m(e){var t=e.handleSubmit,n=e.movieName,r=e.handleInputChange;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(v,{onSubmit:t,children:(0,d.jsx)(g,{value:n,name:"query",onChange:r,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})})})}var y=l.ZP.li(c||(c=(0,p.Z)(["\n  margin-bottom: 8px;\n  &:last-child {\n    margin-right: 0px;\n  }\n"]))),k=new(n(910).Z);function x(){var e,t=(0,s.useState)(""),n=(0,i.Z)(t,2),r=n[0],a=n[1],c=(0,f.lr)({}),o=(0,i.Z)(c,2),p=o[0],l=o[1],v=(0,s.useState)([]),g=(0,i.Z)(v,2),x=g[0],w=g[1],b=null!==(e=p.get("query"))&&void 0!==e?e:"",Z=(0,h.TH)();return(0,s.useEffect)((function(){b&&(k.query=b,k.fetchMovies().then((function(e){w(e)})))}),[b]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{handleSubmit:function(e){if(e.preventDefault(),""===r.trim())return u().Notify.failure("Enter the name of the movie");l({query:r}),a("")},movieName:r,handleInputChange:function(e){a(e.currentTarget.value.toLowerCase())}}),x&&(0,d.jsx)("ul",{children:x.map((function(e){var t=e.id,n=e.title;return(0,d.jsx)(y,{children:(0,d.jsx)(f.rU,{to:"".concat(t),state:Z,children:n})},t)}))})]})}},910:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(861),a=n(671),c=n(144),i=n(757),o=n.n(i),u=n(686),s=n.n(u),f="https://api.themoviedb.org/",h="604d147cd55c0bcd03b68a72549a64de",p=function(){function e(){(0,a.Z)(this,e),this.searchQuery="avatar",this.page=1,this.getMovieId=""}return(0,c.Z)(e,[{key:"fetchMovies",value:function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/search/movie?api_key=").concat(h,"&query=").concat(this.searchQuery,"&page=").concat(this.page,"&language=en-US&include_adult=false"));case 3:if((t=e.sent).ok){e.next=8;break}if(404!==t.status){e.next=7;break}throw new Error(s().Notify.failure("Search result not successful. Try again"));case 7:return e.abrupt("return");case 8:return e.next=10,t.json();case 10:if(n=e.sent,0!==(r=n.results).length){e.next=15;break}return s().Notify.failure("Search result not successful. Enter the correct movie name."),e.abrupt("return");case 15:return e.abrupt("return",r);case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchTrending",value:function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/trending/movie/week?api_key=").concat(h,"&page=").concat(this.page,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(s().Notify.failure("Failed to fetch trending movies"));case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.results,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchDetails",value:function(){var e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/movie/").concat(this.getMovieId,"?api_key=").concat(h,"&language=en-US"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(s().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchCast",value:function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/movie/").concat(this.getMovieId,"/credits?api_key=").concat(h));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(s().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.cast,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchReviews",value:function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"3/movie/").concat(this.getMovieId,"/reviews?api_key=").concat(h));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(s().Notify.failure("Failed to fetch movie details"));case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.results,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.page=this.page+1}},{key:"decrementPage",value:function(){this.page=this.page-1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.getMovieId},set:function(e){this.getMovieId=e}},{key:"moviePage",get:function(){return this.page},set:function(e){this.page=e}}]),e}()}}]);
//# sourceMappingURL=706.b0dd5b95.chunk.js.map