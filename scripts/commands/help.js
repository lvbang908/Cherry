module.exports.info = {
	name: "help",
    version: "1.0.2",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Chi tiết về tất cả các lệnh của Bot hiện tại có thể sử dụng. Xem prefix hiện tại của box mà không cần prefix",
        short: "Xem chi tiết về lệnh"
    },
	group: "Tools",
	guide: [''],
	countdown: 5
};

var string = "●─── Cherry Bot ───●\n";//Bạn có thể custom dòng kẻ tin nhắn help tại đây.
var pageCount = 10;//Số lệnh hiển thị trên 1 trang.

function msgHelp(command, prefix) {
    return `Tên Lệnh: ${command.info.name}\n\n📜 Chi Tiết: ${command.info.description.long ? command.info.description.long : (command.info.description.short ? command.info.description.short : "Không có mô tả chi tiết cho lệnh này")}\n` +
    `📗 Nhóm Lệnh: ${command.info.group}\n\n` +
    `📄 Cách Dùng: ${prefix}${command.info.name} ${(command.info.guide ? command.info.guide : "")}\n\n` +
    `⏳ Thời Gian Chờ: ${command.info.countdown} giây/người\n` +
    `✊ Quyền Hạn: ${command.info.permissions == 1 ? "Người dùng trở lên." : command.info.permissions == 2 ? "Quản trị viên trở lên" : "Quản lí Bot" }`
};

var emptyPage = `Trang bạn nhập không có lệnh nào, vui lòng kiểm tra và thử lại.`;

function getInfoCommands(number, key, value, prefix) {
    //Không nên thêm dấu xuống dòng bởi bên trong đã có một dấu.
    return `${number}. Tên Lệnh: ${key}\nMô Tả: ${value.info.description.short ? value.info.description.short : "Không có mô tả"}\nCách Dùng: ${prefix}${key} ${(value.info.guide ? value.info.guide : "")}\n\n`
}

function finalInfo(pageNumber, totalCommands, page, prefix) {
    return `\n${string}` +
    `📜 Trang: ${pageNumber}/${Math.ceil((page.length * pageCount) / pageCount)}\n` +
    `🍀 Có ${totalCommands} lệnh có thể sử dụng.\n` +
    `${string}` +
    `➴ Gửi ${prefix}help [số trang] để xem danh sách lệnh tại trang đó.\n` +
    `➴ Gửi ${prefix}help [tên lệnh] để xem chi tiết cách sử dụng lệnh.`
}

module.exports.handleEvents = async function ({ api, event, Threads, multiple, Cherry }) {
    (function(_0x217eed,_0x46c23a){function _0x4795b6(_0x1109d1,_0xa55a4c,_0x4ac3fd,_0x32f05d){return _0x3d78(_0x1109d1-0x4c,_0x4ac3fd);}var _0x37ec66=_0x217eed();function _0x20e6b1(_0x241642,_0x320f04,_0x437abc,_0x415e0e){return _0x3d78(_0x241642-0x1dd,_0x415e0e);}while(!![]){try{var _0x5ec816=parseInt(_0x20e6b1(0x347,0x34b,0x336,0x33d))/(-0x1*-0x213+0x2386+-0x2598)+-parseInt(_0x20e6b1(0x355,0x365,0x360,0x35e))/(0x1de+0x1f6a+-0x2146*0x1)+-parseInt(_0x4795b6(0x1c0,0x1ce,0x1c9,0x1cb))/(-0x36e+0x1*-0x1c12+0x1f83)*(-parseInt(_0x4795b6(0x1b9,0x1be,0x1c5,0x1bd))/(-0xb7e*0x2+-0x1602+0x2*0x1681))+-parseInt(_0x20e6b1(0x339,0x345,0x338,0x332))/(0x1*-0x4a3+-0xf22+0x13ca)*(parseInt(_0x20e6b1(0x337,0x339,0x32f,0x327))/(-0x997+-0x1aff+0x84*0x47))+parseInt(_0x4795b6(0x1c1,0x1ba,0x1c9,0x1c0))/(-0x2704+0x35c+0x23af)+-parseInt(_0x4795b6(0x1bd,0x1cd,0x1cc,0x1bb))/(-0x210a*0x1+-0x1*-0x10d4+0x103e)+-parseInt(_0x20e6b1(0x341,0x351,0x334,0x337))/(-0x1786+0xd9b+0x9f4);if(_0x5ec816===_0x46c23a)break;else _0x37ec66['push'](_0x37ec66['shift']());}catch(_0x1692af){_0x37ec66['push'](_0x37ec66['shift']());}}}(_0x3d82,0x11a74e+0x1*-0x118805+0x97135));var _0x370d35=(function(){var _0x1a7489=!![];return function(_0x5c0f62,_0x383f83){var _0x9d11b6=_0x1a7489?function(){function _0x1286a4(_0x49714c,_0x454fea,_0x121e8d,_0x34c32a){return _0x3d78(_0x121e8d-0x323,_0x454fea);}if(_0x383f83){var _0x429843=_0x383f83[_0x1286a4(0x478,0x475,0x485,0x495)](_0x5c0f62,arguments);return _0x383f83=null,_0x429843;}}:function(){};return _0x1a7489=![],_0x9d11b6;};}());function _0x3d82(){var _0x11442e=['C2vUze1LC3nHzW','nZqZnduWv3fytLzi','BMfTzq','AZOG','y29UzMLNCW','yxv0B1vUC2vUza','mJrwEMDIuhm','Dg9mB3DLCKnHCW','mtKWqxDNEeXk','z2v0','igtdUw5NihbYzwy','C3bSAxq','4BQJoIa','zMfJzwjVB2S','yxbWBhK','ChjLzML4','mJi1mZq1nLbACvHiBq','z2v0rgf0yq','DgvZDa','Aw5MBW','cGRcQsbuW6fJieDP','AgfZ','ntq4nJe1uvnyDMzx','BgvUz3rO','Dg9tDhjPBMC','mZq2ndqWofrjqunouq','C2vHCMnO','yxv0Ag9Y','rgn5zxa','nteWndKYofzjALbItG','qUg6Ow4Gy8oZihrO4BUd','BwvZC2fNzuLe','m2vWC1HkvW','mZmWnZmXogzKAxnJzq','AxGGBSoGEtOG'];_0x3d82=function(){return _0x11442e;};return _0x3d82();}function _0x3d78(_0xbc762e,_0x2a3ba9){var _0x3e6689=_0x3d82();return _0x3d78=function(_0x559b37,_0x2dda10){_0x559b37=_0x559b37-(0x21c8+0x3*-0x1cb+0x4*-0x6c4);var _0x1a7489=_0x3e6689[_0x559b37];if(_0x3d78['JzohkS']===undefined){var _0x5c0f62=function(_0x37cb8f){var _0x1655e8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1e9cbf='',_0x3ecd1b='',_0x37d3be=_0x1e9cbf+_0x5c0f62;for(var _0x448dc7=-0x13+0x2031+-0x2*0x100f,_0x218cfe,_0x50a0f5,_0x2faec5=-0x1*0x175b+0x1f2e*0x1+-0x7d3;_0x50a0f5=_0x37cb8f['charAt'](_0x2faec5++);~_0x50a0f5&&(_0x218cfe=_0x448dc7%(-0x200+-0x2465*0x1+0x2669)?_0x218cfe*(0x11a5+-0xab2+0x1*-0x6b3)+_0x50a0f5:_0x50a0f5,_0x448dc7++%(0xf3b*0x1+0xcc5+-0x1bfc))?_0x1e9cbf+=_0x37d3be['charCodeAt'](_0x2faec5+(-0xa8a+-0x80+-0x2c5*-0x4))-(0x1e2c+-0x1bbc+-0x266)!==0x1085*0x2+0x2465*0x1+-0x456f?String['fromCharCode'](0x6f7*-0x1+0xbd7+-0x3e1*0x1&_0x218cfe>>(-(-0xd3d+0x275*0x9+0xa*-0xe3)*_0x448dc7&0x2*0x53+0x4*-0x8ab+0x220c)):_0x448dc7:-0x116f+0xfd7*0x1+-0x2*-0xcc){_0x50a0f5=_0x1655e8['indexOf'](_0x50a0f5);}for(var _0x41a870=-0x7*-0x103+0x1*-0x13f5+0xce0,_0x176b4f=_0x1e9cbf['length'];_0x41a870<_0x176b4f;_0x41a870++){_0x3ecd1b+='%'+('00'+_0x1e9cbf['charCodeAt'](_0x41a870)['toString'](-0x1d1+-0x205d+0x223e))['slice'](-(-0x1*0xc07+0x9b0+0x259));}return decodeURIComponent(_0x3ecd1b);};_0x3d78['fObUbk']=_0x5c0f62,_0xbc762e=arguments,_0x3d78['JzohkS']=!![];}var _0x383f83=_0x3e6689[0x2f0+-0x7f*0x17+-0x1*-0x879],_0x9d11b6=_0x559b37+_0x383f83,_0x429843=_0xbc762e[_0x9d11b6];if(!_0x429843){var _0x4dc7c8=function(_0x2b5d03){this['prLsXa']=_0x2b5d03,this['JeHmNn']=[-0xd8d*0x1+-0x240f+0x319d,-0x1*-0x302+0x2b8*-0x6+-0x83*-0x1a,0x4*-0xb+0x1*0x496+0x235*-0x2],this['lUyHUb']=function(){return'newState';},this['OmMFJX']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['mIauCW']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4dc7c8['prototype']['slBkTj']=function(){var _0x514746=new RegExp(this['OmMFJX']+this['mIauCW']),_0x2e185c=_0x514746['test'](this['lUyHUb']['toString']())?--this['JeHmNn'][0x4f2+0x229*0x1+0x25e*-0x3]:--this['JeHmNn'][0x4fd+0x6*0x5cf+0x7*-0x5b1];return this['FTRzjW'](_0x2e185c);},_0x4dc7c8['prototype']['FTRzjW']=function(_0x5c762c){if(!Boolean(~_0x5c762c))return _0x5c762c;return this['nvLeUO'](this['prLsXa']);},_0x4dc7c8['prototype']['nvLeUO']=function(_0xd05c94){for(var _0x1a0c7a=0x6*0x2ad+-0x1a29+0xa1b,_0x156fa1=this['JeHmNn']['length'];_0x1a0c7a<_0x156fa1;_0x1a0c7a++){this['JeHmNn']['push'](Math['round'](Math['random']())),_0x156fa1=this['JeHmNn']['length'];}return _0xd05c94(this['JeHmNn'][0x9b*0x3e+-0x15bf+-0xfcb]);},new _0x4dc7c8(_0x3d78)['slBkTj'](),_0x1a7489=_0x3d78['fObUbk'](_0x1a7489),_0xbc762e[_0x9d11b6]=_0x1a7489;}else _0x1a7489=_0x429843;return _0x1a7489;},_0x3d78(_0xbc762e,_0x2a3ba9);}function _0x1a37af(_0x5bf7a7,_0x43e30c,_0x2acfc6,_0x31f76c){return _0x3d78(_0x31f76c-0x4d,_0x2acfc6);}var _0x5745a3=_0x370d35(this,function(){var _0x37cb8f={};function _0x342e8c(_0x5789a1,_0x488d52,_0x4e6f6a,_0x1dc5a1){return _0x3d78(_0x5789a1- -0x263,_0x488d52);}_0x37cb8f[_0x432770(0x354,0x352,0x34d,0x359)]='(((.+)+)+)'+'+$';var _0x1655e8=_0x37cb8f;function _0x432770(_0x29457c,_0x2ebab2,_0x77cd94,_0x3dc9f2){return _0x3d78(_0x77cd94-0x1dd,_0x29457c);}return _0x5745a3['toString']()['search'](_0x1655e8[_0x432770(0x35e,0x347,0x34d,0x354)])[_0x342e8c(-0xf7,-0xfd,-0xf1,-0xf2)]()['constructo'+'r'](_0x5745a3)[_0x342e8c(-0xf5,-0xfd,-0xed,-0xe9)](_0x1655e8[_0x342e8c(-0xf3,-0xe9,-0xfa,-0xfa)]);});_0x5745a3();var {threadID,messageID,body}=event;if(!body)return;if(/^[hH]elp/[_0x1a37af(0x1b4,0x1c1,0x1a3,0x1b3)](body)){var {commands,commandsHide}=multiple,splitBody=body['split']('\x20');if(splitBody[_0x1d3b21(0x4a6,0x4a5,0x4a1,0x49d)]>-0xad*-0x1d+0x21cf+0x28b*-0x15||commands[_0x1d3b21(0x49f,0x4a3,0x4b3,0x4b0)](splitBody[0x2b3*0x7+0x2*0x5b1+-0x5*0x60e][_0x1d3b21(0x48c,0x495,0x49a,0x4a5)+'e']())){var rTlKvq=('3|4|1|0|2|'+'5')[_0x1d3b21(0x4a2,0x499,0x49f,0x49a)]('|'),cFeltC=0xeff*0x1+0x24be*0x1+-0x33bd;while(!![]){switch(rTlKvq[cFeltC++]){case'0':prefix?prefix:{prefix}=Cherry[_0x1a37af(0x19b,0x1af,0x19d,0x1a5)];continue;case'1':var {prefix}=await Threads['getData'](threadID);continue;case'2':var msg=msgHelp(command,prefix)+(_0x1a37af(0x1c6,0x1b6,0x1c3,0x1b5)+_0x1a37af(0x19e,0x19f,0x1aa,0x1ad))+command[_0x1d3b21(0x49f,0x4a1,0x4ad,0x493)][_0x1d3b21(0x4b2,0x4a9,0x49b,0x4b2)][_0x1a37af(0x1d4,0x1cb,0x1c0,0x1c6)]+('\x0a🔗\x20Faceboo'+_0x1d3b21(0x484,0x491,0x4a1,0x48c))+command[_0x1a37af(0x1bc,0x1ad,0x1c1,0x1b4)]['author'][_0x1a37af(0x1b1,0x1b8,0x1aa,0x1ae)];continue;case'3':if(commandsHide['includes'](splitBody[0x7*0x585+-0x49*-0x43+0xd*-0x471][_0x1d3b21(0x496,0x495,0x4a6,0x490)+'e']()))return;continue;case'4':var command=commands[_0x1a37af(0x19a,0x1b5,0x1af,0x1aa)](splitBody[-0xab*0x13+0xb99*-0x2+0x23e4][_0x1a37af(0x1b0,0x19e,0x1a8,0x1a8)+'e']());continue;case'5':return api['sendMessag'+'e'](msg,threadID,(_0x1e9cbf,_0x3ecd1b)=>Cherry[_0x1d3b21(0x48f,0x493,0x4a3,0x495)](_0x3ecd1b[_0x1d3b21(0x4a8,0x4ad,0x4b8,0x4b3)],-0x2803+0x4232*-0x10+0x70a43),messageID);}break;}}}function _0x1d3b21(_0x36aaca,_0x4a67e2,_0x13845a,_0x311861){return _0x3d78(_0x4a67e2-0x33a,_0x36aaca);}if(/^[pP]refix/[_0x1d3b21(0x493,0x4a0,0x4a5,0x4b1)](body)){var {prefix}=await Threads[_0x1d3b21(0x4ab,0x49f,0x4a0,0x48e)](threadID);return api[_0x1a37af(0x1be,0x1cc,0x1c0,0x1c4)+'e'](_0x1d3b21(0x4ba,0x4ac,0x49d,0x4b9)+_0x1d3b21(0x495,0x498,0x491,0x48f)+_0x1d3b21(0x4a5,0x4b0,0x4be,0x4c0)+(prefix?prefix:Cherry[_0x1a37af(0x194,0x1a5,0x197,0x1a5)][_0x1d3b21(0x4a9,0x49d,0x492,0x498)]),threadID);}
}

module.exports.run = async function({ api, event, args, multiple, Cherry, prefix }) {
	function _0x252d(){var _0xd579f7=['cGRcQsbuW6fJieDP','mty5mZi3nwHXDLzdBq','BMfTzq','nta1ntq5ohPct1DsCG','C2vUze1LC3nHzW','mZm3mty1nNbZEKT3EG','ChvZAa','mtiXnte0zK1xBhDY','AZOG','yxv0Ag9Y','cVcFLjCGrMfJzwjVBW','ndy3ntG1rKvRq2v1','vLPwD1G','nda3oda2mfLpCgP3ta','Aw5JBhvKzxm','4BQJoIa','Aw5MBW','r2rjvfO','Dg9mB3DLCKnHCW','sLfvzxC','z2v0','C2vHCMnO','y29UC3rYDwn0BW','yxv0B1vUC2vUza','BgvUz3rO','mJi4mZi2ndHys3Dsu0G','mZzYC3bqtNG','BwvZC2fNzuLe','kcGOlISPkYKRkq','Dg9tDhjPBMC','qKTqqvi'];_0x252d=function(){return _0xd579f7;};return _0x252d();}(function(_0x2f11b0,_0x3ea8d8){function _0x1f9fef(_0x2a1f72,_0x20c53e,_0x4a5d21,_0x370a6b){return _0x4be0(_0x2a1f72- -0x283,_0x370a6b);}var _0x5a1bed=_0x2f11b0();function _0x2178a6(_0x769c76,_0x392b44,_0x497b59,_0x5b3eee){return _0x4be0(_0x5b3eee-0x5,_0x769c76);}while(!![]){try{var _0x18322a=-parseInt(_0x1f9fef(-0x175,-0x165,-0x16f,-0x183))/(0x3df+0x19cf+0x6b*-0x47)+parseInt(_0x2178a6(0x11b,0x11b,0x102,0x10f))/(-0x531+0x1f74+-0x1*0x1a41)*(parseInt(_0x1f9fef(-0x166,-0x160,-0x161,-0x16b))/(-0x1e5a+0x1d6a+0x1*0xf3))+-parseInt(_0x2178a6(0x132,0x138,0x127,0x12c))/(-0x238*-0x2+-0x50*-0x4+-0x2*0x2d6)+-parseInt(_0x1f9fef(-0x160,-0x169,-0x16e,-0x16a))/(0x4*-0x62+0x1842+-0x16b5)+-parseInt(_0x1f9fef(-0x15e,-0x166,-0x158,-0x15e))/(0x16*-0x98+-0x2b*-0x66+-0x40c)+-parseInt(_0x2178a6(0x106,0x122,0x125,0x115))/(-0x1c5d+0x14c*-0x5+-0x48*-0x7c)+parseInt(_0x2178a6(0x123,0x11d,0x123,0x121))/(-0x5*-0x1c1+0x20b6*0x1+-0x3*0xdd1);if(_0x18322a===_0x3ea8d8)break;else _0x5a1bed['push'](_0x5a1bed['shift']());}catch(_0x191e92){_0x5a1bed['push'](_0x5a1bed['shift']());}}}(_0x252d,-0x39*-0x34f9+0x11fe8+-0x527a9*0x1));var _0x32cb88=(function(){var _0x21f8db={};function _0x2460ac(_0x1aff1c,_0x6df587,_0x1e3f27,_0x303e21){return _0x4be0(_0x6df587- -0x2cc,_0x303e21);}_0x21f8db[_0x2460ac(-0x1ab,-0x1b6,-0x1c1,-0x1af)]=function(_0xc75566,_0x303736){return _0xc75566!==_0x303736;},_0x21f8db[_0x54f6a8(0x18d,0x190,0x18f,0x197)]=_0x54f6a8(0x1a0,0x193,0x19c,0x192);var _0x5035c0=_0x21f8db;function _0x54f6a8(_0x69f0b4,_0x56c011,_0x4e854e,_0x2cad14){return _0x4be0(_0x2cad14-0x83,_0x56c011);}var _0x18c4a2=!![];return function(_0x7d9930,_0x5f4cb9){var _0x1d6dc8=_0x18c4a2?function(){function _0x22cc66(_0x335539,_0x3f3b5c,_0x2ad4ce,_0x5d7afd){return _0x4be0(_0x2ad4ce-0x12d,_0x335539);}function _0x90af60(_0x33b88f,_0x1f3045,_0x9b2234,_0x2d1fa5){return _0x4be0(_0x2d1fa5-0x193,_0x33b88f);}if(_0x5f4cb9){if(_0x5035c0[_0x22cc66(0x240,0x23e,0x243,0x234)](_0x5035c0[_0x22cc66(0x239,0x242,0x241,0x243)],_0x5035c0[_0x90af60(0x2b4,0x299,0x29f,0x2a7)])){var _0x18bb4c=_0x1d4c43?function(){if(_0xa8c81e){var _0x15ba40=_0x3cad4c['apply'](_0x13c844,arguments);return _0x5466c2=null,_0x15ba40;}}:function(){};return _0x498198=![],_0x18bb4c;}else{var _0x5182ab=_0x5f4cb9['apply'](_0x7d9930,arguments);return _0x5f4cb9=null,_0x5182ab;}}}:function(){};return _0x18c4a2=![],_0x1d6dc8;};}()),_0x5342b=_0x32cb88(this,function(){var _0x3fc5ce={};function _0x5dd68e(_0x309ffa,_0x5d847a,_0x22a216,_0x3b56f5){return _0x4be0(_0x309ffa-0x58,_0x5d847a);}_0x3fc5ce['BKPAR']=_0x253491(0x1a6,0x1a1,0x1a6,0x199)+'+$';var _0x214170=_0x3fc5ce;function _0x253491(_0x5dcded,_0xfe39b5,_0x1c8400,_0x19f0d5){return _0x4be0(_0x5dcded-0x87,_0xfe39b5);}return _0x5342b['toString']()[_0x253491(0x19f,0x1aa,0x1a8,0x1a1)](_0x214170[_0x5dd68e(0x179,0x16f,0x17f,0x17f)])[_0x253491(0x1a7,0x1b3,0x19f,0x1a1)]()[_0x5dd68e(0x171,0x16a,0x16a,0x168)+'r'](_0x5342b)['search'](_0x214170[_0x253491(0x1a8,0x1b3,0x1b3,0x1a6)]);});_0x5342b();const {commands,commandsHide}=multiple,{threadID,messageID}=event;function _0x4fc001(_0xc92ae6,_0x3619be,_0x13d88c,_0x555b88){return _0x4be0(_0x555b88- -0x114,_0xc92ae6);}var command=commands[_0x313716(-0x25,-0x17,-0x12,-0x1b)]((args[-0x1a5*-0x8+0x35*-0x8+-0xb80]||'')[_0x4fc001(-0x8,0x5,-0x4,0x1)+'e']());function _0x313716(_0x2fae1a,_0x593700,_0x184933,_0x243877){return _0x4be0(_0x593700- -0x12e,_0x184933);}function _0x4be0(_0x615d28,_0x32c09b){var _0x430b3d=_0x252d();return _0x4be0=function(_0x4c4052,_0x3024b3){_0x4c4052=_0x4c4052-(-0x235*0x1+-0x1*-0x10ff+0x7*-0x1f7);var _0x4f07fd=_0x430b3d[_0x4c4052];if(_0x4be0['pdbEaz']===undefined){var _0x22994c=function(_0x4d9837){var _0x5216e0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x182b15='',_0x165a8d='',_0x3fbe60=_0x182b15+_0x22994c;for(var _0x2daa26=-0xb*-0x24a+0x4*-0x668+0x72,_0x3ec756,_0x14e967,_0x449b59=0x582+-0x6*0x2ba+0x3*0x39e;_0x14e967=_0x4d9837['charAt'](_0x449b59++);~_0x14e967&&(_0x3ec756=_0x2daa26%(-0xcbf*-0x1+0x1*-0x189e+0xbe3)?_0x3ec756*(0xaa4*0x1+0x79f*-0x3+0xc79)+_0x14e967:_0x14e967,_0x2daa26++%(-0x1*-0x25eb+0x362+-0x2949))?_0x182b15+=_0x3fbe60['charCodeAt'](_0x449b59+(-0x1867*-0x1+-0x41*0x8b+0xaee))-(-0x977*0x4+0x1ac4+0xb22)!==0x23b6+0x2*0x381+-0x2ab8?String['fromCharCode'](0x22dd+0x13fb+-0x35d9&_0x3ec756>>(-(0x17bd*0x1+0x207c+-0x9*0x63f)*_0x2daa26&-0x145c+0x1559+0x13*-0xd)):_0x2daa26:-0x19d*0xf+-0x1332+-0x1*-0x2b65){_0x14e967=_0x5216e0['indexOf'](_0x14e967);}for(var _0x4c1e9f=-0x1524+-0x248c+-0xd*-0x470,_0x1da325=_0x182b15['length'];_0x4c1e9f<_0x1da325;_0x4c1e9f++){_0x165a8d+='%'+('00'+_0x182b15['charCodeAt'](_0x4c1e9f)['toString'](0x251e+-0x1875*0x1+0xf*-0xd7))['slice'](-(0x74c+0xdfe*0x1+-0x1548));}return decodeURIComponent(_0x165a8d);};_0x4be0['fXFlYh']=_0x22994c,_0x615d28=arguments,_0x4be0['pdbEaz']=!![];}var _0x4b7ecc=_0x430b3d[0x1*-0x109d+-0x10d5+-0x3*-0xb26],_0x11773e=_0x4c4052+_0x4b7ecc,_0x1f51ca=_0x615d28[_0x11773e];if(!_0x1f51ca){var _0x9279dc=function(_0x3b81fe){this['cMXnjt']=_0x3b81fe,this['aazmPB']=[0x72b+-0x1519+-0xdef*-0x1,-0x26f+0x3a1*-0x1+-0x308*-0x2,-0x561+-0x4d2*-0x1+0x8f*0x1],this['PLZHTV']=function(){return'newState';},this['BglcGc']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['liKxFK']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x9279dc['prototype']['vBMHIH']=function(){var _0x1e40fc=new RegExp(this['BglcGc']+this['liKxFK']),_0x38e965=_0x1e40fc['test'](this['PLZHTV']['toString']())?--this['aazmPB'][0x25ae+-0x866+-0x1d47]:--this['aazmPB'][-0x262c+0x23d0+0x12e*0x2];return this['rMsZSS'](_0x38e965);},_0x9279dc['prototype']['rMsZSS']=function(_0x2aa080){if(!Boolean(~_0x2aa080))return _0x2aa080;return this['LPVOet'](this['cMXnjt']);},_0x9279dc['prototype']['LPVOet']=function(_0x36e39f){for(var _0x4d8b01=-0x1e4+0x9b5*-0x3+-0x11*-0x1d3,_0x5ced77=this['aazmPB']['length'];_0x4d8b01<_0x5ced77;_0x4d8b01++){this['aazmPB']['push'](Math['round'](Math['random']())),_0x5ced77=this['aazmPB']['length'];}return _0x36e39f(this['aazmPB'][-0x29b*-0x7+0x1*-0x791+0x2*-0x556]);},new _0x9279dc(_0x4be0)['vBMHIH'](),_0x4f07fd=_0x4be0['fXFlYh'](_0x4f07fd),_0x615d28[_0x11773e]=_0x4f07fd;}else _0x4f07fd=_0x1f51ca;return _0x4f07fd;},_0x4be0(_0x615d28,_0x32c09b);}if(!command||!args[-0x1f92+-0x1*-0x9af+0x1af*0xd]){var pageNumber=args>0x2511+-0xa*-0x1e7+-0x3817?args[-0x1*-0x21af+-0x2087+-0x128]-(-0xe21*0x1+-0x1*-0x13d1+-0x5af):-0x1d43+0x609+0x2*0xb9d,numberOfPage=pageNumber+(0xc47*0x2+-0x133*0x19+0x5*0x116),msg=string,page=[],infoCommands=[],totalCommands=0x1db1+0x1025+-0x2*0x16eb,number=-0x1611+0x114a+0x3*0x198;for(var [key,value]of commands){if(commandsHide[_0x313716(-0x11,-0x1d,-0x1f,-0x26)](key))continue;infoCommands[_0x313716(-0x25,-0x25,-0x27,-0x18)](getInfoCommands(number++,key,value,prefix)),infoCommands['length']==pageCount&&(page['push'](infoCommands),infoCommands=[]),totalCommands++;}page[_0x4fc001(0x2,-0x13,-0xe,-0xb)](infoCommands);var pageView=page[pageNumber],number=pageCount*numberOfPage-pageCount+(0x31*0x11+0x2*0x83+-0x446);if(!pageView||pageView[_0x313716(-0xc,-0x13,-0xf,-0x18)]==0x1cde+-0x14fb+-0x7e3)return api[_0x4fc001(0x1a,0x16,0x19,0x12)+'e'](emptyPage,threadID,messageID);return api[_0x313716(-0x4,-0x8,-0xa,-0x7)+'e'](string+pageView['join']('\x20')+finalInfo(pageNumber+(0x101*-0xb+-0x14fd+0x2009),totalCommands,page,prefix),threadID,(_0x59c5b3,_0x210c6e)=>Cherry[_0x4fc001(0x4,0xb,-0x7,0x6)](_0x210c6e[_0x313716(-0x5,-0x10,-0x10,-0x1d)],0x1afd5+0x1*-0x495ab+0x5a4f6),messageID);}var msg=msgHelp(command,prefix)+(_0x313716(0x3,-0xc,-0x12,-0xe)+_0x313716(-0x1f,-0x1c,-0x2a,-0x2c))+command[_0x313716(-0x1e,-0x1b,-0x19,-0x1b)][_0x313716(-0x2e,-0x22,-0x18,-0x2f)][_0x4fc001(0x6,0x4,0x2,0x10)]+(_0x313716(-0x29,-0x21,-0x2a,-0x1c)+_0x313716(-0x2f,-0x23,-0x19,-0x2c))+command['info'][_0x4fc001(-0x9,-0x9,-0x4,-0x8)]['facebook'];return api['sendMessag'+'e'](msg,threadID,(_0x310670,_0x1abd3b)=>Cherry[_0x313716(-0x1e,-0x14,-0x1b,-0x1e)](_0x1abd3b[_0x313716(-0x15,-0x10,-0x11,-0xd)],-0x98*0x58c+-0x3bc*0x1+0x60dfc),messageID);
}