(()=>{var e={286:()=>{mp.events.addCommand("veh",((e,a)=>{e.data.adminlvl>0&&mp.vehicles.new(mp.joaat(a),new mp.Vector3(e.position.x,e.position.y,e.position.z))})),mp.events.addCommand("repair",(e=>{e.data.adminlvl>0&&e.vehicle&&e.vehicle.repair()})),mp.events.addCommand("delveh",(e=>{e.data.adminlvl>0&&e.vehicle&&e.vehicle.destroy()})),mp.events.addCommand("tpc",((e,a,o,t,l)=>{e.data.adminlvl>0&&(e.position=new mp.Vector3(parseFloat(o),parseFloat(t),parseFloat(l)))})),mp.events.addCommand("time",((e,a,o,t)=>{e.data.adminlvl>0&&mp.world.time.set(a,o,t)}))},845:()=>{mp.events.add("playerReady",(e=>{e.call("auth"),e.dimension=0})),mp.events.add("sendDataToAuthorization",((e,a,o)=>{console.log("\u0412\u044b\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438:",a,o),database.query("SELECT * FROM accounts WHERE login = ? AND password = ?",[a,o],((a,o)=>{a?console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",a):o.length>0?(console.log("\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u043e\u0448\u0435\u043b \u0432\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e."),e.data.adminlvl=o[0].adminlvl,e.call("Ready")):console.log("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c.")}))})),mp.events.add("sendDataToRegister",((e,a,o,t,l)=>{console.log("\u0412\u044b\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:",a,o,t,l),database.query("SELECT * FROM accounts WHERE socialClub = ?",[e.socialClub],((s,n)=>{s?console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:",s):n.length>0?(console.log("\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442."),showCustomNotify(e,"\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442.",1)):database.query("INSERT INTO accounts (socialClub, email, login, password, promo, adminlvl) VALUES (?, ?, ?, ?, ?, 0)",[e.socialClub,a,o,t,l],((a,o)=>{a?console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:",a):(console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d."),e.position=new mp.Vector3(-1036.72,-2732.11,13.76),e.heading=326.25,e.call("Ready"))}))}))}))},841:()=>{mp.events.add("playerDeath",(e=>{e.call("death")})),mp.events.add("sendDataToDeathSpawn",(e=>{e.spawn(new mp.Vector3(315.63,-582.2,43.28)),e.health=50}))},302:()=>{global.showCustomNotify=(e,a,o=0,t=5,l=5e3)=>{e.call("client:user:showCustomNotify",[a,o,t,l])}}},a={};function o(t){var l=a[t];if(void 0!==l)return l.exports;var s=a[t]={exports:{}};return e[t](s,s.exports,o),s.exports}o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a}),a},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{"use strict";o(286),o(845),o(841),o(302);const e=require("mysql");var a=o.n(e);global.database=a().createConnection({host:mp.config.database.host,user:mp.config.database.user,password:mp.config.database.password,database:mp.config.database.name}),database.connect((e=>{e?console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e):console.log("\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0430.")}))})()})();