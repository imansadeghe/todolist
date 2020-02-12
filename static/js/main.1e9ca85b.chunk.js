(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(t,e,o){t.exports=o(22)},18:function(t,e,o){},19:function(t,e,o){},22:function(t,e,o){"use strict";o.r(e);var n,a,r,c=o(0),l=o.n(c),i=o(10),s=o.n(i),p=(o(18),o(3)),u=o(4),d=o(6),h=o(5),m=o(7),y=(o(19),o(8)),b=o(9),f=o(2),O=(o(12),o(1)),g=(n=function(){function t(e,o,n,c){Object(p.a)(this,t),Object(b.a)(this,"title",a,this),Object(b.a)(this,"completed",r,this),this.title=o,this.completed=n,this.id=c,this.store=e}return Object(u.a)(t,[{key:"toggle",value:function(){this.completed=!this.completed}},{key:"handleDestroy",value:function(){this.store.todoss.remove(this)}},{key:"setTitle",value:function(t){this.title=t}},{key:"toJS",value:function(){return{id:this.id,title:this.title,completed:this.completed}}}]),t}(),a=Object(f.a)(n.prototype,"title",[O.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(f.a)(n.prototype,"completed",[O.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(f.a)(n.prototype,"toggle",[O.d],Object.getOwnPropertyDescriptor(n.prototype,"toggle"),n.prototype),Object(f.a)(n.prototype,"handleDestroy",[O.d],Object.getOwnPropertyDescriptor(n.prototype,"handleDestroy"),n.prototype),n);var j,v,w,k,C,E,D,N=new(j=function(){function t(){Object(p.a)(this,t),Object(b.a)(this,"todos",v,this),this.lastid=0,Object(b.a)(this,"todoss",w,this)}return Object(u.a)(t,[{key:"getall",value:function(){this.todoss=this.todos}},{key:"getactive",value:function(){this.todoss=this.todos.filter((function(t){return!t.completed}))}},{key:"getcompleted",value:function(){this.todoss=this.todos.filter((function(t){return t.completed}))}},{key:"addtodo",value:function(t){this.todos.push(new g(this,t,!1,this.lastid++))}},{key:"toggleAll",value:function(t){this.todos.forEach((function(e){return e.completed=t}))}},{key:"clearCompleted",value:function(){this.todoss=this.todos.filter((function(t){return!t.completed})),this.todos=this.todoss}},{key:"activeTodoCount",get:function(){return this.todos.reduce((function(t,e){return t+(e.completed?0:1)}),0)}},{key:"completedCount",get:function(){return this.todoss.length-this.activeTodoCount}},{key:"todoscompletedcount",get:function(){return this.todos.filter((function(t){return t.completed})).length}}]),t}(),v=Object(f.a)(j.prototype,"todos",[O.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=Object(f.a)(j.prototype,"todoss",[O.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.todos}}),Object(f.a)(j.prototype,"getall",[O.d],Object.getOwnPropertyDescriptor(j.prototype,"getall"),j.prototype),Object(f.a)(j.prototype,"getactive",[O.d],Object.getOwnPropertyDescriptor(j.prototype,"getactive"),j.prototype),Object(f.a)(j.prototype,"getcompleted",[O.d],Object.getOwnPropertyDescriptor(j.prototype,"getcompleted"),j.prototype),Object(f.a)(j.prototype,"addtodo",[O.d],Object.getOwnPropertyDescriptor(j.prototype,"addtodo"),j.prototype),Object(f.a)(j.prototype,"activeTodoCount",[O.e],Object.getOwnPropertyDescriptor(j.prototype,"activeTodoCount"),j.prototype),Object(f.a)(j.prototype,"completedCount",[O.e],Object.getOwnPropertyDescriptor(j.prototype,"completedCount"),j.prototype),Object(f.a)(j.prototype,"toggleAll",[O.d],Object.getOwnPropertyDescriptor(j.prototype,"toggleAll"),j.prototype),Object(f.a)(j.prototype,"clearCompleted",[O.d],Object.getOwnPropertyDescriptor(j.prototype,"clearCompleted"),j.prototype),Object(f.a)(j.prototype,"todoscompletedcount",[O.e],Object.getOwnPropertyDescriptor(j.prototype,"todoscompletedcount"),j.prototype),j),P=function(t){function e(){var t,o;Object(p.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={value:""},o.handleKeyDown=function(t){13===t.keyCode&&(t.preventDefault(),N.addtodo(o.state.value),o.setState({value:""}))},o}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"what to do ?"),l.a.createElement("input",{value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})},onKeyDown:function(e){return t.handleKeyDown(e)},type:"text",className:"new-todo",placeholder:"what needs to be done?"}))}}]),e}(c.Component),T=Object(y.a)(k=function(t){function e(){var t,o;Object(p.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).onToggle=function(){o.props.todo.toggle()},o.Destroy=function(){o.props.todo.handleDestroy()},o}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.todo;return l.a.createElement("li",{className:t.completed?"completed ":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{onChange:this.onToggle,type:"checkbox",className:"toggle",value:"on",checked:t.completed}),l.a.createElement("label",null,t.title),l.a.createElement("button",{className:"destroy",onClick:this.Destroy})))}}]),e}(c.Component))||k,A=Object(y.a)(C=function(t){function e(){return Object(p.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"getVisibleTodos",value:function(){return N.todos.filter((function(t){switch(N.todosfiltered){case"active":return!t.completed;case"completed":return t.completed;default:return!0}}))}},{key:"render",value:function(){return l.a.createElement("section",{className:"main"},l.a.createElement("ul",{className:"todo-list"},N.todoss.map((function(t){return l.a.createElement(T,{todo:t})}))))}}]),e}(c.Component))||C,z=Object(y.a)(E=function(t){function e(){var t,o;Object(p.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).clearCompleted=function(){N.clearCompleted()},o}return Object(m.a)(e,t),Object(u.a)(e,[{key:"getall",value:function(){N.getall()}},{key:"getactive",value:function(){N.getactive()}},{key:"getcompleted",value:function(){N.getcompleted()}},{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",{className:"todo-count"},l.a.createElement("strong",{style:{backgroundColor:"yellow"}},N.activeTodoCount)," \u0628\u0627\u0642\u06cc"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",{className:"bt",onClick:this.getall},"all"),l.a.createElement("li",{className:"bt",onClick:this.getactive},"active"),l.a.createElement("li",{className:"bt",onClick:this.getcompleted},"completed")),0===N.completedCount?null:l.a.createElement("button",{className:"clear-completed",onClick:this.clearCompleted},"Clear completed"))}}]),e}(c.Component))||E,x=Object(y.a)(D=function(t){function e(){return Object(p.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{id:"todoapp",className:"todoapp"},l.a.createElement(P,null),l.a.createElement(A,null),l.a.createElement(z,null))}}]),e}(c.Component))||D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.1e9ca85b.chunk.js.map