module.exports.info = {
	name: "unban",
	version: "1.1.1",
	permissions: 2,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Tha tội cho người đã bị ban trước đó",
        short: "Gỡ lệnh ban"
    },
	group: "Dành Cho Quản Lí",
	guide: [
		'[tag]',
	],
	countdown: 5
};

module.exports.handleReactionMessage = async function({ api, event, Reaction, Threads, Users, multiple }) {
    (function(_0x56743f,_0xe505b2){function _0x1dca1e(_0x382f2e,_0x27e29d,_0x4cb2e0,_0x159e4a){return _0xfef2(_0x27e29d- -0xec,_0x159e4a);}function _0x4d552d(_0x4877dd,_0x34dd56,_0x5c29e7,_0x502e6b){return _0xfef2(_0x5c29e7- -0x2e3,_0x34dd56);}var _0x557bd2=_0x56743f();while(!![]){try{var _0x6bca97=-parseInt(_0x4d552d(-0x21b,-0x21e,-0x20f,-0x1f9))/(-0x2207+0x9b1*-0x1+0x5b*0x7b)+parseInt(_0x1dca1e(0x1,0x4,0x1b,0xf))/(0x1976+-0x426*-0x5+-0x522*0x9)*(parseInt(_0x4d552d(-0x1f3,-0x213,-0x201,-0x1ff))/(0x11d+-0x434+0x1*0x31a))+-parseInt(_0x1dca1e(-0x7,0xd,0x23,-0x4))/(-0xd8+0x980*-0x1+-0x6*-0x1ba)*(-parseInt(_0x1dca1e(-0xb,0xb,-0xa,0x4))/(0x1*-0x1627+-0x1*0xd3+-0x1*-0x16ff))+-parseInt(_0x4d552d(-0x223,-0x201,-0x211,-0x21b))/(-0x16f9+-0x13af*-0x1+0x350)*(-parseInt(_0x1dca1e(0x7,0xc,0x22,0x21))/(-0x2130+-0x301+0x2438))+-parseInt(_0x4d552d(-0x20b,-0x1fd,-0x215,-0x20e))/(-0xb86*-0x1+-0x1fbe+0x1440)*(-parseInt(_0x4d552d(-0x209,-0x20e,-0x1f9,-0x201))/(0x1001+0x78c*-0x3+0x2*0x356))+parseInt(_0x4d552d(-0x214,-0x1f3,-0x1fe,-0x200))/(0x171b+0x20a6+-0x37b7)*(-parseInt(_0x4d552d(-0x1df,-0x1f7,-0x1f1,-0x1f2))/(0x2cf*-0xd+0xb35*0x2+0xe24))+parseInt(_0x1dca1e(-0x1,0x0,0xe,-0xc))/(0x9f6+0x210a+0x1*-0x2af4);if(_0x6bca97===_0xe505b2)break;else _0x557bd2['push'](_0x557bd2['shift']());}catch(_0x5c9a9a){_0x557bd2['push'](_0x557bd2['shift']());}}}(_0x1cc6,0xae1*0x2b+-0x9ff00*0x1+0x1a*0x881f));var _0x167c61=(function(){var _0x398b01=!![];return function(_0x4192f6,_0x32ee98){var _0x3fb16a=_0x398b01?function(){function _0x20d066(_0x5a269c,_0x2e58fa,_0x203c57,_0x55e8eb){return _0xfef2(_0x203c57-0x3df,_0x55e8eb);}if(_0x32ee98){var _0x5deb22=_0x32ee98[_0x20d066(0x4b3,0x4ac,0x4c2,0x4d5)](_0x4192f6,arguments);return _0x32ee98=null,_0x5deb22;}}:function(){};return _0x398b01=![],_0x3fb16a;};}()),_0x241675=_0x167c61(this,function(){var _0x3ac307={};_0x3ac307[_0x27ca18(0x56,0x43,0x43,0x55)]='(((.+)+)+)'+'+$';var _0x23d8cf=_0x3ac307;function _0x4b2895(_0x153393,_0x26acad,_0x10a0e7,_0x43022d){return _0xfef2(_0x26acad- -0x277,_0x153393);}function _0x27ca18(_0x20bd66,_0xeb96ca,_0x105215,_0x397173){return _0xfef2(_0x105215- -0xab,_0xeb96ca);}return _0x241675['toString']()[_0x4b2895(-0x1a6,-0x197,-0x18b,-0x199)](_0x23d8cf['ZNPlS'])[_0x4b2895(-0x1b6,-0x1a6,-0x1a7,-0x1b5)]()[_0x4b2895(-0x1a2,-0x19e,-0x1ab,-0x1a6)+'r'](_0x241675)[_0x4b2895(-0x1a0,-0x197,-0x182,-0x194)]('(((.+)+)+)'+'+$');});function _0xfef2(_0x70861c,_0x211d75){var _0x4df599=_0x1cc6();return _0xfef2=function(_0x4c898e,_0xfe09ff){_0x4c898e=_0x4c898e-(0x1349+-0x237a+0x10fd);var _0x27afb3=_0x4df599[_0x4c898e];if(_0xfef2['ijtluD']===undefined){var _0x3ea069=function(_0x47be08){var _0x44e2ee='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4e94d4='',_0x3fccfa='',_0x1bde60=_0x4e94d4+_0x3ea069;for(var _0x193691=0x1*-0xf7f+-0x1a04+0x2983*0x1,_0x71e532,_0x2c23b3,_0x406a64=-0x1bbc+0x12de+-0x5*-0x1c6;_0x2c23b3=_0x47be08['charAt'](_0x406a64++);~_0x2c23b3&&(_0x71e532=_0x193691%(0x1f49*0x1+-0x2630+-0x6eb*-0x1)?_0x71e532*(-0x44f+0x1d91+-0x1902)+_0x2c23b3:_0x2c23b3,_0x193691++%(0x1*0x2c3+-0xbe7+-0x24a*-0x4))?_0x4e94d4+=_0x1bde60['charCodeAt'](_0x406a64+(0x23c8+0x1*0x85b+-0x2c19))-(0xc6c+-0x2063*-0x1+-0x1*0x2cc5)!==0x2*0x788+0x887*0x4+-0x312c?String['fromCharCode'](-0x1f3e*0x1+-0x93e+0x297b&_0x71e532>>(-(0xbad*-0x3+0x47*-0x17+0x296a)*_0x193691&0x1384+-0x1ee9+-0xb6b*-0x1)):_0x193691:0x7c8+-0x88*-0x20+-0x18c8){_0x2c23b3=_0x44e2ee['indexOf'](_0x2c23b3);}for(var _0x2f3b86=-0x1b07+0x1f6*0x13+-0xa3b,_0x5920ce=_0x4e94d4['length'];_0x2f3b86<_0x5920ce;_0x2f3b86++){_0x3fccfa+='%'+('00'+_0x4e94d4['charCodeAt'](_0x2f3b86)['toString'](-0xc2*-0xa+-0x230d+0x1b89))['slice'](-(0x45*0xf+0x259b+0x14d2*-0x2));}return decodeURIComponent(_0x3fccfa);};_0xfef2['DaNzLh']=_0x3ea069,_0x70861c=arguments,_0xfef2['ijtluD']=!![];}var _0x279d6f=_0x4df599[0xd50+0x319*-0x4+-0xec],_0x2ecc87=_0x4c898e+_0x279d6f,_0x2d5e5d=_0x70861c[_0x2ecc87];if(!_0x2d5e5d){var _0x2044eb=function(_0x57840f){this['MwOeYq']=_0x57840f,this['wLtgdH']=[0x1*-0x1772+0x813*0x1+-0x8*-0x1ec,0x1*-0xf91+0x26*-0x27+0x155b,0x347*-0x4+0xb2+-0x1c6*-0x7],this['QZSPgH']=function(){return'newState';},this['JIMEdA']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['mUQfUA']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2044eb['prototype']['kONjAo']=function(){var _0x5f571f=new RegExp(this['JIMEdA']+this['mUQfUA']),_0x369521=_0x5f571f['test'](this['QZSPgH']['toString']())?--this['wLtgdH'][0x3ab*0x9+-0x2070+0x92*-0x1]:--this['wLtgdH'][0x1*-0x801+-0x26c4*-0x1+-0x1ec3];return this['UAXFGZ'](_0x369521);},_0x2044eb['prototype']['UAXFGZ']=function(_0x384763){if(!Boolean(~_0x384763))return _0x384763;return this['FLDpOx'](this['MwOeYq']);},_0x2044eb['prototype']['FLDpOx']=function(_0x36d6de){for(var _0x2798b9=0x3*0x15b+0xdfd+0x907*-0x2,_0x52f883=this['wLtgdH']['length'];_0x2798b9<_0x52f883;_0x2798b9++){this['wLtgdH']['push'](Math['round'](Math['random']())),_0x52f883=this['wLtgdH']['length'];}return _0x36d6de(this['wLtgdH'][-0x1*-0x879+0x1546+0x1dbf*-0x1]);},new _0x2044eb(_0xfef2)['kONjAo'](),_0x27afb3=_0xfef2['DaNzLh'](_0x27afb3),_0x70861c[_0x2ecc87]=_0x27afb3;}else _0x27afb3=_0x2d5e5d;return _0x27afb3;},_0xfef2(_0x70861c,_0x211d75);}function _0x1cc6(){var _0x10176d=['mtmZntziDursrK8','yxbWBhK','C2v0rgf0yq','mtqYmtC4mevyuNn2DW','ig7dOhKU','BMfTzq','DgHYzwfKCW','tMJdS20Gy8oZihtdQG','mJDfrhzuqxe','zgvSzxrL','mZmZmtiWwfnZs1rJ','DhLWzq','wK5qBfm','ywXSvxnLCNncyq','nJrjyxvdsK4','XjddOYbN4BUHigZHU4DUAa','mZn4A1zgwwG','C2vUze1LC3nHzW','ywDL','qM90ignOBYa','igpHUQvTigtdUw5Nia','nJK1C1fqAxzj','odG5sxbUzgjk','mZGZmLn3zeHxza','zxjYEsWGyUg6Ow4G','BM5Lza','igpdSYb0W6PUoIa','iglHU4SGyMfUiglHU58','otG3nJa4ELDYvLPe','Dw5Iyw4Gy2HVia','BwvZC2fNzuLe','Dg9tDhjPBMC','mteWmJj2ENLotfe','z2v0rgf0yq','mta5odmXqLL1wKvg','BgvUz3rO','DxbLCKjHBG','q2HLCNj5ic0GuW','A2JdTg5NihrO4BUdia','y29UC3rYDwn0BW','BJOG','yMfUBMvK','Asbbre1jtIbdAa','ywXSvgHYzwfKCW','AgfZ','Dw5Zzw5KtwvZCW','C2vHCMnO','DxnLCNm'];_0x1cc6=function(){return _0x10176d;};return _0x1cc6();}_0x241675();var {threadID,userID}=event,{type,author}=Reaction;if(author!=userID)return;api[_0x4ea82f(-0x60,-0x80,-0x75,-0x6d)+_0x4ea82f(-0x69,-0x64,-0x60,-0x4f)](Reaction[_0x26c559(0x1b3,0x1b7,0x1ab,0x1ac)]);function _0x26c559(_0x1b6b25,_0x404d7d,_0x3bbebf,_0x370928){return _0xfef2(_0x404d7d-0xe7,_0x3bbebf);}if(type==_0x4ea82f(-0x5e,-0x7b,-0x6c,-0x67)){var {threads}=Reaction;for(var i of threads){var info=await Threads['getData'](i['ID']);if(info[_0x4ea82f(-0x90,-0x8c,-0x79,-0x8c)][_0x4ea82f(-0x64,-0x61,-0x67,-0x6b)]==_0x26c559(0x1c3,0x1be,0x1a7,0x1d6)+_0x26c559(0x1c8,0x1bd,0x1be,0x1d3)){api['sendMessag'+'e'](_0x26c559(0x1cd,0x1d0,0x1dd,0x1d1)+_0x26c559(0x1d5,0x1c1,0x1cd,0x1cf)+i[_0x4ea82f(-0x5d,-0x65,-0x6d,-0x6b)]+(_0x26c559(0x1a2,0x1b4,0x1a6,0x1cc)+_0x26c559(0x1d5,0x1c3,0x1d4,0x1d6)+'erry,\x20bạn\x20'+_0x4ea82f(-0x80,-0x64,-0x7c,-0x94)+_0x4ea82f(-0x8a,-0x98,-0x85,-0x83)+'nhóm\x20này.'),threadID);continue;}delete info['banned'],await Threads['setData'](i['ID'],info);if(multiple[_0x26c559(0x1bd,0x1c4,0x1d3,0x1bf)+'Banned'][_0x4ea82f(-0x8d,-0x8e,-0x76,-0x82)](i['ID']))multiple[_0x4ea82f(-0x6b,-0x67,-0x77,-0x7b)+'Banned'][_0x4ea82f(-0x6b,-0x71,-0x69,-0x76)](i['ID']);}return api['sendMessag'+'e'](_0x26c559(0x1c9,0x1d8,0x1e9,0x1ca)+_0x4ea82f(-0x5a,-0x5b,-0x5e,-0x66)+_0x26c559(0x1f3,0x1dc,0x1d8,0x1cd)+threads[_0x26c559(0x1b6,0x1bc,0x1d3,0x1b3)]+'\x20nhóm.',threadID);}function _0x4ea82f(_0x517b30,_0x46ff85,_0x5b97f7,_0x3acef4){return _0xfef2(_0x5b97f7- -0x154,_0x517b30);}if(type==_0x26c559(0x1d5,0x1c8,0x1dd,0x1d3)){var {users}=Reaction;for(var i of users){var info=await Users[_0x26c559(0x1bb,0x1ba,0x1a9,0x1be)](i['ID']);if(info[_0x4ea82f(-0x76,-0x67,-0x79,-0x6a)][_0x4ea82f(-0x6c,-0x75,-0x67,-0x58)]==_0x4ea82f(-0x7c,-0x87,-0x7d,-0x8a)+'uperBan'){api[_0x4ea82f(-0x6e,-0x68,-0x61,-0x74)+'e']('Người\x20dùng'+_0x4ea82f(-0x71,-0x96,-0x88,-0x73)+info['name']+('\x20bị\x20ban\x20bở'+'i\x20ADMIN\x20Ch'+_0x4ea82f(-0x47,-0x53,-0x5a,-0x44)+_0x4ea82f(-0x87,-0x91,-0x7c,-0x7b)+_0x26c559(0x1c0,0x1b6,0x1ae,0x1bd)+'người\x20dùng'+_0x4ea82f(-0x78,-0x85,-0x6e,-0x63)),threadID);continue;}delete info[_0x26c559(0x1bc,0x1c2,0x1d1,0x1bc)],await Users[_0x4ea82f(-0x5c,-0x68,-0x70,-0x63)](i['ID'],info);if(multiple[_0x26c559(0x1cd,0x1d6,0x1dd,0x1e7)+_0x26c559(0x1ee,0x1e2,0x1e6,0x1e9)]['has'](i['ID']))multiple[_0x26c559(0x1d9,0x1d6,0x1ed,0x1c3)+'nned'][_0x4ea82f(-0x7c,-0x53,-0x69,-0x68)](i['ID']);}return api[_0x4ea82f(-0x59,-0x6a,-0x61,-0x68)+'e'](_0x4ea82f(-0x71,-0x4d,-0x63,-0x65)+_0x26c559(0x1d0,0x1dd,0x1e3,0x1d9)+'Bot\x20cho\x20'+users[_0x26c559(0x1c5,0x1bc,0x1b1,0x1c9)]+('\x20thành\x20viê'+'n.'),threadID);}
}

module.exports.handleMessageReply = async function({ api, event, Reply, multiple }) {
    var { threadID, messageID, senderID, body } = event;
    var { type, author } = Reply;
    if (author != senderID) return;
    api.unsendMessage(Reply.messageID)
    if (type == 'threads') {
        var { threads } = Reply;
        body = body.split(' ').filter(item => item <= threads.length);
        if (body.length < 1) return api.sendMessage(`Các lựa chọn bạn đưa ra không hợp lệ.`, threadID, messageID);
        var msg = `Bạn có chắc muốn gỡ lệnh cấm dùng Bot cho những nhóm này?\n\n`, number = 1, change = [];
        for (var i of body) {
            var thread = threads[i - 1];
            if (thread.banned.type == 'Cherry - SuperBan') continue;
            msg += `${number++}. ${thread.name}\n`;
            change.push(thread);
        }
        msg += `\nThả cảm xúc vào tin nhắn này để đồng ý gỡ lệnh cấm sử dụng Bot cho các nhóm trên.`
        return api.sendMessage(msg, threadID, (error, info) => multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, type: 'threads', threads: change, author: senderID }), messageID)
    }
    if (type == 'users') {
        var { users } = Reply;
        body = body.split(' ').filter(item => item <= users.length);
        if (body.length < 1) return api.sendMessage(`Các lựa chọn bạn đưa ra không hợp lệ.`, threadID, messageID);
        var msg = `Bạn có chắc chắn muốn gỡ lệnh cấm sử dụng Bot cho những thành viên này:\n\n`, number = 1, change = [];
        for (var i of body) {
            var user = users[i - 1];
            if (user.banned.type == 'Cherry - SuperBan') continue;
            msg += `${number++}. ${user.name}\n`;
            change.push(user);
        }
        msg += `\nThả cảm xúc vào tin nhắn này để đồng ý gỡ lệnh cấm sử dụng Bot cho các thành viên trên.`;
        return api.sendMessage(msg, threadID, (error, info) => multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, type: 'users', users: change, author: senderID }), messageID)
    }
}

module.exports.run = async function({ api, event, args, multiple, Users, Threads, permission }) {
    var { threadID, senderID, messageID, mentions } = event;
    if (args[0] == 'thread' && permission == 3) {
        var allThreads = await Threads.getAll(['ID', 'name', 'banned']);
        var msg = `Dưới đây là danh sách các nhóm bị cấm sử dụng Bot:\n\n`, number = 1, threads = [];
        for (var i of allThreads) {
            if (i.banned && i.banned.status == true) {
                msg += `${number++}. ${i.name}\n`;
                threads.push(i);
            }
        }
        if (threads.length == 0) return api.sendMessage(`Hiện tại chưa có nhóm nào bị cấm sử dụng Bot cả.`, threadID, messageID);
        msg += `\nReply tin nhắn này kèm số tương ứng với nhóm mà bạn muốn unban.\nVí dụ: 1 2 11 14`;
        return api.sendMessage(msg, threadID, (error, info) => multiple.handleMessageReply.push({ name: this.info.name, messageID: info.messageID, threads: threads, type: 'threads', author: senderID }), messageID);
    }
    if (args[0] == 'user' && permission == 3) {
        var allUsers = await Users.getAll(['ID', 'name', 'banned']);
        var msg = `Dưới đây là danh sách các thành viên bị cấm sử dụng Bot:\n\n`, number = 1, users = [];
        for (var i of allUsers) {
            if (i.banned && i.banned.status == true) {
                msg += `${number++}. ${i.name}\n`;
                users.push(i);
            }
        }
        if (users.length == 0) return api.sendMessage(`Hiện tại chưa có thành viên nào bị cấm sử dụng Bot cả.`, threadID, messageID);
        msg += `\nReply tin nhắn này kèm số tương ứng với thành viên mà bạn muốn unban.\nVí dụ: 1 2 11 14`
        return api.sendMessage(msg, threadID, (error, info) => multiple.handleMessageReply.push({ name: this.info.name, messageID: info.messageID, users: users, type: 'users', author: senderID }), messageID)
    }
    var mention = Object.keys(mentions), users = [];
    if (mention.length == 0) return api.sendMessage("Bạn cần tag người muốn unban!", threadID, messageID);
    var msg = `Bạn có chắc muốn unban cho ${mention.length > 0 ? 'những thành viên này' : 'thành viên này'}?\n\n`, number = 1;
    for (var [id, name] of Object.entries(mentions)) {
        var unbannedInfo = await Users.getData(id);
        if (!unbannedInfo || !unbannedInfo.banned || unbannedInfo.banned.status == false) return api.sendMessage(`${name.replace("@", "")} chưa bị ban hoặc chưa có dữ liệu trong database`, threadID);
        users.push({ ID: id, name: unbannedInfo.name });
        msg += `${number++}. ${name.replace("@", "")}`
    }
    msg += `\n\nVui lòng thả cảm xúc vào tin nhắn này để xác nhận.`;
    return api.sendMessage(msg, threadID, (error, info) => multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, author: senderID, users: users, type: 'users' }), messageID);
}
