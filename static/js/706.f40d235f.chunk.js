"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[706],{706:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r,a,u,c=n(439),i=n(686),o=n.n(i),s=n(791),f=n(87),l=n(689),p=n(168),h=n(444),d=h.ZP.form(r||(r=(0,p.Z)(["\n  margin-bottom: 10px;\n"]))),m=h.ZP.input(a||(a=(0,p.Z)(["\n  padding: 4px 2px;\n"]))),v=n(184);function x(e){var t=e.handleSubmit,n=e.movieName,r=e.handleInputChange;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(d,{onSubmit:t,children:(0,v.jsx)(m,{value:n,name:"query",onChange:r,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})})})}var w=h.ZP.li(u||(u=(0,p.Z)(["\n  margin-bottom: 8px;\n  &:last-child {\n    margin-right: 0px;\n  }\n"]))),y=n(910);function k(){var e,t=(0,s.useState)(""),n=(0,c.Z)(t,2),r=n[0],a=n[1],u=(0,f.lr)({}),i=(0,c.Z)(u,2),p=i[0],h=i[1],d=(0,s.useState)([]),m=(0,c.Z)(d,2),k=m[0],g=m[1],b=null!==(e=p.get("query"))&&void 0!==e?e:"",Z=(0,l.TH)();return(0,s.useEffect)((function(){b&&(0,y.vw)(b).then((function(e){g(e)})).catch((function(e){return alert(e)}))}),[b]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{handleSubmit:function(e){if(e.preventDefault(),""===r.trim())return o().Notify.failure("Enter the name of the movie");h({query:r}),a("")},movieName:r,handleInputChange:function(e){a(e.currentTarget.value.toLowerCase())}}),k&&(0,v.jsx)("ul",{children:k.map((function(e){var t=e.id,n=e.title;return(0,v.jsx)(w,{children:(0,v.jsx)(f.rU,{to:"".concat(t),state:Z,children:n})},t)}))})]})}},910:function(e,t,n){n.d(t,{Bt:function(){return w},DD:function(){return d},Tg:function(){return p},vw:function(){return f},y:function(){return v}});var r=n(861),a=n(757),u=n.n(a),c=n(686),i=n.n(c),o="https://api.themoviedb.org/",s="604d147cd55c0bcd03b68a72549a64de";function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"3/search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US&include_adult=false"));case 2:if((n=e.sent).ok){e.next=7;break}if(404!==n.status){e.next=6;break}throw new Error(i().Notify.failure("Search result not successful. Try again"));case 6:return e.abrupt("return");case 7:return e.next=9,n.json();case 9:if(r=e.sent,0!==(a=r.results).length){e.next=14;break}return i().Notify.failure("Search result not successful. Enter the correct movie name."),e.abrupt("return");case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"3/trending/movie/week?api_key=").concat(s,"&language=en-US"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error(i().Notify.failure("Failed to fetch trending movies"));case 5:return e.next=7,t.json();case 7:return n=e.sent,r=n.results,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"3/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(i().Notify.failure("Failed to fetch movie details"));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"3/movie/").concat(t,"/credits?api_key=").concat(s));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(i().Notify.failure("Failed to fetch movie details"));case 5:return e.next=7,n.json();case 7:return r=e.sent,a=r.cast,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"3/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(i().Notify.failure("Failed to fetch movie details"));case 5:return e.next=7,n.json();case 7:return r=e.sent,a=r.results,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=706.f40d235f.chunk.js.map