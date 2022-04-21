module.exports.info = {
	name: "dating",
	version: "1.0.6",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Tìm một người và xem xem có nên hẹn hò với họ không?",
        short: "Hẹn hò với người khác"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'',
	],
	countdown: 5//1800000
};

function msgBreakup() {
    //Bạn có thể custom tin nhắn breakup tại đây
    var msg = ['Thật sự 2 người không thể làm lành được sao?', 'Cứ như vậy mà buông tay nhau?', 'Không đau sao? Có chứ? Vậy sao còn muốn buông?', 'Vì một lí do nào đó... 2 người có thể cố găng được không? ^^']
    return msg[Math.floor(Math.random() * msg.length)];
}

function getMsg() {
    //Bạn có thể custom tin nhắn chúc mừng cặp đôi mới tại đây
    return `Mọi người cùng tới chúc mừng hạnh phúc cho cặp đôi mới này nào 🥰\n\nNotes:\n- Cả 2 bạn sẽ không thể chia tay trong vòng 7 ngày kể từ khi bắt đầu.\n- Tôi sẽ làm việc nhiều hơn, đem lại nhiều điều thú vị hơn về lệnh Dating này để giúp 2 bạn có nhiều niềm vui khi bên nhau hơn.\n- Cuối cùng, cảm ơn đã sử dụng Bot và chúc 2 bạn hạnh phúc 🥰`
}

module.exports.handleReactionMessage = async function({ api, event, Threads, Users, Others, Reaction, multiple, Cherry }) {
    (function(_0x5859f7,_0x50af8c){var _0x55eac4=_0x5859f7();function _0x5eb7e6(_0x2ce358,_0x4dbc0c,_0x2e49b5,_0x534a61){return _0x3ef8(_0x4dbc0c-0x109,_0x2ce358);}function _0x40a554(_0x58d114,_0x151aa7,_0x5d127a,_0x38db78){return _0x3ef8(_0x58d114- -0xd3,_0x38db78);}while(!![]){try{var _0xee05bb=-parseInt(_0x40a554(0x34,0x51,0x53,0x56))/(-0xfb4+-0x1196*-0x2+-0x1377)*(-parseInt(_0x5eb7e6(0x22c,0x228,0x1ff,0x252))/(-0x395+0x1c21+-0x188a))+-parseInt(_0x40a554(0x65,0x3b,0x7b,0x90))/(0x1*-0x125f+0x2329+-0x1*0x10c7)*(-parseInt(_0x5eb7e6(0x219,0x20d,0x226,0x208))/(0xf76*0x1+-0xb64+-0x40e))+-parseInt(_0x40a554(0x69,0x86,0x92,0x82))/(0x3af*-0x3+0x92*0x13+0x2*0x1e)+-parseInt(_0x5eb7e6(0x206,0x231,0x228,0x226))/(0xf7f+-0x2003+0x108a)*(parseInt(_0x5eb7e6(0x217,0x221,0x200,0x243))/(0x483+0x789+-0xc05))+parseInt(_0x5eb7e6(0x211,0x204,0x209,0x207))/(-0xdd3+0x1edc+-0x1101)*(parseInt(_0x5eb7e6(0x24d,0x22d,0x204,0x247))/(0x3b*0x45+0x143+-0x1121*0x1))+-parseInt(_0x40a554(0x1a,-0x5,0xd,0x24))/(-0x1249+0x1*0xd5b+0x1a8*0x3)*(-parseInt(_0x40a554(0x4d,0x44,0x73,0x3b))/(0x2d*-0x2d+0xe*0xc1+-0x14d*0x2))+-parseInt(_0x40a554(0x23,0x4,0xc,0x14))/(0x2*0xcf7+-0x33*0xbf+-0x1*-0xc2b)*(-parseInt(_0x40a554(0x1e,0x37,0xd,0x1e))/(-0x115*0x20+0xe4d*-0x1+0x30fa));if(_0xee05bb===_0x50af8c)break;else _0x55eac4['push'](_0x55eac4['shift']());}catch(_0x3c6f08){_0x55eac4['push'](_0x55eac4['shift']());}}}(_0x2af1,-0x1*-0x36a6f+0x49*-0x50fb+0x207a22));var _0x243b1c=(function(){var _0x551250=!![];return function(_0x4d45d8,_0x376d5){var _0x20c78c=_0x551250?function(){if(_0x376d5){var _0x1cd281=_0x376d5['apply'](_0x4d45d8,arguments);return _0x376d5=null,_0x1cd281;}}:function(){};return _0x551250=![],_0x20c78c;};}());function _0x2f3f5e(_0x1dda9f,_0xee2b69,_0x129571,_0x37e6fd){return _0x3ef8(_0x129571- -0x366,_0x37e6fd);}var _0x32ef2e=_0x243b1c(this,function(){function _0x28326d(_0x382015,_0xe19dff,_0x5b1fd5,_0x232393){return _0x3ef8(_0x232393- -0x217,_0x5b1fd5);}var _0x567548={};_0x567548[_0x3d4beb(0x38f,0x394,0x3b5,0x3de)]=_0x28326d(-0x136,-0x139,-0x106,-0x12d)+'+$';var _0x164069=_0x567548;function _0x3d4beb(_0x341a4a,_0x45b464,_0x2b534b,_0x4159a5){return _0x3ef8(_0x2b534b-0x293,_0x45b464);}return _0x32ef2e[_0x3d4beb(0x39a,0x371,0x377,0x355)]()[_0x28326d(-0x110,-0xd4,-0x11a,-0xfa)](_0x164069[_0x28326d(-0xd2,-0xdb,-0xf5,-0xf5)])[_0x3d4beb(0x377,0x379,0x377,0x363)]()[_0x3d4beb(0x3ae,0x3ae,0x386,0x36c)+'r'](_0x32ef2e)['search'](_0x28326d(-0x14e,-0x128,-0x10c,-0x12d)+'+$');});function _0x26403c(_0xc19560,_0x556923,_0x5f15f0,_0x19c51a){return _0x3ef8(_0x5f15f0-0xc3,_0xc19560);}function _0x3ef8(_0x3ef87a,_0x1f26dc){var _0x589ef7=_0x2af1();return _0x3ef8=function(_0x301e9f,_0x341883){_0x301e9f=_0x301e9f-(0x1*-0x16b+-0x12c3+0x1512);var _0x4af933=_0x589ef7[_0x301e9f];return _0x4af933;},_0x3ef8(_0x3ef87a,_0x1f26dc);}_0x32ef2e();var {threadID,userID,reaction}=event,{turn}=Reaction;switch(turn){case'match':api[_0x26403c(0x202,0x220,0x1fc,0x1fa)+_0x2f3f5e(-0x27b,-0x291,-0x271,-0x27c)](Reaction[_0x2f3f5e(-0x29a,-0x283,-0x281,-0x257)]);var {senderID,coin,senderInfo,type}=Reaction;if(senderID!=userID)return;var _0x99dd48={};_0x99dd48[_0x26403c(0x200,0x1ee,0x1d7,0x1e9)]=coin-(0x1*-0xa91+0x1051*0x8+-0x29d7),await Others[_0x26403c(0x1d9,0x1c0,0x1b7,0x1aa)](senderID,_0x99dd48);var allUsers=await Threads['getAllUser'+'s'](threadID),doituong=[];for(var i of allUsers){var {name,gioitinh,dating}=await Users[_0x26403c(0x1a1,0x1af,0x1b1,0x1ab)](i['ID']);if(dating&&dating[_0x2f3f5e(-0x266,-0x257,-0x27f,-0x257)]==!![])continue;var _0x33f905={};_0x33f905['ID']=i['ID'],_0x33f905[_0x26403c(0x1a2,0x1ea,0x1c2,0x1ec)]=name;if(gioitinh==type)doituong[_0x26403c(0x1db,0x213,0x1fe,0x216)](_0x33f905);}if(doituong['length']==0x1*-0x1201+0x216*0xb+-0x4f1)return api[_0x2f3f5e(-0x242,-0x24f,-0x232,-0x21d)+'e'](_0x2f3f5e(-0x244,-0x25f,-0x236,-0x236)+_0x2f3f5e(-0x228,-0x23a,-0x228,-0x231)+'ối\x20tượng\x20m'+_0x2f3f5e(-0x22a,-0x254,-0x251,-0x277)+_0x26403c(0x1d3,0x1fa,0x1e1,0x1ef)+_0x26403c(0x1b2,0x1bf,0x1d6,0x1ce)+_0x2f3f5e(-0x27c,-0x28c,-0x277,-0x25e)+_0x2f3f5e(-0x222,-0x224,-0x24a,-0x275)+_0x26403c(0x1b7,0x1c5,0x1c8,0x1dd)+'^',threadID);var random=doituong[Math[_0x26403c(0x19f,0x17d,0x1a9,0x1b7)](Math[_0x2f3f5e(-0x29d,-0x277,-0x27e,-0x27d)]()*doituong[_0x2f3f5e(-0x23d,-0x263,-0x25d,-0x237)])],msg={'body':senderInfo[_0x2f3f5e(-0x264,-0x23e,-0x267,-0x289)]+('\x20-\x20Người\x20m'+_0x26403c(0x1a4,0x1ae,0x1ba,0x1cb)+_0x2f3f5e(-0x206,-0x244,-0x231,-0x23d)+'bạn\x20là:\x20')+random[_0x2f3f5e(-0x271,-0x23a,-0x267,-0x246)]+_0x26403c(0x1cc,0x200,0x1e8,0x1dc)+Math[_0x2f3f5e(-0x28e,-0x274,-0x280,-0x2a3)](Math[_0x26403c(0x1b5,0x1a2,0x1ab,0x186)]()*(0x2*-0x1325+-0x703*-0x3+0x1191-(0x2*-0x1157+-0x12a2+0x356e))+(0x19ab+-0xdb1+-0xbdc))+(_0x26403c(0x1d2,0x1c8,0x1dc,0x1f1)+_0x26403c(0x1b6,0x1d2,0x1de,0x205)+'ng\x20ý,\x20hãy\x20'+_0x26403c(0x1aa,0x1ce,0x1bb,0x1a0)+_0x26403c(0x19d,0x1a7,0x1bd,0x1e1)+_0x26403c(0x1e0,0x1d6,0x1fa,0x1d5)+_0x2f3f5e(-0x257,-0x20e,-0x234,-0x220)+_0x2f3f5e(-0x251,-0x238,-0x233,-0x233)+_0x2f3f5e(-0x238,-0x25e,-0x237,-0x23c)+_0x2f3f5e(-0x22a,-0x252,-0x243,-0x23f)+'hái\x20Dating'+'.'),'mentions':[{'tag':random[_0x26403c(0x1c3,0x1af,0x1c2,0x19a)],'id':random['ID']},{'tag':senderInfo['name'],'id':senderID}]};return api['sendMessag'+'e'](msg,threadID,(_0x242fe3,_0x5116aa)=>{var _0x11a86e={};_0x11a86e['dRzcu']=_0x565abb(0x25e,0x231,0x257,0x222);var _0x45f45e=_0x11a86e,_0x5c3085={};_0x5c3085['ID']=senderID,_0x5c3085[_0x5d6fb0(0xdc,0xb5,0xcc,0xd8)]=senderInfo[_0x565abb(0x1ee,0x21a,0x202,0x1f3)],_0x5c3085[_0x5d6fb0(0xfb,0xd1,0xf4,0xef)]=![];var _0x28b093={};_0x28b093['ID']=random['ID'],_0x28b093[_0x565abb(0x211,0x21a,0x212,0x207)]=random[_0x5d6fb0(0xab,0xfd,0xf8,0xd8)],_0x28b093['accept']=![];function _0x565abb(_0x27bc24,_0x549b0c,_0x408a45,_0x401c43){return _0x26403c(_0x401c43,_0x549b0c-0xc8,_0x549b0c-0x58,_0x401c43-0x19f);}function _0x5d6fb0(_0x1e661e,_0xce614a,_0x205004,_0x33f07c){return _0x2f3f5e(_0x1e661e-0x14a,_0xce614a-0x6f,_0x33f07c-0x33f,_0xce614a);}var _0x211e59={};_0x211e59[_0x565abb(0x234,0x21a,0x1ed,0x21d)]=this[_0x5d6fb0(0x100,0xce,0xff,0xdc)][_0x5d6fb0(0xbf,0xea,0xbd,0xd8)],_0x211e59[_0x5d6fb0(0x94,0xac,0xb9,0xbe)]=_0x5116aa['messageID'],_0x211e59[_0x5d6fb0(0xa5,0xde,0xf3,0xd2)]=_0x45f45e['dRzcu'],_0x211e59[_0x5d6fb0(0xf0,0xe2,0xb9,0xcb)]=_0x5c3085,_0x211e59[_0x565abb(0x279,0x251,0x26b,0x22a)]=_0x28b093,multiple[_0x565abb(0x249,0x242,0x216,0x24f)+_0x565abb(0x216,0x22a,0x242,0x204)+'e'][_0x565abb(0x234,0x256,0x279,0x23e)](_0x211e59);});case'accept':var {user_1,user_2}=Reaction;if(reaction!='❤')return;if(userID==user_1['ID'])user_1[_0x26403c(0x1bd,0x1e6,0x1d9,0x1b7)]=!![];if(userID==user_2['ID'])user_2[_0x26403c(0x1fd,0x1c6,0x1d9,0x1e0)]=!![];if(user_1[_0x26403c(0x1ae,0x1e1,0x1d9,0x1d5)]==!![]&&user_2[_0x26403c(0x1bd,0x1cd,0x1d9,0x1d6)]==!![])return api[_0x26403c(0x1ec,0x1e7,0x1fc,0x1e9)+_0x26403c(0x1a2,0x1cf,0x1b8,0x19c)](Reaction[_0x2f3f5e(-0x29d,-0x29b,-0x281,-0x283)]),api[_0x26403c(0x20a,0x1d5,0x1f7,0x1e6)+'e'](_0x2f3f5e(-0x232,-0x23b,-0x258,-0x282)+_0x26403c(0x1d4,0x1ee,0x1c5,0x1cf)+_0x2f3f5e(-0x268,-0x289,-0x27b,-0x262)+'m\x20xúc,\x20đồn'+_0x2f3f5e(-0x25e,-0x278,-0x255,-0x22e)+'i\x20việc\x20cả\x20'+_0x2f3f5e(-0x267,-0x251,-0x27d,-0x25d)+_0x26403c(0x1da,0x1b7,0x1d0,0x1d1)+'iến\x20tới\x20hẹ'+_0x26403c(0x21e,0x216,0x1f4,0x1f1),threadID,async(_0xe47d9,_0x114a7b)=>{var _0x2fe1f7={'XDoLC':'fullTime','eBSWp':function(_0x4f9f77){return _0x4f9f77();}};await Users[_0x1c35d(0x28f,0x29b,0x2b7,0x298)](user_1['ID'],{'dating':{'status':!![],'mates':user_2['ID'],'time':{'origin':Date[_0x1c35d(0x2b8,0x2fc,0x2f9,0x2d0)](),'fullTime':Cherry[_0x1c35d(0x2ba,0x283,0x2bd,0x2a1)](_0x2fe1f7[_0x490157(0x3cc,0x3d3,0x3d9,0x3c6)])}}});function _0x1c35d(_0x31d95a,_0x368e5b,_0x131797,_0x45410f){return _0x2f3f5e(_0x31d95a-0xbd,_0x368e5b-0x132,_0x45410f-0x50a,_0x31d95a);}function _0x490157(_0x199272,_0x5de4c8,_0x3b2085,_0x122fa8){return _0x26403c(_0x199272,_0x5de4c8-0xdc,_0x3b2085-0x226,_0x122fa8-0xf9);}await Users[_0x1c35d(0x2a3,0x282,0x28a,0x298)](user_2['ID'],{'dating':{'status':!![],'mates':user_1['ID'],'time':{'origin':Date[_0x1c35d(0x2ae,0x2b9,0x2e1,0x2d0)](),'fullTime':Cherry[_0x1c35d(0x288,0x292,0x2ba,0x2a1)](_0x2fe1f7['XDoLC'])}}}),api[_0x490157(0x445,0x423,0x417,0x401)+_0x1c35d(0x29e,0x29c,0x2ab,0x2a3)](user_2['name']+(_0x490157(0x419,0x42b,0x413,0x3f4)+'with\x20')+user_1['name'],threadID,user_2['ID']),api[_0x490157(0x422,0x3fe,0x417,0x409)+_0x1c35d(0x2ca,0x2a2,0x2b1,0x2a3)](user_1[_0x1c35d(0x296,0x2ae,0x283,0x2a3)]+(_0x490157(0x3e7,0x3ec,0x413,0x432)+_0x490157(0x3cc,0x3df,0x3d5,0x3d5))+user_2[_0x1c35d(0x2a0,0x27d,0x2c7,0x2a3)],threadID,user_1['ID']),api[_0x1c35d(0x301,0x2ce,0x2fe,0x2d8)+'e'](_0x2fe1f7[_0x490157(0x41d,0x3ed,0x3fb,0x41b)](getMsg),threadID);});break;case _0x2f3f5e(-0x233,-0x1fe,-0x229,-0x24f):var {userInfo,userMates,user_1,user_2}=Reaction;if(userID==user_1['ID'])user_1[_0x2f3f5e(-0x22a,-0x257,-0x250,-0x22a)]=!![];if(userID==user_2['ID'])user_2[_0x26403c(0x1ae,0x1e9,0x1d9,0x1f7)]=!![];if(user_1['accept']==!![]&&user_2[_0x26403c(0x1bd,0x1ca,0x1d9,0x1f9)]==!![])return api['unsendMess'+'age'](Reaction['messageID']),api[_0x2f3f5e(-0x23e,-0x25f,-0x232,-0x225)+'e'](_0x2f3f5e(-0x22d,-0x248,-0x239,-0x20e)+_0x26403c(0x1e2,0x1bd,0x1c1,0x1e9)+_0x2f3f5e(-0x27d,-0x231,-0x25b,-0x230)+'ão,\x20nhưng\x20'+_0x26403c(0x20b,0x1ca,0x1ec,0x1f4)+_0x26403c(0x1cd,0x1c0,0x1bf,0x1e6)+_0x26403c(0x1e5,0x1fa,0x1e4,0x1f7)+_0x26403c(0x1f5,0x1c0,0x1da,0x1fc)+_0x26403c(0x198,0x1f0,0x1c4,0x1c3)+'\x20nhé,\x20đôi\x20'+_0x26403c(0x19c,0x1e9,0x1c9,0x1d0)+_0x2f3f5e(-0x264,-0x242,-0x24c,-0x232)+_0x26403c(0x197,0x19e,0x1c3,0x1e6)+'an\x20mới\x20khi'+_0x26403c(0x1a7,0x1bf,0x1cd,0x1ae)+_0x2f3f5e(-0x264,-0x256,-0x256,-0x261)+'h\x20mẽ\x20hơn\x20c'+_0x26403c(0x1a7,0x1d8,0x1cf,0x1e1),threadID,async()=>{var _0x280d25={};_0x280d25[_0x3f178d(0x46a,0x42f,0x444,0x440)]=_0x35087c(0x24a,0x22a,0x251,0x257)+'3';function _0x35087c(_0x51beee,_0x3126cc,_0x42fe28,_0x29221c){return _0x26403c(_0x51beee,_0x3126cc-0x134,_0x42fe28-0x63,_0x29221c-0x150);}var _0x577d28=_0x280d25,_0x4ede39=_0x577d28[_0x3f178d(0x446,0x454,0x444,0x441)][_0x35087c(0x24f,0x254,0x24c,0x26f)]('|');function _0x3f178d(_0x5011e5,_0xb9bd85,_0x422df8,_0x1d4915){return _0x2f3f5e(_0x5011e5-0x19e,_0xb9bd85-0x181,_0x422df8-0x6a2,_0xb9bd85);}var _0x405a05=-0x202+-0x2244+0x2446;while(!![]){switch(_0x4ede39[_0x405a05++]){case'0':await Users['setData'](userInfo['ID'],userInfo);continue;case'1':delete userInfo[_0x35087c(0x240,0x25e,0x260,0x256)];continue;case'2':api[_0x35087c(0x257,0x22d,0x254,0x24b)+_0x35087c(0x250,0x20d,0x225,0x24e)]('',threadID,userMates['ID']);continue;case'3':await Users[_0x35087c(0x234,0x207,0x21a,0x1ee)](userMates['ID'],userMates);continue;case'4':delete userMates[_0x35087c(0x25a,0x26e,0x260,0x259)];continue;case'5':api[_0x3f178d(0x440,0x43d,0x46a,0x44e)+_0x35087c(0x21f,0x20f,0x225,0x22f)]('',threadID,userInfo['ID']);continue;}break;}});break;default:break;}function _0x2af1(){var _0x3c869b=['\x0aPhù\x20Hợp:\x20','split','handleReac','5622phFabU','lại\x20chẳng\x20','\x20-\x20Dating\x20','1|4|5|2|0|','now','Bên\x20nhau\x20v','changeNick','y\x20để\x20bắt\x20đ','Rất\x20tiếc,\x20','n\x20hò.','\x20(❤)\x20vào\x20t','in\x20nhắn\x20nà','sendMessag','\x20chọn\x20cho\x20','user_2','c\x20trái\x20tim','141wkvUNY','unsendMess','dating','push','4479700FGzmtZ','breakup','không\x20có\x20đ','toString','messageID','floor','status','random','2\x20người\x20đề','(((.+)+)+)','hau\x20thả\x20cả','with\x20','12654700ngWuIL','getData','ẹn\x20hò\x20với\x20','XDoLC','26aDRccE','user_1','constructo','setData','age','707964frZUXY','à\x20hệ\x20thống','cùng\x20nhau\x20','turn','thả\x20cảm\x20xú','8tYmZcc','thể\x20có\x20nha','getTime','ào\x20những\x20l','name','\x20rồi\x20lại\x20t','\x0aĐừng\x20buồn','\x20đã\x20cùng\x20n','info','110796YSUTXb','\x20mất\x20rồi\x20^','khi\x20có\x20nhữ','913sMKgbv','tGzdz','length','ến\x20bản\x20thâ','úc\x20giông\x20b','hứ\x20^^','u\x20đồng\x20ý\x20t','Cả\x202\x20người','tionMessag','n\x20mình\x20mạn','g\x20nghĩa\x20vớ','eBSWp','ọ\x20đều\x20đã\x20h','coin','à\x20bạn\x20cần\x20','accept','mưa\x20tan\x20^^','12509TzCiYa','%\x0a\x0aNếu\x20cả\x20','ng\x20lúc\x20hợp','2\x20người\x20đồ','người\x20khác','search','tìm\x20hoặc\x20h','510YTdjhp','11kSuDVz','u\x20vào\x20lúc\x20','fyKMo','ầu\x20trạng\x20t','4420233qonQmV'];_0x2af1=function(){return _0x3c869b;};return _0x2af1();}
}

module.exports.run = async function({ api, event, args, Users, Others, multiple, Cherry }) {
    var { threadID, messageID, senderID } = event;
    var senderInfo = await Users.getData(senderID);
    var type = '';
    switch (args[0]) {
        case "Nam":
        case "nam":
            if (senderInfo.hasOwnProperty('dating') && senderInfo.dating.status == true) return api.sendMessage(`Muốn cắm sừng người ta hay sao? Đang ở chế độ Dating còn muốn tìm thêm người khác?`, threadID, messageID);
            type = "Nam";
            break;
        case "Nữ":
        case "nữ":
        case "nu":
        case "Nu":
            if (senderInfo.hasOwnProperty('dating') && senderInfo.dating.status == true) return api.sendMessage(`Muốn cắm sừng người ta hay sao? Đang ở chế độ Dating còn muốn tìm thêm người khác?`, threadID, messageID);
            type = "Nữ";
            break;
        case "breakup":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.hasOwnProperty('dating') || userInfo.hasOwnProperty('dating') && userInfo.dating.status == false) return api.sendMessage(`Bạn chưa hẹn hò với ai thì đòi breakup cái gì?`, threadID, messageID);
            if (Date.now() - userInfo.dating.time.origin < 604800000) return api.sendMessage(`Còn chưa đủ 7 ngày mà đã muốn chia tay là sao? 🥺\n\n${msgBreakup()}\n\nHãy cứ bình tĩnh suy nghĩ, để mọi chuyện dần lắng xuống rồi giải quyết cùng nhau. Nhé? ^^`, threadID, messageID);
            var userMates = await Users.getData(userInfo.dating.mates);
            return api.sendMessage(`Cả 2 người thật sự không thể tiếp tục được hay sao?\nNếu có đọc được dòng tin nhắn này, hãy cứ để nó đó... Yên lặng một chút, suy nghĩ cho kĩ đi nào ${userInfo.gioitinh == "Nam" ? "chàng trai" : "cô gái"}...\nCó nhiều thứ... Một khi đã mất đi rồi thì sẽ không thể tìm lại được đâu... ^^\n\nCòn nếu... Vẫn không thể tiếp tục được nữa... Cả 2 người hãy thả cảm xúc vào tin nhắn này nhé...`, threadID, (error, info) => {
                multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, userInfo: userInfo, userMates: userMates, turn: 'breakup', user_1: { ID: senderID, accept: false }, user_2: { ID: userMates.ID, accept: false } })
            }, messageID);
        case "info":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.hasOwnProperty('dating') || userInfo.hasOwnProperty('dating') && userInfo.dating.status == false) return api.sendMessage(`Đang ế lòi mồm ra đòi xem thông tin gì vậy?`, threadID, messageID);
            var infoMates = await Users.getData(userInfo.dating.mates);
            var msg = `<3 Dating Info - Life Of Love <3\n\n` +
            `Tên Của Bạn: ${userInfo.name}\n` +
            `Tên Của Người Ấy: ${infoMates.name}\n` +
            `Thời Gian Bắt Đầu: ${userInfo.dating.time.fullTime}\n` +
            `Đã Bên Nhau: ${Cherry.calcTime(userInfo.dating.time.fullTime)} ngày\n` +
            `${userInfo.dating.lovepoint ? `Điểm Thân Thiết: ${userInfo.dating.lovepoint} điểm.` : ''}`
            return api.sendMessage(msg, threadID, messageID);
        case 'diemdanh':
            var info = await Users.getData(senderID);
            var time = Cherry.calcTime(info.dating.time.fullTime);
            if (!info.dating || info.dating && info.dating.status == false) return api.sendMessage(`Đang ế chổng mông ra đòi điểm danh với ai vậy má?`, threadID, messageID);
            if (!info.dating.diemdanh || time > info.dating.diemdanh) {
                var infoMates = await Users.getData(info.dating.mates);
                info.dating.diemdanh = time;
                if (info.dating.diemdanh == infoMates.dating.diemdanh) {
                    if (!info.dating.lovepoint || !infoMates.dating.lovepoint) {
                        info.dating.lovepoint = 10;
                        infoMates.dating.lovepoint = 10;
                    } else {
                        info.dating.lovepoint += 10;
                        infoMates.dating.lovepoint += 10;
                    }
                    await Users.setData(info.ID, info);
                    await Users.setData(infoMates.ID, infoMates);
                    var msg = { body: `${info.name} - ${infoMates.name}\n\nCả 2 bạn đã điểm danh cho ngày hôm nay, điểm thân thiết +10.`, mentions: [{ id: info.ID, tag: info.name }, { id: infoMates.ID, tag: infoMates.name }] };
                    return api.sendMessage(msg, threadID, messageID);
                }
                await Users.setData(info.ID, info);
                return api.sendMessage(`Bạn đã điểm danh thành công, hãy nhắc nhở ${infoMates.name} điểm danh để có thể nhận điểm thân thiết nha 🥰.`, threadID, messageID);
            } else if (time == info.dating.diemdanh) return api.sendMessage(`Bạn đã điểm danh cho ngày hôm nay rồi, vui lòng chờ nửa kia hoặc quay lại vào ngày mai nha 😗.`, threadID, messageID);
            else return api.sendMessage(`Có lỗi xảy ra khi thực hiện điểm danh cho bạn.`, threadID, messageID);
        case 'top':
            if (args[1] == 'point') {
                var data = await Users.getAll(['ID', 'dating', 'name']);
                var topDating = [];
                for (var i of data) {
                    if (i.dating && i.dating.lovepoint) {
                        if (topDating.some(item => item.ID == i.dating.mates)) continue;
                        else topDating.push(i);
                    }
                }
                if (topDating.length == 0) return api.sendMessage(`Hiện tại chưa có dữ liệu về các cặp đôi.`, threadID, messageID);
                topDating.sort((a, b) => b.dating.lovepoint - a.dating.lovepoint);
                var msg = `Dưới đây là top 5 cặp đôi có điểm thân thiết cao nhất:\n\n`, number = 1;
                for (var i of topDating) {
                    if (number < 6) {
                        var infoMates = await Users.getData(i.dating.mates);
                        msg += `${number++}. ${i.name} và ${infoMates.name}: ${i.dating.lovepoint} điểm.\n`;
                    }
                }
                return api.sendMessage(msg, threadID);
            }
            if (args[1] == 'date') {
                var data = await Users.getAll(['ID', 'dating', 'name']);
                var topDating = [];
                for (var i of data) {
                    if (i.dating && i.dating.lovepoint) {
                        i.dating.time.fullTime = Cherry.calcTime(i.dating.time.fullTime);
                        if (topDating.some(item => item.ID == i.dating.mates)) continue;
                        else topDating.push(i);
                    }
                }
                if (topDating.length == 0) return api.sendMessage(`Hiện tại chưa có dữ liệu về các cặp đôi.`, threadID, messageID);
                topDating.sort((a, b) => b.dating.time.fullTime - a.dating.time.fullTime);
                var msg = `Dưới đây là top 5 cặp đôi hẹn hò lâu nhất:\n\n`, number = 1;
                for (var i of topDating) {
                    if (number < 6) {
                        var infoMates = await Users.getData(i.dating.mates);
                        msg += `${number++}. ${i.name} và ${infoMates.name}: ${i.dating.time.fullTime} ngày.\n`;
                    }
                }
                return api.sendMessage(msg, threadID);
            }
        default:
            return api.sendMessage(`Bạn cần nhập giới tính của đối tượng mà bạn muốn ghép đôi.`, threadID, messageID);
    }
    var { coin } = await Others.getData(senderID);
    if (coin < 20000) return api.sendMessage(`Bạn không đủ 20.000 coins để thực hiện tìm kiếm một đối tượng mới.`, threadID, messageID);
    return api.sendMessage(`Bạn sẽ bị trừ 20000 coins để thực hiện tìm kiếm người ghép đôi với mình.\nSố tiền này sẽ không được hoàn trả nếu 1 trong 2 người không đồng ý tiến vào trạng thái Dating.\n\nThả cảm xúc vào tin nhắn này để đồng ý tìm kiếm một người.`, threadID, (error, info) => {
        multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, senderID: senderID, senderInfo: senderInfo, type: type, coin: coin, turn: 'match' })
    }, messageID);
}
