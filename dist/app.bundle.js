!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}o(1);var i=n(o(2)),a=n(o(3)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(4)),l=JSON.parse(document.querySelector("#mm_settings").value),s=l.advanced_devMode?"dev":"production";console.log("Mega Megamagnate "+l.version+" ("+s+" mode) is loaded"),formatNumber=function(e){var t=new NumberFormat;return t.setInputDecimal("."),t.setNumber(e),t.setPlaces("0",!1),t.setCurrencyValue(""),t.setCurrency(!0),t.setCurrencyPosition(t.RIGHT_OUTSIDE),t.setNegativeFormat(t.LEFT_DASH),t.setNegativeRed(!0),t.setSeparators(!0,".","."),t.toFormatted()},$(".footer").hide(),l.general_playButton||$('.trozoLogin a[href="https://play.google.com/store/apps/details?id=net.megamagnate"]').hide(),l.general_moneyTimer&&($(".cajaDinero").css("font-family","monospace").prepend('<span id="tiempoHastaLlenado" style="font-size: 0.225em;color:#aaa;"></span>'),$("#cajetoDinero").css("font-size","0.85em").html(formatNumber(window.dinero)),setInterval(function(){var e=parseInt($("#cajetoDinero").attr("data").split(":")[1].split(".").join("")),t=parseFloat($("#alsegundo").html()),o=(e-dinero)/t;o>0?$("#tiempoHastaLlenado").html(function(e){var t=parseInt(e,10);return[Math.floor(t/3600)%24,Math.floor(t/60)%60,t%60].map(function(e){return e<10?"0"+e:e}).filter(function(e,t){return"00"!==e||t>0}).join(":")}(o)+" hasta llenado"):$("#tiempoHastaLlenado").html("Lleno")},500)),function(e){switch(e[0]){case"buildings":i.default.init();break;case"casino":"play"===e[1]?a.default.init():"hilo"===e[1]&&r.init()}}(window.location.pathname.split("/").splice(1))},function(e,t,o){"use strict";Function.prototype.clone=function(){var e=this,t=function(){return e.apply(this,arguments)};for(var o in this)this.hasOwnProperty(o)&&(t[o]=this[o]);return t}},function(e,t,o){"use strict";e.exports={calcEficiencia:function(){$(".tablaContenido2 tr td").each(function(e){var t=$(this).text(),o=/- Precio: (.+)\n/gm.exec(t),n=/- Bºs al dia: (.+)\n/gm.exec(t);if(o&&n){o=parseInt(o[1].split(".").join(""));var i=(n=parseInt(n[1].split(".").join("")))/o;$(this).find(".eficiencia").length||($(this).find(".imageListadoDiv").css("margin-bottom","1em"),$(this).find("br").last().before('<br><p style="display:inline" title="Porcentaje del coste que se recupera al día">- Eficiencia: <span class="eficiencia"></span></p>')),$(this).find(".eficiencia").html((100*i).toFixed(2)+"%")}})},calcEficienciaOptimizar:function(){for(var e=["Estanco","Librería","Tienda de Ropa","Mercado","Joyería","Discoteca","Banco","Gasolinera","Centro Comercial","Industria"],t=[15,30,60,120,240,480,960,1920,3840,7680],o=[],n=0;n<e.length;n++)o[n]=parseInt($("#ned"+(n+1)).html());$("#eficienciaOptimizarNegocio").html(function(o,i){var a=0;for(n=0;n<e.length;n++)a+=t[n]*o[n];return Math.floor(a/parseInt(i)*1e4)/100}(o,$("#precioOptimizarNegocio").val().split(".").join(""))+"%")},init:function(){var e=this,t=window.verificarPrecio.clone();window.verificarPrecio=function(o){e.calcEficiencia(),e.calcEficienciaOptimizar(),t(o)},this.calcEficiencia(),$(".tablaContenido2").last().after('\n    <table  class="tablaContenido2" cellspacing="0" cellpadding="0" style="margin-top:15px">\n    <tr>\n      <td class="topTitulo2"> Eficiencia de Optimizar Negocio </td>\n    </tr>\n    <tr>\n      <td>\n        Precio de Optimizar Negocio: <input type="text" id="precioOptimizarNegocio" />\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <p style="display:inline" title="Porcentaje del coste que se recupera al día">- Eficiencia: <span id="eficienciaOptimizarNegocio">0%</span></p>\n      </td>\n    </tr>\n    </table>\n  '),$("#precioOptimizarNegocio").on("change, input",function(){e.calcEficienciaOptimizar()})}}},function(e,t,o){"use strict";var n=JSON.parse(document.querySelector("#mm_settings").value),i={slowMode:!1,slowAmount:8e5,slowTimer:10,salirEnBote:!1,auto:!0,slowCounter:0,lastTs:1*new Date,init:function(){var e=document.getElementById("fichas");e.value=5*e.length;var t=$('<div style="text-align:center;margin:1em;"></div>').insertBefore("#mensajescasino");$("<button></button>").appendTo(t).click(function(){i.auto=!i.auto,$(this).text(i.auto?"Stop Auto":"Start Auto")}).click(),$("<button></button>").appendTo(t).click(function(){i.slowMode=!i.slowMode,$(this).text(i.slowMode?"Stop SlowMode":"Activar SlowMode")}).click(),$("<button></button>").appendTo(t).click(function(){i.salirEnBote=!i.salirEnBote,$(this).text(i.salirEnBote?"Stop SalirEnBote":"Activar SalirEnBote")}).click(),n.casinos_slowAmount&&(n.casinos_slowAmount=new Intl.NumberFormat("es-ES").format(n.casinos_slowAmount)),$('<div style="margin: 1em 0;color:#333;">SlowMode: Si el bote es menor a '+(n.casinos_slowAmount||new Intl.NumberFormat("es-ES").format(i.slowAmount))+", solamente se apuesta cada "+(n.casinos_slowTimer||i.slowTimer)+" segundos</div>").appendTo(t),$('<div style="margin: 1em 0;color:#333;">SalirEnBote: Si el bote igual o menos de 100.000, avisar y salir automáticamente</div>').appendTo(t),this.interval()},interval:function(){setTimeout(i.interval,500);var e=$(".tablaerror").length>0,t=1*new Date-i.lastTs;if(i.lastTs=1*new Date,!e&&i.auto){var o=parseInt($("#mbote").html().split(".").join(""));if(i.salirEnBote&&o<=2e4)return alert("Bote!!"),document.location="/casino/list",void(i.auto=!1);if(i.slowMode&&o<(parseInt(n.casinos_slowAmount)||i.slowAmount))a=1e3*parseInt(n.casinos_slowTimer)||1e3*i.slowTimer;else var a=500;i.slowCounter+=t,i.slowCounter>=a&&(i.slowCounter=0,apostar())}}};e.exports=i},function(e,t,o){"use strict";function n(){for(var e=document.querySelector(".hilo"),t=document.querySelectorAll("#jugadas, #disponible"),o=0;o<t.length;o++)t[o].addEventListener("DOMSubtreeModified",function(t){var o=parseInt(e.style.backgroundPosition.split("px")[0]),n=Math.abs(Math.floor(o/82));n>12&&(n=0),r.hi=(12-n)/12,r.lo=n/12;var i={hi:"color: #222; font-weight: bold;",lo:"color: #222; font-weight: bold;"};r.hi>.5?(i.hi="color: limegreen; font-weight: bold;",i.lo="color: orangered; font-weight: normal;"):r.lo>.5&&(i.lo="color: limegreen; font-weight: bold;",i.hi="color: orangered; font-weight: normal;");var a={};Object.keys(r).map(function(e,t){a[e]=Math.floor(1e4*r[e])/100});var l='\n        <div id="chances" style="margin:0 5px;flex: 1 1;">\n          <div>Hi chances: <span style="'+i.hi+'">'+a.hi+'%</span></div>\n          <div>Lo chances: <span style="'+i.lo+'">'+a.lo+"%</span></div>\n        </div>\n      ";$("#chances").html(l)})}function i(){r.hi>r.lo?playHilo(1):playHilo(2)}function a(){window.HiLoAuto=!window.HiLoAuto,$("#auto-boton").html(window.HiLoAuto?"Stop Auto":"Start Auto")}var r={hi:0,lo:0},l=JSON.parse(document.querySelector("#mm_settings").value);e.exports={init:function(){$(".cajaHilo").css("height","auto").css("flex","1 0").parent().css("display","flex"),$('<a class="boton" style="width: 100px">La más probable</a><br><br>').insertBefore("#endGame").click(i),$('<a id="auto-boton" class="boton" style="width: 100px;"></a><br><br>').prependTo(".cajaHilo").click(a),$("<div id='chances'></div>").insertAfter(".cajaHilo"),$("<span style='margin: 1em 0;color:#333;'>Modo Auto: Seguirá apostando hasta que no llegue a la cantidad objetivo "+(new Intl.NumberFormat("es-ES").format(l.hilo_exitOn)||new Intl.NumberFormat("es-ES").format(8e5))+"</span>").appendTo(".cajaHilo"),$('a[onclick="comienzaJuego()"]').attr("onclick","comienzaJuegoSinConfirmar()"),$("#endGame").attr("onclick","playHilo(3)"),$("#jugadaspendientes").parents(".tablaContenido2").last().after('<div id="HiLoHelper"></div>'),$("#HiLoHelper").html('<a href="https://wizardofodds.com/games/blackjack/card-counting/high-low/" target="_blank"><img style="width:100%;" src="https://i.imgur.com/4FCUpB1.png"/></a>'),window.comienzaJuegoSinConfirmar=function(){var e=window.confirm;window.confirm=function(){return!0},window.comienzaJuego(),window.confirm=e},window.HiLoAuto=!0,a(),setInterval(function(){if(!window.HiLoAuto||flagPlaying)return!1;var e="none"!==$("#cajaJugando").css("display"),t="none"===$(".hilo_content").css("display");!e||t?window.comienzaJuegoSinConfirmar():parseInt($("#bote").html().split(".").join(""))<(l.hilo_exitOn||5e6)?i():window.playHilo(3)},200),n()}}}]);