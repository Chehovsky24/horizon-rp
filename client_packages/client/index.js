(()=>{var e={399:(e,t,o)=>{const a=114,r=32,s=33,i=34,l=35,n=321,p=326,m=24,g=25;o.g.fly={flying:!1,f:2,w:2,h:2,point_distance:1e3},o.g.gameplayCam=mp.cameras.new("gameplay");let d=null,c=null;mp.keys.bind(a,!1,(function(){const e=mp.players.local;if(e.getVariable("adminlvl")>1){const t=mp.game.controls,a=o.g.fly;if(d=o.g.gameplayCam.getDirection(),c=o.g.gameplayCam.getCoord(),a.flying=!a.flying,e.setInvincible(a.flying),e.freezePosition(a.flying),e.setAlpha(a.flying?0:255),!a.flying&&!t.isControlPressed(0,n)){const t=e.position;t.z=mp.game.gameplay.getGroundZFor3dCoord(t.x,t.y,t.z,0,!1),e.setCoordsNoOffset(t.x,t.y,t.z,!1,!1,!1)}showCustomNotify(a.flying?"\u041f\u043e\u043b\u0451\u0442 \u0432\u043a\u043b\u044e\u0447\u0435\u043d":"\u041f\u043e\u043b\u0451\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d")}else mp.game.graphics.notify("~r~\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u0430\u0432 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b")})),mp.events.add("render",(()=>{if(fly.flying){const t=mp.game.controls,a=o.g.fly;d=o.g.gameplayCam.getDirection(),c=o.g.gameplayCam.getCoord();let y=!1;const u=mp.players.local.position;var e;e=t.isControlPressed(0,m)?1:t.isControlPressed(0,g)?.02:.2,t.isControlPressed(0,r)?(a.f<8&&(a.f*=1.025),u.x+=d.x*a.f*e,u.y+=d.y*a.f*e,u.z+=d.z*a.f*e,y=!0):t.isControlPressed(0,s)?(a.f<8&&(a.f*=1.025),u.x-=d.x*a.f*e,u.y-=d.y*a.f*e,u.z-=d.z*a.f*e,y=!0):a.f=2,t.isControlPressed(0,i)?(a.l<8&&(a.l*=1.025),u.x+=-d.y*a.l*e,u.y+=d.x*a.l*e,y=!0):t.isControlPressed(0,l)?(a.l<8&&(a.l*=1.05),u.x-=-d.y*a.l*e,u.y-=d.x*a.l*e,y=!0):a.l=2,t.isControlPressed(0,n)?(a.h<8&&(a.h*=1.025),u.z+=a.h*e,y=!0):t.isControlPressed(0,p)?(a.h<8&&(a.h*=1.05),u.z-=a.h*e,y=!0):a.h=2,y&&mp.players.local.setCoordsNoOffset(u.x,u.y,u.z,!1,!1,!1)}}))},656:()=>{mp.events.add("render",(()=>{if(mp.players.local.getVariable("adminlvl")>1){const e=mp.players.local.getHeading();mp.game.graphics.drawText(`x: ${mp.players.local.position.x.toFixed(2)}, y: ${mp.players.local.position.y.toFixed(2)}, z: ${mp.players.local.position.z.toFixed(2)}, h: ${e.toFixed(2)}`,[.55,.965],{font:0,color:[255,255,255,230],scale:[.4,.4],outline:!0})}}))},193:()=>{let e=mp.cameras.new("default",new mp.Vector3(-485,1095.75,323.85),new mp.Vector3(0,0,0),40);e.pointAtCoord(402.8664,-996.4108,-98.5),mp.events.add("auth",(()=>{browser(!0),callCef("authorization",'{"type": "show"}'),mp.discord.update("Horizon RolePlay",mp.players.local.name),e.setActive(!0),mp.game.cam.renderScriptCams(!0,!1,0,!0,!1)})),mp.events.add("signin",((e,t)=>{""!==(e=(e=e.toLowerCase()).replace(/[^a-zA-Z0-9\s]/gi,""))?""!==t?mp.events.callRemote("sendDataToAuthorization",e,t):showCustomNotify("\u041f\u0430\u0440\u043e\u043b\u044c - \u043f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"):showCustomNotify("\u041b\u043e\u0433\u0438\u043d - \u043f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e")})),mp.events.add("signup",((e,t,o,a,r)=>{/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?(e=e.toLowerCase(),""!==(t=(t=t.toLowerCase()).replace(/[^a-zA-Z0-9\s]/gi,""))?""!==o?o===a?mp.events.callRemote("sendDataToRegister",e,t,o,r):showCustomNotify("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):showCustomNotify("\u041f\u0430\u0440\u043e\u043b\u044c - \u043f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"):showCustomNotify("\u041b\u043e\u0433\u0438\u043d - \u043f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e")):showCustomNotify("Email - \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441")})),mp.events.add("Ready",(()=>{browser(!1),callCef("authorization",'{"type": "hide"}'),callCef("hud",JSON.stringify({type:"updateValues",district:getDistrict(),street:getStreet(),playerId:getPlayerId(),online:getOnline()})),e.setActive(!1),mp.game.cam.renderScriptCams(!1,!1,0,!0,!1)}))},365:()=>{mp.events.add("death",(()=>{mp.gui.cursor.show(!0,!0),mp.game.ui.displayRadar(!1),callCef("death",'{"type": "show"}'),mp.game.cam.doScreenFadeIn(500)})),mp.events.add("client:death:btn",(e=>{if(mp.console.logInfo(`\u0412\u044b\u0432\u043e\u0434: ${e}`),"death"===e)mp.gui.cursor.show(!1,!1),mp.game.ui.displayRadar(!0),callCef("death",'{"type": "hide"}'),mp.events.callRemote("sendDataToDeathSpawn")}))},698:(e,t,o)=>{mp.events.add("client:user:showCustomHud",(()=>{callCef("hud",'{"type": "show"}'),setInterval((()=>{callCef("hud",JSON.stringify({type:"updateValues",district:getDistrict(),street:getStreet(),playerId:getPlayerId(),online:getOnline()}))}),5e3)})),o.g.getPlayerId=()=>mp.players.local.id,o.g.getOnline=()=>mp.players.length},412:(e,t,o)=>{o.g.getDistrict=()=>{let e=mp.game.zone.getNameOfZone(mp.players.local.position.x,mp.players.local.position.y,mp.players.local.position.z);return mp.game.ui.getLabelText(e)},o.g.getStreet=()=>{let e=mp.game.pathfind.getStreetNameAtCoord(mp.players.local.position.x,mp.players.local.position.y,mp.players.local.position.z,0,0);return mp.game.ui.getStreetNameFromHashKey(e.streetName)}},138:(e,t,o)=>{mp.events.add("client:user:showCustomNotify",((e,t,o,a)=>{showCustomNotify(e,t,o,a)})),o.g.showCustomNotify=(e,t=0,o=5,a=5e3)=>{mp.game.audio.playSoundFrontend(-1,"Boss_Blipped","GTAO_Magnate_Hunt_Boss_SoundSet",!1),callCef("notify",JSON.stringify({type:t,layout:o,text:e,time:a}))}},42:()=>{const e=mp.game.interior.getInteriorAtCoords(311.2546,-592.4204,42.32737);mp.game.streaming.requestIpl("gabz_pillbox_milo_"),["rc12b_fixed","rc12b_destroyed","rc12b_default","rc12b_hospitalinterior_lod","rc12b_hospitalinterior"].forEach((e=>mp.game.streaming.isIplActive(e)&&mp.game.streaming.removeIpl(e))),mp.game.interior.enableInteriorProp(e,"gabz_pillbox_milo_"),mp.game.interior.refreshInterior(e)},964:(e,t,o)=>{o.g.browser=e=>{e?(mp.gui.cursor.show(!0,!0),mp.gui.chat.activate(!1),mp.gui.chat.show(!1),mp.game.ui.displayRadar(!1)):(mp.gui.chat.activate(!0),mp.gui.chat.show(!0),mp.gui.cursor.show(!1,!1),mp.game.ui.displayRadar(!0))}},136:(e,t,o)=>{o.g.uiBrowser=mp.browsers.new("package://ui/index.html"),o.g.callCef=(e,t)=>{try{uiBrowser&&isValidJSON(t)&&uiBrowser.execute(`trigger('${e}', '${t}')`)}catch(e){}},o.g.isValidJSON=function(e){try{return JSON.parse(e),!0}catch(e){return!1}}},756:()=>{mp.keys.bind(192,!1,(()=>{mp.gui.cursor.visible=!mp.gui.cursor.visible}))}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(399),o(656),o(193),o(365),o(698),o(412),o(138),o(42),o(964),o(136),o(756)})()})();