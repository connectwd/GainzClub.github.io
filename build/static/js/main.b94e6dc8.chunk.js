(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,a,t){e.exports=t(26)},20:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(13),i=t.n(r),l=(t(20),t(2)),s=function(){return c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"Gainz Club NFT"),c.a.createElement("p",null,"Join The Gainz Gym"))},o=(t(8),t(14),t(5)),m=t.n(o);t(28),t(22);m.a.initializeApp({apiKey:"AIzaSyAd_wPHN9-5Df-JP8ZEtTJD7wYkE8BQsi0",authDomain:"gainz-club.firebaseapp.com",projectId:"gainz-club",storageBucket:"gainz-club.appspot.com",messagingSenderId:"226828061942",appId:"1:226828061942:web:3172f4fd1496a99c29b0d7",measurementId:"G-NYGWQF84F0"});m.a.storage();var u=m.a.firestore(),d=(m.a.firestore.FieldValue.serverTimestamp,t(3)),p=t(9),f=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var a=u.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push(Object(p.a)(Object(p.a)({},e.data()),{},{id:e.id}))})),r(a)}));return function(){return a()}}),[e]),{docs:c}},g=function(e){var a=e.setSelectedImg,t=f("images").docs;return c.a.createElement("div",{className:"img-grid"},t&&t.map((function(e){return c.a.createElement(d.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return a(e.url)}},c.a.createElement(d.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},E=function(e){var a=e.setSelectedImg,t=e.selectedImg;return c.a.createElement(d.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},c.a.createElement(d.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var b=function(){var e=Object(n.useState)(null),a=Object(l.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",{className:"App",style:{backgroundImage:"url(/images/szabolcs-toth-CyuvsE3TVak-unsplash.jpg)"}},c.a.createElement("header",null,c.a.createElement(s,null)),c.a.createElement("div",{className:"content-body"},c.a.createElement(g,{setSelectedImg:r}),t&&c.a.createElement(E,{selectedImg:t,setSelectedImg:r}),c.a.createElement("div",{className:"token-info"}),c.a.createElement("div",{className:"team-info"})),c.a.createElement("footer",null))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b94e6dc8.chunk.js.map