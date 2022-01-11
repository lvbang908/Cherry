module.exports.info = {
	name: "checktt",
	version: "1.0.1",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Xem số tin nhắn đã gửi của bản thân, người được tag hoặc tất cả mọi người (Miễn là họ có ID trong Data)",
        short: "Xem số tin nhắn đã gửi"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'[Để trống/all/tag]',
	],
	countdown: 20
};

module.exports.run = async function ({ args, api, event, Threads, Users, Cherry }) {
	var { threadID, messageID, senderID } = event;
	var mention = Object.keys(event.mentions);
	var members = (await Threads.getData(threadID)).members;
    var allInfo = [], number = 0, msg = "";
	if (args[0] == "all") {
		for (var i of Object.keys(members)) {
            allInfo.push({"ID": [members[i].ID], "totalMsg": [members[i].totalMsg]})
        }
        allInfo.sort((a, b) => b.totalMsg - a.totalMsg);
        for (const lastData of allInfo) {
            var userInfo = await Users.getData(lastData.ID) || await Users.getInfo(lastData.ID);
            number++;
            msg += `Hạng ${number}. ${userInfo.name ? userInfo.name : lastData.ID} với ${lastData.totalMsg} tin nhắn \n`;
        }	
		return api.sendMessage(msg, threadID, (error, info) => { Cherry.autoUnsend(info.messageID, 120000) }, messageID);
	} else if (mention[0]) {
		for (var i of Object.keys(members)) {
            allInfo.push({"ID": [members[i].ID], "totalMsg": [members[i].totalMsg]})
        }
        allInfo.sort((a, b) => b.totalMsg - a.totalMsg);
		for (const lastData of allInfo) {
            var userInfo = await Users.getData(lastData.ID);
            number++;
			for (var i of mention) {
				if (lastData.ID == i) {
					msg += `${userInfo.name ? userInfo.name : lastData.ID} đứng hạng ${number} với ${lastData.totalMsg} tin nhắn \n`;
				}
			}
        }
		return api.sendMessage(msg, threadID, messageID);
	} else {
		for (var i of Object.keys(members)) {
            allInfo.push({"ID": [members[i].ID], "totalMsg": [members[i].totalMsg]})
        }
        allInfo.sort((a, b) => b.totalMsg - a.totalMsg);
        for (const lastData of allInfo) {
            number++;
			if (lastData.ID == senderID) {
				return api.sendMessage(`Bạn đứng hạng ${number} với ${lastData.totalMsg} tin nhắn`, threadID, messageID);
			}
        }
	}
    Cherry.commandError(this.info.name, threadID, messageID);
}