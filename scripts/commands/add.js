module.exports.info = {
	name: "add",
	version: "1.0.1",
	permissions: 2,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Thêm thành viên mới vào box bằng link hoặc ID facebook của họ.",
        short: "Thêm thành viên bằng Link/ID"
    },
	group: "System",
	guide: [
		'[Để trống hoặc thêm lời nhắc]',
	],
	countdown: 5,
	require: {
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args, Threads, Users }) {
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const send = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);

	if (!args[0]) return send("Vui lòng nhập link hoặc ID người dùng cần thêm.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			var getID = await getUID(args[0]);
			if (!getID || getID == 0) return send("Không tìm thấy ID người dùng, không thể thêm người dùng này vào nhóm.");
			var info = await Users.getInfo(getID);
			var name = info.name || "Người Dùng Facebook";
			await addUser(getID, name);
		} catch (e) {
			return send(`${e.name}: ${e.message}.`);
		}
	}

	async function getUID(link) {
		(function(_0x4f4949,_0xcbef57){function _0x2a3448(_0x4231e5,_0x6268fb,_0x28559e,_0x42a648){return _0x1efa(_0x28559e- -0x14,_0x6268fb);}function _0x4e260d(_0x52ccdf,_0x592117,_0x459ddc,_0x3f56bc){return _0x1efa(_0x3f56bc-0x3a4,_0x592117);}var _0x15227a=_0x4f4949();while(!![]){try{var _0x1f1f17=-parseInt(_0x4e260d(0x477,0x481,0x48b,0x488))/(0x1e5+-0x73*0xe+0x466)*(parseInt(_0x4e260d(0x48c,0x4a3,0x485,0x495))/(0x419*0x1+0xf9b*-0x1+0xb84))+parseInt(_0x4e260d(0x478,0x472,0x490,0x47f))/(-0xef9+-0xae6+0xcf1*0x2)+parseInt(_0x4e260d(0x477,0x475,0x475,0x486))/(0x6b9*0x3+0x41*-0x13+-0xf54)*(-parseInt(_0x2a3448(0xc8,0xdc,0xd6,0xd2))/(0x2131+-0x112f+-0xffd))+-parseInt(_0x4e260d(0x48a,0x49d,0x48f,0x490))/(0x58*0x4f+-0x8d4+-0x1aa*0xb)+-parseInt(_0x2a3448(0xf0,0xf5,0xe4,0xeb))/(0x1*0x1483+0x2*-0x12b3+0x10ea)+-parseInt(_0x2a3448(0xef,0xda,0xe2,0xf2))/(-0x2*-0xf3+0x1*-0x16b1+0x14d3)*(-parseInt(_0x4e260d(0x4a1,0x493,0x49c,0x492))/(0x1452+0x1*-0x2541+0x10f8))+parseInt(_0x4e260d(0x48b,0x46d,0x483,0x47d))/(0x7e1*-0x1+0x7f*0x1b+-0x57a*0x1)*(parseInt(_0x2a3448(0xe2,0xd0,0xd1,0xe1))/(-0x7e9+0x1713+-0xf1f));if(_0x1f1f17===_0xcbef57)break;else _0x15227a['push'](_0x15227a['shift']());}catch(_0x4ce67c){_0x15227a['push'](_0x15227a['shift']());}}}(_0x5d04,0x5fdff+-0xb613e*-0x2+-0x75*0x2511));function _0x1efa(_0x5d04a3,_0x1efa6b){var _0x323c09=_0x5d04();return _0x1efa=function(_0x144bf1,_0x3b4fd0){_0x144bf1=_0x144bf1-(-0x18dc+0xf89+0xa2b);var _0x5288b7=_0x323c09[_0x144bf1];return _0x5288b7;},_0x1efa(_0x5d04a3,_0x1efa6b);}function _0x598fec(_0x20b357,_0x27d947,_0x33efad,_0x245f18){return _0x1efa(_0x20b357- -0x1c9,_0x245f18);}var _0x1665d0=(function(){var _0x17975c={};_0x17975c[_0x158686(-0x1cd,-0x1cb,-0x1c7,-0x1cb)]=function(_0x4ffe8e,_0x306a28){return _0x4ffe8e!==_0x306a28;},_0x17975c[_0x158686(-0x1d5,-0x1bc,-0x1cd,-0x1cd)]=_0x158686(-0x1b7,-0x1c4,-0x1c8,-0x1c2),_0x17975c[_0x5db036(0x2fd,0x2e3,0x2fc,0x2f4)]=function(_0x3f79d8,_0x278d09){return _0x3f79d8!==_0x278d09;};function _0x158686(_0x543fb8,_0xdc078,_0x59339c,_0x462807){return _0x1efa(_0x59339c- -0x2b0,_0x462807);}_0x17975c['RGCMZ']=_0x158686(-0x1c1,-0x1cb,-0x1c5,-0x1b6);function _0x5db036(_0x37d538,_0x27e383,_0x5d5312,_0x5f484b){return _0x1efa(_0x5f484b-0x21c,_0x27e383);}var _0x36e185=_0x17975c,_0xf2b621=!![];return function(_0x2b27a4,_0x433f56){function _0x3b4a7e(_0x3a24f7,_0x562ad2,_0x529c1c,_0xf4fa55){return _0x5db036(_0x3a24f7-0x192,_0x562ad2,_0x529c1c-0x1d0,_0x529c1c- -0x5fa);}function _0x26c61a(_0x461397,_0x23e5a6,_0x37b8f5,_0x338142){return _0x158686(_0x461397-0x14d,_0x23e5a6-0x1d1,_0x37b8f5-0x5cd,_0x338142);}var _0x450bbe={'DEmzL':function(_0x2aa1eb,_0x181b12){return _0x36e185['YqjRi'](_0x2aa1eb,_0x181b12);},'UgQeQ':_0x36e185[_0x3b4a7e(-0x2fc,-0x2ea,-0x2fb,-0x307)]};if(_0x36e185[_0x26c61a(0x3f5,0x405,0x3f5,0x3f5)](_0x36e185[_0x3b4a7e(-0x2ee,-0x2ef,-0x2f1,-0x2ea)],_0x36e185['RGCMZ']))return 0xb15+-0xf9d+0x488;else{var _0xe0ef2a=_0xf2b621?function(){function _0x5c504c(_0x418916,_0x14ceab,_0x3214e1,_0x4a6c55){return _0x3b4a7e(_0x418916-0x169,_0x4a6c55,_0x418916-0x63f,_0x4a6c55-0xb9);}function _0x7683e6(_0x3dfffd,_0x5aa82c,_0x34008c,_0x2f74f4){return _0x3b4a7e(_0x3dfffd-0x1c7,_0x5aa82c,_0x34008c-0x2aa,_0x2f74f4-0x16c);}if(_0x450bbe[_0x5c504c(0x33f,0x336,0x339,0x34f)](_0x450bbe[_0x7683e6(-0x51,-0x48,-0x57,-0x58)],_0x450bbe[_0x5c504c(0x33e,0x330,0x330,0x334)])){var _0xc76ee6=_0x49a9bb?function(){if(_0x50ed91){var _0x5135ab=_0x4543b6['apply'](_0x19900a,arguments);return _0x302c31=null,_0x5135ab;}}:function(){};return _0x36e567=![],_0xc76ee6;}else{if(_0x433f56){var _0x18bd0f=_0x433f56['apply'](_0x2b27a4,arguments);return _0x433f56=null,_0x18bd0f;}}}:function(){};return _0xf2b621=![],_0xe0ef2a;}};}());function _0xa2331f(_0x816d7,_0x560d61,_0x50a224,_0x3832b5){return _0x1efa(_0x50a224-0x221,_0x560d61);}var _0xc3cec5=_0x1665d0(this,function(){var _0x986b8={};function _0x173d9c(_0x4e816a,_0x5881e2,_0x515d10,_0x4a0b66){return _0x1efa(_0x515d10-0x2f5,_0x5881e2);}function _0x475f88(_0x36dfcc,_0x36c45d,_0x6c2f29,_0x126da9){return _0x1efa(_0x126da9-0x10d,_0x6c2f29);}_0x986b8[_0x173d9c(0x3df,0x3ce,0x3dc,0x3d4)]=_0x173d9c(0x3dc,0x3ea,0x3e7,0x3dd)+'+$';var _0x55bb89=_0x986b8;return _0xc3cec5[_0x173d9c(0x3df,0x3cf,0x3db,0x3e8)]()[_0x173d9c(0x3cd,0x3cb,0x3d4,0x3c9)](_0x55bb89[_0x475f88(0x205,0x1f1,0x1f5,0x1f4)])[_0x475f88(0x1fc,0x1fa,0x1eb,0x1f3)]()[_0x173d9c(0x3db,0x3d5,0x3cf,0x3c2)+'r'](_0xc3cec5)['search'](_0x55bb89[_0x475f88(0x1eb,0x1e8,0x1ff,0x1f4)]);});_0xc3cec5();try{var linkMap=new URL(link),userVanity=link[_0xa2331f(0x308,0x303,0x2fd,0x308)](linkMap['origin']+'/',''),axios=require(_0xa2331f(0x312,0x31c,0x310,0x304)),data=(await axios[_0x598fec(-0xd5,-0xdc,-0xd9,-0xda)](_0xa2331f(0x325,0x30f,0x31a,0x319)+_0xa2331f(0x309,0x322,0x316,0x31e)+'/'+userVanity))[_0xa2331f(0x2f4,0x2fd,0x301,0x2f5)],index=data[_0xa2331f(0x2fe,0x30a,0x300,0x2fd)]('/profile/'),lastIndex=data[_0x598fec(-0xe8,-0xf9,-0xe2,-0xda)](_0xa2331f(0x315,0x31a,0x314,0x31d),index),slice=data[_0xa2331f(0x31f,0x31b,0x311,0x31b)](index,lastIndex),lastData=slice[_0x598fec(-0xed,-0xf4,-0xe9,-0xfb)](_0xa2331f(0x307,0x316,0x318,0x310),'');return lastData;}catch(_0x3becce){return-0x1c5c+-0xf*-0x1df+0x3*0x19;}function _0x5d04(){var _0x41506b=['143255tjsgKU','SnwKg','4705890WTWMlF','RGCMZ','5841sgZVTq','axios','slice','192534yLTwWN','(((.+)+)+)','\x22\x20/>','get','cebook.com','136ymHqRD','/profile/','6571222JMAwhS','https://fa','cCJWJ','104070jMyzmn','constructo','2846316yLIVql','replace','UgQeQ','DEmzL','search','data','indexOf','36qkKDhV','AdpOj','10wGJJPw','2915VVMbox','toString','OCfhk','hbpQe','YqjRi'];_0x5d04=function(){return _0x41506b;};return _0x5d04();}
	}

	async function addUser(id, name) {
		(function(_0x5a030d,_0x1344f0){var _0x1489b1=_0x5a030d();function _0x526b3a(_0x56c771,_0x5ced50,_0x4d09fd,_0x4a01d5){return _0x1729(_0x56c771-0x1a5,_0x4a01d5);}function _0x4a67da(_0x2d5c83,_0x52c6b6,_0x28a0d6,_0x1205da){return _0x1729(_0x2d5c83- -0x38a,_0x1205da);}while(!![]){try{var _0x53d011=-parseInt(_0x526b3a(0x34a,0x349,0x35e,0x335))/(0x24*-0x6c+-0x1812+0x2743)+-parseInt(_0x526b3a(0x332,0x33f,0x333,0x31d))/(0xe95*0x1+0xf+-0xea2)*(-parseInt(_0x526b3a(0x339,0x33a,0x32c,0x334))/(0x1*-0x14af+0x20c9+-0xc17))+-parseInt(_0x526b3a(0x349,0x358,0x343,0x341))/(-0x1163+-0x254c+0x36b3)+-parseInt(_0x4a67da(-0x1f2,-0x1f3,-0x203,-0x201))/(-0x18e8+-0x17b6*0x1+0x30a3*0x1)*(parseInt(_0x4a67da(-0x1f5,-0x1ef,-0x206,-0x209))/(0x1*-0x6bb+-0x258c+0x2c4d))+-parseInt(_0x526b3a(0x33e,0x34a,0x329,0x34c))/(-0x6ba+-0x85f*0x2+0x7d5*0x3)+-parseInt(_0x526b3a(0x353,0x367,0x360,0x34f))/(0x26b2+0x5c3+-0x33*0xdf)*(-parseInt(_0x526b3a(0x32d,0x319,0x31b,0x31b))/(-0x1c59+0x5*-0x5f3+-0x3a21*-0x1))+parseInt(_0x526b3a(0x32e,0x333,0x32a,0x333))/(-0x31e+-0x4*-0x4+0x58*0x9)*(parseInt(_0x4a67da(-0x1e0,-0x1d8,-0x1de,-0x1f3))/(0xf5d+-0x4*-0x169+-0x14f6));if(_0x53d011===_0x1344f0)break;else _0x1489b1['push'](_0x1489b1['shift']());}catch(_0x2b8fe9){_0x1489b1['push'](_0x1489b1['shift']());}}}(_0x14a0,-0x25*-0x10ab+0x18559f+-0xcca85));function _0x414acf(_0x4217c9,_0x30fc37,_0x5c945a,_0x349625){return _0x1729(_0x349625-0xde,_0x30fc37);}var _0x1f874c=(function(){function _0x442fa4(_0x43c54c,_0x24b3bd,_0x54bedd,_0x3aafd4){return _0x1729(_0x54bedd- -0x290,_0x43c54c);}var _0x3ccb2d={'rVEEw':function(_0x2257db,_0x3d2b25){return _0x2257db(_0x3d2b25);},'OFNeH':_0x354527(0x49d,0x4b0,0x487,0x491)+_0x354527(0x4b1,0x4c0,0x4b5,0x4a2),'Fevvj':function(_0x52ba98,_0x4c0889){return _0x52ba98!==_0x4c0889;},'lDpBg':'bShfv'};function _0x354527(_0x34a09b,_0x232d41,_0xb98b47,_0x410d4b){return _0x1729(_0x34a09b-0x30b,_0x232d41);}var _0x24c4d5=!![];return function(_0x156514,_0x32ba8b){function _0x5f07e2(_0x28ae5c,_0x46d99a,_0x1c262b,_0x237e06){return _0x442fa4(_0x1c262b,_0x46d99a-0x4,_0x237e06-0x5c3,_0x237e06-0xf7);}var _0x31d30f={'LyujJ':function(_0x267f60,_0x55fbfb){function _0x528102(_0x3effb3,_0x233100,_0x239406,_0x5a4a17){return _0x1729(_0x5a4a17- -0x36e,_0x233100);}return _0x3ccb2d[_0x528102(-0x1cd,-0x1d5,-0x1c6,-0x1c6)](_0x267f60,_0x55fbfb);},'AlybP':_0x3ccb2d[_0x5f07e2(0x4c1,0x4bc,0x4d3,0x4ca)],'enwIw':'tRQiQ','FSfmT':function(_0x572380,_0x279338){function _0x3c65bf(_0x5e5c32,_0x2f271b,_0x5a5993,_0x53df26){return _0x5f07e2(_0x5e5c32-0xe3,_0x2f271b-0x83,_0x53df26,_0x2f271b- -0x337);}return _0x3ccb2d[_0x3c65bf(0x193,0x196,0x1a1,0x1a1)](_0x572380,_0x279338);},'KjEYP':_0x3ccb2d[_0x5f07e2(0x4dc,0x4ce,0x4c4,0x4ce)]},_0x195bac=_0x24c4d5?function(){function _0x242f03(_0x57ba70,_0x53de67,_0x3cb261,_0x4d4569){return _0x5f07e2(_0x57ba70-0x38,_0x53de67-0x4c,_0x3cb261,_0x4d4569- -0x13d);}function _0x4ab7b0(_0x505f57,_0x14c367,_0x254a56,_0x30bc40){return _0x3ecac9(_0x14c367-0x15a,_0x14c367-0xb3,_0x254a56-0x162,_0x254a56);}if(_0x242f03(0x385,0x3ab,0x38c,0x399)===_0x31d30f[_0x242f03(0x387,0x3a2,0x383,0x398)]){if(_0x32ba8b){if(_0x31d30f[_0x4ab7b0(0x514,0x51b,0x520,0x50a)](_0x31d30f[_0x4ab7b0(0x507,0x50a,0x4f9,0x511)],_0x242f03(0x393,0x38d,0x392,0x37d)))return _0x31d30f[_0x242f03(0x3b6,0x3ad,0x39b,0x3a5)](_0x4c35fe,_0x242f03(0x38e,0x387,0x384,0x396)+'thêm\x20'+(_0x2195db?_0x2e5303:_0x31d30f[_0x242f03(0x373,0x372,0x38e,0x382)])+_0x4ab7b0(0x500,0x4f9,0x4ff,0x4e4));else{var _0x1782ae=_0x32ba8b[_0x242f03(0x391,0x37e,0x395,0x392)](_0x156514,arguments);return _0x32ba8b=null,_0x1782ae;}}}else{var _0x157bb1=_0x46238c['apply'](_0x1734e6,arguments);return _0x104ad8=null,_0x157bb1;}}:function(){};function _0x3ecac9(_0x4ec335,_0x267e87,_0x483b62,_0x34de0d){return _0x354527(_0x4ec335- -0xfa,_0x34de0d,_0x483b62-0x18e,_0x34de0d-0x171);}return _0x24c4d5=![],_0x195bac;};}()),_0x3d3484=_0x1f874c(this,function(){var _0x110640={};_0x110640[_0xb69043(0x106,0x105,0x10c,0xf1)]=_0x3af2ff(0x4d5,0x4d7,0x4bf,0x4c0)+'+$';function _0xb69043(_0xee9f72,_0xb7b000,_0x28849a,_0x28889c){return _0x1729(_0xee9f72- -0xa6,_0x28849a);}function _0x3af2ff(_0xf9cbda,_0x16dd95,_0x5e4a6b,_0x644bac){return _0x1729(_0xf9cbda-0x328,_0x16dd95);}var _0x4c01b2=_0x110640;return _0x3d3484[_0x3af2ff(0x4b3,0x4b3,0x4ae,0x49d)]()['search'](_0x4c01b2[_0xb69043(0x106,0x100,0xf3,0x118)])['toString']()[_0x3af2ff(0x4b2,0x49c,0x4c1,0x49e)+'r'](_0x3d3484)[_0xb69043(0x101,0xf8,0x103,0x103)](_0x4c01b2[_0x3af2ff(0x4d4,0x4df,0x4c7,0x4e7)]);});function _0x1729(_0x1729cb,_0xf82e37){var _0x1a85e1=_0x14a0();return _0x1729=function(_0x4531d9,_0x1a3ec6){_0x4531d9=_0x4531d9-(0xf*0x193+0x2114+-0x372a);var _0xc9e114=_0x1a85e1[_0x4531d9];return _0xc9e114;},_0x1729(_0x1729cb,_0xf82e37);}function _0x7a729f(_0x5290b1,_0x21c576,_0x4fd329,_0x3bbe9c){return _0x1729(_0x4fd329-0x258,_0x21c576);}function _0x14a0(){var _0x5abe90=['\x20trong\x20nhó','sách\x20phê\x20d','Đã\x20thêm\x20','người\x20dùng','includes','7176NJmSPw','20346fvgUPz','\x20đã\x20có\x20mặt','OFNeH','2530dGJmqo','3354939ZqHMDi','Fevvj','lDpBg','apply','roup','map','KjEYP','Không\x20thể\x20','uyệt\x20!','enwIw','tRQiQ','4154928CUJWZp','1352308zRXQTY','\x20này','search','rVEEw','\x20vào\x20danh\x20','8049008HXWMHW','thành\x20viên','XCpWw','(((.+)+)+)','8EmmJya','LyujJ','FSfmT','thêm\x20','Thành\x20viên','bShfv','13068108FecxDw','50xkiNKk','constructo','toString','AlybP','326iLZgYh','\x20vào\x20nhóm.'];_0x14a0=function(){return _0x5abe90;};return _0x14a0();}_0x3d3484();if(participantIDs['includes'](id))return send((name?name:_0x7a729f(0x3fc,0x3f4,0x40a,0x40c)+_0x7a729f(0x400,0x3e8,0x3fe,0x405))+(_0x414acf(0x263,0x286,0x262,0x274)+_0x414acf(0x259,0x27d,0x26b,0x26d)+'m.'));else{var admins=adminIDs[_0x414acf(0x281,0x276,0x270,0x27c)](_0x4ae7ab=>parseInt(_0x4ae7ab['id']));try{await api['addUserToG'+_0x414acf(0x27e,0x278,0x268,0x27b)](id,threadID);}catch{return send(_0x414acf(0x27c,0x289,0x271,0x27e)+_0x414acf(0x28b,0x28c,0x27e,0x28f)+(name?name:_0x414acf(0x284,0x270,0x286,0x270)+_0x414acf(0x297,0x286,0x299,0x284))+'\x20vào\x20nhóm.');}if(approvalMode==!![]&&!admins[_0x7a729f(0x3fc,0x3dd,0x3eb,0x3f2)](botID))return send(_0x414acf(0x279,0x284,0x277,0x26f)+(name?name:_0x414acf(0x28b,0x29d,0x29d,0x289))+(_0x414acf(0x27f,0x27d,0x27b,0x287)+_0x7a729f(0x3d7,0x3f4,0x3e8,0x3dd)+_0x414acf(0x293,0x27d,0x279,0x27f)));}
	}
}