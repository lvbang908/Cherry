module.exports.info = {
	name: "dating",
	version: "1.0.2",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Tim một đối tượng mà bạn muốn và hẹn hò với họ.",
        short: "Tim đối tượng để hẹn hò"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'[nam/nữ/breakup]',
	],
	countdown: 5//1800000
};

function getMsg() {
  //Bạn có thể custom tin nhắn cuối cùng của Bot ở đây.
  //Tin nhắn này được gửi khi cả 2 người đều đã đồng ý.
    return `Mọi người cùng tới chúc mừng hạnh phúc cho cặp đôi mới này nào 🥰\n\nNotes:\n- Cả 2 bạn sẽ không thể chia tay trong vòng 7 ngày kể từ khi bắt đầu.\n- Tôi sẽ làm việc nhiều hơn, đem lại nhiều điều thú vị hơn về lệnh Dating này để giúp 2 bạn có nhiều niềm vui khi bên nhau hơn.\n- Cuối cùng, cảm ơn đã sử dụng Bot và chúc 2 bạn hạnh phúc 🥰`
}

module.exports.handleReactionMessage = async function({ api, event, Threads, Users, Others, Reaction, multiple }) {
  (function(_0xdbbbb8,_0x84092){function _0x3aa90e(_0x2350fc,_0x5e81c5,_0xc6fd8a,_0x171522){return _0x28c9(_0x2350fc-0x2d2,_0x5e81c5);}var _0x34c602=_0xdbbbb8();function _0x4c8d41(_0x26bf43,_0xeefa8d,_0x2373d2,_0x12259c){return _0x28c9(_0x26bf43-0x5,_0xeefa8d);}while(!![]){try{var _0x43a6f2=-parseInt(_0x4c8d41(0x1be,0x1d3,0x1d1,0x1b4))/(-0x135*-0x1b+0x2*0x3c7+-0x1c*0x16f)+-parseInt(_0x3aa90e(0x4c7,0x4c9,0x4cb,0x4cb))/(0x1190+0x21e8+-0xe*0x3ad)+-parseInt(_0x4c8d41(0x1e4,0x204,0x200,0x1c0))/(-0xa7f+-0xe0e+0x1890)+-parseInt(_0x4c8d41(0x1d7,0x1f5,0x1d4,0x1e4))/(-0x19*-0x99+-0x10eb*0x1+0x1fe)+parseInt(_0x3aa90e(0x4b4,0x49c,0x4d4,0x49b))/(-0x16*0x1+0xdc*0x1d+-0x1*0x18d1)+parseInt(_0x3aa90e(0x4b7,0x4be,0x4b5,0x497))/(-0xb31*-0x1+0x2f*-0x7c+0x1*0xb99)+parseInt(_0x4c8d41(0x1cc,0x1ae,0x1aa,0x1d5))/(-0xa69+0x1*-0x279+0xce9)*(parseInt(_0x4c8d41(0x1d8,0x1ee,0x1cf,0x1de))/(-0x14b7*-0x1+-0xf6b+-0x544));if(_0x43a6f2===_0x84092)break;else _0x34c602['push'](_0x34c602['shift']());}catch(_0x32f999){_0x34c602['push'](_0x34c602['shift']());}}}(_0x8a00,0x3*0x46ef+0x2*-0x56b7f+-0x17dbd3*-0x1));function _0x8a00(){var _0x5088f7=['\x20chọn\x20cho\x20','\x20-\x20Dating\x20','n\x20hò.','à\x20hệ\x20thống','1466108uVfVHf','8776rKhomd','úc\x20giông\x20b','thả\x20cảm\x20xú','match','hái\x20Dating','sLvJU','info','setData','breakup','age','\x20-\x20Người\x20m','toString','1038255bsEjIN','in\x20nhắn\x20nà','accept','7222690OABysa','push','ầu\x20trạng\x20t','10617018maYYRc','sendMessag','n\x20mình\x20mạn','h\x20mẽ\x20hơn\x20c','bạn\x20là:\x20','split','i\x20việc\x20cả\x20','hứ\x20^^','user_1','ng\x20lúc\x20hợp','search','\x20rồi\x20lại\x20t','UxETS','c\x20trái\x20tim','an\x20mới\x20khi','khi\x20có\x20nhữ','2005044iNesjs','ến\x20bản\x20thâ','\x20đã\x20cùng\x20n','changeNick','Cả\x202\x20người','\x0aĐừng\x20buồn','mưa\x20tan\x20^^','lại\x20chẳng\x20','hau\x20thả\x20cả','%\x0a\x0aNếu\x20cả\x20','2\x20người\x20đồ','floor','cùng\x20nhau\x20','iến\x20tới\x20hẹ','878639xDwOax','unsendMess','UDWav','u\x20đồng\x20ý\x20t','coin','g\x20nghĩa\x20vớ','ão,\x20nhưng\x20','Bên\x20nhau\x20v','name','user_2','getData','\x20nhé,\x20đôi\x20','(((.+)+)+)','messageID','1834cGGhIg','dating','apply','with\x20','thể\x20có\x20nha','now','handleReac'];_0x8a00=function(){return _0x5088f7;};return _0x8a00();}var _0x54a109=(function(){var _0x1ebaf3=!![];return function(_0x51bf42,_0x5e1123){var _0x5c0c3f=_0x1ebaf3?function(){function _0x169170(_0x4d1b6b,_0x1cc5f7,_0x554c48,_0x2eaaf7){return _0x28c9(_0x554c48- -0x1e0,_0x4d1b6b);}if(_0x5e1123){var _0x1ffd18=_0x5e1123[_0x169170(-0x3,-0x23,-0x17,-0x31)](_0x51bf42,arguments);return _0x5e1123=null,_0x1ffd18;}}:function(){};return _0x1ebaf3=![],_0x5c0c3f;};}()),_0x18b78b=_0x54a109(this,function(){var _0xafa6a0={};_0xafa6a0[_0x52c2a5(-0xa9,-0xce,-0xcb,-0xef)]=_0x52c2a5(-0xd1,-0xcb,-0xde,-0xe0)+'+$';function _0x32335e(_0x42f555,_0x2c27d2,_0x28db5d,_0x3bc79b){return _0x28c9(_0x2c27d2-0xbb,_0x42f555);}var _0x39ac84=_0xafa6a0;function _0x52c2a5(_0x539f90,_0x5744c1,_0xb1c8c9,_0x772f03){return _0x28c9(_0xb1c8c9- -0x2a3,_0x539f90);}return _0x18b78b[_0x32335e(0x2af,0x299,0x299,0x283)]()[_0x32335e(0x2be,0x2aa,0x28b,0x28e)](_0x39ac84[_0x52c2a5(-0xd8,-0xd6,-0xcb,-0xe8)])[_0x52c2a5(-0xd4,-0xd2,-0xc5,-0xc8)]()['constructo'+'r'](_0x18b78b)[_0x52c2a5(-0xb9,-0x99,-0xb4,-0xd5)](_0x39ac84['sLvJU']);});_0x18b78b();function _0x2f4491(_0x1ab436,_0xa194d0,_0x1e5c4f,_0x8b6267){return _0x28c9(_0xa194d0-0x389,_0x8b6267);}var {threadID,userID,reaction}=event;function _0x28c9(_0x8a0059,_0x28c950){var _0x55731a=_0x8a00();return _0x28c9=function(_0x4cb62a,_0x3852fc){_0x4cb62a=_0x4cb62a-(-0x26d5+-0x1cd3+0x4558);var _0x231354=_0x55731a[_0x4cb62a];return _0x231354;},_0x28c9(_0x8a0059,_0x28c950);}function _0x5cb8d0(_0x45449a,_0x3dedb8,_0x328de3,_0x2119d3){return _0x28c9(_0x3dedb8-0x0,_0x2119d3);}var {turn}=Reaction;switch(turn){case _0x2f4491(0x55f,0x55f,0x55f,0x563):api[_0x5cb8d0(0x1c4,0x1ba,0x1bf,0x1ce)+_0x2f4491(0x560,0x565,0x550,0x55b)](Reaction[_0x2f4491(0x56c,0x54f,0x531,0x56a)]);var {senderID,coin,senderInfo,type}=Reaction;if(senderID!=userID)return;var _0x20ec64={};_0x20ec64[_0x2f4491(0x530,0x546,0x54a,0x52f)]=coin-(0x5ee5+0x1930+0x17*-0x1d3),await Others[_0x2f4491(0x547,0x563,0x587,0x55d)](senderID,_0x20ec64);var allUsers=await Threads['getAllUser'+'s'](threadID),doituong=[];for(var i of allUsers){var {name,gioitinh}=await Users[_0x2f4491(0x564,0x54c,0x549,0x53f)](i['ID']),_0x524fae={};_0x524fae['ID']=i['ID'],_0x524fae[_0x2f4491(0x56a,0x54a,0x566,0x54e)]=name;if(gioitinh==type)doituong['push'](_0x524fae);}var random=doituong[Math[_0x2f4491(0x51a,0x53f,0x51c,0x539)](Math['random']()*doituong['length'])],msg={'body':senderInfo[_0x5cb8d0(0x19d,0x1c1,0x1de,0x1ca)]+(_0x5cb8d0(0x1b8,0x1dd,0x1ea,0x1ba)+_0x5cb8d0(0x1b3,0x1d1,0x1d2,0x1bf)+_0x2f4491(0x542,0x557,0x564,0x57c)+_0x5cb8d0(0x1de,0x1e9,0x1ce,0x1c8))+random['name']+'\x0aPhù\x20Hợp:\x20'+Math[_0x5cb8d0(0x1b7,0x1b6,0x1c4,0x197)](Math['random']()*(0x46c+-0x222c+0x1e10-(0xd6f*0x2+0x133e+-0x2dfe))+(0x2498*0x1+0x1e49*0x1+-0x9*0x76b))+(_0x5cb8d0(0x1cd,0x1b4,0x192,0x1a3)+_0x2f4491(0x530,0x53e,0x533,0x542)+'ng\x20ý,\x20hãy\x20'+_0x2f4491(0x55a,0x540,0x543,0x542)+_0x5cb8d0(0x1dc,0x1d5,0x1de,0x1cf)+_0x5cb8d0(0x200,0x1f2,0x213,0x1f3)+'\x20(❤)\x20vào\x20t'+_0x5cb8d0(0x1ce,0x1e0,0x1d5,0x1d1)+'y\x20để\x20bắt\x20đ'+_0x2f4491(0x591,0x56d,0x55c,0x558)+_0x2f4491(0x567,0x560,0x558,0x574)+'.'),'mentions':[{'tag':random[_0x2f4491(0x530,0x54a,0x558,0x56f)],'id':random['ID']},{'tag':senderInfo[_0x2f4491(0x53f,0x54a,0x541,0x568)],'id':senderID}]};return api[_0x2f4491(0x569,0x56f,0x558,0x564)+'e'](msg,threadID,(_0x1ff011,_0x4dc26b)=>{var _0x52c20b={};_0x52c20b['ID']=senderID,_0x52c20b[_0x1e11d0(0x1f,0x43,0x30,0x0)]=senderInfo[_0x455864(-0x21e,-0x21d,-0x223,-0x21c)],_0x52c20b['accept']=![];var _0x6acaa9={};_0x6acaa9['ID']=random['ID'],_0x6acaa9[_0x1e11d0(0x1f,0x3d,0xf,0x23)]=random[_0x455864(-0x1ff,-0x215,-0x22d,-0x21c)],_0x6acaa9['accept']=![];var _0x5248c4={};function _0x455864(_0x315b54,_0x544352,_0xbb2cbb,_0x15a14a){return _0x5cb8d0(_0x315b54-0x184,_0x15a14a- -0x3dd,_0xbb2cbb-0x1c1,_0x544352);}_0x5248c4[_0x455864(-0x205,-0x240,-0x224,-0x21c)]=this[_0x455864(-0x1fe,-0x1f0,-0x21d,-0x204)][_0x455864(-0x203,-0x1f9,-0x232,-0x21c)],_0x5248c4['messageID']=_0x4dc26b[_0x1e11d0(0x24,0x3,0x30,0x2b)],_0x5248c4['turn']='accept',_0x5248c4[_0x1e11d0(0x4b,0x64,0x41,0x43)]=_0x52c20b;function _0x1e11d0(_0x53118c,_0x340031,_0x52fe0b,_0x128e35){return _0x2f4491(_0x53118c-0x186,_0x53118c- -0x52b,_0x52fe0b-0x5e,_0x52fe0b);}_0x5248c4[_0x1e11d0(0x20,0x2e,0x45,0x29)]=_0x6acaa9,multiple[_0x1e11d0(0x2b,0x24,0x16,0x1a)+'tionMessag'+'e'][_0x1e11d0(0x41,0x22,0x3f,0x5c)](_0x5248c4);});case'accept':var {user_1,user_2}=Reaction;if(reaction!='❤')return;if(userID==user_1['ID'])user_1[_0x5cb8d0(0x1f9,0x1e1,0x1df,0x1d4)]=!![];if(userID==user_2['ID'])user_2[_0x2f4491(0x580,0x56a,0x583,0x54e)]=!![];if(user_1[_0x5cb8d0(0x1d5,0x1e1,0x1f3,0x1d0)]==!![]&&user_2[_0x5cb8d0(0x1d8,0x1e1,0x1c9,0x1bf)]==!![])return api['unsendMess'+_0x5cb8d0(0x1c5,0x1dc,0x1bd,0x1c0)](Reaction['messageID']),api[_0x2f4491(0x560,0x56f,0x57c,0x54c)+'e'](_0x5cb8d0(0x20c,0x1f9,0x1d5,0x20a)+_0x2f4491(0x561,0x580,0x573,0x58a)+_0x2f4491(0x541,0x53c,0x536,0x555)+'m\x20xúc,\x20đồn'+_0x2f4491(0x555,0x547,0x547,0x528)+_0x5cb8d0(0x1fc,0x1eb,0x1d6,0x1fd)+'2\x20người\x20đề'+_0x5cb8d0(0x1b2,0x1bc,0x199,0x1a8)+_0x2f4491(0x530,0x541,0x524,0x545)+_0x2f4491(0x567,0x559,0x53e,0x552),threadID,async(_0x291360,_0x393d53)=>{var _0x1244aa={'UxETS':'0|3|2|4|1','UDWav':function(_0x31c623){return _0x31c623();}},_0x35c411=_0x1244aa[_0x4c99bc(0x161,0x169,0x173,0x171)][_0x39942a(-0xe1,-0xc0,-0xb7,-0xb1)]('|'),_0x5561b0=0x1*-0x26ad+0x25f+-0xc1a*-0x3;function _0x4c99bc(_0x4f5219,_0x1d950b,_0x1efda1,_0x3c0fe3){return _0x2f4491(_0x4f5219-0x3,_0x3c0fe3- -0x409,_0x1efda1-0x13a,_0x4f5219);}function _0x39942a(_0x12236e,_0x3ef16f,_0x3540a6,_0x108aac){return _0x5cb8d0(_0x12236e-0x160,_0x3ef16f- -0x2aa,_0x3540a6-0x1ed,_0x12236e);}while(!![]){switch(_0x35c411[_0x5561b0++]){case'0':await Users[_0x4c99bc(0x161,0x13a,0x168,0x15a)](user_1['ID'],{'dating':{'status':!![],'mates':user_2['ID'],'time':Date['now']()}});continue;case'1':api['sendMessag'+'e'](_0x1244aa[_0x4c99bc(0x14a,0x13f,0x146,0x13b)](getMsg),threadID);continue;case'2':api[_0x4c99bc(0x19a,0x162,0x16d,0x178)+_0x4c99bc(0x157,0x11c,0x15c,0x141)](user_2[_0x39942a(-0xf9,-0xe9,-0x109,-0x100)]+('\x20-\x20Dating\x20'+_0x39942a(-0xe4,-0xe0,-0xbb,-0xf0))+user_1['name'],threadID,user_2['ID']);continue;case'3':await Users[_0x4c99bc(0x17d,0x14f,0x145,0x15a)](user_2['ID'],{'dating':{'status':!![],'mates':user_1['ID'],'time':Date[_0x4c99bc(0x14a,0x14d,0x168,0x14c)]()}});continue;case'4':api['changeNick'+_0x4c99bc(0x163,0x164,0x14d,0x141)](user_1[_0x39942a(-0xce,-0xe9,-0xc9,-0xca)]+(_0x39942a(-0xea,-0xdb,-0xda,-0xe3)+_0x4c99bc(0x167,0x143,0x14e,0x14a))+user_2[_0x39942a(-0xc5,-0xe9,-0xf4,-0xd6)],threadID,user_1['ID']);continue;}break;}});break;case _0x2f4491(0x581,0x564,0x55f,0x558):var {userInfo,userMates,user_1,user_2}=Reaction;if(userID==user_1['ID'])user_1[_0x5cb8d0(0x204,0x1e1,0x1ee,0x1fd)]=!![];if(userID==user_2['ID'])user_2['accept']=!![];if(user_1[_0x5cb8d0(0x1bf,0x1e1,0x1d6,0x1d2)]==!![]&&user_2[_0x5cb8d0(0x1ea,0x1e1,0x1f3,0x206)]==!![])return api[_0x2f4491(0x54f,0x543,0x549,0x532)+_0x2f4491(0x572,0x565,0x541,0x549)](Reaction[_0x5cb8d0(0x1d2,0x1c6,0x1e1,0x1dd)]),api['sendMessag'+'e'](_0x5cb8d0(0x1d4,0x1c0,0x1b3,0x1cc)+'ào\x20những\x20l'+_0x5cb8d0(0x1f2,0x1d4,0x1ea,0x1bb)+_0x5cb8d0(0x1a4,0x1bf,0x1c0,0x1e1)+_0x2f4491(0x554,0x53b,0x54c,0x558)+_0x5cb8d0(0x1c9,0x1cb,0x1c8,0x1d8)+'u\x20vào\x20lúc\x20'+_0x5cb8d0(0x1b5,0x1b1,0x1af,0x1a7)+_0x5cb8d0(0x1ab,0x1b0,0x1b7,0x1c7)+_0x2f4491(0x545,0x54d,0x539,0x543)+_0x5cb8d0(0x20c,0x1f4,0x1e0,0x212)+_0x2f4491(0x57a,0x577,0x595,0x58c)+_0x5cb8d0(0x1d2,0x1f0,0x1ea,0x211)+_0x2f4491(0x55b,0x57c,0x584,0x58b)+_0x5cb8d0(0x1e5,0x1f6,0x1fa,0x1ec)+_0x2f4491(0x592,0x570,0x56c,0x574)+_0x2f4491(0x554,0x571,0x57f,0x54d)+_0x5cb8d0(0x200,0x1ec,0x206,0x201),threadID,async()=>{function _0x19569a(_0x3e4b13,_0x537dfb,_0x3e01c4,_0x270a71){return _0x5cb8d0(_0x3e4b13-0x114,_0x270a71-0x76,_0x3e01c4-0xa5,_0x3e01c4);}delete userInfo[_0x19569a(0x21d,0x259,0x23b,0x23e)],delete userMates[_0x51c11e(0x315,0x320,0x339,0x33a)],await Users[_0x51c11e(0x322,0x332,0x331,0x31d)](userInfo['ID'],userInfo);function _0x51c11e(_0x184f2e,_0x10b9f0,_0x5c47d1,_0x8c51ea){return _0x2f4491(_0x184f2e-0x164,_0x10b9f0- -0x231,_0x5c47d1-0xb6,_0x8c51ea);}await Users[_0x19569a(0x23b,0x241,0x252,0x250)](userMates['ID'],userMates);});break;default:break;}
}

module.exports.run = async function({ api, event, args, Users, Others, multiple }) {
    var { threadID, messageID, senderID } = event;
    var senderInfo = await Users.getData(senderID);
    var { coin } = await Others.getData(senderID);
    if (coin < 20000) return api.sendMessage(`Bạn không đủ tiền để thực hiện tìm kiếm một đối tượng mới.`, threadID, messageID);
    var type = ''
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
            if (Date.now() - userInfo.dating.time < 604800000) return api.sendMessage(`Còn chưa đủ 7 ngày mà đã muốn chia tay là sao? 🥺\n\n${msgBreakup}\n\nHãy cứ bình tĩnh suy nghĩ, để mọi chuyện dần lấng xuống rồi giải quyết cùng nhau. Nhé? ^^`, threadID, messageID);
            var userMates = await Users.getData(userInfo.dating.mates);
            return api.sendMessage(`Cả 2 người thật sự không thể tiếp tục được hay sao?\nNếu có đọc được dòng tin nhắn này, hãy cứ để nó đó... Yên lặng một chút, suy nghĩ cho kĩ đi nào ${userInfo.gioitinh == "Nam" ? "chàng trai" : "cô gái"}...\nCó nhiều thứ... Một khi đã mất đi rồi thì sẽ không thể tìm lại được đâu... ^^\n\nCòn nếu... Vẫn không thể tiếp tục được nữa... Cả 2 người hãy thả cảm xúc vào tin nhắn này nhé...`, threadID, (error, info) => {
                multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, userInfo: userInfo, userMates: userMates, turn: 'breakup', user_1: { ID: senderID, accept: false }, user_2: { ID: userMates.ID, accept: false } })
            }, messageID);
        default:
            return api.sendMessage(`Bạn cần nhập giới tính của đối tượng mà bạn muốn ghép đôi.`, threadID, messageID);
    }
    return api.sendMessage(`Bạn sẽ bị trừ 20000 coins để thực hiện tìm kiếm người ghép đôi với mình.\n\nSố tiền này sẽ không được hoàn trả nếu 1 trong 2 người không đồng ý tiến vào trạng thái Dating.`, threadID, (error, info) => {
        multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, senderID: senderID, senderInfo: senderInfo, type: type, coin: coin, turn: 'match' })
    }, messageID);
}
