(this["webpackJsonpfind-waldo"]=this["webpackJsonpfind-waldo"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=a(2),s=a(3),u=a(1),l=a(5),h=a(4),m=(a(21),a(22),a(23),a(6)),d=a.n(m),f=a(10),p=a(7);a(26);p.initializeApp({apiKey:"AIzaSyBDeIhQoJpHLS4uepWszXeZE0z2fna8z2k",authDomain:"where-s-whaldo.firebaseapp.com",databaseURL:"https://where-s-whaldo.firebaseio.com",projectId:"where-s-whaldo",storageBucket:"where-s-whaldo.appspot.com",messagingSenderId:"757702852384",appId:"1:757702852384:web:4b77e37832f1b9ab852145"});var g=p.database(),v={getData:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNaN(t)){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,g.ref("imgs/").once("value").then((function(e){return null===e.val()?{}:e.val()})).catch((function(e){return console.log(e),""}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getHighScore:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.ref("highscore/").once("value").then((function(e){return null===e.val()?{}:e.val()})).catch((function(e){return console.log(e),""}));case 2:return t=e.sent,t=Object.values(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateHighScore:function(e,t,a){isNaN(e)||(t=""===t?"Jhon":t,g.ref("highscore/"+a+"/"+t).update({highscore:e,name:t},(function(e){e&&console.log(e+"\nhere")})))},db:p.database(),app:p.app()},b=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.getData=n.getData.bind(Object(u.a)(n)),n.state={link:"https://static.techspot.com/images2/news/bigimage/2018/08/2018-08-13-image-14.jpg",coords:{x:0,y:0}},n}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.getData(this.props.img)}},{key:"calcCoords",value:function(e){var t=[{x:.79685534591,y:.0876656473},{x:.48875,y:.88522954092},{x:.68359375,y:.34843982169}],a=document.getElementById("image");return{x:a.width*t[e].x,y:a.height*t[e].y}}},{key:"getData",value:function(e){var t=this;v.getData(e).then((function(a){t._isMounted&&t.setState({link:a.links[e]?a.links[e]:a.links[0],coords:a.links[e]?t.calcCoords(e):{x:0,y:0}})}),(function(e){})).catch((function(e){}))}},{key:"render",value:function(){var e={position:"absolute",top:this.state.coords.y,left:this.state.coords.x,width:"25px",height:"25px"};return i.a.createElement("div",{className:"waldoimage"},i.a.createElement("img",{id:"image",src:this.state.link,alt:"waldo"}),i.a.createElement("button",{style:e,onClick:this.props.handleClick,id:"target"}))}}]),a}(i.a.Component),k=(a(29),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getHighScores=n.getHighScores.bind(Object(u.a)(n)),n._isMounted=!1,n.state={data:[]},n}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.getHighScores()}},{key:"getHighScores",value:function(){var e=this;v.getHighScore().then((function(t){e._isMounted&&e.setState({data:t})}),(function(e){})).catch((function(e){}))}},{key:"updateHS",value:function(e){var t=this;return this.state.data.length>0?Object.values(this.state.data[e]).sort((function(e,t){return e.highscore-t.highscore})).map((function(e){return e.name===t.props.user?i.a.createElement("p",{className:"You",key:e.name+e.highscore},e.name,": ",e.highscore):i.a.createElement("p",{key:e.name+e.highscore},e.name,": ",i.a.createElement("span",null,e.highscore))})):"Loading"}},{key:"render",value:function(){return i.a.createElement("div",{className:"Highscores"},i.a.createElement("h1",null,"Highscores"),i.a.createElement("div",{className:"Rows"},i.a.createElement("div",{className:"Row"},i.a.createElement("h2",null,"Easy"),this.updateHS(0)),i.a.createElement("div",{className:"Row"},i.a.createElement("h2",null,"Medium"),this.updateHS(1)),i.a.createElement("div",{className:"Row"},i.a.createElement("h2",null,"Hard"),this.updateHS(2))))}}]),a}(i.a.Component)),E=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).startGame=n.startGame.bind(Object(u.a)(n)),n.handleClick=n.handleClick.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.state={game:!1,found:!1,start:0,time:Number.MAX_SAFE_INTEGER,username:"",choice:0},n}return Object(s.a)(a,[{key:"startGame",value:function(e){this.setState({game:!0,start:Date.now(),choice:e})}},{key:"handleClick",value:function(){var e=Date.now()-this.state.start;e<this.state.time&&v.updateHighScore(e,this.state.username,this.state.choice),this.setState({found:!0,time:e,game:!1})}},{key:"handleChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){var e=this;return!0===this.state.game?i.a.createElement("div",{className:"App"},i.a.createElement(b,{img:this.state.choice,handleClick:this.handleClick})):i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"Difficulties"},i.a.createElement("label",{htmlFor:"dif"},"Choose difficulty "),i.a.createElement("button",{name:"dif",onClick:function(){e.startGame(0)}},"Easy"),i.a.createElement("button",{name:"dif",onClick:function(){e.startGame(1)}},"Medium"),i.a.createElement("button",{name:"dif",onClick:function(){e.startGame(2)}},"Hard")),i.a.createElement("div",{className:"Input"},i.a.createElement("label",{htmlFor:"name"},"Username: "),i.a.createElement("input",{type:"text",onChange:this.handleChange,name:"name"})),i.a.createElement(k,{user:this.state.username}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e2bb7a28.chunk.js.map