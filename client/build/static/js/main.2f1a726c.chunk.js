(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),j=c(19),l=c.n(j),a=(c(25),c(26),c(2)),i=c(6),b=c(8),r=c(3),o=c(5),O=c.n(o),p=c(0),h=function(e){var t=Object(s.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),c=Object(r.a)(t,2),n=c[0],j=c[1],l=Object(s.useState)({}),o=Object(r.a)(l,2),h=o[0],d=o[1],x=function(e){var t=e.target,c=t.name,s=t.value;j(Object(b.a)(Object(b.a)({},n),{},Object(i.a)({},c,s)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"new pet"}),Object(p.jsx)(a.a,{className:"btn btn-success",to:"/",children:"back to list"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;t.name,t.value;O.a.post("http://localhost:8000/api/pets",n).then((function(e){j({name:""}),Object(a.c)("/")})).catch((function(e){var t=e.response.data,c=t.errors;t.name;d(c)}))},children:[Object(p.jsx)("h4",{children:"Add a new pet:"}),Object(p.jsxs)("p",{children:["Name:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:n.name,onChange:x,type:"text",name:"name"}),h.name?Object(p.jsx)("p",{style:{color:"red"},children:h.name.message}):null,Object(p.jsx)("br",{})]}),Object(p.jsxs)("p",{children:["type:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:n.type,onChange:x,type:"text",name:"type"}),h.type?Object(p.jsx)("p",{style:{color:"red"},children:h.type.message}):null,Object(p.jsx)("br",{})]}),Object(p.jsxs)("p",{children:["description:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:n.description,onChange:x,type:"text",name:"description"}),h.description?Object(p.jsx)("p",{style:{color:"red"},children:h.description.message}):null,Object(p.jsx)("br",{})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("h3",{children:"skills:"}),Object(p.jsx)("br",{}),"skill 1:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:x,type:"text",name:"skill1"}),h.skills?Object(p.jsx)("p",{style:{color:"red"},children:h.skills.message}):null,Object(p.jsx)("br",{}),"skill 2:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:x,type:"text",name:"skill2"}),h.skills?Object(p.jsx)("p",{style:{color:"red"},children:h.skills.message}):null,Object(p.jsx)("br",{}),"skill 3:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:x,type:"text",name:"skill3"}),h.skills?Object(p.jsx)("p",{style:{color:"red"},children:h.skills.message}):null,Object(p.jsx)("br",{})]}),Object(p.jsx)("input",{className:"btn btn-success",type:"submit",value:"create"})]})]})},d=function(e){var t=e.id,c=Object(s.useState)(),n=Object(r.a)(c,2),j=n[0],l=n[1],o=Object(s.useState)({}),h=Object(r.a)(o,2),d=h[0],x=h[1],u=Object(s.useState)(!0),m=Object(r.a)(u,2),g=m[0],f=m[1];Object(s.useEffect)((function(){O.a.get("http://localhost:8000/api/pets/".concat(t)).then((function(e){l(e.data),f(!1)})).catch((function(e){return f(!0)}))}),[]);var k=function(e){var t=e.target,c=t.name,s=t.value;l(Object(b.a)(Object(b.a)({},j),{},Object(i.a)({},c,s)))};return Object(p.jsx)(p.Fragment,{children:1==g?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Pet shelter"}),Object(p.jsxs)("h4",{children:["Edit:  ",j.name]}),Object(p.jsx)(a.a,{className:"btn btn-success",to:"/",children:"back to list"}),Object(p.jsx)("br",{}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(t),O.a.put("http://localhost:8000/api/pets/".concat(t),j).then((function(e){Object(a.c)("/")})).catch((function(e){var t=e.response.data.errors;x(t)}))},children:[Object(p.jsxs)("p",{children:["Name:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:k,type:"text",name:"name",value:j.name}),d.name?Object(p.jsx)("p",{style:{color:"red"},children:d.name.message}):null,Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["type:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:j.type,onChange:k,type:"text",name:"type"}),d.type?Object(p.jsx)("p",{style:{color:"red"},children:d.type.message}):null,Object(p.jsx)("br",{})]}),Object(p.jsxs)("p",{children:["description:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:j.description,onChange:k,type:"text",name:"description"}),d.description?Object(p.jsx)("p",{style:{color:"red"},children:d.description.message}):null,Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("h3",{children:"skills:"}),Object(p.jsx)("br",{}),"skill 1:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:j.skill1,onChange:k,type:"text",name:"skill1"}),Object(p.jsx)("br",{}),"skill 2:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:j.skill2,onChange:k,type:"text",name:"skill2"}),Object(p.jsx)("br",{}),"skill 3:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{value:j.skill3,onChange:k,type:"text",name:"skill3"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:"btn btn-primary",type:"submit",value:"update"})]})]})]})})},x=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],j=c[1],l=Object(s.useState)(!1),i=Object(r.a)(l,2),b=i[0];i[1];Object(s.useEffect)((function(){O.a.get("http://localhost:8000/api/pets").then((function(e){console.log(e.data),j(e.data)})).catch((function(e){return console.log(e.response.data)}))}),[b]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Pet shelter"}),Object(p.jsx)("h4",{children:"these pets looking for shelter"}),Object(p.jsx)(a.a,{className:"btn btn-primary",to:"/pets/new",children:"add new pet"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"name"}),Object(p.jsx)("th",{scope:"col",children:"type"}),Object(p.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(p.jsx)("tbody",{children:n.map((function(e,t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.type}),Object(p.jsxs)("td",{children:[Object(p.jsx)(a.a,{className:"btn btn-secondary",to:"/pets/edit/".concat(e._id),children:"Edit"}),Object(p.jsx)(a.a,{to:"/pets/show/"+e._id,class:"btn btn-success",children:"Detail"})]})]},t)})}))})]})]})},u=function(e){var t=e.id,c=Object(s.useState)(),n=Object(r.a)(c,2),j=n[0],l=n[1],i=Object(s.useState)(!1),b=Object(r.a)(i,2),o=b[0],h=b[1],d=Object(s.useState)({}),x=Object(r.a)(d,2),u=(x[0],x[1],Object(s.useState)(!0)),m=Object(r.a)(u,2),g=m[0],f=m[1];Object(s.useEffect)((function(){O.a.get("http://localhost:8000/api/pets/".concat(t)).then((function(e){l(e.data),console.log(e.data),f(!1)})).catch((function(e){return f(!0)}))}),[o]);return Object(p.jsx)("div",{children:1==g?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Pet shelter"}),Object(p.jsxs)("h4",{children:["Details about:  ",j.name]}),Object(p.jsx)(a.a,{className:"btn btn-success",to:"/",children:"back to list"}),Object(p.jsxs)("button",{onClick:function(){O.a.delete("http://localhost:8000/api/pets/".concat(t)).then((function(e){return Object(a.c)("/")})).catch((function(e){return console.log(e.response.data)}))},class:"btn btn-danger",children:["Adopt ",j.name]}),Object(p.jsxs)("p",{children:[Object(p.jsxs)("p",{children:["Pet Type: ",j.type]}),Object(p.jsxs)("p",{children:["Pet Description: ",j.description]}),Object(p.jsxs)("p",{children:["Pet skills: ",Object(p.jsx)("span",{children:j.skill1}),Object(p.jsxs)("span",{children:[" ",j.skill2]}),Object(p.jsxs)("span",{children:[" ",j.skill3]})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("button",{disabled:o,onClick:function(){O.a.put("http://localhost:8000/api/pets/likes/".concat(t)).then((function(e){return h(!0)})).catch((function(e){return console.log(e.response.data)}))},className:"btn btn-link",children:"Like"}),"like(s) : ",j.likes]})]})]})})};var m=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(a.b,{children:[Object(p.jsx)(x,{path:"/"}),Object(p.jsx)(h,{path:"/pets/new"}),Object(p.jsx)(d,{path:"/pets/edit/:id"}),Object(p.jsx)(u,{path:"/pets/show/:id"})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,j=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),j(e),l(e)}))};l.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),g()}},[[52,1,2]]]);
//# sourceMappingURL=main.2f1a726c.chunk.js.map