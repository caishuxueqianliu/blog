(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{667:function(e,t,n){"use strict";n.r(t);n(299);var r={data:function(){return{imgArr:["/img/1.jpg","/img/2.jpg","/img/3.jpg","/img/4.jpg"]}},mounted:function(){},computed:{imgUrl:function(){var e=parseInt(Math.random()*this.imgArr.length);return this.imgArr[e]}},methods:{hanlerRandomBg:function(){if("/"==this.$page.path){var e=parseInt(Math.random()*this.imgArr.length),t=this.imgArr[e];document.getElementsByClassName("hero")[0].style.background="url("+t+") no-repeat"}},setElement:function(){var e=document.createElement("a");e.href="#homeBlog",e.className="home-more";var t=document.createElement("div");t.id="homeBlog",document.getElementsByClassName("hero")[0].appendChild(t),document.getElementsByClassName("hero")[0].getElementsByTagName("div")[0].appendChild(e)}}},a=n(7),m=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"0eff51a1",null);t.default=m.exports}}]);