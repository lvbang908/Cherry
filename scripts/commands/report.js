module.exports.info = {
	name: "report",
	version: "1.0.0",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Gửi report lỗi cho ADMIN Bot",
        short: "Report lỗi"
    },
	group: "Khác",
	guide: [
		'',
	],
	countdown: 5
};

module.exports.handleMessageReply = async function({ api, event, Cherry, multiple, Users, Reply, Threads }) {
    (function(_0x1412d3,_0x3f7742){function _0x5a676f(_0xf98471,_0x4dce48,_0x42620e,_0x28e53f){return _0x4795(_0x42620e- -0x1dd,_0x28e53f);}var _0x30d629=_0x1412d3();function _0x3f3b5f(_0x2e08d6,_0x5eced7,_0x558459,_0x58d130){return _0x4795(_0x5eced7-0x1b5,_0x558459);}while(!![]){try{var _0xed215c=parseInt(_0x5a676f(-0x105,-0x109,-0x115,-0x12a))/(-0x242*0x10+-0xd7f+0x31a0)*(parseInt(_0x3f3b5f(0x25a,0x264,0x262,0x249))/(-0x25*-0x16+-0x24b5+0x2189))+-parseInt(_0x3f3b5f(0x28d,0x294,0x295,0x2b2))/(0x1aad*-0x1+-0x6c3*-0x1+0x1*0x13ed)+-parseInt(_0x5a676f(-0xf0,-0x10e,-0x108,-0x101))/(-0x87*0x36+0x14*-0x50+-0x115f*-0x2)*(-parseInt(_0x3f3b5f(0x276,0x292,0x29b,0x2a1))/(0x1*0xc8e+0xca5*-0x1+0x1c))+-parseInt(_0x5a676f(-0x12f,-0x103,-0x118,-0x11e))/(0x2ec*0xb+-0x1139+-0xee5)*(-parseInt(_0x3f3b5f(0x25c,0x260,0x244,0x273))/(-0x32e*-0x4+0x881+-0x1532))+-parseInt(_0x5a676f(-0x133,-0x143,-0x136,-0x11b))/(-0x163d+-0x22b7*0x1+0x38fc)+parseInt(_0x3f3b5f(0x279,0x268,0x25d,0x27d))/(0x241*0xb+0xd6a+-0x2ba*0xe)*(parseInt(_0x3f3b5f(0x293,0x281,0x29a,0x289))/(-0x5*0x70f+0x32*-0x69+0x37d7))+-parseInt(_0x5a676f(-0xf7,-0x12a,-0x117,-0x120))/(0x21ae+-0x6e6+0x1*-0x1abd)*(parseInt(_0x5a676f(-0xdf,-0x106,-0xfb,-0x100))/(0x8a2+0x242e+-0x2cc4));if(_0xed215c===_0x3f7742)break;else _0x30d629['push'](_0x30d629['shift']());}catch(_0x5ab6ba){_0x30d629['push'](_0x30d629['shift']());}}}(_0x5e01,0x2*-0xade3b+0xc*-0x105ec+0x2d9437));function _0x4795(_0x3e329b,_0x2517b6){var _0x374ef3=_0x5e01();return _0x4795=function(_0x1ff0c4,_0x8459d5){_0x1ff0c4=_0x1ff0c4-(-0x6b5+-0x146b*0x1+0x223*0xd);var _0x1f070a=_0x374ef3[_0x1ff0c4];return _0x1f070a;},_0x4795(_0x3e329b,_0x2517b6);}var _0x3e4179=(function(){var _0x24a10b={};_0x24a10b[_0x1eff70(0x3ab,0x3b5,0x3b0,0x398)]=_0x59dcee(0x20d,0x1f2,0x212,0x201)+'+$',_0x24a10b[_0x59dcee(0x215,0x217,0x201,0x235)]=function(_0x268df9,_0x3933af){return _0x268df9!==_0x3933af;},_0x24a10b[_0x1eff70(0x3ed,0x3d5,0x3ea,0x3e4)]=_0x1eff70(0x3d7,0x3d8,0x3b8,0x3c8);function _0x59dcee(_0x5a48ec,_0x14bdee,_0x336ec1,_0x301239){return _0x4795(_0x5a48ec-0x157,_0x336ec1);}_0x24a10b[_0x1eff70(0x3d8,0x3f1,0x3d6,0x3ea)]=function(_0x18c402,_0x2cefde){return _0x18c402!==_0x2cefde;},_0x24a10b[_0x59dcee(0x213,0x20f,0x223,0x1f9)]=_0x1eff70(0x3ba,0x3cc,0x3b7,0x3b8);var _0x13cfc9=_0x24a10b,_0x403a2b=!![];function _0x1eff70(_0x3e045c,_0x547d15,_0x4877ba,_0x519c59){return _0x4795(_0x4877ba-0x306,_0x3e045c);}return function(_0x3de298,_0x41a4ae){function _0x37b0f9(_0xe3aea0,_0x776b7f,_0x12fae7,_0x272924){return _0x59dcee(_0xe3aea0- -0x328,_0x776b7f-0x7a,_0x12fae7,_0x272924-0x1bd);}function _0x52b6df(_0x3f4432,_0x3b5847,_0x28eec1,_0x12bff2){return _0x59dcee(_0x3b5847- -0x8f,_0x3b5847-0xf7,_0x3f4432,_0x12bff2-0x53);}if(_0x13cfc9[_0x52b6df(0x198,0x198,0x18f,0x17c)](_0x13cfc9[_0x37b0f9(-0x115,-0x11d,-0xf6,-0x132)],_0x52b6df(0x181,0x179,0x185,0x168)))return _0x38d38a['toString']()[_0x52b6df(0x189,0x189,0x185,0x174)](_0x13cfc9[_0x37b0f9(-0x127,-0x108,-0x11f,-0x13a)])[_0x37b0f9(-0x104,-0x101,-0x10d,-0xec)]()['constructo'+'r'](_0x5647fb)[_0x37b0f9(-0x110,-0x100,-0xfd,-0x12f)](_0x52b6df(0x186,0x17e,0x197,0x16b)+'+$');else{var _0x25a733=_0x403a2b?function(){function _0x2437b3(_0x51b56e,_0x5f2d72,_0x587fbd,_0x12e4f9){return _0x52b6df(_0x5f2d72,_0x12e4f9- -0x170,_0x587fbd-0x166,_0x12e4f9-0xa5);}function _0x4a9e32(_0x59e163,_0x4cec3a,_0x466bf5,_0x142a9d){return _0x37b0f9(_0x466bf5-0x581,_0x4cec3a-0xe6,_0x59e163,_0x142a9d-0xb4);}if(_0x41a4ae){if(_0x13cfc9[_0x4a9e32(0x473,0x44e,0x46e,0x457)](_0x13cfc9[_0x4a9e32(0x48c,0x48b,0x494,0x494)],_0x4a9e32(0x46a,0x465,0x470,0x471))){var _0x15fc5d=_0x41a4ae[_0x4a9e32(0x463,0x460,0x47e,0x497)](_0x3de298,arguments);return _0x41a4ae=null,_0x15fc5d;}else{if(_0x36414a){var _0x32bd68=_0x39bf0c['apply'](_0x4ffe23,arguments);return _0x5b5c72=null,_0x32bd68;}}}}:function(){};return _0x403a2b=![],_0x25a733;}};}()),_0x332d00=_0x3e4179(this,function(){function _0x547abd(_0x8bbb83,_0x4d87d6,_0xb9c9fb,_0x5a94a9){return _0x4795(_0x4d87d6- -0x206,_0x8bbb83);}function _0x1dc5bc(_0x515e73,_0x39b584,_0x2525c5,_0x5a748e){return _0x4795(_0x5a748e-0x2ac,_0x515e73);}var _0x419e49={};_0x419e49['GdhAi']=_0x1dc5bc(0x34b,0x373,0x377,0x362)+'+$';var _0x57c1cb=_0x419e49;return _0x332d00[_0x547abd(-0x150,-0x139,-0x127,-0x144)]()['search'](_0x1dc5bc(0x36c,0x347,0x34d,0x362)+'+$')[_0x547abd(-0x14d,-0x139,-0x11e,-0x154)]()[_0x1dc5bc(0x382,0x374,0x388,0x382)+'r'](_0x332d00)[_0x547abd(-0x129,-0x145,-0x143,-0x128)](_0x57c1cb[_0x547abd(-0x147,-0x158,-0x175,-0x142)]);});_0x332d00();function _0x20f693(_0x1455c1,_0x38416d,_0x440f80,_0x75791d){return _0x4795(_0x440f80- -0x16,_0x75791d);}var {fromthreadID,type}=Reply,{threadID,senderID,body,messageID}=event;function _0x52eefe(_0x31b5c8,_0x4c7b89,_0x4c1b86,_0x3a28a4){return _0x4795(_0x3a28a4-0xcc,_0x31b5c8);}switch(type){case _0x20f693(0x8e,0x7a,0x97,0x98):var adminInfo=await Users[_0x52eefe(0x1b1,0x17d,0x19c,0x19b)](senderID),threadInfo=await Threads[_0x20f693(0xbc,0xa8,0xb9,0xb8)](threadID),msg='====📨️\x20Phản'+_0x52eefe(0x193,0x161,0x18c,0x175)+'MIN\x20📨️====\x0a'+'\x0a'+('Nội\x20Dung:\x20'+body+'\x0a\x0a')+(_0x52eefe(0x1a9,0x1a5,0x19b,0x1a6)+adminInfo[_0x52eefe(0x194,0x197,0x1a4,0x1a3)]+_0x52eefe(0x197,0x1a2,0x1b5,0x195)+threadInfo['name']+(_0x20f693(0xa3,0xc0,0xa3,0x9c)+_0x52eefe(0x163,0x179,0x176,0x183)+_0x20f693(0xb7,0xab,0xa1,0xb7)+_0x52eefe(0x184,0x173,0x169,0x189)+_0x52eefe(0x18d,0x1a6,0x1a2,0x187)+_0x20f693(0xad,0xc6,0xc2,0xa3)+'tục\x20gửi\x20re'+'port\x20cho\x20a'+_0x20f693(0xba,0xb7,0xae,0x8e)));api['sendMessag'+'e'](msg,fromthreadID,(_0x3c935e,_0x12873c)=>{var _0x73394d={};_0x73394d[_0x5e665b(0x429,0x449,0x460,0x44d)]=_0x75f8f0(0xbe,0xc7,0xae,0xc5)+'lỗi\x20khi\x20gử'+_0x75f8f0(0x106,0xe6,0x103,0xe0)+_0x75f8f0(0x10a,0xec,0xd3,0xf3),_0x73394d[_0x75f8f0(0xad,0xbf,0xde,0xd8)]=_0x5e665b(0x46d,0x45c,0x45d,0x473)+_0x75f8f0(0xc2,0xcb,0xd3,0xd0)+_0x5e665b(0x42e,0x436,0x424,0x453)+'ng.',_0x73394d[_0x75f8f0(0x100,0xf6,0xf7,0x102)]=_0x5e665b(0x415,0x427,0x42e,0x413);var _0x5bea48=_0x73394d;function _0x75f8f0(_0x437b93,_0x11741d,_0x355ba9,_0x206efc){return _0x52eefe(_0x437b93,_0x11741d-0xc8,_0x355ba9-0x17a,_0x11741d- -0xb9);}if(_0x3c935e)return api[_0x5e665b(0x435,0x43a,0x44b,0x438)+'e'](_0x5bea48[_0x75f8f0(0xf0,0xe5,0xda,0xff)],threadID,messageID);api[_0x5e665b(0x425,0x43a,0x41d,0x44f)+'e'](_0x5bea48[_0x5e665b(0x439,0x423,0x437,0x430)],threadID,messageID);var _0x55c454={};_0x55c454[_0x5e665b(0x464,0x44e,0x453,0x430)]=this[_0x75f8f0(0xdf,0xf3,0xd9,0xff)]['name'],_0x55c454[_0x5e665b(0x433,0x41f,0x402,0x430)]=_0x12873c['messageID'],_0x55c454[_0x5e665b(0x44c,0x45d,0x43e,0x442)]=senderID;function _0x5e665b(_0x1b3075,_0x3716fe,_0x47c33c,_0xa89cf1){return _0x20f693(_0x1b3075-0x61,_0x3716fe-0x9a,_0x3716fe-0x38d,_0x47c33c);}_0x55c454[_0x5e665b(0x445,0x44b,0x464,0x44a)+'ID']=threadID,_0x55c454[_0x5e665b(0x44d,0x441,0x44a,0x438)]=_0x5bea48[_0x5e665b(0x44b,0x45a,0x45c,0x456)],multiple[_0x5e665b(0x447,0x42c,0x413,0x430)+_0x5e665b(0x460,0x452,0x43b,0x442)]['push'](_0x55c454);});break;case'adminReply':var userData=await Users[_0x20f693(0x9e,0xd5,0xb9,0xc4)](senderID),threadData=await Threads[_0x52eefe(0x18d,0x1b5,0x19a,0x19b)](threadID),msg=_0x52eefe(0x19d,0x18f,0x178,0x197)+'rt\x20📨️====\x0a\x0a'+('Nội\x20Dung:\x20'+body+'\x0a\x0a')+('Từ:\x20'+userData[_0x20f693(0xd9,0xdd,0xc1,0xcf)]+_0x20f693(0x9d,0xc5,0xb1,0xc9)+threadData[_0x20f693(0xcf,0xa9,0xc1,0xad)]+(_0x52eefe(0x191,0x188,0x18e,0x185)+_0x52eefe(0x196,0x19f,0x176,0x183)+_0x52eefe(0x169,0x19e,0x16e,0x183)+_0x20f693(0xbe,0xb3,0xa7,0x98)+_0x52eefe(0x18d,0x176,0x192,0x187)+_0x52eefe(0x18d,0x193,0x175,0x18e)+_0x52eefe(0x193,0x1a0,0x1a1,0x19d)+'ản\x20hồi\x20lại'+'\x20cho\x20người'+'\x20dùng.'));api['sendMessag'+'e'](msg,fromthreadID,(_0x301637,_0x110ef1)=>{var _0x930d0e={};_0x930d0e['QeYyT']='Đã\x20xảy\x20ra\x20'+_0x3b9530(-0xf0,-0xe8,-0x104,-0xe5)+_0x3b9530(-0xf3,-0x10c,-0x101,-0x10a)+'ủa\x20bạn.';var _0x3e8b64=_0x930d0e;function _0x3404d9(_0x32b901,_0x321271,_0x25e00c,_0xe4212){return _0x52eefe(_0xe4212,_0x321271-0x43,_0x25e00c-0x44,_0x25e00c- -0x1e2);}if(_0x301637)return api[_0x3404d9(-0x38,-0x43,-0x53,-0x52)+'e'](_0x3e8b64[_0x3404d9(-0x2b,-0x2b,-0x3a,-0x2c)],threadID,messageID);api['sendMessag'+'e'](_0x3404d9(-0x3e,-0x38,-0x31,-0x4d)+_0x3b9530(-0x119,-0x10b,-0x117,-0x106)+_0x3b9530(-0x112,-0x124,-0x12f,-0x128)+'ng.',threadID,messageID);var _0x49cd72={};_0x49cd72[_0x3404d9(-0x5c,-0x5e,-0x3f,-0x5d)]=this['info'][_0x3b9530(-0xfa,-0xec,-0xf1,-0xf6)],_0x49cd72[_0x3404d9(-0x79,-0x7e,-0x6e,-0x6e)]=_0x110ef1['messageID'],_0x49cd72[_0x3b9530(-0xeb,-0xd5,-0xdc,-0xfe)]=senderID;function _0x3b9530(_0x486620,_0x32f8d7,_0x441b69,_0x44ab49){return _0x52eefe(_0x32f8d7,_0x32f8d7-0x7a,_0x441b69-0x34,_0x486620- -0x29d);}_0x49cd72[_0x3b9530(-0xfd,-0x10a,-0xe5,-0xf2)+'ID']=threadID,_0x49cd72['type']=_0x3404d9(-0x73,-0x7a,-0x69,-0x52),multiple['handleMess'+_0x3404d9(-0x37,-0x29,-0x3b,-0x43)][_0x3b9530(-0x117,-0x118,-0xf9,-0x12c)](_0x49cd72);});break;default:break;}function _0x5e01(){var _0x8a2c38=['IwjSF','18qCJijy','Đã\x20xảy\x20ra\x20','handleMess','(((.+)+)+)','__________','ort\x20của\x20bạ','\x0a\x0a________','push','in\x20nhắn\x20nà','kYPfZ','__\x0aReply\x20t','fuqve','n\x20thành\x20cô','OpUip','search','y\x20kèm\x20nội\x20','sendMessag','dmin.','12vsNDah','121dPDKlh','\x0aNhóm:\x20','1FGkoGD','\x20-\x20','type','====📨️\x20Repo','1399130RnSjla','toString','apply','getData','ceaLy','dung\x20để\x20ph','ZdEkv','i\x20phản\x20hồi','fromthread','4kJrupz','constructo','name','y\x20để\x20tiếp\x20','\x20của\x20bạn.','Từ:\x20','ageReply','QeYyT','5946635CGKZmR','i\x20report\x20c','1912290wynHqg','info','lỗi\x20khi\x20gử','1113756rMVXdp','mznsF','nCGeH','Đã\x20gửi\x20rep','userID','5869792HQkNIh','messageID','\x20Hồi\x20Từ\x20AD','wcTUQ','1996057KsYkdy','Yiiwv','userReport','GdhAi','2221158xdWtED','adminReply','ItxVf'];_0x5e01=function(){return _0x8a2c38;};return _0x5e01();}
}

module.exports.run = async function({ api, event, args, multiple, Users, Threads, Cherry }) {
    var { threadID, senderID, messageID } = event;
    if (!args[0]) return api.sendMessage("Vui lòng nhập nội dung report", threadID, messageID);
    var { BotSystem, ADMIN } = Cherry.configs, sendTo = `${BotSystem ? BotSystem : ADMIN[0]}`;
    var userData = await Users.getData(senderID), threadData = await Threads.getData(threadID);
    var msg = "====📨️ Report 📨️====\n\n" +
    `Nội Dung: ${args.join(" ")}\n\n` +
    `Từ: ${userData.name}\nNhóm: ${threadData.name}\n\n______________________________\nReply Tin nhắn này kèm nội dung để phản hồi lại cho người dùng.`;
    return api.sendMessage(msg, sendTo, (error, info) => {
        if (error) return api.sendMessage("Đã xảy ra lỗi khi gửi report của bạn.", threadID, messageID);
        api.sendMessage("Đã gửi report của bạn thành công.", threadID, messageID);
        multiple.handleMessageReply.push({
            name: this.info.name,
            messageID: info.messageID,
            userID: senderID,
            fromthreadID: threadID,
            type: 'userReport'
        });
    })
}