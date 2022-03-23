module.exports.info = {
	name: "welcome",
	eventType: ["log:subscribe"],
	version: "1.0.0",
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: "Thông báo bot hoặc người vào nhóm",
	require: {
		"fs-extra": "",
        "path": ""
	}
};

module.exports.run = async function({ api, event, Threads, Cherry, multiple }) {
	const { join } = require("path");
	const { threadID } = event;
	var { prefix } = await Threads.getData(threadID);
	!prefix ? prefix = Cherry.configs.prefix : "";
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`${Cherry.configs.BOTNAME ? Cherry.configs.BOTNAME : "Cherry Bot - Create By Henry (Ry #2052)"}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`Xin chào, mình là Cherry.\n\nRất vui khi được gặp mọi người ^^`, threadID, () => {
			api.sendMessage(`Hiện tại mình đang có ${multiple.commands.size} lệnh có thể sử dụng được.\nPrefix hiện tại khả dụng là: ${prefix}`, threadID);
		});
	} else {
		try {
			const { createReadStream, existsSync, mkdirSync } = require("fs-extra");
			var getHours = await Cherry.getTime("hours");
			var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = await Threads.getData(threadID);
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id: id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			threadData.msgWelcome ? msg = threadData.msgWelcome : msg = "Chào mừng {name} đã đến với {threadName}.\n{type} là thành viên thứ {soThanhVien} của nhóm 🥳\nChúc {type} có một {time} vui vẻ";
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'Các bạn' : 'Bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
			.replace(/\{time}/g, session)
			.replace(/\{prefix}/g, prefix);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (error) { return console.log(error) };
	}
}