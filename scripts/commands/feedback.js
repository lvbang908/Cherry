module.exports.info = {
	name: "feedback",
	version: "1.0.0",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Gửi báo cáo lỗi hoặc yêu cầu, gợi ý tính năng của bạn cho ADMIN của Cherry",
        short: "Gửi, yêu cầu, gợi ý tính năng"
    },
	group: "System",
	guide: [
		'',
	],
	countdown: 5
};

module.exports.handleMessageReply = async function({ api, event, Reply }) {
    (function(_0x4d648a,_0x18c24a){function _0x18e081(_0x419ea1,_0x4f2014,_0x183ab9,_0x602c8){return _0x2859(_0x602c8- -0x123,_0x419ea1);}function _0x36665c(_0xf27135,_0x1b3c32,_0x3e889c,_0x49b34b){return _0x2859(_0x3e889c-0x9f,_0x49b34b);}var _0x24764f=_0x4d648a();while(!![]){try{var _0x1a5ba7=parseInt(_0x36665c(0x205,0x205,0x1ee,0x201))/(-0x240+-0x1ae0+-0x1*-0x1d21)+-parseInt(_0x18e081(0x36,0x37,0x13,0x27))/(0x649*-0x3+-0x3*-0x107+0xfc8)+-parseInt(_0x36665c(0x1d3,0x204,0x1ea,0x1e4))/(-0x1*-0x164+0x2471+0x2f*-0xce)*(parseInt(_0x18e081(-0x2,0x21,0x8,0x8))/(-0x21be*-0x1+-0xb57*0x3+-0x19*-0x3))+parseInt(_0x36665c(0x1ed,0x1f0,0x1d9,0x1c7))/(-0x119*-0x7+0xa99+-0x1243)*(parseInt(_0x36665c(0x1c9,0x1e7,0x1da,0x1e8))/(-0x247c+-0x5*-0x470+0xe52))+parseInt(_0x18e081(0x37,0x39,0x1a,0x2e))/(0x1ace*-0x1+0xd35+0xda0)+parseInt(_0x36665c(0x1d0,0x1e1,0x1cb,0x1ce))/(0xcd*-0x1a+0x8*0x4cd+0x282*-0x7)+parseInt(_0x36665c(0x1d6,0x1c2,0x1c6,0x1ae))/(-0x17a4+-0x21f*0x3+0x1e0a)*(-parseInt(_0x18e081(0xd,0x14,0x3,0x7))/(0x1974+0x36a*0x5+-0x2a7c));if(_0x1a5ba7===_0x18c24a)break;else _0x24764f['push'](_0x24764f['shift']());}catch(_0x381352){_0x24764f['push'](_0x24764f['shift']());}}}(_0x1dda,-0xc2ee4+0xb8418+-0x44*-0x1bf7));function _0x1dda(){var _0x28883a=['87EqFvVo','i\x20vì\x20sự\x20cố','search','iểm\x20tra\x20và','885063JGPeDc','Rất\x20xin\x20lỗ','1180109ivDfKw','sendMessag','\x20ngày\x20tốt\x20','axios','được\x20gửi\x20t','apply','TTqCp','messageID','noidung','9tQSwFo','type','\x20một\x20lần\x20n','14229220XqCyJr','7300zsubbz','4665480jXtfVl','WfBap','g\x20có\x20này\x20:','post','data','\x20không\x20đán','ủa\x20bạn\x20đã\x20','o/feedback','ữa\x20cảm\x20ơn\x20','age','i\x20Feedback','bạn\x20vì\x20điề','toString','bạn\x20có\x20một','21205OfacXR','1038rEkpnr','\x20thử\x20lại.\x0a','nry.repl.c','\x20của\x20bạn,\x20','BSbMa','kNopt','IphsI','Feedback\x20c','(((.+)+)+)','Đã\x20xảy\x20ra\x20','erry.hoahe','nmcHQ','vui\x20lòng\x20k','feedback','hành\x20công,','903186zXRzpc'];_0x1dda=function(){return _0x28883a;};return _0x1dda();}var _0x31f610=(function(){function _0x20186e(_0x5f17df,_0x3d209d,_0x3da358,_0x21049c){return _0x2859(_0x3d209d- -0x3be,_0x3da358);}var _0xb81e5={};_0xb81e5[_0x20186e(-0x289,-0x27e,-0x293,-0x273)]='(((.+)+)+)'+'+$';function _0x3c9a21(_0x29ef88,_0x1f281a,_0x604a19,_0x1dcb81){return _0x2859(_0x1dcb81-0x282,_0x604a19);}_0xb81e5[_0x20186e(-0x28a,-0x278,-0x274,-0x28d)]=function(_0x2c4012,_0x2f7dcd){return _0x2c4012!==_0x2f7dcd;},_0xb81e5[_0x20186e(-0x26f,-0x27f,-0x277,-0x26f)]=_0x3c9a21(0x39c,0x3bf,0x3ba,0x3af);var _0x237395=_0xb81e5,_0x38e6a0=!![];return function(_0x121619,_0x573664){var _0x1f7ff0=_0x38e6a0?function(){var _0x13632e={};function _0xe376da(_0x130629,_0x5ae0d7,_0x598613,_0x5e3489){return _0x2859(_0x5ae0d7-0x2ab,_0x5e3489);}_0x13632e[_0x543f41(-0xae,-0xb0,-0xaf,-0xb2)]=_0x237395[_0x543f41(-0x83,-0x8e,-0x93,-0xa2)];var _0x460e70=_0x13632e;function _0x543f41(_0x2ecdea,_0x57028b,_0x5552d6,_0x2560a0){return _0x2859(_0x5552d6- -0x1d3,_0x57028b);}if(_0x573664){if(_0x237395[_0xe376da(0x402,0x3f1,0x3dc,0x3dd)](_0x237395['BSbMa'],_0x237395[_0xe376da(0x3fe,0x3ea,0x3f1,0x3eb)]))return _0x275ff6['toString']()[_0x543f41(-0x72,-0x84,-0x86,-0x94)](_0x460e70['TTqCp'])[_0xe376da(0x3e6,0x3e3,0x3ed,0x3eb)]()['constructo'+'r'](_0x36b648)[_0x543f41(-0x97,-0x74,-0x86,-0x97)](_0x460e70[_0xe376da(0x3e1,0x3cf,0x3e9,0x3c6)]);else{var _0x3743f6=_0x573664[_0xe376da(0x3c5,0x3ce,0x3b6,0x3d1)](_0x121619,arguments);return _0x573664=null,_0x3743f6;}}}:function(){};return _0x38e6a0=![],_0x1f7ff0;};}());function _0x2dfe5b(_0x1f808d,_0x5adb1b,_0x241fed,_0x19e4b7){return _0x2859(_0x5adb1b-0x111,_0x241fed);}var _0x24c519=_0x31f610(this,function(){var _0x34e67f={};_0x34e67f[_0x312dd7(-0x275,-0x260,-0x25f,-0x26f)]=_0x312dd7(-0x261,-0x270,-0x270,-0x26d)+'+$';function _0x312dd7(_0x2a1a97,_0x54a10b,_0x508a73,_0x49a302){return _0x2859(_0x49a302- -0x3b0,_0x2a1a97);}var _0x1f9313=_0x34e67f;function _0x12871e(_0x3887e3,_0x2d35bb,_0xb2945e,_0x24cee7){return _0x2859(_0x3887e3-0x30,_0xb2945e);}return _0x24c519[_0x12871e(0x168,0x168,0x150,0x16d)]()[_0x12871e(0x17d,0x180,0x172,0x166)](_0x1f9313[_0x12871e(0x171,0x175,0x159,0x15e)])[_0x12871e(0x168,0x170,0x17a,0x163)]()['constructo'+'r'](_0x24c519)[_0x12871e(0x17d,0x177,0x18b,0x185)](_0x1f9313['IphsI']);});_0x24c519();var {threadID,messageID,senderID,body}=event,{author}=Reply;if(senderID!=author||!body)return;var axios=require(_0x2dfe5b(0x242,0x232,0x221,0x248)),_0x39bb73={};_0x39bb73['ID']=author,_0x39bb73[_0x2dfe5b(0x222,0x237,0x224,0x234)]=body,_0x39bb73[_0x2dfe5b(0x252,0x239,0x246,0x231)]=_0x2dfe5b(0x255,0x259,0x253,0x257);var data=_0x39bb73;function _0x2859(_0x285988,_0x32402f){var _0x2b4bb6=_0x1dda();return _0x2859=function(_0x2f0481,_0x3349f9){_0x2f0481=_0x2f0481-(0xa1d+-0x1a82+-0x2*-0x8c3);var _0x32e4b6=_0x2b4bb6[_0x2f0481];return _0x32e4b6;},_0x2859(_0x285988,_0x32402f);}function _0x558879(_0xe50224,_0xaaaa5f,_0x35f5bb,_0x5cd433){return _0x2859(_0x35f5bb- -0x179,_0xe50224);}var getData=(await axios[_0x2dfe5b(0x243,0x240,0x244,0x250)]('https://Ch'+_0x2dfe5b(0x264,0x256,0x264,0x25d)+_0x2dfe5b(0x240,0x24e,0x265,0x260)+_0x2dfe5b(0x243,0x244,0x241,0x23a),data))[_0x558879(-0x39,-0x61,-0x49,-0x62)];if(getData==!![])return api['unsendMess'+_0x558879(-0x4b,-0x41,-0x44,-0x2a)](Reply[_0x2dfe5b(0x24c,0x236,0x239,0x22d)]),api[_0x558879(-0x3c,-0x14,-0x27,-0x38)+'e'](_0x558879(-0x41,-0x51,-0x37,-0x41)+_0x2dfe5b(0x252,0x243,0x232,0x25a)+_0x2dfe5b(0x21a,0x233,0x220,0x23f)+_0x558879(-0x24,-0x32,-0x30,-0x2b)+_0x2dfe5b(0x229,0x23a,0x236,0x237)+_0x2dfe5b(0x258,0x245,0x24f,0x257)+_0x2dfe5b(0x25f,0x248,0x235,0x25a)+'u\x20tốt\x20đẹp\x20'+'này.\x0aChúc\x20'+_0x2dfe5b(0x24f,0x24a,0x253,0x243)+_0x558879(-0x19,-0x3a,-0x26,-0x1f)+'lành\x20^^',threadID,messageID);else return api[_0x558879(-0x2f,-0x1f,-0x27,-0x1e)+'e'](_0x2dfe5b(0x269,0x255,0x265,0x23d)+'lỗi\x20khi\x20gử'+_0x2dfe5b(0x259,0x247,0x247,0x22f)+_0x2dfe5b(0x24c,0x24f,0x263,0x245)+_0x2dfe5b(0x248,0x258,0x251,0x263)+_0x558879(-0x1b,-0x40,-0x2b,-0x28)+_0x2dfe5b(0x25a,0x24d,0x260,0x259)+_0x558879(-0x2e,-0x2e,-0x29,-0x21)+_0x558879(-0x43,-0x45,-0x2d,-0x47)+_0x558879(-0x34,-0x52,-0x48,-0x39)+_0x2dfe5b(0x234,0x23f,0x231,0x227)+'<',threadID,messageID);
}

module.exports.run = function({ api, event, multiple }) {
    var { threadID, messageID, senderID } = event;
    api.sendMessage(`Cảm ơn bạn đã có ý định gửi Feedback.\nVui lòng Reply tin nhắn này kèm nội dung mà bạn muốn gửi đi.`, threadID, (error, info) => {
        multiple.handleMessageReply.push({
            name: this.info.name,
            messageID: info.messageID,
            author: senderID
        });
    }, messageID);
}